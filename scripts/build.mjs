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
const README_SECTION_LIMIT = 20;

function localized(value, lang) {
  if (!value || typeof value !== 'object') return String(value ?? '');
  return value[lang] ?? value.en ?? value.zh ?? '';
}

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

function formatSecurity(security) {
  if (!security || typeof security.score !== 'number') return '—';
  const score = Math.max(0, Math.min(100, Math.round(security.score)));
  const icon = score >= 80 ? '🟢' : score >= 50 ? '🟡' : '🔴';
  return `${icon} ${score}/100`;
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

function renderTable(entries, { lang, agentMap, kindMap, showKind = true, limit = null }) {
  if (entries.length === 0) {
    return lang === 'zh'
      ? '_暂无收录，欢迎提交 PR！_\n'
      : lang === 'ja'
        ? '_まだ登録されていません。PR を歓迎します！_\n'
        : '_No entries yet. PRs welcome!_\n';
  }

  const sorted = sortEntries(entries);
  const displayed = typeof limit === 'number' && limit > 0 ? sorted.slice(0, limit) : sorted;

  const headers =
    lang === 'zh'
      ? showKind
        ? ['名称', '类型', '简介', '兼容工具', '安全分', '活跃度']
        : ['名称', '简介', '兼容工具', '安装 / 标签', '安全分', '活跃度']
      : lang === 'ja'
        ? showKind
          ? ['名前', '種類', '説明', '対応エージェント', '安全性', 'アクティビティ']
          : ['名前', '説明', '対応エージェント', 'インストール / タグ', '安全性', 'アクティビティ']
      : showKind
        ? ['Name', 'Type', 'Description', 'Agents', 'Security', 'Activity']
        : ['Name', 'Description', 'Agents', 'Install / Tags', 'Security', 'Activity'];

  const lines = [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
  ];

  for (const entry of displayed) {
    const officialBadge = entry.official
      ? lang === 'zh'
        ? ' `官方`'
        : lang === 'ja'
          ? ' `公式`'
          : ' `Official`'
      : '';
    const archivedBadge = entry.metrics?.archived
      ? lang === 'zh'
        ? ' `已归档`'
        : lang === 'ja'
          ? ' `アーカイブ済み`'
          : ' `Archived`'
      : '';
    const nameCell = `**[${escapePipe(entry.name)}](${entry.repo})**${officialBadge}${archivedBadge}`;

    const kindDef = kindMap.get(entry.kind);
    const kindCell = `\`${kindDef ? localized(kindDef.badge, lang) : entry.kind}\``;

    const descText = escapePipe(localized(entry.description, lang));
    const installHint = formatInstall(entry.install);
    const descCell =
      showKind && installHint ? `${descText}<br>${installHint}` : descText;

    const agentsCell = formatAgents(entry.agents, agentMap, lang);

    const securityCell = formatSecurity(entry.security);

    const stars = formatStars(entry.metrics);
    const updated = formatUpdated(entry.metrics);
    const activityCell = updated ? `${stars}<br><sub>${updated}</sub>` : stars;

    if (showKind) {
      lines.push(
        `| ${nameCell} | ${kindCell} | ${descCell} | ${agentsCell} | ${securityCell} | ${activityCell} |`
      );
    } else {
      const tagsStr = Array.isArray(entry.tags)
        ? entry.tags.slice(0, 3).map((t) => `\`${t}\``).join(' ')
        : '';
      const extraCell = installHint || tagsStr || '—';
      lines.push(
        `| ${nameCell} | ${descText} | ${agentsCell} | ${extraCell} | ${securityCell} | ${activityCell} |`
      );
    }
  }

  const suffix = lang === 'zh' ? '.zh.md' : '.md';
  if (sorted.length > displayed.length) {
    lines.push('');
    lines.push(
      lang === 'zh'
        ? `_当前仅展示前 ${displayed.length} 条（共 ${sorted.length} 条）。完整列表请浏览 [Plugins](docs/plugins${suffix}) · [Skills](docs/skills${suffix}) · [MCP](docs/mcp${suffix}) · [Subagents](docs/subagents${suffix}) · [工具](docs/tools${suffix}) · [按工具浏览](docs/by-agent${suffix})。_`
        : lang === 'ja'
          ? `_${displayed.length} 件を表示しています（全 ${sorted.length} 件）。完全な一覧は [Plugins](docs/plugins${suffix}) · [Skills](docs/skills${suffix}) · [MCP](docs/mcp${suffix}) · [Subagents](docs/subagents${suffix}) · [Tooling](docs/tools${suffix}) · [Agent 別](docs/by-agent${suffix}) をご覧ください。_`
        : `_Showing top ${displayed.length} of ${sorted.length} entries. Browse full lists in [Plugins](docs/plugins${suffix}) · [Skills](docs/skills${suffix}) · [MCP](docs/mcp${suffix}) · [Subagents](docs/subagents${suffix}) · [Tooling](docs/tools${suffix}) · [By Agent](docs/by-agent${suffix})._`
    );
  }

  return `${lines.join('\n')}\n`;
}

function renderMainReadme(lang, { categories, agents, entries, agentMap, kindMap }) {
  const isZh = lang === 'zh';
  const isJa = lang === 'ja';
  const suffix = isZh ? '.zh.md' : '.md';
  const featured = entries.filter((e) => e.official || e.featured);

  const lines = [];
  lines.push('<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->\n');
  lines.push('# Awesome Agent Extensions\n');
  lines.push(
    isZh
      ? '> 精选跨平台 Awesome Claude Code Plugins、AI Agent Skills、MCP Servers、Subagents 与扩展管理工具（支持 Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Antigravity 等），内置基于 [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) 的自动化安全评分（满分 100）。\n'
      : isJa
        ? '> Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Antigravity などに対応した、Claude Code プラグイン、AI Agent Skills、MCP サーバー、Subagents、拡張ツールの横断型ディレクトリです。[NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) による自動セキュリティスコア（0〜100）を掲載しています。\n'
      : '> Curated cross-platform directory of Awesome Claude Code Plugins, AI Agent Skills, MCP Servers, Subagents, and extension tooling (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Antigravity, and more), with automated security scoring (0–100) powered by [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector).\n'
  );
  lines.push(
    isZh
      ? '[![Security Scoring by NVIDIA SkillSpector](https://img.shields.io/badge/Security%20Scoring-NVIDIA%20SkillSpector-76B900?logo=nvidia&logoColor=white)](https://github.com/NVIDIA/SkillSpector)\n'
      : '[![Security Scoring by NVIDIA SkillSpector](https://img.shields.io/badge/Security%20Scoring-NVIDIA%20SkillSpector-76B900?logo=nvidia&logoColor=white)](https://github.com/NVIDIA/SkillSpector)\n'
  );
  lines.push(
    isZh
      ? '[English](README.md) | **简体中文** | [日本語](README.ja.md)\n'
      : isJa
        ? '[English](README.md) | [简体中文](README.zh.md) | **日本語**\n'
        : '**English** | [简体中文](README.zh.md) | [日本語](README.ja.md)\n'
  );
  lines.push(
    isZh
      ? '![Awesome Agent Extensions 目录结构图](assets/intro/awesome-agents-zh.gif)\n'
      : isJa
        ? '![Awesome Agent Extensions のディレクトリマップ](assets/intro/awesome-agents-en.gif)\n'
      : '![Awesome Agent Extensions directory map](assets/intro/awesome-agents-en.gif)\n'
  );

  const pluginCount = entries.filter((e) => e.kind === 'plugins').length;
  lines.push(
    isZh
      ? [
          '### Awesome Claude Code Plugins',
          '',
          `Claude Code 插件是可安装的扩展包，可将 Skills、斜杠命令、Subagents、Hooks、MCP 服务及完整工作流组合在一起。适合需要复用和分发一套 Agent 工作流的场景。`,
          '',
          `浏览 [全部插件 (${pluginCount})](docs/plugins.zh.md)，使用 \`/plugin install <owner>/<repo>\` 安装单个插件，或使用 \`/plugin marketplace add <owner>/<repo>\` 添加插件市场。`,
          '',
        ].join('\n')
      : isJa
        ? [
            '### Awesome Claude Code Plugins',
            '',
            'Claude Code プラグインは、Skills、スラッシュコマンド、Subagents、Hooks、MCP サーバー、完全なワークフローを組み合わせられるインストール可能な拡張パッケージです。再利用可能な Agent ワークフローを共有したい場合に役立ちます。',
            '',
            `[すべてのプラグイン (${pluginCount})](docs/plugins.md) を確認し、\`/plugin install <owner>/<repo>\` でインストールするか、\`/plugin marketplace add <owner>/<repo>\` でマーケットプレイスを追加できます。`,
            '',
          ].join('\n')
      : [
          '### Awesome Claude Code Plugins',
          '',
          `Claude Code plugins are installable extension bundles that can combine Skills, slash commands, subagents, hooks, MCP servers, and complete workflows. They are useful when you want to reuse and distribute a repeatable agent workflow.`,
          '',
          `Browse [all plugins (${pluginCount})](docs/plugins.md), install one with \`/plugin install <owner>/<repo>\`, or add a marketplace with \`/plugin marketplace add <owner>/<repo>\`.`,
          '',
        ].join('\n')
  );

  // Browse by type & agent bar
  lines.push(isZh ? '## 快速入口\n' : isJa ? '## クイックビュー\n' : '## Quick Views\n');
  const viewLinks = [
    ...KIND_DIRS.map((k) => {
      const count = entries.filter(
        (e) => e.kind === k.id || (Array.isArray(e.includes) && e.includes.includes(k.id))
      ).length;
      return `[${localized(k.label, lang)} (${count})](docs/${k.id}${suffix})`;
    }),
    isZh
      ? `[按工具浏览](docs/by-agent${suffix})`
      : isJa
        ? `[Agent 別に見る](docs/by-agent${suffix})`
      : `[Browse by Agent](docs/by-agent${suffix})`,
  ];
  lines.push(`- ${viewLinks.join(' · ')}\n`);

  // Quick install cheatsheet
  lines.push(
    isZh
      ? '<details>\n<summary>常见工具插件安装速查</summary>\n'
      : isJa
        ? '<details>\n<summary>クイックインストール</summary>\n'
        : '<details>\n<summary>Quick Install Cheatsheet</summary>\n'
  );
  lines.push(
    isZh
      ? [
          '- **Claude Code Plugin**: `/plugin install <owner>/<repo>` 或 `/plugin marketplace add <owner>/<repo>`',
          '- **跨端 Agent Skills**: `npx skills add <owner>/<repo>`',
          '- **MCP Server**: 按各项目文档配置到对应 Agent 的 MCP 设置（如 `mcpServers` JSON）',
        ].join('\n')
      : isJa
        ? [
            '- **Claude Code Plugin**: `/plugin install <owner>/<repo>` または `/plugin marketplace add <owner>/<repo>`',
            '- **クロスエージェント Skills**: `npx skills add <owner>/<repo>`',
            '- **MCP Server**: 各プロジェクトのドキュメントに従い、Agent の MCP 設定（`mcpServers` など）に追加',
          ].join('\n')
      : [
          '- **Claude Code Plugin**: `/plugin install <owner>/<repo>` or `/plugin marketplace add <owner>/<repo>`',
          '- **Cross-agent Skills**: `npx skills add <owner>/<repo>`',
          '- **MCP Server**: Add the server command/URL to your agent MCP configuration (`mcpServers`)',
        ].join('\n')
  );
  lines.push('\n</details>\n');

  // Supported agents summary
  lines.push(isZh ? '## 支持的 Agent 工具\n' : isJa ? '## 対応 Agent\n' : '## Supported Agents\n');
  lines.push(
    agents
      .map((a) => `[${isZh ? a.zh_name || a.name : a.name}](${a.url})`)
      .join(' · ')
  );
  lines.push('');
  lines.push(
    isZh
      ? [
          '### 🛡️ NVIDIA/SkillSpector 安全评分（满分 100）',
          '',
          '以上 Agent 生态收录的 **Skills、Plugins、MCP 与 Subagents** 均由 NVIDIA 官方开源安全扫描器 [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) 自动进行静态安全扫描（检测提示词注入、数据外泄、危险命令执行、供应链漏洞等），并换算为 **0–100 安全分**（越高越安全）：',
          '',
          '- **评分标准**：🟢 **80–100** 安全（Safe） · 🟡 **50–79** 需留意（Caution） · 🔴 **0–49** 高风险（Do Not Install） · `—` 待扫描或不适用',
          '- **零人工干预、杜绝刷分**：分数仅由官方 [GitHub Actions 工作流](.github/workflows/security-scan.yml) 自动生成，CI 强制拦截任何试图在 PR 中手填或篡改分数的提交。',
          '- **持续复检、公开可查**：新增条目合入即扫、上游有新提交自动复检，所有评分明细与扫描时间均公开存档于 [`security/`](security/)，安装前可随时核验。',
          '',
        ].join('\n')
      : isJa
        ? [
            '### 🛡️ NVIDIA/SkillSpector による自動セキュリティスコア（0〜100）',
            '',
            'このディレクトリに収録されたスキャン可能な **Skill、Plugin、MCP サーバー、Subagent** は、NVIDIA のオープンソース静的解析ツール [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) により自動監査されます。プロンプトインジェクション、データ流出、安全でない実行、サプライチェーンリスクなどを確認し、0〜100 の安全性スコア（高いほど安全）を付与します。',
            '',
            '- **スコアの目安**：🟢 **80〜100** 安全 · 🟡 **50〜79** 注意 · 🔴 **0〜49** 高リスク（インストール非推奨） · `—` 未スキャンまたは対象外',
            '- **CI による改ざん防止**：スコアは公式 [GitHub Actions ワークフロー](.github/workflows/security-scan.yml) のみが生成し、PR からの手動入力や変更をチェックで拒否します。',
            '- **継続的で検証可能**：新しい項目はマージ時にスキャンし、上流リポジトリの更新時に再スキャンします。スコアのメタデータと日時は [`security/`](security/) に公開保存されます。',
            '',
          ].join('\n')
      : [
          '### 🛡️ Automated Security Scoring by NVIDIA/SkillSpector (0–100)',
          '',
          'Every scannable **Skill, Plugin, MCP server, and Subagent** across these supported agents is automatically audited with NVIDIA\'s open-source [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) static analysis (checking for prompt injection, data exfiltration, unsafe execution, and supply-chain risks) and assigned a **0–100 safety score** (higher is safer):',
          '',
          '- **Score Scale**: 🟢 **80–100** Safe · 🟡 **50–79** Caution · 🔴 **0–49** High Risk (Do Not Install) · `—` Pending or N/A',
          '- **Tamper-Proof by CI**: Scores are generated exclusively by our official [GitHub Actions workflow](.github/workflows/security-scan.yml); PR checks strictly block manual score submissions or edits.',
          '- **Continuous & Auditable**: New entries are scanned upon merge and re-scanned when upstream repos update. Full score metadata and timestamps are publicly archived in [`security/`](security/) for independent verification.',
          '',
        ].join('\n')
  );

  // Category TOC
  lines.push(isZh ? '## 按场景目录\n' : isJa ? '## カテゴリ\n' : '## Categories\n');
  if (featured.length > 0) {
    lines.push(
      isZh
        ? `- [官方与精选 (${featured.length})](#官方与精选)`
        : isJa
          ? `- [公式・おすすめ (${featured.length})](#公式おすすめ)`
        : `- [Official & Featured (${featured.length})](#official--featured)`
    );
  }
  for (const cat of categories) {
    const count = entries.filter((e) => e.category === cat.id).length;
    const heading = localized(cat.name, lang);
    const anchor = heading
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim()
      .replace(/\s+/g, '-');
    lines.push(`- [${heading} (${count})](#${anchor}) — ${localized(cat.description, lang)}`);
  }
  lines.push('');

  // Official & Featured
  if (featured.length > 0) {
    lines.push(isZh ? '## 官方与精选\n' : isJa ? '## 公式・おすすめ\n' : '## Official & Featured\n');
    lines.push(
      renderTable(featured, {
        lang,
        agentMap,
        kindMap,
        showKind: true,
        limit: README_SECTION_LIMIT,
      })
    );
  }

  // Category sections
  for (const cat of categories) {
    const catEntries = entries.filter((e) => e.category === cat.id);
    if (catEntries.length === 0) continue;
    lines.push(`## ${localized(cat.name, lang)}\n`);
    lines.push(`_${localized(cat.description, lang)}_\n`);
    lines.push(
      renderTable(catEntries, {
        lang,
        agentMap,
        kindMap,
        showKind: true,
        limit: README_SECTION_LIMIT,
      })
    );
  }

  // Contributing footer
  lines.push(isZh ? '## 参与贡献\n' : isJa ? '## コントリビューション\n' : '## Contributing\n');
  lines.push(
    isZh
      ? '想推荐优秀的 Plugin、Skill、MCP 或 Subagent？只需在 `data/<类型>/` 下新增一个 YAML 文件并提 PR，或直接[提交推荐 Issue](.github/ISSUE_TEMPLATE/submit-plugin.yml)。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。\n'
      : isJa
        ? '優れた Plugin、Skill、MCP サーバー、Subagent を推薦するには、`data/<type>/` に YAML ファイルを追加して PR を作成するか、Issue フォームから推薦を送信してください。詳しくは [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。\n'
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
  lines.push(
    isZh
      ? '> 🛡️ 安全分由官方 GitHub Actions 使用 [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) 自动扫描生成（满分 100，越高越安全：🟢 80–100 · 🟡 50–79 · 🔴 0–49），不可手动提交。\n'
      : '> 🛡️ Security scores (0–100, higher is safer: 🟢 80–100 · 🟡 50–79 · 🔴 0–49) are automatically generated by GitHub Actions via [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) and cannot be manually submitted.\n'
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
  lines.push(
    isZh
      ? '> 🛡️ 安全分由官方 GitHub Actions 使用 [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) 自动扫描生成（满分 100，越高越安全：🟢 80–100 · 🟡 50–79 · 🔴 0–49），不可手动提交。\n'
      : '> 🛡️ Security scores (0–100, higher is safer: 🟢 80–100 · 🟡 50–79 · 🔴 0–49) are automatically generated by GitHub Actions via [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) and cannot be manually submitted.\n'
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
    [path.join(ROOT_DIR, 'README.ja.md'), renderMainReadme('ja', ctx)],
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
