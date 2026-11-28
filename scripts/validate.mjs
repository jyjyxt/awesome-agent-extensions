import {
  KIND_IDS,
  loadAgents,
  loadAllEntries,
  loadCategories,
  loadGuides,
  parseGitHubRepo,
} from './lib/data.mjs';

const errors = [];
const FORBIDDEN_ENTRY_FIELDS = [
  'score',
  'security',
  'security_score',
  'risk_score',
  'skillspector',
  'metrics',
];

const categories = loadCategories();
const agents = loadAgents();
const categoryIds = new Set(categories.map((c) => c.id));
const agentIds = new Set(agents.map((a) => a.id));

if (categories.length === 0) {
  errors.push('data/categories.yml must define at least one category.');
}
if (agents.length === 0) {
  errors.push('data/agents.yml must define at least one agent.');
}

const entries = loadAllEntries();
const seenRepos = new Map();
const seenNames = new Map();

for (const entry of entries) {
  const loc = entry.relPath;

  if (!entry.file.endsWith('.yml')) {
    errors.push(`${loc}: use ".yml" extension instead of ".yaml".`);
  }

  for (const field of FORBIDDEN_ENTRY_FIELDS) {
    if (Array.isArray(entry.rawKeys) && entry.rawKeys.includes(field)) {
      errors.push(
        `${loc}: reserved field "${field}" cannot be set manually; metrics and security scores are generated automatically by GitHub Actions.`
      );
    }
  }

  if (typeof entry.name !== 'string' || !entry.name.trim()) {
    errors.push(`${loc}: missing required string field "name".`);
  }

  if (typeof entry.repo !== 'string' || !/^https?:\/\/.+/.test(entry.repo)) {
    errors.push(`${loc}: "repo" must be a valid http(s) URL.`);
  } else {
    const normalizedRepo = entry.repo.replace(/\/+$/, '').toLowerCase();
    if (seenRepos.has(normalizedRepo)) {
      errors.push(
        `${loc}: duplicate repo "${entry.repo}" (already listed in ${seenRepos.get(normalizedRepo)}).`
      );
    } else {
      seenRepos.set(normalizedRepo, loc);
    }

    const gh = parseGitHubRepo(entry.repo);
    if (gh) {
      const expectedFile = `${gh.owner}__${gh.repo}.yml`;
      if (entry.file.toLowerCase() !== expectedFile.toLowerCase()) {
        errors.push(
          `${loc}: filename should be "${expectedFile}" to match GitHub repo "${gh.slug}".`
        );
      }
    }
  }

  if (entry.name) {
    const key = entry.name.trim().toLowerCase();
    if (seenNames.has(key)) {
      errors.push(
        `${loc}: duplicate name "${entry.name}" (already used in ${seenNames.get(key)}).`
      );
    } else {
      seenNames.set(key, loc);
    }
  }

  if (!categoryIds.has(entry.category)) {
    errors.push(
      `${loc}: unknown category "${entry.category}". Valid categories: ${[...categoryIds].join(', ')}`
    );
  }

  if (!Array.isArray(entry.agents) || entry.agents.length === 0) {
    errors.push(`${loc}: "agents" must be a non-empty array.`);
  } else {
    for (const a of entry.agents) {
      if (!agentIds.has(a)) {
        errors.push(
          `${loc}: unknown agent "${a}". Valid agents: ${[...agentIds].join(', ')}`
        );
      }
    }
  }

  if (entry.includes !== undefined && entry.includes !== null) {
    if (!Array.isArray(entry.includes)) {
      errors.push(`${loc}: "includes" must be an array.`);
    } else {
      for (const inc of entry.includes) {
        if (!KIND_IDS.includes(inc)) {
          errors.push(
            `${loc}: invalid includes value "${inc}". Valid values: ${KIND_IDS.join(', ')}`
          );
        }
      }
    }
  }

  if (entry.tags !== undefined && entry.tags !== null && !Array.isArray(entry.tags)) {
    errors.push(`${loc}: "tags" must be an array.`);
  }

  if (
    !entry.description ||
    typeof entry.description.en !== 'string' ||
    !entry.description.en.trim() ||
    typeof entry.description.zh !== 'string' ||
    !entry.description.zh.trim()
  ) {
    errors.push(`${loc}: "description" must contain non-empty "en" and "zh" strings.`);
  }
}

const guides = loadGuides();
let totalGuideItems = 0;

for (const guideFile of guides) {
  const loc = guideFile.relPath;

  if (!guideFile.file.endsWith('.yml')) {
    errors.push(`${loc}: use ".yml" extension instead of ".yaml".`);
  }

  if (!agentIds.has(guideFile.agentId)) {
    errors.push(
      `${loc}: unknown agent "${guideFile.agentId}". Filename must match an agent id in data/agents.yml (${[...agentIds].join(', ')}).`
    );
  }

  if (!Array.isArray(guideFile.items)) {
    errors.push(`${loc}: expected a YAML list of { title, url } items.`);
    continue;
  }

  const seenUrls = new Set();
  for (let i = 0; i < guideFile.items.length; i++) {
    const item = guideFile.items[i];
    const itemLoc = `${loc}[${i}]`;
    if (!item || typeof item !== 'object') {
      errors.push(`${itemLoc}: each guide item must be an object with "title" and "url".`);
      continue;
    }
    if (typeof item.title !== 'string' || !item.title.trim()) {
      errors.push(`${itemLoc}: missing required string field "title".`);
    }
    if (typeof item.url !== 'string' || !/^https?:\/\/.+/.test(item.url)) {
      errors.push(`${itemLoc}: "url" must be a valid http(s) URL.`);
    } else {
      const normalizedUrl = item.url.replace(/\/+$/, '').toLowerCase();
      if (seenUrls.has(normalizedUrl)) {
        errors.push(`${itemLoc}: duplicate url "${item.url}" in ${loc}.`);
      } else {
        seenUrls.add(normalizedUrl);
      }
    }
    totalGuideItems++;
  }
}

if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s):\n`);
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log(
  `Validation passed: ${entries.length} entries across ${KIND_IDS.length} data directories, ${totalGuideItems} guides across ${guides.length} agent(s).`
);
