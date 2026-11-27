import fs from 'node:fs';
import path from 'node:path';
import {
  KIND_DIRS,
  ROOT_DIR,
  loadAgents,
  loadAllEntries,
  loadCategories,
} from './lib/data.mjs';

const CHECK_MODE = process.argv.includes('--check');

function escapePipe(text) {
  return String(text ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function formatStars(metrics) {
  if (!metrics || typeof metrics.stars !== 'number') return '—';
  const n = metrics.stars;
  if (n >= 1000) return `⭐ ${(n / 1000).toFixed(1)}k`;
  return `⭐ ${n}`;
}

function formatUpdated(metrics) {
  if (!metrics || !metrics.pushed_at) return '';
  return metrics.pushed_at;
}

function formatAgents(entryAgents, agentMap, lang) {
  const maxShow = 4;
  const labels = entryAgents.map((id) => {
    const def = agentMap.get(id);
    const label = def ? (lang === 'zh' ? def.zh_name || def.name : def.name) : id;
    return `\`${label}\``;
  });
  if (labels.length <= maxShow) return labels.join(' ');
  return `${labels.slice(0, maxShow).join(' ')} \`+${labels.length - maxShow}\``;
}

function formatInstall(install) {
  if (!install || typeof install !== 'object') return '';
  const pairs = Object.entries(install);
  if (pairs.length === 0) return '';
  const [, firstCmd] = pairs[0];
  return `\`${firstCmd}\``;
}

function sortEntries(list) {
  return [...list].sort((a, b) => {
    if (Boolean(a.official) !== Boolean(b.official)) return a.official ? -1 : 1;
    if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
    const starsA = a.metrics?.stars ?? -1;
    const starsB = b.metrics?.stars ?? -1;
    if (starsA !== starsB) return starsB - starsA;
    return a.name.localeCompare(b.name);
  });
}

function renderTable(entries, { lang, agentMap, kindMap, showKind = true }) {
  if (entries.length === 0) {
    return lang === 'zh' ? '_暂无收录，欢迎提交 PR！_\n' : '_No entries yet. PRs welcome!_\n';
  }

  const headers =
    lang === 'zh'
      ? showKind
        ? ['名称', '类型', '简介', '兼容工具', '活跃度']
        : ['名称', '简介', '兼容工具', '安装 / 标签', '活跃度']
      : showKind
        ? ['Name', 'Type', 'Description', 'Agents', 'Activity']
        : ['Name', 'Description', 'Agents', 'Install / Tags', 'Activity'];

  const lines = [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
  ];

  for (const entry of sortEntries(entries)) {
    const officialBadge = entry.official ? (lang === 'zh' ? ' `官方`' : ' `Official`') : '';
    const archivedBadge = entry.metrics?.archived ? (lang === 'zh' ? ' `已归档`' : ' `Archived`') : '';
    const nameCell = `**[${escapePipe(entry.name)}](${entry.repo})**${officialBadge}${archivedBadge}`;

    const kindDef = kindMap.get(entry.kind);
    const kindCell = `\`${kindDef ? kindDef.badge[lang] : entry.kind}\``;

    const descText = escapePipe(entry.description[lang]);
    const installHint = formatInstall(entry.install);
    const descCell =
      showKind && installHint ? `${descText}<br>${installHint}` : descText;

    const agentsCell = formatAgents(entry.agents, agentMap, lang);

    const stars = formatStars(entry.metrics);
    const updated = formatUpdated(entry.metrics);
    const activityCell = updated ? `${stars}<br><sub>${updated}</sub>` : stars;

    if (showKind) {
      lines.push(`| ${nameCell} | ${kindCell} | ${descCell} | ${agentsCell} | ${activityCell} |`);
    } else {
      const tagsStr = Array.isArray(entry.tags)
        ? entry.tags.slice(0, 3).map((t) => `\`${t}\``).join(' ')
        : '';
      const extraCell = installHint || tagsStr || '—';
      lines.push(`| ${nameCell} | ${descText} | ${agentsCell} | ${extraCell} | ${activityCell} |`);
    }
  }

  return `${lines.join('\n')}\n`;
}

function renderMainReadme(lang, { categories, agents, entries, agentMap, kindMap }) {
  const isZh = lang === 'zh';
  const suffix = isZh ? '.zh.md' : '.md';
  const featured = entries.filter((e) => e.official || e.featured);

  const lines = [];
  lines.push('<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->\n');
  lines.push('# Awesome Agents\n');
  lines.push(
    isZh
      ? '> 精选跨平台 AI Agent 插件、Skills、MCP Servers、Subagents 与扩展管理工具（支持 Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Antigravity 等）。\n'
      : '> Curated cross-platform directory of AI Agent Plugins, Skills, MCP Servers, Subagents, and extension tooling (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Antigravity, and more).\n'
  );
  lines.push(isZh ? '[English](README.md) | **简体中文**\n' : '**English** | [简体中文](README.zh.md)\n');

  // Browse by type & agent bar
  lines.push(isZh ? '## 快速入口\n' : '## Quick Views\n');
  const viewLinks = [
    ...KIND_DIRS.map((k) => {
      const count = entries.filter(
        (e) => e.kind === k.id || (Array.isArray(e.includes) && e.includes.includes(k.id))
      ).length;
      return `[${k.label[lang]} (${count})](docs/${k.id}${suffix})`;
    }),
    isZh
      ? `[按工具浏览](docs/by-agent${suffix})`
      : `[Browse by Agent](docs/by-agent${suffix})`,
  ];
  lines.push(`- ${viewLinks.join(' · ')}\n`);

  // Quick install cheatsheet
  lines.push(isZh ? '<details>\n<summary>常见工具插件安装速查</summary>\n' : '<details>\n<summary>Quick Install Cheatsheet</summary>\n');
  lines.push(
    isZh
      ? [
          '- **Claude Code Plugin**: `/plugin install <owner>/<repo>` 或 `/plugin marketplace add <owner>/<repo>`',
          '- **跨端 Agent Skills**: `npx skills add <owner>/<repo>`',
          '- **MCP Server**: 按各项目文档配置到对应 Agent 的 MCP 设置（如 `mcpServers` JSON）',
        ].join('\n')
      : [
          '- **Claude Code Plugin**: `/plugin install <owner>/<repo>` or `/plugin marketplace add <owner>/<repo>`',
          '- **Cross-agent Skills**: `npx skills add <owner>/<repo>`',
          '- **MCP Server**: Add the server command/URL to your agent MCP configuration (`mcpServers`)',
        ].join('\n')
  );
  lines.push('\n</details>\n');

  // Category TOC
  lines.push(isZh ? '## 按场景目录\n' : '## Categories\n');
  if (featured.length > 0) {
    lines.push(
      isZh
        ? `- [官方与精选 (${featured.length})](#官方与精选)`
        : `- [Official & Featured (${featured.length})](#official--featured)`
    );
  }
  for (const cat of categories) {
    const count = entries.filter((e) => e.category === cat.id).length;
    const heading = cat.name[lang];
    const anchor = heading
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim()
      .replace(/\s+/g, '-');
    lines.push(`- [${heading} (${count})](#${anchor}) — ${cat.description[lang]}`);
  }
  lines.push('');

  // Official & Featured
  if (featured.length > 0) {
    lines.push(isZh ? '## 官方与精选\n' : '## Official & Featured\n');
    lines.push(renderTable(featured, { lang, agentMap, kindMap, showKind: true }));
  }

  // Category sections
  for (const cat of categories) {
    const catEntries = entries.filter((e) => e.category === cat.id);
    if (catEntries.length === 0) continue;
    lines.push(`## ${cat.name[lang]}\n`);
    lines.push(`_${cat.description[lang]}_\n`);
    lines.push(renderTable(catEntries, { lang, agentMap, kindMap, showKind: true }));
  }

  // Supported agents summary
  lines.push(isZh ? '## 支持的 Agent 工具\n' : '## Supported Agents\n');
  lines.push(
    agents
      .map((a) => `[${isZh ? a.zh_name || a.name : a.name}](${a.url})`)
      .join(' · ')
  );
  lines.push('');

  // Contributing footer
  lines.push(isZh ? '## 参与贡献\n' : '## Contributing\n');
  lines.push(
    isZh
      ? '想推荐优秀的 Plugin、Skill、MCP 或 Subagent？只需在 `data/<类型>/` 下新增一个 YAML 文件并提 PR，或直接[提交推荐 Issue](.github/ISSUE_TEMPLATE/submit-plugin.yml)。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。\n'
      : 'Want to add a great Plugin, Skill, MCP server, or Subagent? Add a YAML file under `data/<type>/` and open a PR, or submit via the issue form. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.\n'
  );

  return `${lines.join('\n')}\n`;
}

function renderKindDoc(kindDef, lang, { categories, entries, agentMap, kindMap }) {
  const isZh = lang === 'zh';
  const suffix = isZh ? '.zh.md' : '.md';
  const matched = entries.filter(
    (e) => e.kind === kindDef.id || (Array.isArray(e.includes) && e.includes.includes(kindDef.id))
  );

  const lines = [];
  lines.push('<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->\n');
  lines.push(`# ${kindDef.label[lang]}\n`);
  lines.push(`> ${kindDef.description[lang]}\n`);
  lines.push(
    isZh
      ? `[← 返回主目录](../README.zh.md) · [English](${kindDef.id}.md)\n`
      : `[← Back to Main Directory](../README.md) · [简体中文](${kindDef.id}.zh.md)\n`
  );

  if (matched.length === 0) {
    lines.push(isZh ? '_暂无收录，欢迎提交 PR！_\n' : '_No entries yet. PRs welcome!_\n');
    return `${lines.join('\n')}\n`;
  }

  for (const cat of categories) {
    const catEntries = matched.filter((e) => e.category === cat.id);
    if (catEntries.length === 0) continue;
    lines.push(`## ${cat.name[lang]}\n`);
    lines.push(renderTable(catEntries, { lang, agentMap, kindMap, showKind: false }));
  }

  return `${lines.join('\n')}\n`;
}

function renderByAgentDoc(lang, { agents, entries, agentMap, kindMap }) {
  const isZh = lang === 'zh';
  const lines = [];
  lines.push('<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->\n');
  lines.push(isZh ? '# 按 Agent 工具浏览\n' : '# Browse by Agent\n');
  lines.push(
    isZh
      ? '[← 返回主目录](../README.zh.md) · [English](by-agent.md)\n'
      : '[← Back to Main Directory](../README.md) · [简体中文](by-agent.zh.md)\n'
  );

  for (const agent of agents) {
    const matched = entries.filter(
      (e) =>
        e.agents.includes(agent.id) ||
        (agent.id !== 'universal' && e.agents.includes('universal'))
    );
    if (matched.length === 0) continue;
    const title = isZh ? agent.zh_name || agent.name : agent.name;
    lines.push(`## ${title} (${matched.length})\n`);
    if (agent.install_hint) {
      lines.push(
        isZh
          ? `安装参考：\`${agent.install_hint}\`\n`
          : `Install hint: \`${agent.install_hint}\`\n`
      );
    }
    lines.push(renderTable(matched, { lang, agentMap, kindMap, showKind: true }));
  }

  return `${lines.join('\n')}\n`;
}

function writeOrCheck(filePath, content, diffs) {
  const dir = path.dirname(filePath);
  if (!CHECK_MODE) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
    return;
  }
  const existing = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null;
  if (existing !== content) {
    diffs.push(path.relative(ROOT_DIR, filePath));
  }
}

function main() {
  const categories = loadCategories();
  const agents = loadAgents();
  const entries = loadAllEntries();
  const agentMap = new Map(agents.map((a) => [a.id, a]));
  const kindMap = new Map(KIND_DIRS.map((k) => [k.id, k]));
  const ctx = { categories, agents, entries, agentMap, kindMap };

  const outputs = [
    [path.join(ROOT_DIR, 'README.md'), renderMainReadme('en', ctx)],
    [path.join(ROOT_DIR, 'README.zh.md'), renderMainReadme('zh', ctx)],
    [path.join(ROOT_DIR, 'docs/by-agent.md'), renderByAgentDoc('en', ctx)],
    [path.join(ROOT_DIR, 'docs/by-agent.zh.md'), renderByAgentDoc('zh', ctx)],
  ];

  for (const kindDef of KIND_DIRS) {
    outputs.push([
      path.join(ROOT_DIR, `docs/${kindDef.id}.md`),
      renderKindDoc(kindDef, 'en', ctx),
    ]);
    outputs.push([
      path.join(ROOT_DIR, `docs/${kindDef.id}.zh.md`),
      renderKindDoc(kindDef, 'zh', ctx),
    ]);
  }

  const diffs = [];
  for (const [filePath, content] of outputs) {
    writeOrCheck(filePath, content, diffs);
  }

  if (CHECK_MODE) {
    if (diffs.length > 0) {
      console.error('Generated files are out of sync. Run `npm run build`:\n');
      for (const d of diffs) console.error(`  - ${d}`);
      process.exit(1);
    }
    console.log(`Check passed: all ${outputs.length} generated files are up to date.`);
  } else {
    console.log(`Built ${outputs.length} files from ${entries.length} entries.`);
  }
}

main();
