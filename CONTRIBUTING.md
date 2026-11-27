# Contributing to Awesome Agents / 参与贡献

Thanks for helping curate high-quality AI Agent Plugins, Skills, MCP Servers, Subagents, and extension tooling!

## How to Submit / 提交方式

You can contribute in either of two ways:
1. **Open a Pull Request** (recommended): Add one YAML file in the matching `data/` folder.
2. **Open an Issue**: Use the [Submit a Plugin](.github/ISSUE_TEMPLATE/submit-plugin.yml) form if you prefer not to edit YAML.

## Where to Put Your File / 文件放哪个目录

Choose the folder that matches the project's **primary form**:

| Folder | What belongs here |
| --- | --- |
| `data/plugins/` | Bundled plugins combining multiple capabilities (e.g. Skills + MCP/Connectors + Subagents/Hooks) |
| `data/skills/` | Standalone Agent Skills (`SKILL.md`, workflows, scripts) |
| `data/mcp/` | MCP Servers and external service connectors |
| `data/subagents/` | Specialized subagent definitions and role-based personas |
| `data/tools/` | Standalone tools for finding, installing, or managing agent extensions, such as cross-agent skill installers |

- **File naming**: `<owner>__<repo>.yml` (for GitHub repos, e.g. `microsoft__playwright-mcp.yml`).
- **No duplicates**: Each repository must appear in only **one** folder. If a Plugin also includes Skills or Subagents, place it in `data/plugins/` and list `includes: [skills, subagents]` so it automatically appears in those views too.

## Entry Template / YAML 模板

```yaml
name: Example Plugin
repo: https://github.com/owner/repo
category: coding                  # See data/categories.yml
official: false                   # true if maintained by the official vendor/team
featured: false                   # optional editorial highlight
agents: [universal]               # See data/agents.yml (e.g. claude-code, codex, cursor, universal)
includes: [skills, mcp]           # optional: for bundled plugins in data/plugins/
tags: [git, code-review]          # optional free-form tags
install:                          # optional install commands
  claude-code: /plugin install owner/repo
  skills-cli: npx skills add owner/repo
description:
  en: Concise one-line description of what problem it solves.
  zh: 一句话说明这个扩展解决什么问题。
```

## Quality Criteria / 收录标准

- **Clear value**: Solves a real workflow problem rather than being a thin wrapper or empty prompt.
- **Maintained & documented**: Public repository with clear usage/install instructions.
- **Cross-agent friendly**: Works with at least one mainstream Agent harness or open standard (MCP / `SKILL.md`).

## Local Verification / 本地校验

Requires Node.js >= 20 (zero external dependencies):

```bash
npm run validate   # Validate YAML schema, categories, agents, and global repo uniqueness
```

> **One file per PR / 只需提交 1 个文件**: Only add or edit YAML files under `data/`. Do **not** modify or commit `README.md`, `README.zh.md`, `docs/*.md`, or `data/metrics.json` in your PR — GitHub Actions will automatically recalculate all counts and rebuild the docs once merged into `main`.
