<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->

# Awesome Agent Extensions

> Curated cross-platform directory of AI Agent Plugins, Skills, MCP Servers, Subagents, and extension tooling (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Antigravity, and more).

**English** | [简体中文](README.zh.md)

![Awesome Agent Extensions directory map](assets/intro/awesome-agents-en.gif)

### Claude Code Plugins

Claude Code plugins are installable extension bundles that can combine Skills, slash commands, subagents, hooks, MCP servers, and complete workflows. They are useful when you want to reuse and distribute a repeatable agent workflow.

Browse [all plugins (369)](docs/plugins.md), install one with `/plugin install <owner>/<repo>`, or add a marketplace with `/plugin marketplace add <owner>/<repo>`.

## Quick Views

- [Plugins (369)](docs/plugins.md) · [Skills (1037)](docs/skills.md) · [MCP & Connectors (136)](docs/mcp.md) · [Subagents (65)](docs/subagents.md) · [Extension Tooling (135)](docs/tools.md) · [Browse by Agent](docs/by-agent.md)

<details>
<summary>Quick Install Cheatsheet</summary>

- **Claude Code Plugin**: `/plugin install <owner>/<repo>` or `/plugin marketplace add <owner>/<repo>`
- **Cross-agent Skills**: `npx skills add <owner>/<repo>`
- **MCP Server**: Add the server command/URL to your agent MCP configuration (`mcpServers`)

</details>

## Supported Agents

