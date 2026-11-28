import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseYaml } from './yaml.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT_DIR = path.resolve(__dirname, '../..');
export const DATA_DIR = path.join(ROOT_DIR, 'data');
export const METRICS_DIR = path.join(ROOT_DIR, 'metrics');
export const METRICS_PATH = path.join(METRICS_DIR, 'github.json');
export const SECURITY_DIR = path.join(ROOT_DIR, 'security');
export const SCANNABLE_KINDS = ['skills', 'plugins', 'mcp', 'subagents'];

export const KIND_DIRS = [
  {
    id: 'plugins',
    singular: 'plugin',
    label: { en: 'Plugins', zh: 'Plugins（复合插件）' },
    badge: { en: 'Plugin', zh: 'Plugin' },
    description: {
      en: 'Bundled extensions combining skills, connectors/MCP, subagents, hooks, or workflows.',
      zh: '打包好的复合扩展，通常组合了 Skills、MCP/Connectors、Subagents、Hooks 或工作流。',
    },
  },
  {
    id: 'skills',
    singular: 'skill',
    label: { en: 'Skills', zh: 'Skills（技能包）' },
    badge: { en: 'Skill', zh: 'Skill' },
    description: {
      en: 'Standalone Agent Skills (SKILL.md, workflows, and scripts) loaded on demand.',
      zh: '独立的 Agent Skills（SKILL.md、任务工作流与本地脚本），按需加载。',
    },
  },
  {
    id: 'mcp',
    singular: 'mcp',
    label: { en: 'MCP & Connectors', zh: 'MCP / Connectors' },
    badge: { en: 'MCP', zh: 'MCP' },
    description: {
      en: 'Model Context Protocol servers and external service connectors for tools and data.',
      zh: 'Model Context Protocol 服务器与外部服务连接器，用于接入工具和数据源。',
    },
  },
  {
    id: 'subagents',
    singular: 'subagent',
    label: { en: 'Subagents', zh: 'Subagents（子代理）' },
    badge: { en: 'Subagent', zh: 'Subagent' },
    description: {
      en: 'Specialized subagent definitions, expert personas, and role-based prompts.',
      zh: '专业子代理定义、领域专家角色与分工提示词集合。',
    },
  },
  {
    id: 'tools',
    singular: 'tool',
    label: { en: 'Extension Tooling', zh: '扩展管理工具' },
    badge: { en: 'Tool', zh: '工具' },
    description: {
      en: 'Standalone tools for finding, installing, or managing agent extensions.',
      zh: '用于查找、安装或管理 Agent 扩展的独立工具。',
    },
  },
];

export const KIND_IDS = KIND_DIRS.map((k) => k.id);

export function readYamlFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return parseYaml(raw, path.relative(ROOT_DIR, filePath));
}

export function loadCategories() {
  const parsed = readYamlFile(path.join(DATA_DIR, 'categories.yml'));
  return parsed.categories || [];
}

export function loadAgents() {
  const parsed = readYamlFile(path.join(DATA_DIR, 'agents.yml'));
  return parsed.agents || [];
}

export function loadMetrics() {
  if (!fs.existsSync(METRICS_PATH)) return {};
  return JSON.parse(fs.readFileSync(METRICS_PATH, 'utf8'));
}

export function getSecurityPath(kind) {
  return path.join(SECURITY_DIR, `${kind}.json`);
}

export function loadSecurityScores(kind) {
  const filePath = getSecurityPath(kind);
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function loadAllSecurityScores() {
  const byKind = {};
  for (const kind of SCANNABLE_KINDS) {
    byKind[kind] = loadSecurityScores(kind);
  }
  return byKind;
}

export function parseGitHubRepo(url) {
  if (typeof url !== 'string') return null;
  const match = url.match(/^https:\/\/github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+?)(?:\/|$)/);
  if (!match) return null;
  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, ''),
    slug: `${match[1]}/${match[2].replace(/\.git$/, '')}`,
  };
}

export function loadAllEntries() {
  const metrics = loadMetrics();
  const securityByKind = loadAllSecurityScores();
  const entries = [];

  for (const kindDef of KIND_DIRS) {
    const dirPath = path.join(DATA_DIR, kindDef.id);
    if (!fs.existsSync(dirPath)) continue;
    const files = fs
      .readdirSync(dirPath)
      .filter((f) => f.endsWith('.yml') || f.endsWith('.yaml'))
      .sort();

    const kindSecurity = securityByKind[kindDef.id] || {};

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      const relPath = path.relative(ROOT_DIR, fullPath);
      const data = readYamlFile(fullPath);
      const gh = parseGitHubRepo(data.repo);
      const slugKey = gh ? gh.slug.toLowerCase() : null;
      const metric = slugKey ? metrics[slugKey] || null : null;
      const security = slugKey ? kindSecurity[slugKey] || null : null;

      entries.push({
        ...data,
        kind: kindDef.id,
        file,
        relPath,
        gh,
        metrics: metric,
        security,
        rawKeys: Object.keys(data),
      });
    }
  }

  return entries;
}
