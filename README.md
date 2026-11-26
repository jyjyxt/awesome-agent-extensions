<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->

# Awesome Agents

> Curated cross-platform directory of AI Agent Plugins, Skills, MCP Servers, Subagents, and extension tooling (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Antigravity, and more).

**English** | [简体中文](README.zh.md)

## Quick Views

- [Plugins (2)](docs/plugins.md) · [Skills (4)](docs/skills.md) · [MCP & Connectors (3)](docs/mcp.md) · [Subagents (3)](docs/subagents.md) · [Extension Tooling (1)](docs/tools.md) · [Browse by Agent](docs/by-agent.md)

<details>
<summary>Quick Install Cheatsheet</summary>

- **Claude Code Plugin**: `/plugin install <owner>/<repo>` or `/plugin marketplace add <owner>/<repo>`
- **Cross-agent Skills**: `npx skills add <owner>/<repo>`
- **MCP Server**: Add the server command/URL to your agent MCP configuration (`mcpServers`)

</details>

## Categories

- [Official & Featured (9)](#official--featured)
- [Coding & Engineering (2)](#coding-engineering) — Code generation, refactoring, testing, debugging, code review, and Git workflows.
- [Frontend & Design (1)](#frontend-design) — UI engineering, design systems, browser automation, visual testing, and Figma integrations.
- [Cloud, DevOps & Infrastructure (1)](#cloud-devops-infrastructure) — Deployment, containers, observability, databases, and cloud platform integrations.
- [Agent Orchestration & Workflows (1)](#agent-orchestration-workflows) — Multi-agent coordination, planning pipelines, memory layers, and workflow automation.
- [Data, Research & Knowledge (1)](#data-research-knowledge) — Web search, document processing, data analysis, academic research, and knowledge bases.
- [Productivity & Collaboration (1)](#productivity-collaboration) — Docs, issue trackers, calendars, messaging platforms, and daily office workflows.
- [Content & Marketing (0)](#content-marketing) — Writing, SEO, social media publishing, video/audio production, and growth workflows.
- [Security & Compliance (0)](#security-compliance) — Vulnerability scanning, secret detection, guardrails, and compliance checks.
- [Marketplaces, Specs & Tooling (2)](#marketplaces-specs-tooling) — Plugin marketplaces, skill registries, cross-agent installers, and authoring SDKs.

## Official & Featured

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `Official` | `Skill` | Official collection of Agent Skills by Anthropic covering document creation (docx, pdf, pptx), frontend design, and skill authoring.<br>`npx skills add anthropics/skills` | `Universal` `Claude Code` | — |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `Official` | `MCP` | Official Model Context Protocol reference server collection demonstrating core integrations for files, Git, databases, and web access. | `Universal` | — |
| **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `Official` | `MCP` | Official Microsoft MCP server enabling AI agents to drive browsers via structured accessibility snapshots for testing and web automation.<br>`npx @playwright/mcp@latest` | `Universal` | — |
| **[hf-skills](https://github.com/huggingface/hf-skills)** `Official` | `Tool` | Standalone CLI to find, install, and update Hugging Face skills in local or user-wide agent directories. | `Claude Code` `Codex` `Cursor` `OpenCode` | — |
| **[Hugging Face Skills](https://github.com/huggingface/skills)** `Official` | `Skill` | Skills for querying Hugging Face Hub datasets, fine-tuning models, and running model evaluations.<br>`hf skills add huggingface-datasets` | `Claude Code` `Codex` `Cursor` `Gemini CLI` | — |
| **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `Official` | `MCP` | Query providers and modules in the Terraform Registry and manage HCP Terraform workspaces from an MCP client.<br>`codex mcp add terraform -- docker run -i --rm hashicorp/terraform-mcp-server` | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | — |
| **[Awesome Claude Code Subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** | `Subagent` | Curated collection of 100+ specialized subagent definitions covering architecture, security review, language experts, and DevOps roles. | `Claude Code` | — |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | Structured software development workflow framework enforcing brainstorming, TDD, systematic debugging, and subagent-driven execution.<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | — |
| **[wshobson/agents](https://github.com/wshobson/agents)** | `Plugin` | Modular multi-harness plugin marketplace combining specialized subagents, skills, and commands for software engineering.<br>`/plugin marketplace add wshobson/agents` | `Claude Code` `Codex` `Cursor` `OpenCode` `+2` | — |

## Coding & Engineering

_Code generation, refactoring, testing, debugging, code review, and Git workflows._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Awesome Claude Code Subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** | `Subagent` | Curated collection of 100+ specialized subagent definitions covering architecture, security review, language experts, and DevOps roles. | `Claude Code` | — |
| **[wshobson/agents](https://github.com/wshobson/agents)** | `Plugin` | Modular multi-harness plugin marketplace combining specialized subagents, skills, and commands for software engineering.<br>`/plugin marketplace add wshobson/agents` | `Claude Code` `Codex` `Cursor` `OpenCode` `+2` | — |

## Frontend & Design

_UI engineering, design systems, browser automation, visual testing, and Figma integrations._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `Official` | `MCP` | Official Microsoft MCP server enabling AI agents to drive browsers via structured accessibility snapshots for testing and web automation.<br>`npx @playwright/mcp@latest` | `Universal` | — |

## Cloud, DevOps & Infrastructure

_Deployment, containers, observability, databases, and cloud platform integrations._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `Official` | `MCP` | Query providers and modules in the Terraform Registry and manage HCP Terraform workspaces from an MCP client.<br>`codex mcp add terraform -- docker run -i --rm hashicorp/terraform-mcp-server` | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | — |

## Agent Orchestration & Workflows

_Multi-agent coordination, planning pipelines, memory layers, and workflow automation._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | Structured software development workflow framework enforcing brainstorming, TDD, systematic debugging, and subagent-driven execution.<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | — |

## Data, Research & Knowledge

_Web search, document processing, data analysis, academic research, and knowledge bases._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Hugging Face Skills](https://github.com/huggingface/skills)** `Official` | `Skill` | Skills for querying Hugging Face Hub datasets, fine-tuning models, and running model evaluations.<br>`hf skills add huggingface-datasets` | `Claude Code` `Codex` `Cursor` `Gemini CLI` | — |

## Productivity & Collaboration

_Docs, issue trackers, calendars, messaging platforms, and daily office workflows._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `Official` | `Skill` | Official collection of Agent Skills by Anthropic covering document creation (docx, pdf, pptx), frontend design, and skill authoring.<br>`npx skills add anthropics/skills` | `Universal` `Claude Code` | — |

## Marketplaces, Specs & Tooling

_Plugin marketplaces, skill registries, cross-agent installers, and authoring SDKs._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `Official` | `MCP` | Official Model Context Protocol reference server collection demonstrating core integrations for files, Git, databases, and web access. | `Universal` | — |
| **[hf-skills](https://github.com/huggingface/hf-skills)** `Official` | `Tool` | Standalone CLI to find, install, and update Hugging Face skills in local or user-wide agent directories. | `Claude Code` `Codex` `Cursor` `OpenCode` | — |

## Supported Agents

[Universal](https://agentskills.io) · [Claude Code](https://docs.anthropic.com/en/docs/claude-code) · [Codex](https://github.com/openai/codex) · [Cursor](https://cursor.com) · [Gemini CLI](https://github.com/google-gemini/gemini-cli) · [OpenCode](https://opencode.ai) · [Antigravity](https://antigravity.google) · [GitHub Copilot](https://github.com/features/copilot) · [Windsurf](https://windsurf.com) · [DeepSeek Harness](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)

## Contributing

Want to add a great Plugin, Skill, MCP server, or Subagent? Add a YAML file under `data/<type>/` and open a PR, or submit via the issue form. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