[Universal](https://agentskills.io) · [Claude Code](https://docs.anthropic.com/en/docs/claude-code) · [Codex](https://github.com/openai/codex) · [Cursor](https://cursor.com) · [Gemini CLI](https://github.com/google-gemini/gemini-cli) · [OpenCode](https://opencode.ai) · [Antigravity](https://antigravity.google) · [GitHub Copilot](https://github.com/features/copilot) · [Windsurf](https://windsurf.com) · [DeepSeek Harness](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)

## Categories

- [Official & Featured (191)](#official--featured)
- [Coding & Engineering (193)](#coding-engineering) — Code generation, refactoring, testing, debugging, code review, and Git workflows.
- [Frontend & Design (163)](#frontend-design) — UI engineering, design systems, browser automation, visual testing, and Figma integrations.
- [Cloud, DevOps & Infrastructure (49)](#cloud-devops-infrastructure) — Deployment, containers, observability, databases, and cloud platform integrations.
- [Agent Orchestration & Workflows (171)](#agent-orchestration-workflows) — Multi-agent coordination, planning pipelines, memory layers, and workflow automation.
- [Data, Research & Knowledge (148)](#data-research-knowledge) — Web search, document processing, data analysis, academic research, and knowledge bases.
- [Productivity & Collaboration (167)](#productivity-collaboration) — Docs, issue trackers, calendars, messaging platforms, and daily office workflows.
- [Content & Marketing (246)](#content-marketing) — Writing, SEO, social media publishing, video/audio production, and growth workflows.
- [Security & Compliance (45)](#security-compliance) — Vulnerability scanning, secret detection, guardrails, and compliance checks.
- [Marketplaces, Specs & Tooling (52)](#marketplaces-specs-tooling) — Plugin marketplaces, skill registries, cross-agent installers, and authoring SDKs.

## Official & Featured

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `Official` | `Skill` | Official collection of Agent Skills by Anthropic covering document creation (docx, pdf, pptx), frontend design, and skill authoring.<br>`npx skills add anthropics/skills` | `Universal` `Claude Code` | ⭐ 201.1k<br><sub>2026-11-16</sub> |
| **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** `Official` | `MCP` | Official Chrome DevTools MCP server allowing coding agents to inspect, debug, profile, and automate live Chrome browser sessions.<br>`npx -y chrome-devtools-mcp@latest` | `Universal` | — |
| **[Claude Code Official Plugins](https://github.com/anthropics/claude-plugins-official)** `Official` | `Plugin` | Official Anthropic-managed plugin directory for Claude Code, bundling core workflow plugins, subagents, skills, hooks, and partner MCP integrations.<br>`/plugin marketplace add anthropics/claude-plugins-official` | `Claude Code` | — |
| **[Context7 MCP](https://github.com/upstash/context7)** `Official` | `MCP` | Official Upstash MCP server that fetches up-to-date, version-specific library documentation and code examples directly into AI agent prompts.<br>`npx -y @upstash/context7-mcp` | `Universal` | — |
| **[FastMCP](https://github.com/PrefectHQ/fastmcp)** `Official` | `Tool` | The standard Python framework for rapidly building production-ready Model Context Protocol (MCP) servers and clients. | `Universal` | — |
| **[Google Agent Skills](https://github.com/google/skills)** `Official` | `Skill` | Official Google repository of Agent Skills for building with Google Cloud, developer platforms, and Google technologies. | `Universal` `Gemini CLI` `Claude Code` | — |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `Official` | `MCP` | Official Model Context Protocol reference server collection demonstrating core integrations for files, Git, databases, and web access. | `Universal` | — |
| **[OpenAI Skills Catalog](https://github.com/openai/skills)** `Official` | `Skill` | Official OpenAI Skills Catalog providing curated, reusable SKILL.md workflows and tools for Codex and compatible agents. | `Codex` `Universal` | — |
| **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `Official` | `MCP` | Official Microsoft MCP server enabling AI agents to drive browsers via structured accessibility snapshots for testing and web automation.<br>`npx @playwright/mcp@latest` | `Universal` | — |
| **[Hyperframes](https://github.com/heygen-com/hyperframes)** `Official` | `Plugin` | Official HeyGen open-source AI video editor plugin and MCP suite for authoring HTML animations and rendering MP4. | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 90.9k<br><sub>2026-11-27</sub> |
| **[Cloudflare Security Audit Skill](https://github.com/cloudflare/security-audit-skill)** `Official` | `Skill` | Official Cloudflare coding-agent skill for multi-phase security audits with verified, machine-readable findings. | `Universal` | ⭐ 78.9k<br><sub>2026-09-14</sub> |
| **[Open Code Review](https://github.com/alibaba/open-code-review)** `Official` | `Tool` | Official Alibaba hybrid code review tool combining deterministic rule pipelines with LLM agents for line-level reviews. | `Universal` | ⭐ 56.7k<br><sub>2026-11-26</sub> |
| **[Agent Browser](https://github.com/vercel-labs/agent-browser)** `Official` | `Tool` | Official Vercel headless browser automation CLI and skill designed for AI coding agents. | `Universal` | ⭐ 54.2k<br><sub>2026-11-26</sub> |
| **[Obsidian Skills](https://github.com/obsidianmd/obsidian-skills)** `Official` | `Skill` | Official Obsidian skills teaching AI agents to work with Obsidian vaults, Markdown, Bases, and JSON Canvas. | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 54.0k<br><sub>2026-11-26</sub> |
| **[Vercel Skills CLI](https://github.com/vercel-labs/skills)** `Official` | `Tool` | Official open CLI (`npx skills`) for discovering, installing, and managing cross-agent skills from skills.sh. | `Universal` | ⭐ 41.0k<br><sub>2026-11-27</sub> |
| **[Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)** `Official` | `Skill` | Official Vercel collection of agent skills covering React best practices, web design guidelines, and deployment. | `Universal` | ⭐ 35.0k<br><sub>2026-11-20</sub> |
| **[Video Use](https://github.com/browser-use/video-use)** `Official` | `Skill` | Official Browser Use agent skill enabling AI coding agents to edit and process videos programmatically. | `Universal` | ⭐ 31.6k<br><sub>2026-10-08</sub> |
| **[DESIGN.md](https://github.com/google-labs-code/design.md)** `Official` | `Tool` | Official Google Labs format specification and tooling for giving coding agents persistent design system context. | `Universal` | ⭐ 29.2k<br><sub>2026-11-18</sub> |
| **[SkillSpector](https://github.com/NVIDIA/SkillSpector)** `Official` | `Tool` | Official NVIDIA security scanner that detects prompt injection, data exfiltration, and supply-chain risks in agent skills. | `Claude Code` `Codex` | ⭐ 27.8k<br><sub>2026-11-25</sub> |
| **[Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance)** `Official` | `Skill` | Official Google Chrome guidance skills keeping AI coding agents aligned with modern web platform best practices. | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 26.7k<br><sub>2026-11-23</sub> |

_Showing top 20 of 191 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Coding & Engineering

_Code generation, refactoring, testing, debugging, code review, and Git workflows._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Context7 MCP](https://github.com/upstash/context7)** `Official` | `MCP` | Official Upstash MCP server that fetches up-to-date, version-specific library documentation and code examples directly into AI agent prompts.<br>`npx -y @upstash/context7-mcp` | `Universal` | — |
| **[OpenAI Skills Catalog](https://github.com/openai/skills)** `Official` | `Skill` | Official OpenAI Skills Catalog providing curated, reusable SKILL.md workflows and tools for Codex and compatible agents. | `Codex` `Universal` | — |
| **[Open Code Review](https://github.com/alibaba/open-code-review)** `Official` | `Tool` | Official Alibaba hybrid code review tool combining deterministic rule pipelines with LLM agents for line-level reviews. | `Universal` | ⭐ 56.7k<br><sub>2026-11-26</sub> |
| **[Agent Browser](https://github.com/vercel-labs/agent-browser)** `Official` | `Tool` | Official Vercel headless browser automation CLI and skill designed for AI coding agents. | `Universal` | ⭐ 54.2k<br><sub>2026-11-26</sub> |
| **[Elephant Goldfish Model](https://github.com/google/elephant-goldfish-model)** `Official` | `Plugin` | Official Google open-source plugin for spec-driven software design and structured code review with coding agents. | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+3` | ⭐ 23.2k<br><sub>2026-11-25</sub> |
| **[Browser Harness](https://github.com/browser-use/browser-harness)** `Official` | `Tool` | Official Browser Use harness letting Claude Code, Codex, and Cursor drive your real logged-in Chrome browser. | `Claude Code` `Codex` `Cursor` | ⭐ 19.3k<br><sub>2026-11-26</sub> |
| **[MiniMax Agent Skills](https://github.com/MiniMax-AI/skills)** `Official` | `Skill` | Official collection of MiniMax AI agent skills and multi-harness plugins for coding and productivity workflows. | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 13.9k<br><sub>2026-11-10</sub> |
| **[Android Agent Skills](https://github.com/android/skills)** `Official` | `Skill` | Official Android development agent skills covering Jetpack Compose, build systems, testing, performance, security, Wear, TV, and XR. | `Universal` `Claude Code` `Codex` | ⭐ 10.8k<br><sub>2026-11-23</sub> |
| **[HumanLayer Skills](https://github.com/humanlayer/skills)** `Official` | `Skill` | Official HumanLayer collection of Claude Code skills and plugins for structured research, planning, and implementation workflows. | `Claude Code` `Universal` | ⭐ 6.0k<br><sub>2026-11-01</sub> |
| **[Expo Agent Skills](https://github.com/expo/skills)** `Official` | `Skill` | Official Expo collection of AI agent skills for building, configuring, and shipping React Native apps with Expo and EAS. | `Universal` `Claude Code` | ⭐ 4.2k<br><sub>2026-11-26</sub> |
| **[Laravel Boost](https://github.com/laravel/boost)** `Official` | `MCP` | Official Laravel MCP server that augments AI-assisted local Laravel development with framework-aware context and tools. | `Universal` | ⭐ 3.7k<br><sub>2026-11-25</sub> |
| **[Vue 3 Agent Skills](https://github.com/vuejs-ai/skills)** `Official` | `Skill` | Official Vue.js AI agent skills providing idiomatic Vue 3 Composition API, reactivity, and component development guidance. | `Universal` | ⭐ 3.4k<br><sub>2026-10-23</sub> |
| **[Stripe AI](https://github.com/stripe/ai)** `Official` | `Plugin` | Official Stripe AI suite bundling agent toolkits, MCP integrations, CLI extensions, and skills for building AI-powered payment workflows. | `Universal` | ⭐ 2.1k<br><sub>2026-11-25</sub> |
| **[Callstack React Native Agent Skills](https://github.com/callstackincubator/agent-skills)** `Official` | `Skill` | Official Callstack collection of agent-optimized React Native skills for mobile architecture, debugging, and performance tuning. | `Universal` | ⭐ 1.7k<br><sub>2026-10-08</sub> |
| **[ast-grep Agent Skill](https://github.com/ast-grep/agent-skill)** `Official` | `Skill` | Official ast-grep agent skill for structural code search, linting, and AST-based refactoring. | `Universal` | ⭐ 914<br><sub>2026-11-04</sub> |
| **[MiniMax mcode-stack](https://github.com/MiniMax-AI/mcode-stack)** `Official` | `Skill` | Official engineering workflows and Agent Skills used internally by the MiniMax Code team to build MiniMax Code. | `Claude Code` `Universal` | ⭐ 748<br><sub>2026-11-11</sub> |
| **[Han (Test Double)](https://github.com/testdouble/han)** `Official` | `Plugin` | AI skills and agents by Test Double tailored for solo product engineers and small teams covering code review, docs, and investigation. | `Claude Code` | ⭐ 361<br><sub>2026-11-12</sub> |
| **[Resend Agent Skills](https://github.com/resend/resend-skills)** `Official` | `Skill` | Official Resend agent skills for integrating email sending and receiving into applications. | `Universal` | ⭐ 220<br><sub>2026-11-19</sub> |
| **[MATLAB & Simulink Agent Skills](https://github.com/matlab/agent-skills-playground)** `Official` | `Skill` | Official MathWorks Agent Skills playground for prototyping and running MATLAB and Simulink engineering workflows. | `Claude Code` `Universal` | ⭐ 206<br><sub>2026-10-14</sub> |
| **[Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit)** `Official` | `Plugin` | Official Sanity toolkit bundling agent skills, rules, commands, and MCP integration for building with Sanity CMS. | `Universal` | ⭐ 201<br><sub>2026-11-25</sub> |

_Showing top 20 of 193 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Frontend & Design

_UI engineering, design systems, browser automation, visual testing, and Figma integrations._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** `Official` | `MCP` | Official Chrome DevTools MCP server allowing coding agents to inspect, debug, profile, and automate live Chrome browser sessions.<br>`npx -y chrome-devtools-mcp@latest` | `Universal` | — |
| **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `Official` | `MCP` | Official Microsoft MCP server enabling AI agents to drive browsers via structured accessibility snapshots for testing and web automation.<br>`npx @playwright/mcp@latest` | `Universal` | — |
| **[Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)** `Official` | `Skill` | Official Vercel collection of agent skills covering React best practices, web design guidelines, and deployment. | `Universal` | ⭐ 35.0k<br><sub>2026-11-20</sub> |
| **[DESIGN.md](https://github.com/google-labs-code/design.md)** `Official` | `Tool` | Official Google Labs format specification and tooling for giving coding agents persistent design system context. | `Universal` | ⭐ 29.2k<br><sub>2026-11-18</sub> |
| **[Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance)** `Official` | `Skill` | Official Google Chrome guidance skills keeping AI coding agents aligned with modern web platform best practices. | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 26.7k<br><sub>2026-11-23</sub> |
| **[GSAP Skills](https://github.com/greensock/gsap-skills)** `Official` | `Skill` | Official GSAP AI skills teaching coding agents animation patterns, plugins, and GreenSock best practices. | `Claude Code` `Cursor` `Gemini CLI` | ⭐ 19.1k<br><sub>2026-07-29</sub> |
| **[Playwright CLI](https://github.com/microsoft/playwright-cli)** `Official` | `Tool` | Official Playwright CLI and agent skills for recording actions, generating Playwright code, inspecting selectors, and capturing screenshots. | `Universal` `Claude Code` | ⭐ 15.5k<br><sub>2026-11-24</sub> |
| **[Google Stitch Skills](https://github.com/google-labs-code/stitch-skills)** `Official` | `Skill` | Official Google Labs library of open-standard Agent Skills designed to pair with the Stitch MCP server for UI and frontend workflows. | `Universal` `Antigravity` `Gemini CLI` `Claude Code` `+1` | ⭐ 13.3k<br><sub>2026-11-24</sub> |
| **[Diffusion Studio Lottie](https://github.com/diffusionstudio/lottie)** `Official` | `Skill` | Official Diffusion Studio skill for generating and previewing production-ready Lottie animations with Claude Code or Codex. | `Claude Code` `Codex` `Universal` | ⭐ 5.8k<br><sub>2026-07-25</sub> |
| **[LottieFiles Motion Design Skill](https://github.com/LottieFiles/motion-design-skill)** `Official` | `Skill` | Official LottieFiles skill teaching universal UI motion design principles including timing, easing, choreography, and animation craft. | `Universal` | ⭐ 3.8k<br><sub>2026-11-23</sub> |
| **[Angular Official Skills](https://github.com/angular/skills)** `Official` | `Skill` | Official Angular agent skills for building new Angular apps and following modern Angular development practices. | `Universal` | ⭐ 736<br><sub>2026-11-25</sub> |
| **[Sleek Design Agent Skills](https://github.com/sleekdotdesign/agent-skills)** `Official` | `Skill` | Official Sleek agent skill for creating and editing mobile app screen designs via the Sleek REST API. | `Universal` | ⭐ 603<br><sub>2026-10-05</sub> |
| **[Refero Design Research Skill](https://github.com/referodesign/refero_skill)** `Official` | `Plugin` | Official Refero research-first UI design plugin giving agents access to 150K+ real-world app screens and user flows via MCP. | `Claude Code` `Codex` `Cursor` `Universal` | ⭐ 368<br><sub>2026-11-25</sub> |
| **[Svelte Official MCP](https://github.com/sveltejs/ai-tools)** `Official` | `MCP` | Official Svelte MCP server and AI tooling for Svelte and SvelteKit development. | `Universal` | ⭐ 345<br><sub>2026-11-26</sub> |
| **[CesiumJS Agent Skills](https://github.com/CesiumGS/cesiumjs-skills)** `Official` | `Plugin` | Official CesiumGS agent skills for building 3D geospatial globes, 3D Tiles, and CesiumJS web visualizations. | `Claude Code` `Codex` `GitHub Copilot` `Universal` | ⭐ 198<br><sub>2026-09-14</sub> |
| **[UX Pilot Frontend Design Skill](https://github.com/uxpilot-ai/frontend-design-skill)** `Official` | `Skill` | Official UX Pilot skill that generates UI designs on a visual canvas first and then translates them cleanly into frontend code. | `Claude Code` `Codex` `Cursor` `Universal` | ⭐ 194<br><sub>2026-11-25</sub> |
| **[MapLibre GL JS Agent Skills](https://github.com/maplibre/maplibre-agent-skills)** `Official` | `Skill` | Official community-maintained MapLibre GL JS and PMTiles skills helping coding agents build accurate interactive web maps. | `Claude Code` `Universal` | ⭐ 166<br><sub>2026-11-26</sub> |
| **[Ant Design Official Skill](https://github.com/ant-design/antd-skill)** `Official` | `Skill` | Official Ant Design agent skill for building React interfaces with Ant Design components and conventions. | `Universal` | ⭐ 142<br><sub>2026-03-27</sub> |
| **[Kakao Prevue (Compose Live Preview)](https://github.com/kakao/prevue)** `Official` | `Plugin` | Official Kakao plugin rendering Jetpack Compose and Compose Multiplatform previews live in your browser within a second—no Android Studio required. | `Claude Code` `Codex` `Universal` | ⭐ 129<br><sub>2026-11-27</sub> |
| **[Meshy AI 3D Generation Skills](https://github.com/meshy-dev/meshy-3d-agent)** `Official` | `Skill` | Official Meshy AI agent skills for text-to-3D, image-to-3D, texturing, and game-ready 3D asset generation. | `Claude Code` `Cursor` `Universal` | ⭐ 128<br><sub>2026-11-18</sub> |

_Showing top 20 of 163 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Cloud, DevOps & Infrastructure

_Deployment, containers, observability, databases, and cloud platform integrations._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Google Agent Skills](https://github.com/google/skills)** `Official` | `Skill` | Official Google repository of Agent Skills for building with Google Cloud, developer platforms, and Google technologies. | `Universal` `Gemini CLI` `Claude Code` | — |
| **[Google Agents CLI](https://github.com/google/agents-cli)** `Official` | `Tool` | Official Google CLI and skills enabling coding assistants to build, evaluate, and deploy AI agents on Google Cloud with ADK. | `Universal` `Claude Code` `Gemini CLI` | ⭐ 6.4k<br><sub>2026-11-24</sub> |
| **[Cloudflare Skills](https://github.com/cloudflare/skills)** `Official` | `Skill` | Official Cloudflare agent skills and rules teaching AI assistants how to build and deploy on Cloudflare Workers and developer platform. | `Universal` | ⭐ 3.5k<br><sub>2026-11-25</sub> |
| **[Supabase Agent Skills](https://github.com/supabase/agent-skills)** `Official` | `Skill` | Official Supabase agent skills helping AI coding assistants follow Postgres, auth, RLS, and Edge Functions best practices. | `Universal` | ⭐ 3.1k<br><sub>2026-11-12</sub> |
| **[Firebase Agent Skills](https://github.com/firebase/agent-skills)** `Official` | `Skill` | Official Firebase agent skills and extensions for building, configuring, and deploying Firebase backends. | `Universal` | ⭐ 531<br><sub>2026-11-09</sub> |
| **[TraxAgent Budget Governance](https://github.com/ccarter01011/traxagent-claude-plugin)** `Official` | `Plugin` | Read-only AI spend analytics plugin and MCP server answering who spent your AI budget and recommending concrete cost fixes. | `Claude Code` `Cursor` `Universal` | ⭐ 173<br><sub>2026-11-24</sub> |
| **[JetBrains TeamCity CLI & Skill](https://github.com/JetBrains/teamcity-cli)** `Official` | `Skill` | Official JetBrains TeamCity CLI and agent skill for inspecting CI builds, logs, build agents, terminals, and build queues. | `Claude Code` `Universal` | ⭐ 132<br><sub>2026-11-25</sub> |
| **[Neo4j Agent Skills](https://github.com/neo4j/agent-skills)** `Official` | `Skill` | Official Neo4j agent skills for Cypher query authoring, graph data modeling, and Neo4j application development. | `Claude Code` `Codex` `Gemini CLI` `Universal` | ⭐ 122<br><sub>2026-11-26</sub> |
| **[AWS APEX Platform Engineering Skills](https://github.com/aws-samples/sample-apex-skills)** `Official` | `Skill` | Official AWS Samples platform engineering skills focused on production Amazon EKS and Amazon ECS architectures. | `Claude Code` `Universal` | ⭐ 105<br><sub>2026-11-27</sub> |
| **[Prisma Official Skills](https://github.com/prisma/skills)** `Official` | `Skill` | Official Prisma agent skills for Prisma ORM setup, Client API usage, Prisma Postgres, and v7 migrations. | `Universal` | ⭐ 80<br><sub>2026-11-26</sub> |
| **[Cybrix Deploy Skills](https://github.com/cybrixcc/cybrix-skills)** `Official` | `Skill` | Official Cybrix skills enabling automated deployment and hosting workflows directly from Claude Code. | `Claude Code` | ⭐ 50<br><sub>2026-05-06</sub> |
| **[Cloud Run MCP](https://github.com/GoogleCloudPlatform/cloud-run-mcp)** `Official` | `MCP` | Official Google Cloud MCP server allowing AI agents to build, deploy, and manage containerized applications on Cloud Run.<br>`npx -y @google-cloud/cloud-run-mcp` | `Universal` | — |
| **[DBHub MCP](https://github.com/bytebase/dbhub)** `Official` | `MCP` | Token-conscious universal database MCP server supporting PostgreSQL, MySQL, SQL Server, Oracle, MariaDB, and SQLite.<br>`npx -y @bytebase/dbhub` | `Universal` | — |
| **[FinOps MCP](https://github.com/getnable/finopsmcp)** `Official` | `MCP` | Headless FinOps MCP layer giving AI agents API-first visibility and cost control across cloud infrastructure spend. | `Universal` | — |
| **[Firefly MCP](https://github.com/gofireflyio/firefly-mcp)** `Official` | `MCP` | Official Firefly MCP server enabling AI agents to discover cloud assets, detect drift, and codify infrastructure as code. | `Universal` | — |
| **[HashiCorp Agent Skills](https://github.com/hashicorp/agent-skills)** `Official` | `Skill` | HashiCorp-maintained agent skills for Terraform workflows and infrastructure automation. | `Claude Code` `Universal` | — |
| **[LaunchDarkly MCP Server](https://github.com/launchdarkly/mcp-server)** `Official` | `MCP` | Official LaunchDarkly MCP server for inspecting, creating, and managing feature flags and rollout rules from AI agents. | `Universal` | — |
| **[Mailtrap Skills](https://github.com/mailtrap/mailtrap-skills)** `Official` | `Skill` | Official agent skills for Mailtrap email sending, sandbox testing, domain setup, and contacts management. | `Claude Code` `Universal` | — |
| **[MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server)** `Official` | `MCP` | Official MongoDB MCP server for querying collections, inspecting schemas, and managing MongoDB Atlas deployments.<br>`npx -y mongodb-mcp-server` | `Universal` | — |
| **[Neon Postgres Skills](https://github.com/neondatabase/postgres-skills)** `Official` | `Skill` | Official Neon agent skills providing PostgreSQL best practices for schema design, indexing strategies, query optimization, and migrations. | `Universal` `Claude Code` | — |

_Showing top 20 of 49 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Agent Orchestration & Workflows

_Multi-agent coordination, planning pipelines, memory layers, and workflow automation._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Honcho](https://github.com/plastic-labs/honcho)** `Official` | `Tool` | Official Plastic Labs memory infrastructure, CLI, MCP server, and harness plugins for building stateful, continually learning agents. | `Universal` `Claude Code` `Cursor` `DeepSeek Harness` | ⭐ 8.3k<br><sub>2026-11-25</sub> |
| **[MemSearch](https://github.com/zilliztech/memsearch)** `Official` | `Plugin` | Official Zilliz persistent unified memory layer for Claude Code, Codex, and DSH backed by local Markdown and Milvus vector search. | `Claude Code` `Codex` `DeepSeek Harness` `Universal` | ⭐ 3.0k<br><sub>2026-11-27</sub> |
| **[Claude Brain (Memvid)](https://github.com/memvid/claude-brain)** `Official` | `Plugin` | Rust-powered photographic memory plugin storing Claude Code memory in a single portable .mv2 file you can git commit or share. | `Claude Code` | ⭐ 585<br><sub>2026-01-19</sub> |
| **[ClickHouse Loom](https://github.com/ClickHouse/loom)** `Official` | `Plugin` | Official ClickHouse shared long-term memory, document search, and symbol-linked code index plugin for AI coding agents. | `Claude Code` `Universal` | ⭐ 244<br><sub>2026-11-27</sub> |
| **[Corezoid AI Plugin](https://github.com/corezoid/corezoid-ai-plugin)** `Official` | `Plugin` | Official Corezoid plugin providing workflow skills, schemas, templates, playbooks, and MCP references for building Corezoid processes. | `Claude Code` `Codex` | ⭐ 74<br><sub>2026-11-13</sub> |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | Structured software development workflow framework enforcing brainstorming, TDD, systematic debugging, and subagent-driven execution.<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 327.5k<br><sub>2026-11-26</sub> |
| **[pstack Multi-Harness Plugin](https://github.com/michael-denyer/pstack-claude)** | `Plugin` | Rigorous agent workflows translating Cursor primitives across Claude Code, Codex, Copilot, Gemini CLI, OpenCode, Antigravity, and DeepSeek Harness. | `Claude Code` `Codex` `GitHub Copilot` `Gemini CLI` `+3` | ⭐ 4.9k<br><sub>2026-11-26</sub> |
| **[Token Optimizer](https://github.com/alexgreensh/token-optimizer)** | `Plugin` | Detect ghost tokens, survive context compaction, and prevent context quality decay in long coding agent sessions. | `Claude Code` `Codex` | ⭐ 3.2k<br><sub>2026-11-26</sub> |
| **[LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness)** | `Plugin` | Long-horizon computer-use harness for running agents across desktop apps and CLI with fresh-context execution, durable state, and independent auditing. | `Claude Code` `Codex` `DeepSeek Harness` | ⭐ 1.9k<br><sub>2026-11-11</sub> |
| **[Oh My ClaudeCode](https://github.com/Yeachan-Heo/oh-my-claudecode)** | `Plugin` | Teams-first multi-agent orchestration plugin for Claude Code combining specialized subagents, skills, hooks, and parallel execution. | `Claude Code` | — |
| **[Vibe Kanban](https://github.com/BloopAI/vibe-kanban)** | `Tool` | Visual Kanban orchestrator for running, monitoring, and reviewing parallel coding tasks across Claude Code, Codex, and other agents. | `Claude Code` `Codex` `Universal` | — |
| **[Everything Claude Code (ECC)](https://github.com/affaan-m/ECC)** | `Plugin` | Agent harness optimization system bundling skills, instincts, memory, security, and research-first workflows. | `Claude Code` `Codex` `OpenCode` `Cursor` `+2` | ⭐ 311.3k<br><sub>2026-11-23</sub> |
| **[Claude Mem](https://github.com/thedotmack/claude-mem)** | `Plugin` | Persistent cross-session memory plugin that captures, compresses, and injects relevant agent context. | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | ⭐ 120.0k<br><sub>2026-11-26</sub> |
| **[Oh My OpenAgent (OmO)](https://github.com/code-yeongyu/oh-my-openagent)** | `Plugin` | Multi-agent orchestration harness and plugin for OpenCode and coding agents with graph engineering workflows. | `OpenCode` `Claude Code` `Codex` `Cursor` `+1` | ⭐ 71.1k<br><sub>2026-11-27</sub> |
| **[Context Mode](https://github.com/mksglu/context-mode)** | `Plugin` | Zero-telemetry local plugin using sandboxing and SQLite FTS5 search to keep bulky tool outputs out of agent context. | `Claude Code` `Codex` `Gemini CLI` `GitHub Copilot` `+2` | ⭐ 34.5k<br><sub>2026-11-26</sub> |
| **[Planning with Files](https://github.com/OthmanAdi/planning-with-files)** | `Skill` | Manus-style persistent markdown planning skill providing crash-proof session recovery and context-rot protection. | `Universal` | ⭐ 28.3k<br><sub>2026-11-25</sub> |
| **[Context Engineering Skills](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)** | `Skill` | Collection of agent skills for context engineering, multi-agent architectures, and production agent system debugging. | `Universal` | ⭐ 18.4k<br><sub>2026-11-27</sub> |
| **[Plannotator](https://github.com/backnotprop/plannotator)** | `Tool` | Human-in-the-loop workspace for reviewing agent plans, annotating code diffs, sharing reviews, and sending structured feedback to coding agents. | `Claude Code` `Codex` `OpenCode` `Universal` | ⭐ 15.3k<br><sub>2026-11-27</sub> |
| **[memU](https://github.com/NevaMind-AI/memU)** | `Tool` | Cross-agent personal memory framework with MCP support and skill definitions for persistent context across coding and assistant harnesses. | `Universal` `Claude Code` | ⭐ 14.6k<br><sub>2026-11-26</sub> |
| **[Trail Code](https://github.com/trailhq/Trail-Code)** | `MCP` | MCP server providing a shared code knowledge graph and decision memory across team coding agents. | `Claude Code` `Cursor` `Codex` `Universal` | ⭐ 11.5k<br><sub>2026-11-26</sub> |

_Showing top 20 of 171 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Data, Research & Knowledge

_Web search, document processing, data analysis, academic research, and knowledge bases._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[ktx Analytics Context](https://github.com/Kaelio/ktx)** `Official` | `Skill` | Executable semantic context layer enabling Claude Code and Codex to query analytical databases accurately with business definitions. | `Claude Code` `Codex` `Universal` | ⭐ 1.6k<br><sub>2026-11-18</sub> |
| **[Oxylabs Agent Skills](https://github.com/oxylabs/agent-skills)** `Official` | `Skill` | Official Oxylabs agent skills for structured web scraping, browser rendering, and real-time search data extraction. | `Claude Code` `Universal` | ⭐ 868<br><sub>2026-11-26</sub> |
| **[Posit Data Science Skills](https://github.com/posit-dev/skills)** `Official` | `Plugin` | Official Claude Skills maintained by Posit for R, Python, Quarto, Shiny, and reproducible data science workflows. | `Claude Code` `Universal` | ⭐ 576<br><sub>2026-11-12</sub> |
| **[AntV Chart Visualization Skills](https://github.com/antvis/chart-visualization-skills)** `Official` | `Skill` | Official AntV agent skills for data visualization and turning structured data into clear charts. | `Universal` | ⭐ 544<br><sub>2026-09-22</sub> |
| **[Tavily Agent Skills](https://github.com/tavily-ai/skills)** `Official` | `Skill` | Official Tavily agent skills for web search, content extraction, and real-time online research. | `Universal` | ⭐ 497<br><sub>2026-11-24</sub> |
| **[BibiGPT Video & Podcast Skill](https://github.com/JimmyLv/bibigpt-skill)** `Official` | `Skill` | Official BibiGPT skill and MCP server summarizing YouTube, Bilibili, and Xiaoyuzhou podcasts with precise timestamps. | `Claude Code` `Cursor` `Codex` `Universal` | ⭐ 147<br><sub>2026-11-13</sub> |
| **[Dex Analytics Engineering](https://github.com/exmergo/dex)** `Official` | `Plugin` | Analytics engineering plugin letting coding agents model, test, and build BigQuery and data warehouse analytics pipelines. | `Claude Code` | ⭐ 145<br><sub>2026-11-27</sub> |
| **[Altimate Data Engineering & dbt Skills](https://github.com/AltimateAI/data-engineering-skills)** `Official` | `Skill` | Official AltimateAI data engineering skills covering dbt modeling, SQL lineage, data quality tests, and warehouse optimization. | `Claude Code` `Universal` | ⭐ 137<br><sub>2026-10-27</sub> |
| **[InfraNodus Graph Insight Skills](https://github.com/infranodus/skills)** `Official` | `Skill` | Official InfraNodus skills augmenting LLM reasoning with text-network graph gap detection and structural insight generation. | `Claude Code` `Universal` | ⭐ 128<br><sub>2026-11-12</sub> |
| **[PostHog Official AI Plugin](https://github.com/PostHog/ai-plugin)** `Official` | `Plugin` | Official PostHog plugin for Claude Code, Cursor, Gemini CLI, and Codex integrating product analytics, feature flags, and experiments. | `Claude Code` `Cursor` `Gemini CLI` `Codex` | ⭐ 101<br><sub>2026-11-26</sub> |
| **[Accoil Product Tracking Skills](https://github.com/Accoil/product-tracking-skills)** `Official` | `Skill` | Official Accoil agent skills that scan codebases, design tracking plans, and generate analytics instrumentation for 25+ destinations. | `Universal` | ⭐ 47<br><sub>2026-10-20</sub> |
| **[Alpaca MCP Server](https://github.com/alpacahq/alpaca-mcp-server)** `Official` | `MCP` | Official Alpaca MCP server enabling AI agents to fetch real-time market data and trade stocks, ETFs, options, and crypto.<br>`uvx alpaca-mcp-server` | `Universal` | — |
| **[Apify Awesome Skills](https://github.com/apify/awesome-skills)** `Official` | `Skill` | Official Apify skills for collecting Reddit posts, comments, profiles, communities, and structured web data. | `Claude Code` `Universal` | — |
| **[Apify MCP Server](https://github.com/apify/apify-mcp-server)** `Official` | `MCP` | Official Apify MCP server giving AI agents access to thousands of Actors for web scraping, crawling, and structured data extraction.<br>`npx -y @apify/actors-mcp-server` | `Universal` | — |
| **[CoinPaprika Skills](https://github.com/coinpaprika/skills)** `Official` | `Skill` | Keyless crypto and DEX market data skills covering 12K+ coins, 350+ exchanges, 36 chains, tickers, pools, and OHLCV prices. | `Claude Code` `Universal` | — |
| **[DataLikers MCP](https://github.com/subzeroid/datalikers-mcp)** `Official` | `MCP` | Lightweight stdio MCP server exposing 29 Instagram and TikTok data extraction tools via the DataLikers API. | `Universal` | — |
| **[Firecrawl Claude Plugin](https://github.com/firecrawl/firecrawl-claude-plugin)** `Official` | `Plugin` | Official Firecrawl plugin for Claude Code to search the live web, scrape developer docs, and extract structured web data. | `Claude Code` | — |
| **[Firecrawl MCP Server](https://github.com/firecrawl/firecrawl-mcp-server)** `Official` | `MCP` | Official Firecrawl MCP server providing web search, scraping, crawling, and structured data extraction for AI agents.<br>`npx -y firecrawl-mcp` | `Universal` | — |
| **[Gaffa for AI](https://github.com/GaffaAI/gaffa-for-ai)** `Official` | `Skill` | Official Gaffa skills for authoring, debugging, and running web scraping, crawling, screenshot, and browser automation pipelines. | `Universal` `Claude Code` | — |
| **[Hugging Face Skills](https://github.com/huggingface/skills)** `Official` | `Skill` | Skills for querying Hugging Face Hub datasets, fine-tuning models, and running model evaluations.<br>`hf skills add huggingface-datasets` | `Claude Code` `Codex` `Cursor` `Gemini CLI` | — |

_Showing top 20 of 148 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Productivity & Collaboration

_Docs, issue trackers, calendars, messaging platforms, and daily office workflows._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `Official` | `Skill` | Official collection of Agent Skills by Anthropic covering document creation (docx, pdf, pptx), frontend design, and skill authoring.<br>`npx skills add anthropics/skills` | `Universal` `Claude Code` | ⭐ 201.1k<br><sub>2026-11-16</sub> |
| **[Obsidian Skills](https://github.com/obsidianmd/obsidian-skills)** `Official` | `Skill` | Official Obsidian skills teaching AI agents to work with Obsidian vaults, Markdown, Bases, and JSON Canvas. | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 54.0k<br><sub>2026-11-26</sub> |
| **[Jane Street Agent Skills](https://github.com/janestreet/agent_skills)** `Official` | `Skill` | Official Jane Street repository of agent skills, featuring a Socratic tutor skill for guided learning. | `Universal` | ⭐ 12.0k<br><sub>2026-11-17</sub> |
| **[Zapier Official Plugin](https://github.com/zapier/mcp)** `Official` | `Plugin` | Official Zapier plugin distribution connecting Claude Code, Codex, and Cursor to thousands of SaaS apps via hosted MCP. | `Claude Code` `Codex` `Cursor` `Universal` | ⭐ 467<br><sub>2026-11-20</sub> |
| **[Baidu Netdisk Agent Skill](https://github.com/baidu-netdisk/bdpan-storage)** `Official` | `Plugin` | Official Baidu Netdisk agent skill to upload, download, transfer, share, and search cloud files in natural language. | `Claude Code` `Cursor` `Codex` `Gemini CLI` `+1` | ⭐ 364<br><sub>2026-11-26</sub> |
| **[AgenticMail](https://github.com/agenticmail/agenticmail)** `Official` | `Plugin` | Programmatic email, SMS, and outbound voice-call infrastructure plugin letting AI agents send and receive real communications. | `Claude Code` `Universal` | ⭐ 261<br><sub>2026-11-26</sub> |
| **[DevGlobe Live Coding Extension](https://github.com/Nako0/devglobe-extension)** `Official` | `Plugin` | Official DevGlobe coding metrics and live 3D globe presence plugin with automatic time tracking across AI CLIs and IDEs. | `Claude Code` `Codex` `OpenCode` | ⭐ 217<br><sub>2026-10-23</sub> |
| **[Taskade Official Plugin & MCP](https://github.com/taskade/mcp)** `Official` | `Plugin` | Official Taskade agent plugin and MCP server connecting coding agents to Taskade workspaces plus OpenAPI-to-MCP codegen. | `Claude Code` `Cursor` `Codex` `Universal` | ⭐ 170<br><sub>2026-11-26</sub> |
| **[ComPDF Agent Skills](https://github.com/ComPDFKit/compdf-skills)** `Official` | `Skill` | Official ComPDFKit PDF processing skills enabling coding agents to convert, edit, split, insert, compare, and compress PDFs. | `Claude Code` `Cursor` `GitHub Copilot` `OpenCode` `+1` | ⭐ 111<br><sub>2026-08-12</sub> |
| **[WakaTime for Claude Code](https://github.com/wakatime/claude-code-wakatime)** `Official` | `Plugin` | Official WakaTime plugin automatically tracking how much time and code you produce inside Claude Code sessions. | `Claude Code` | ⭐ 101<br><sub>2026-10-30</sub> |
| **[Beezi Cost & Usage Plugin](https://github.com/Beezi-AI/beezi-claude-plugin)** `Official` | `Plugin` | Official Beezi plugin to track per-session AI coding costs in Claude Code, summarize personal usage, and draft tickets. | `Claude Code` | ⭐ 63<br><sub>2026-11-20</sub> |
| **[Airtable Agent Skills](https://github.com/Airtable/skills)** `Official` | `Skill` | Official Airtable agent skills for working with Airtable bases, schemas, automations, and extensions. | `Universal` `Claude Code` | — |
| **[Colibird Local MCP](https://github.com/colibird-ai/local-mcp-releases)** `Official` | `MCP` | Local desktop MCP server connecting Claude, ChatGPT, and Cursor to native Mac and Windows files and workflows. | `Universal` | — |
| **[monday.com MCP](https://github.com/mondaycom/mcp)** `Official` | `MCP` | Official monday.com MCP server giving AI agents secure access to boards, items, and project management workflows. | `Universal` | — |
| **[Notion MCP Server](https://github.com/makenotion/notion-mcp-server)** `Official` | `MCP` | Official Notion MCP server enabling AI agents to search, read, create, and update Notion pages and databases.<br>`npx -y @notionhq/notion-mcp-server` | `Universal` | — |
| **[WorkorAI Agent Kit](https://github.com/work0r-ai/agent-kit)** `Official` | `Skill` | Official WorkorAI talent marketplace skill for candidate job search and employer hiring with white-box match explanations via MCP. | `Universal` `Claude Code` | — |
| **[Career Ops](https://github.com/career-ops-hq/career-ops)** | `Plugin` | Local AI job-search plugin and workflow suite for scoring postings, tailoring ATS resumes, and tracking applications. | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | ⭐ 85.1k<br><sub>2026-11-26</sub> |
| **[PPT Master](https://github.com/hugohe3/ppt-master)** | `Skill` | Agent skill converting documents or topics into native PowerPoint decks with charts, animations, and audio narration. | `Universal` | ⭐ 80.5k<br><sub>2026-11-20</sub> |
| **[AI Job Search](https://github.com/ai-job-search-dev/ai-job-search)** | `Tool` | Local Claude Code job-application toolkit with scrapers, CV tailoring, cover letter generation, and interview prep. | `Claude Code` | ⭐ 73.6k<br><sub>2026-11-26</sub> |
| **[I Have ADHD](https://github.com/ayghri/i-have-adhd)** | `Skill` | Agent skill that restructures coding agent responses into concise, ADHD-friendly, front-loaded answers. | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | ⭐ 62.6k<br><sub>2026-11-25</sub> |

_Showing top 20 of 167 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Content & Marketing

_Writing, SEO, social media publishing, video/audio production, and growth workflows._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Hyperframes](https://github.com/heygen-com/hyperframes)** `Official` | `Plugin` | Official HeyGen open-source AI video editor plugin and MCP suite for authoring HTML animations and rendering MP4. | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 90.9k<br><sub>2026-11-27</sub> |
| **[Video Use](https://github.com/browser-use/video-use)** `Official` | `Skill` | Official Browser Use agent skill enabling AI coding agents to edit and process videos programmatically. | `Universal` | ⭐ 31.6k<br><sub>2026-10-08</sub> |
| **[Social Media Research Skills](https://github.com/ScrapeCreators/social-media-research-skills)** `Official` | `Skill` | AI agent skills for social media research covering outlier posts, comment mining, competitor teardowns, and ad libraries across TikTok, IG, YouTube, and X. | `Claude Code` `Cursor` `Universal` | ⭐ 8.1k<br><sub>2026-08-26</sub> |
| **[Remotion Agent Skills](https://github.com/remotion-dev/skills)** `Official` | `Skill` | Official Remotion agent skills for generating, animating, and rendering programmatic React videos. | `Universal` | ⭐ 8.1k<br><sub>2026-11-24</sub> |
| **[Scenario Creative Media Skills](https://github.com/scenario-labs/skills)** `Official` | `Skill` | Production media skills that pick optimal image, video, audio, and 3D models, estimate cost upfront, and keep brand consistency. | `Claude Code` `Codex` `Universal` | ⭐ 4.1k<br><sub>2026-11-26</sub> |
| **[Higgsfield AI Skills](https://github.com/higgsfield-ai/skills)** `Official` | `Skill` | Official Higgsfield AI skills for generating brand kits, product photoshoots, faceless videos, explainers, and YouTube thumbnails. | `Claude Code` `Codex` `Cursor` | ⭐ 2.1k<br><sub>2026-11-05</sub> |
| **[TubeLab YouTube Research Skills](https://github.com/TubeLabHQ/youtube-research-skills)** `Official` | `Skill` | YouTube growth research skills covering outlier video discovery, niche validation, comment mining, title formulas, and thumbnail concepts. | `Claude Code` `Codex` `Universal` | ⭐ 352<br><sub>2026-11-21</sub> |
| **[SuperCMO Campaign Skills](https://github.com/SupercmoHQ/superCMO-skills)** `Official` | `Skill` | End-to-end marketing campaign skills generating UGC ad videos, commercial product photography, and performance creatives. | `Claude Code` `Cursor` `Universal` | ⭐ 340<br><sub>2026-11-16</sub> |
| **[Glif Creative Media Plugin](https://github.com/glifxyz/glif-mcp-server)** `Official` | `Plugin` | Official Glif plugin, skills, and hosted MCP server for running creative image, video, and audio workflows across AI clients. | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | ⭐ 224<br><sub>2026-11-24</sub> |
| **[SE Ranking SEO Skills](https://github.com/seranking/seo-skills)** `Official` | `Skill` | Official SE Ranking agent skills for content briefs, AI Search share of voice, site audits, backlink gaps, keyword clusters, and GEO. | `Claude Code` `Universal` | ⭐ 217<br><sub>2026-11-25</sub> |
| **[Blotato Content & Video Skills](https://github.com/blotato/contentskills)** `Official` | `Skill` | Full content creation skills covering video editing, 100+ visual effects, script writing, social publishing, and DM automation. | `Claude Code` `Codex` `Universal` | ⭐ 195<br><sub>2026-11-25</sub> |
| **[OranGEO AI Visibility Skill](https://github.com/OranAi-Ltd/orangeo-ai-visibility-skill)** `Official` | `Skill` | Open-source GEO/AEO visibility audit skill checking robots.txt, llms.txt, structured schema, citation signals, and competitor gaps. | `Claude Code` `Universal` | ⭐ 145<br><sub>2026-06-09</sub> |
| **[Akii SEO & AI Search Optimizer](https://github.com/akii-technologies-ltd/akii-seo-ai-search-optimizer)** `Official` | `Plugin` | MIT-licensed Claude Code plugin with 12 skills, 5 agents, and 3 commands for SEO, AEO, and GEO audits, schema, and content planning. | `Claude Code` | ⭐ 80<br><sub>2026-11-13</sub> |
| **[Bria AI Image Skill](https://github.com/Bria-AI/bria-skill)** `Official` | `Skill` | Generate, edit, and remove image backgrounds via the Bria.ai API with natural-language edits and transparent PNGs. | `Claude Code` `Universal` | — |
| **[deAPI Media Skills](https://github.com/deapi-ai/claude-code-skills)** `Official` | `Skill` | AI media toolkit via deAPI for Flux image generation, TTS, YouTube/audio transcription, OCR, video generation, and upscaling. | `Claude Code` `Cursor` `Windsurf` `Universal` | — |
| **[HeyGen Agent Skills](https://github.com/heygen-com/skills)** `Official` | `Skill` | Official HeyGen AI agent skills for digital avatar creation and programmatic video production via the HeyGen v3 Video API. | `Universal` `Claude Code` | — |
| **[Linked API LinkedIn Skills](https://github.com/Linked-API/linkedin-skills)** `Official` | `Skill` | General-purpose LinkedIn automation via Linked API for profile lookup, search, messaging, connections, posts, and Sales Navigator. | `Claude Code` `Universal` | — |
| **[Microsoft Clarity MCP](https://github.com/microsoft/clarity-mcp-server)** `Official` | `MCP` | Official Microsoft Clarity MCP server for querying website UX analytics, traffic metrics, and behavioral insights.<br>`npx -y @microsoft/clarity-mcp-server` | `Universal` | — |
| **[NoizAI TTS Skills](https://github.com/NoizAI/skills)** `Official` | `Skill` | Human-like text-to-speech workflows with local and cloud backends, style presets, and delivery scripts. | `Claude Code` `Universal` | — |
| **[Sonilo Video-to-Music](https://github.com/sonilo-ai/skills)** `Official` | `Skill` | Compose original synchronized soundtracks for finished videos using Sonilo. | `Claude Code` `Universal` | — |

_Showing top 20 of 246 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Security & Compliance

_Vulnerability scanning, secret detection, guardrails, and compliance checks._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Cloudflare Security Audit Skill](https://github.com/cloudflare/security-audit-skill)** `Official` | `Skill` | Official Cloudflare coding-agent skill for multi-phase security audits with verified, machine-readable findings. | `Universal` | ⭐ 78.9k<br><sub>2026-09-14</sub> |
| **[SkillSpector](https://github.com/NVIDIA/SkillSpector)** `Official` | `Tool` | Official NVIDIA security scanner that detects prompt injection, data exfiltration, and supply-chain risks in agent skills. | `Claude Code` `Codex` | ⭐ 27.8k<br><sub>2026-11-25</sub> |
| **[Gen Sage ADR Guard](https://github.com/gendigitalinc/sage)** `Official` | `Plugin` | Lightweight Agent Detection & Response (ADR) security layer by Gen Digital guarding agent commands, files, and web requests. | `Claude Code` `Cursor` `Universal` | ⭐ 328<br><sub>2026-11-09</sub> |
| **[JAR Analyzer Security Audit](https://github.com/jar-analyzer/jar-analyzer-claude)** `Official` | `Plugin` | Official jar-analyzer Claude Code plugin indexing Java JAR bytecode into a queryable database for deep AI vulnerability auditing. | `Claude Code` | ⭐ 140<br><sub>2026-03-20</sub> |
| **[QuillShield Audit Skills](https://github.com/quillai-network/quillshield_skills)** `Official` | `Skill` | Structured smart contract security audit skills inferring state invariants, modeling flash-loan/oracle attack chains, and scoring findings. | `Claude Code` `Universal` | ⭐ 136<br><sub>2026-11-24</sub> |
| **[SAIL V2 AI Security Lifecycle](https://github.com/pillar-labs/sail-skill)** `Official` | `Plugin` | Secure AI Lifecycle (SAIL V2) 91-risk catalog delivered as an agent skill for AI gap assessments, security roadmaps, and compliance. | `Claude Code` `Universal` | ⭐ 106<br><sub>2026-07-07</sub> |
| **[Claude Code Security Review](https://github.com/anthropics/claude-code-security-review)** `Official` | `Tool` | Official Anthropic GitHub Action using Claude to automatically analyze pull requests for security vulnerabilities. | `Claude Code` | — |
| **[Codacy MCP Server](https://github.com/codacy/codacy-mcp-server)** `Official` | `MCP` | Official Codacy MCP server bringing automated code quality, security issue detection, and repository coverage analysis to agents.<br>`npx -y @codacy/codacy-mcp` | `Universal` | — |
| **[Internet Court Skill](https://github.com/internet-court/internet-court-skill)** `Official` | `Skill` | Open trust-layer skill for agent-to-agent commerce covering natural-language mandates, ERC-7710 delegated permissions, x402 payments, escrow, and dispute resolution. | `Universal` `Claude Code` | — |
| **[Trail of Bits Security Skills](https://github.com/trailofbits/skills)** `Official` | `Skill` | Security skills by Trail of Bits for static analysis with CodeQL/Semgrep, variant analysis, code auditing, and fix verification. | `Claude Code` `Universal` | — |
| **[Claude BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** | `Plugin` | Bug hunting and external red-team skill bundle with 85 skills, 16 slash commands, and 681 disclosed vulnerability report patterns across 24 classes. | `Claude Code` | ⭐ 25.2k<br><sub>2026-11-27</sub> |
| **[Claude Red](https://github.com/SnailSploit/Claude-Red)** | `Skill` | Structured offensive security SKILL.md library priming Claude with expert red-team methodologies and penetration testing workflows. | `Claude Code` `Universal` | ⭐ 11.6k<br><sub>2026-11-17</sub> |
| **[Rea](https://github.com/morluto/rea)** | `Plugin` | Agent plugin, MCP server, and skills for reverse engineering apps down to native binaries. | `Claude Code` `Codex` `Cursor` `DeepSeek Harness` | ⭐ 479.8k<br><sub>2026-11-27</sub> |
| **[Claude Guardian](https://github.com/DUNHKpcc/Claude-Guardian)** | `Skill` | Account safety and risk assessment skill evaluating device, network environment, and usage patterns to prevent account bans. | `Claude Code` `Codex` | ⭐ 2.3k<br><sub>2026-11-20</sub> |
| **[CC Safety Net](https://github.com/kenryu42/cc-safety-net)** | `Plugin` | Pre-execution guard plugin blocking destructive Git, filesystem, and sensitive-file access commands before tool calls run. | `Claude Code` `Codex` `Antigravity` | ⭐ 2.1k<br><sub>2026-11-27</sub> |
| **[OpenOSINT](https://github.com/OpenOSINT/OpenOSINT)** | `Plugin` | Passive-by-default OSINT plugin and MCP server bundling 21 keyless public-source reconnaissance tools behind natural-language chat. | `Claude Code` `Universal` | ⭐ 2.0k<br><sub>2026-11-15</sub> |
| **[GRC Compliance Skills](https://github.com/Sushegaad/Claude-Skills-Governance-Risk-and-Compliance)** | `Skill` | Governance, Risk, and Compliance (GRC) skills covering ISO 27001, SOC 2, FedRAMP, GDPR, HIPAA, NIST CSF, PCI DSS, and EU AI Act. | `Claude Code` `Universal` | ⭐ 1.1k<br><sub>2026-11-15</sub> |
| **[Safe Anything](https://github.com/erkamyaman/safe-anything)** | `Plugin` | Fast Rust security scanner plugin and MCP detecting XSS, SQL injection, leaked secrets, dependency CVEs, and risky agent configs. | `Claude Code` `Codex` `Cursor` | ⭐ 805<br><sub>2026-11-27</sub> |
| **[CyberSecurity Operations Skills](https://github.com/Masriyan/Claude-Code-CyberSecurity-Skill)** | `Skill` | 22 cybersecurity skills spanning offensive security, defensive operations, reverse engineering, threat hunting, and threat intelligence. | `Claude Code` `Universal` | ⭐ 614<br><sub>2026-10-20</sub> |
| **[VN Law Check](https://github.com/mhfed/vn-law-check)** | `Skill` | Legal compliance audit skill checking websites against Vietnam data protection, e-commerce, cybersecurity, and AI regulations. | `Claude Code` `Cursor` `GitHub Copilot` `Windsurf` | ⭐ 515<br><sub>2026-11-25</sub> |

_Showing top 20 of 45 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Marketplaces, Specs & Tooling

_Plugin marketplaces, skill registries, cross-agent installers, and authoring SDKs._

| Name | Type | Description | Agents | Activity |
| --- | --- | --- | --- | --- |
| **[Claude Code Official Plugins](https://github.com/anthropics/claude-plugins-official)** `Official` | `Plugin` | Official Anthropic-managed plugin directory for Claude Code, bundling core workflow plugins, subagents, skills, hooks, and partner MCP integrations.<br>`/plugin marketplace add anthropics/claude-plugins-official` | `Claude Code` | — |
| **[FastMCP](https://github.com/PrefectHQ/fastmcp)** `Official` | `Tool` | The standard Python framework for rapidly building production-ready Model Context Protocol (MCP) servers and clients. | `Universal` | — |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `Official` | `MCP` | Official Model Context Protocol reference server collection demonstrating core integrations for files, Git, databases, and web access. | `Universal` | — |
| **[Vercel Skills CLI](https://github.com/vercel-labs/skills)** `Official` | `Tool` | Official open CLI (`npx skills`) for discovering, installing, and managing cross-agent skills from skills.sh. | `Universal` | ⭐ 41.0k<br><sub>2026-11-27</sub> |
| **[SkillOpt](https://github.com/microsoft/SkillOpt)** `Official` | `Tool` | Official Microsoft text-space optimizer that trains and validates reusable natural-language skills for LLM agents. | `Universal` | ⭐ 19.3k<br><sub>2026-11-23</sub> |
| **[mcp-use](https://github.com/mcp-use/mcp-use)** `Official` | `MCP` | Official fullstack MCP framework and SDK for building MCP servers, clients, UI inspectors, and interactive MCP Apps. | `Universal` `Claude Code` | ⭐ 11.0k<br><sub>2026-11-27</sub> |
| **[NVIDIA SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** `Official` | `Tool` | Official NVIDIA multi-tier evaluation framework for agent skills and plugins with security scanning, compatibility gates, and live benchmarks. | `Universal` `Claude Code` `Codex` | ⭐ 4.6k<br><sub>2026-11-26</sub> |
| **[UiPath Coder Eval](https://github.com/UiPath/coder_eval)** `Official` | `Plugin` | Official UiPath evaluation harness for testing Agent Skills, MCP servers, and CLIs via sandboxed YAML suites, A/B tests, and CI gates. | `Claude Code` `Universal` | ⭐ 159<br><sub>2026-11-26</sub> |
| **[Prefect Colin Context Engine](https://github.com/PrefectHQ/colin)** `Official` | `Skill` | Official PrefectHQ context engine treating Agent Skills as versioned, testable, composable software artifacts. | `Claude Code` `Universal` | ⭐ 124<br><sub>2026-08-05</sub> |
| **[hf-skills](https://github.com/huggingface/hf-skills)** `Official` | `Tool` | Standalone CLI to find, install, and update Hugging Face skills in local or user-wide agent directories. | `Claude Code` `Codex` `Cursor` `OpenCode` | — |
| **[WebMCP](https://github.com/webmachinelearning/webmcp)** `Official` | `Tool` | W3C Web Machine Learning Community Group specification enabling websites to expose structured MCP tools directly to browser agents. | `Universal` | — |
| **[Claude Code Templates](https://github.com/davila7/claude-code-templates)** | `Tool` | Open-source component registry and CLI for discovering and installing Claude Code agents, commands, skills, hooks, and MCPs. | `Claude Code` | ⭐ 34.2k<br><sub>2026-11-26</sub> |
| **[Skill Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)** | `Tool` | Tool and MCP server that converts documentation sites, GitHub repositories, and PDFs into AI agent skills with automatic conflict detection. | `Universal` `Claude Code` `Codex` | ⭐ 15.4k<br><sub>2026-11-16</sub> |
| **[Darwin Skill Evolver](https://github.com/alchaincyf/darwin-skill)** | `Skill` | Autoresearch-inspired autonomous skill optimization loop that evaluates, mutates, tests, and keeps or reverts Agent Skills. | `Claude Code` `Codex` `Universal` | ⭐ 7.1k<br><sub>2026-11-18</sub> |
| **[One Skill to Rule Them All](https://github.com/rebelytics/one-skill-to-rule-them-all)** | `Skill` | Evidence-based meta-skill that turns session corrections and repeated workflows into approval-gated skill updates and new skill candidates. | `Universal` | ⭐ 4.0k<br><sub>2026-11-25</sub> |
| **[YAO Meta Skill](https://github.com/yaojingang/yao-meta-skill)** | `Tool` | Engineering, evaluation, security governance, and cross-agent portability framework for building reusable agent skills. | `Universal` | ⭐ 2.7k<br><sub>2026-11-09</sub> |
| **[Claude Code Tools](https://github.com/pchalasani/claude-code-tools)** | `Tool` | Practical CLI productivity suite for Claude Code and Codex featuring fast session search, tmux helpers, and shell utilities. | `Claude Code` `Codex` | ⭐ 2.0k<br><sub>2026-11-27</sub> |
| **[Agent Vision Toolkit](https://github.com/Anionex/agent-vision-toolkit)** | `Tool` | Multimodal vision toolkit, proxy, and skill enabling text-only LLMs and CLI agents to perform image Q&A, OCR, UI restoration, and GUI automation. | `Claude Code` `Codex` `OpenCode` `DeepSeek Harness` | ⭐ 1.3k<br><sub>2026-10-13</sub> |
| **[SkillForge](https://github.com/tripleyak/SkillForge)** | `Skill` | Evidence-driven skill creator featuring baseline-tested generation, per-skill regression evaluations, and ecosystem diagnostics. | `Claude Code` `Codex` `Universal` | ⭐ 920<br><sub>2026-07-29</sub> |
| **[Claude Code Skill Factory](https://github.com/alirezarezvani/claude-code-skill-factory)** | `Tool` | Open-source toolkit for building and deploying production-ready Claude skills, agents, slash commands, and prompts. | `Claude Code` | ⭐ 914<br><sub>2025-11-12</sub> |

_Showing top 20 of 52 entries. Browse full lists in [Plugins](docs/plugins.md) · [Skills](docs/skills.md) · [MCP](docs/mcp.md) · [Subagents](docs/subagents.md) · [Tooling](docs/tools.md) · [By Agent](docs/by-agent.md)._

## Contributing

Want to add a great Plugin, Skill, MCP server, or Subagent? Add a YAML file under `data/<type>/` and open a PR, or submit via the issue form. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

