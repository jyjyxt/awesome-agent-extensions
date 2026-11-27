<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->

# Awesome Agents

> 精选跨平台 AI Agent 插件、Skills、MCP Servers、Subagents 与扩展管理工具（支持 Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Antigravity 等）。

[English](README.md) | **简体中文**

![Awesome Agents 目录结构图](assets/intro/awesome-agents-zh.gif)

### Claude Code Plugins

Claude Code 插件是可安装的扩展包，可将 Skills、斜杠命令、Subagents、Hooks、MCP 服务及完整工作流组合在一起。适合需要复用和分发一套 Agent 工作流的场景。

浏览 [全部插件 (193)](docs/plugins.zh.md)，使用 `/plugin install <owner>/<repo>` 安装单个插件，或使用 `/plugin marketplace add <owner>/<repo>` 添加插件市场。

## 快速入口

- [Plugins（复合插件） (193)](docs/plugins.zh.md) · [Skills（技能包） (711)](docs/skills.zh.md) · [MCP / Connectors (110)](docs/mcp.zh.md) · [Subagents（子代理） (40)](docs/subagents.zh.md) · [扩展管理工具 (84)](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)

<details>
<summary>常见工具插件安装速查</summary>

- **Claude Code Plugin**: `/plugin install <owner>/<repo>` 或 `/plugin marketplace add <owner>/<repo>`
- **跨端 Agent Skills**: `npx skills add <owner>/<repo>`
- **MCP Server**: 按各项目文档配置到对应 Agent 的 MCP 设置（如 `mcpServers` JSON）

</details>

## 支持的 Agent 工具

[通用](https://agentskills.io) · [Claude Code](https://docs.anthropic.com/en/docs/claude-code) · [Codex](https://github.com/openai/codex) · [Cursor](https://cursor.com) · [Gemini CLI](https://github.com/google-gemini/gemini-cli) · [OpenCode](https://opencode.ai) · [Antigravity](https://antigravity.google) · [GitHub Copilot](https://github.com/features/copilot) · [Windsurf](https://windsurf.com) · [DeepSeek Harness](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)

## 按场景目录

- [官方与精选 (152)](#官方与精选)
- [编码与工程 (129)](#编码与工程) — 代码开发、重构、测试、调试、代码审查与 Git 工作流。
- [前端与设计 (123)](#前端与设计) — UI 开发、设计系统、浏览器自动化、视觉审查与 Figma 集成。
- [云与运维 (37)](#云与运维) — 部署、容器、可观测性、数据库与云平台集成。
- [编排与多代理协作 (102)](#编排与多代理协作) — 多 Agent 协同、规划流水线、记忆层与工作流编排。
- [数据、研究与知识 (108)](#数据研究与知识) — 联网检索、文档处理、数据分析、学术研究与知识库。
- [效率与协作 (109)](#效率与协作) — 文档、项目管理、日历、即时通讯与日常办公协作。
- [内容与营销 (176)](#内容与营销) — 写作、SEO、社媒发布、音视频制作与增长营销。
- [安全与合规 (29)](#安全与合规) — 漏洞扫描、敏感信息检测、安全护栏与合规审计。
- [插件市场与开发工具 (44)](#插件市场与开发工具) — 插件市场、技能聚合站、跨端安装器与插件开发工具。

## 官方与精选

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `官方` | `Skill` | Anthropic 官方维护的 Agent Skills 集合，覆盖文档制作（docx/pdf/pptx）、前端设计与 Skill 编写参考。<br>`npx skills add anthropics/skills` | `通用` `Claude Code` | ⭐ 201.1k<br><sub>2026-11-16</sub> |
| **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** `官方` | `MCP` | Chrome DevTools 官方 MCP 服务器，让编码 Agent 直接操控、调试、性能分析与审查 Chrome 浏览器页面。<br>`npx -y chrome-devtools-mcp@latest` | `通用` | — |
| **[Claude Code Official Plugins](https://github.com/anthropics/claude-plugins-official)** `官方` | `Plugin` | Anthropic 官方维护的 Claude Code 插件市场与目录，提供官方工作流插件、子代理、技能、钩子及合作方 MCP 集成。<br>`/plugin marketplace add anthropics/claude-plugins-official` | `Claude Code` | — |
| **[Context7 MCP](https://github.com/upstash/context7)** `官方` | `MCP` | Upstash 官方 Context7 MCP 服务器，实时拉取最新、按版本匹配的开源库文档与代码示例并注入 Agent 上下文。<br>`npx -y @upstash/context7-mcp` | `通用` | — |
| **[FastMCP](https://github.com/PrefectHQ/fastmcp)** `官方` | `工具` | Python 生态主流 MCP 开发框架，用于快速构建生产级 Model Context Protocol 服务器与客户端。 | `通用` | — |
| **[Google Agent Skills](https://github.com/google/skills)** `官方` | `Skill` | Google 官方 Agent Skills 仓库，覆盖 Google Cloud 与各类 Google 开发者技术栈的标准技能。 | `通用` `Gemini CLI` `Claude Code` | — |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `官方` | `MCP` | Model Context Protocol 官方参考服务器合集，提供文件系统、Git、数据库与网页接入等标准集成范例。 | `通用` | — |
| **[OpenAI Skills Catalog](https://github.com/openai/skills)** `官方` | `Skill` | OpenAI 官方维护的 Agent Skills 目录，为 Codex 及遵循开放标准的 Agent 提供精选可复用技能。 | `Codex` `通用` | — |
| **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `官方` | `MCP` | 微软官方 Playwright MCP 服务器，让 Agent 通过结构化无障碍树直接操控浏览器完成测试与网页自动化。<br>`npx @playwright/mcp@latest` | `通用` | — |
| **[Hyperframes](https://github.com/heygen-com/hyperframes)** `官方` | `Plugin` | HeyGen 官方开源的 AI 视频编辑插件与 MCP 工具集，支持用 HTML 编写动效并渲染输出 MP4。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 90.9k<br><sub>2026-11-27</sub> |
| **[Cloudflare Security Audit Skill](https://github.com/cloudflare/security-audit-skill)** `官方` | `Skill` | Cloudflare 官方出品的多阶段安全审计技能，可生成经独立验证的机器可读漏洞报告。 | `通用` | ⭐ 78.9k<br><sub>2026-09-14</sub> |
| **[Open Code Review](https://github.com/alibaba/open-code-review)** `官方` | `工具` | 阿里巴巴开源的混合架构代码审查工具，结合确定性规则流水线与大模型 Agent 实现行级精准评审。 | `通用` | ⭐ 56.7k<br><sub>2026-11-26</sub> |
| **[Agent Browser](https://github.com/vercel-labs/agent-browser)** `官方` | `工具` | Vercel 官方推出的面向 AI Agent 的无头浏览器自动化命令行工具与配套技能。 | `通用` | ⭐ 54.2k<br><sub>2026-11-26</sub> |
| **[Obsidian Skills](https://github.com/obsidianmd/obsidian-skills)** `官方` | `Skill` | Obsidian 官方 Agent 技能包，让 AI 熟练操作 Obsidian 笔记库、Markdown、Bases 与 JSON Canvas。 | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 54.0k<br><sub>2026-11-26</sub> |
| **[Vercel Skills CLI](https://github.com/vercel-labs/skills)** `官方` | `工具` | Vercel 官方开源的跨端 Agent 技能管理工具（npx skills），用于检索、安装与管理技能包。 | `通用` | ⭐ 41.0k<br><sub>2026-11-27</sub> |
| **[Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)** `官方` | `Skill` | Vercel 官方维护的 Agent 技能集合，涵盖 React 最佳实践、Web 设计规范与部署流程。 | `通用` | ⭐ 35.0k<br><sub>2026-11-20</sub> |
| **[Video Use](https://github.com/browser-use/video-use)** `官方` | `Skill` | Browser Use 官方推出的 Agent 视频编辑技能，赋能编码 Agent 以程序化方式剪辑与处理视频。 | `通用` | ⭐ 31.6k<br><sub>2026-10-08</sub> |
| **[DESIGN.md](https://github.com/google-labs-code/design.md)** `官方` | `工具` | Google Labs 官方推出的 DESIGN.md 格式规范与配套工具，让编码 Agent 持久理解项目设计系统。 | `通用` | ⭐ 29.2k<br><sub>2026-11-18</sub> |
| **[SkillSpector](https://github.com/NVIDIA/SkillSpector)** `官方` | `工具` | NVIDIA 官方开源的 Agent 技能安全扫描器，在安装前检测提示词注入、数据窃取与供应链风险。 | `Claude Code` `Codex` | ⭐ 27.8k<br><sub>2026-11-25</sub> |
| **[Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance)** `官方` | `Skill` | Google Chrome 官方维护的现代 Web 开发指南技能集，让编码 Agent 紧跟最新 Web 标准与最佳实践。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 26.7k<br><sub>2026-11-23</sub> |

_当前仅展示前 20 条（共 152 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 编码与工程

_代码开发、重构、测试、调试、代码审查与 Git 工作流。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Context7 MCP](https://github.com/upstash/context7)** `官方` | `MCP` | Upstash 官方 Context7 MCP 服务器，实时拉取最新、按版本匹配的开源库文档与代码示例并注入 Agent 上下文。<br>`npx -y @upstash/context7-mcp` | `通用` | — |
| **[OpenAI Skills Catalog](https://github.com/openai/skills)** `官方` | `Skill` | OpenAI 官方维护的 Agent Skills 目录，为 Codex 及遵循开放标准的 Agent 提供精选可复用技能。 | `Codex` `通用` | — |
| **[Open Code Review](https://github.com/alibaba/open-code-review)** `官方` | `工具` | 阿里巴巴开源的混合架构代码审查工具，结合确定性规则流水线与大模型 Agent 实现行级精准评审。 | `通用` | ⭐ 56.7k<br><sub>2026-11-26</sub> |
| **[Agent Browser](https://github.com/vercel-labs/agent-browser)** `官方` | `工具` | Vercel 官方推出的面向 AI Agent 的无头浏览器自动化命令行工具与配套技能。 | `通用` | ⭐ 54.2k<br><sub>2026-11-26</sub> |
| **[Elephant Goldfish Model](https://github.com/google/elephant-goldfish-model)** `官方` | `Plugin` | Google 官方开源的规范驱动开发插件，支持借助编码 Agent 进行软件架构设计与结构化评审。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+3` | ⭐ 23.2k<br><sub>2026-11-25</sub> |
| **[Browser Harness](https://github.com/browser-use/browser-harness)** `官方` | `工具` | Browser Use 官方浏览器控制桥接工具，让编码 Agent 直接操作你本地已登录的 Chrome 浏览器。 | `Claude Code` `Codex` `Cursor` | ⭐ 19.3k<br><sub>2026-11-26</sub> |
| **[MiniMax Agent Skills](https://github.com/MiniMax-AI/skills)** `官方` | `Skill` | MiniMax 官方维护的 AI Agent 技能与多端插件集合，适用于主流编码与效率工作流。 | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 13.9k<br><sub>2026-11-10</sub> |
| **[Android Agent Skills](https://github.com/android/skills)** `官方` | `Skill` | Android 官方维护的 Agent 技能集合，覆盖 Jetpack Compose、构建系统、测试、性能优化、安全及多端适配。 | `通用` `Claude Code` `Codex` | ⭐ 10.8k<br><sub>2026-11-23</sub> |
| **[HumanLayer Skills](https://github.com/humanlayer/skills)** `官方` | `Skill` | HumanLayer 官方开源的 Agent 技能与插件集，覆盖代码库调研、方案规划与工程实现工作流。 | `Claude Code` `通用` | ⭐ 6.0k<br><sub>2026-11-01</sub> |
| **[Expo Agent Skills](https://github.com/expo/skills)** `官方` | `Skill` | Expo 官方维护的 AI Agent 技能集合，助力构建、配置并使用 EAS 发布 React Native 移动应用。 | `通用` `Claude Code` | ⭐ 4.2k<br><sub>2026-11-26</sub> |
| **[Laravel Boost](https://github.com/laravel/boost)** `官方` | `MCP` | Laravel 官方 MCP 服务器，为 AI 辅助本地 Laravel 开发提供框架上下文与专用工具。 | `通用` | ⭐ 3.7k<br><sub>2026-11-25</sub> |
| **[Vue 3 Agent Skills](https://github.com/vuejs-ai/skills)** `官方` | `Skill` | Vue 官方组织维护的 Vue 3 开发技能集，为 AI Agent 提供规范的组合式 API 与组件开发指导。 | `通用` | ⭐ 3.4k<br><sub>2026-10-23</sub> |
| **[Stripe AI](https://github.com/stripe/ai)** `官方` | `Plugin` | Stripe 官方 AI 开发套件，集成 Agent 工具包、MCP 服务、多端插件与技能，助力构建支付与商业化工作流。 | `通用` | ⭐ 2.1k<br><sub>2026-11-25</sub> |
| **[Callstack React Native Agent Skills](https://github.com/callstackincubator/agent-skills)** `官方` | `Skill` | Callstack 官方推出的 React Native Agent 技能集，涵盖移动端架构优化、性能调优与工程最佳实践。 | `通用` | ⭐ 1.7k<br><sub>2026-10-08</sub> |
| **[ast-grep Agent Skill](https://github.com/ast-grep/agent-skill)** `官方` | `Skill` | ast-grep 官方 Agent 技能，用于基于抽象语法树的结构化代码检索与重构。 | `通用` | ⭐ 914<br><sub>2026-11-04</sub> |
| **[MiniMax mcode-stack](https://github.com/MiniMax-AI/mcode-stack)** `官方` | `Skill` | MiniMax Code 团队开源的内部工程工作流与 Agent Skills 技能栈。 | `Claude Code` `通用` | ⭐ 748<br><sub>2026-11-11</sub> |
| **[Resend Agent Skills](https://github.com/resend/resend-skills)** `官方` | `Skill` | Resend 官方 Agent 技能集，辅助智能体集成邮件发送与接收功能。 | `通用` | ⭐ 220<br><sub>2026-11-19</sub> |
| **[Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit)** `官方` | `Plugin` | Sanity 官方 Agent 工具包，集成技能、规则、命令与 MCP 支持以助力 Sanity CMS 开发。 | `通用` | ⭐ 201<br><sub>2026-11-25</sub> |
| **[Capgo Capacitor Skills](https://github.com/Cap-go/capgo-skills)** `官方` | `Skill` | Capgo 官方 Capacitor 技能包，涵盖版本升级、原生插件、移动端测试、安全与发布部署。 | `Claude Code` `通用` | — |
| **[Code Graph MCP](https://github.com/diffbot/mcp-code-graph)** `官方` | `MCP` | 用于代码库知识图谱分析、依赖追踪与架构可视化的 MCP 服务器。 | `通用` | — |

_当前仅展示前 20 条（共 129 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 前端与设计

_UI 开发、设计系统、浏览器自动化、视觉审查与 Figma 集成。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)** `官方` | `MCP` | Chrome DevTools 官方 MCP 服务器，让编码 Agent 直接操控、调试、性能分析与审查 Chrome 浏览器页面。<br>`npx -y chrome-devtools-mcp@latest` | `通用` | — |
| **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** `官方` | `MCP` | 微软官方 Playwright MCP 服务器，让 Agent 通过结构化无障碍树直接操控浏览器完成测试与网页自动化。<br>`npx @playwright/mcp@latest` | `通用` | — |
| **[Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)** `官方` | `Skill` | Vercel 官方维护的 Agent 技能集合，涵盖 React 最佳实践、Web 设计规范与部署流程。 | `通用` | ⭐ 35.0k<br><sub>2026-11-20</sub> |
| **[DESIGN.md](https://github.com/google-labs-code/design.md)** `官方` | `工具` | Google Labs 官方推出的 DESIGN.md 格式规范与配套工具，让编码 Agent 持久理解项目设计系统。 | `通用` | ⭐ 29.2k<br><sub>2026-11-18</sub> |
| **[Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance)** `官方` | `Skill` | Google Chrome 官方维护的现代 Web 开发指南技能集，让编码 Agent 紧跟最新 Web 标准与最佳实践。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 26.7k<br><sub>2026-11-23</sub> |
| **[GSAP Skills](https://github.com/greensock/gsap-skills)** `官方` | `Skill` | GSAP 官方推出的 AI 技能集，指导编码 Agent 正确使用 GreenSock 动画模式与各类插件。 | `Claude Code` `Cursor` `Gemini CLI` | ⭐ 19.1k<br><sub>2026-07-29</sub> |
| **[Playwright CLI](https://github.com/microsoft/playwright-cli)** `官方` | `工具` | Playwright 官方命令行工具与 Agent 技能，支持录制浏览器操作、生成测试代码、检查选择器与截图。 | `通用` `Claude Code` | ⭐ 15.5k<br><sub>2026-11-24</sub> |
| **[Google Stitch Skills](https://github.com/google-labs-code/stitch-skills)** `官方` | `Skill` | Google Labs 官方提供的开放标准 Agent Skills 库，配合 Stitch MCP 服务完成界面设计与前端开发工作流。 | `通用` `Antigravity` `Gemini CLI` `Claude Code` `+1` | ⭐ 13.3k<br><sub>2026-11-24</sub> |
| **[Diffusion Studio Lottie](https://github.com/diffusionstudio/lottie)** `官方` | `Skill` | Diffusion Studio 官方技能，支持使用 Claude Code 或 Codex 生成并预览生产级 Lottie 矢量动画。 | `Claude Code` `Codex` `通用` | ⭐ 5.8k<br><sub>2026-07-25</sub> |
| **[LottieFiles Motion Design Skill](https://github.com/LottieFiles/motion-design-skill)** `官方` | `Skill` | LottieFiles 官方动效设计技能，将时间节奏、缓动曲线、编排及经典动画原则应用于 UI 动效。 | `通用` | ⭐ 3.8k<br><sub>2026-11-23</sub> |
| **[Angular Official Skills](https://github.com/angular/skills)** `官方` | `Skill` | Angular 官方 Agent 技能集，涵盖新项目搭建与现代 Angular 开发最佳实践。 | `通用` | ⭐ 736<br><sub>2026-11-25</sub> |
| **[Sleek Design Agent Skills](https://github.com/sleekdotdesign/agent-skills)** `官方` | `Skill` | Sleek 官方 Agent 技能，通过 REST API 创建和编辑移动应用界面设计并导出截图与 HTML。 | `通用` | ⭐ 603<br><sub>2026-10-05</sub> |
| **[Svelte Official MCP](https://github.com/sveltejs/ai-tools)** `官方` | `MCP` | Svelte 官方 MCP 服务器与 AI 开发工具集，助力 Svelte 与 SvelteKit 应用开发。 | `通用` | ⭐ 345<br><sub>2026-11-26</sub> |
| **[Ant Design Official Skill](https://github.com/ant-design/antd-skill)** `官方` | `Skill` | Ant Design 官方 Agent 技能，辅助智能体按规范使用 Ant Design 组件库构建 React 界面。 | `通用` | ⭐ 142<br><sub>2026-03-27</sub> |
| **[AccessLint Official Skills](https://github.com/AccessLint/skills)** `官方` | `Skill` | AccessLint 官方无障碍审计 Agent 技能集，用于自动化检测并修复 Web 无障碍问题。 | `Claude Code` | ⭐ 126<br><sub>2026-08-25</sub> |
| **[Feature-Sliced Design Skills](https://github.com/feature-sliced/skills)** `官方` | `Skill` | Feature-Sliced Design（FSD）v2.1 官方 Agent 技能，指导前端项目按 FSD 架构规范组织与重构代码。 | `通用` | ⭐ 121<br><sub>2026-10-11</sub> |
| **[21st.dev Agent Elements](https://github.com/21st-dev/agent-elements)** `官方` | `Skill` | 21st.dev 官方 Agent UI 元素技能与组件工具集，用于构建 AI 原生前端界面。 | `通用` | ⭐ 111<br><sub>2026-04-24</sub> |
| **[Gesso Design Critique Skills](https://github.com/Gesso-Build/skills)** `官方` | `Skill` | Gesso 官方前端设计审查技能与确定性 HTML/CSS 检测工具，提供 73 项去模板化规则与自动修复。 | `Claude Code` | ⭐ 95<br><sub>2026-10-27</sub> |
| **[Lombiq Tailwind CSS v4 Skills](https://github.com/Lombiq/Tailwind-Agent-Skills)** `官方` | `Skill` | Lombiq 官方发布的 Tailwind CSS v4 本地索引文档技能，为 AI 编程代理提供精准样式参考。 | `通用` | ⭐ 80<br><sub>2026-04-09</sub> |
| **[Astrolicious Agent Skills](https://github.com/astrolicious/agent-skills)** `官方` | `Skill` | Astrolicious 官方 Astro 生态 Agent 技能集，助力智能体高效开发与维护 Astro Web 项目。 | `通用` | ⭐ 13<br><sub>2026-03-20</sub> |

_当前仅展示前 20 条（共 123 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 云与运维

_部署、容器、可观测性、数据库与云平台集成。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Google Agent Skills](https://github.com/google/skills)** `官方` | `Skill` | Google 官方 Agent Skills 仓库，覆盖 Google Cloud 与各类 Google 开发者技术栈的标准技能。 | `通用` `Gemini CLI` `Claude Code` | — |
| **[Google Agents CLI](https://github.com/google/agents-cli)** `官方` | `工具` | Google 官方推出的命令行工具与技能集，帮助编码助手基于 ADK 在 Google Cloud 上构建、评估与部署 AI Agent。 | `通用` `Claude Code` `Gemini CLI` | ⭐ 6.4k<br><sub>2026-11-24</sub> |
| **[Cloudflare Skills](https://github.com/cloudflare/skills)** `官方` | `Skill` | Cloudflare 官方 Agent 技能集，指导 AI 助手基于 Cloudflare Workers 及开发者平台进行构建与部署。 | `通用` | ⭐ 3.5k<br><sub>2026-11-25</sub> |
| **[Supabase Agent Skills](https://github.com/supabase/agent-skills)** `官方` | `Skill` | Supabase 官方 Agent 技能集，帮助 AI 编程助手遵循 Postgres、认证、RLS 与边缘函数最佳实践。 | `通用` | ⭐ 3.1k<br><sub>2026-11-12</sub> |
| **[Firebase Agent Skills](https://github.com/firebase/agent-skills)** `官方` | `Skill` | Firebase 官方 Agent 技能集，辅助智能体完成 Firebase 后端构建、配置与部署。 | `通用` | ⭐ 531<br><sub>2026-11-09</sub> |
| **[Neo4j Agent Skills](https://github.com/neo4j/agent-skills)** `官方` | `Skill` | Neo4j 官方 Agent 技能包，涵盖 Cypher 查询编写、图数据建模与 Neo4j 应用开发。 | `Claude Code` `Codex` `Gemini CLI` `通用` | ⭐ 122<br><sub>2026-11-26</sub> |
| **[Prisma Official Skills](https://github.com/prisma/skills)** `官方` | `Skill` | Prisma 官方 Agent 技能集，涵盖 Prisma ORM 配置、Client API、Prisma Postgres 与 v7 升级迁移。 | `通用` | ⭐ 80<br><sub>2026-11-26</sub> |
| **[Cybrix Deploy Skills](https://github.com/cybrixcc/cybrix-skills)** `官方` | `Skill` | Cybrix 官方自动部署与托管技能包，支持在 Claude Code 中一键完成构建与上线发布。 | `Claude Code` | ⭐ 50<br><sub>2026-05-06</sub> |
| **[Cloud Run MCP](https://github.com/GoogleCloudPlatform/cloud-run-mcp)** `官方` | `MCP` | Google Cloud 官方 Cloud Run MCP 服务器，支持 AI Agent 一键构建、部署并管理云端容器服务。<br>`npx -y @google-cloud/cloud-run-mcp` | `通用` | — |
| **[DBHub MCP](https://github.com/bytebase/dbhub)** `官方` | `MCP` | Bytebase 开源的通用数据库 MCP 服务器，节省上下文 Token，支持 PostgreSQL、MySQL、SQL Server、Oracle 与 SQLite。<br>`npx -y @bytebase/dbhub` | `通用` | — |
| **[FinOps MCP](https://github.com/getnable/finopsmcp)** `官方` | `MCP` | 面向云成本治理的无头 FinOps MCP 服务，为 AI Agent 提供云账单分析与资源成本优化能力。 | `通用` | — |
| **[Firefly MCP](https://github.com/gofireflyio/firefly-mcp)** `官方` | `MCP` | Firefly 官方 MCP 服务器，支持 AI Agent 盘点云资产、检测配置漂移并生成基础设施即代码（IaC）。 | `通用` | — |
| **[HashiCorp Agent Skills](https://github.com/hashicorp/agent-skills)** `官方` | `Skill` | HashiCorp 官方维护的 Agent 技能集，面向 Terraform 工作流与基础设施自动化。 | `Claude Code` `通用` | — |
| **[LaunchDarkly MCP Server](https://github.com/launchdarkly/mcp-server)** `官方` | `MCP` | LaunchDarkly 官方 MCP 服务器，支持 AI Agent 查询、创建与管理 Feature Flags 及灰度发布规则。 | `通用` | — |
| **[Mailtrap Skills](https://github.com/mailtrap/mailtrap-skills)** `官方` | `Skill` | Mailtrap 官方技能包，支持邮件发送、沙箱测试、域名配置与联系人管理。 | `Claude Code` `通用` | — |
| **[MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server)** `官方` | `MCP` | MongoDB 官方 MCP 服务器，支持 AI Agent 查询集合、分析数据结构并管理 MongoDB Atlas 集群。<br>`npx -y mongodb-mcp-server` | `通用` | — |
| **[Neon Postgres Skills](https://github.com/neondatabase/postgres-skills)** `官方` | `Skill` | Neon 官方 PostgreSQL 技能包，涵盖表结构设计、索引策略、查询优化、数据库迁移及常见避坑指南。 | `通用` `Claude Code` | — |
| **[PostgreSQL AI Guide](https://github.com/timescale/pg-aiguide)** `官方` | `Plugin` | Timescale 官方 PostgreSQL MCP 与 Claude 插件，提供权威 Postgres 技能、版本文档与查询最佳实践。 | `Claude Code` `通用` | — |
| **[Pydantic Logfire MCP](https://github.com/pydantic/logfire-mcp)** `官方` | `MCP` | Pydantic 官方 Logfire MCP 服务器，支持 AI Agent 查询 OpenTelemetry 链路追踪、异常日志与线上指标。<br>`uvx logfire-mcp` | `通用` | — |
| **[Qdrant Skills](https://github.com/qdrant/skills)** `官方` | `Skill` | Qdrant 官方 Agent 技能包，涵盖向量检索操作、性能调优、部署升级与 SDK 开发。 | `Claude Code` `通用` | — |

_当前仅展示前 20 条（共 37 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 编排与多代理协作

_多 Agent 协同、规划流水线、记忆层与工作流编排。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Honcho](https://github.com/plastic-labs/honcho)** `官方` | `工具` | Plastic Labs 官方有状态代理记忆库与 CLI/MCP 工具套件，为多端编码代理提供持续学习与记忆能力。 | `通用` `Claude Code` `Cursor` `DeepSeek Harness` | ⭐ 8.3k<br><sub>2026-11-25</sub> |
| **[MemSearch](https://github.com/zilliztech/memsearch)** `官方` | `Plugin` | Zilliz 官方出品的跨 Agent 持久化统一记忆层插件，结合本地 Markdown 与 Milvus 向量检索。 | `Claude Code` `Codex` `DeepSeek Harness` `通用` | ⭐ 3.0k<br><sub>2026-11-27</sub> |
| **[Claude Brain (Memvid)](https://github.com/memvid/claude-brain)** `官方` | `Plugin` | 基于 Rust 内核的便携式记忆插件，将 Claude Code 长期记忆压缩进单个可 Git 管理的 .mv2 文件。 | `Claude Code` | ⭐ 585<br><sub>2026-01-19</sub> |
| **[Corezoid AI Plugin](https://github.com/corezoid/corezoid-ai-plugin)** `官方` | `Plugin` | Corezoid 官方 AI 插件，提供流程编排技能、Schema、模板手册与 MCP 参考。 | `Claude Code` `Codex` | ⭐ 74<br><sub>2026-11-13</sub> |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | 面向编码 Agent 的结构化工程工作流插件，内置方案设计、严格 TDD、系统化调试与子代理驱动开发。<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 327.5k<br><sub>2026-11-26</sub> |
| **[pstack Multi-Harness Plugin](https://github.com/michael-denyer/pstack-claude)** | `Plugin` | 将 Cursor 工程工作流原语移植到 Claude Code、Codex、Copilot、Gemini CLI、OpenCode 与 Antigravity 的跨端插件。 | `Claude Code` `Codex` `GitHub Copilot` `Gemini CLI` `+3` | ⭐ 4.9k<br><sub>2026-11-26</sub> |
| **[Token Optimizer](https://github.com/alexgreensh/token-optimizer)** | `Plugin` | 定位冗余 Token 消耗、优化上下文压缩并防止长会话上下文质量衰减的插件。 | `Claude Code` `Codex` | ⭐ 3.2k<br><sub>2026-11-26</sub> |
| **[LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness)** | `Plugin` | 面向长周期桌面与命令行任务的 Agent 运行时插件，支持刷新上下文执行、持久化状态校验与独立审计。 | `Claude Code` `Codex` `DeepSeek Harness` | ⭐ 1.9k<br><sub>2026-11-11</sub> |
| **[Oh My ClaudeCode](https://github.com/Yeachan-Heo/oh-my-claudecode)** | `Plugin` | 面向团队协作的 Claude Code 多 Agent 编排插件，整合专业子代理、技能、Hooks 与并行执行工作流。 | `Claude Code` | — |
| **[Vibe Kanban](https://github.com/BloopAI/vibe-kanban)** | `工具` | 可视化看板编排工具，支持同时调度、监控并评审 Claude Code、Codex 等多个编码 Agent 的并行任务。 | `Claude Code` `Codex` `通用` | — |
| **[Everything Claude Code (ECC)](https://github.com/affaan-m/ECC)** | `Plugin` | 集成技能、直觉记忆、安全规范与研究驱动工作流的 Agent 运行框架性能优化套件。 | `Claude Code` `Codex` `OpenCode` `Cursor` `+2` | ⭐ 311.3k<br><sub>2026-11-23</sub> |
| **[Claude Mem](https://github.com/thedotmack/claude-mem)** | `Plugin` | 跨会话持久化记忆插件，自动捕获并压缩 Agent 操作上下文，在后续会话中按需注入。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | ⭐ 120.0k<br><sub>2026-11-26</sub> |
| **[Oh My OpenAgent (OmO)](https://github.com/code-yeongyu/oh-my-openagent)** | `Plugin` | 面向 OpenCode 与主流编码工具的多 Agent 编排插件与运行框架，强化复杂任务协同工作流。 | `OpenCode` `Claude Code` `Codex` `Cursor` `+1` | ⭐ 71.1k<br><sub>2026-11-27</sub> |
| **[Context Mode](https://github.com/mksglu/context-mode)** | `Plugin` | 零遥测本地上下文优化插件，利用沙箱与 SQLite FTS5 检索将冗长工具输出隔离在上下文窗口之外。 | `Claude Code` `Codex` `Gemini CLI` `GitHub Copilot` `+2` | ⭐ 34.5k<br><sub>2026-11-26</sub> |
| **[Planning with Files](https://github.com/OthmanAdi/planning-with-files)** | `Skill` | 仿 Manus 模式的持久化 Markdown 规划技能，支持长任务断点恢复、防上下文腐化与完成校验。 | `通用` | ⭐ 28.3k<br><sub>2026-11-25</sub> |
| **[Context Engineering Skills](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)** | `Skill` | 面向上下文工程、多智能体架构设计与生产级 Agent 系统调优的专项技能集合。 | `通用` | ⭐ 18.4k<br><sub>2026-11-27</sub> |
| **[Plannotator](https://github.com/backnotprop/plannotator)** | `工具` | 人机协同工作台，用于审阅 Agent 规划、批注代码变更、团队共享并将反馈一键回传给编码代理。 | `Claude Code` `Codex` `OpenCode` `通用` | ⭐ 15.3k<br><sub>2026-11-27</sub> |
| **[memU](https://github.com/NevaMind-AI/memU)** | `工具` | 跨 Agent 个人记忆层与框架，提供 MCP 与 Skill 支持，为各类编码及通用代理提供持久化上下文记忆。 | `通用` `Claude Code` | ⭐ 14.6k<br><sub>2026-11-26</sub> |
| **[Trail Code](https://github.com/trailhq/Trail-Code)** | `MCP` | 为团队编码代理提供共享代码知识图谱与历史决策记忆的 MCP 服务。 | `Claude Code` `Cursor` `Codex` `通用` | ⭐ 11.5k<br><sub>2026-11-26</sub> |
| **[AutoHarness](https://github.com/tigerless-labs/autoharness)** | `Plugin` | 具备自学习能力的 Claude Code 插件，结合钩子、子代理与工具从真实任务中自动沉淀可复用技能。 | `Claude Code` | ⭐ 10.2k<br><sub>2026-11-12</sub> |

_当前仅展示前 20 条（共 102 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 数据、研究与知识

_联网检索、文档处理、数据分析、学术研究与知识库。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[ktx Analytics Context](https://github.com/Kaelio/ktx)** `官方` | `Skill` | 面向数据分析 Agent 的可执行语义上下文层，确保模型按真实业务口径准确查询分析型数据库。 | `Claude Code` `Codex` `通用` | ⭐ 1.6k<br><sub>2026-11-18</sub> |
| **[Oxylabs Agent Skills](https://github.com/oxylabs/agent-skills)** `官方` | `Skill` | Oxylabs 官方 Agent 技能包，支持结构化网页采集、浏览器渲染与实时搜索数据提取。 | `Claude Code` `通用` | ⭐ 868<br><sub>2026-11-26</sub> |
| **[Posit Data Science Skills](https://github.com/posit-dev/skills)** `官方` | `Plugin` | Posit 官方维护的数据科学技能包，面向 R、Python、Quarto 与 Shiny 可复现分析工作流。 | `Claude Code` `通用` | ⭐ 576<br><sub>2026-11-12</sub> |
| **[AntV Chart Visualization Skills](https://github.com/antvis/chart-visualization-skills)** `官方` | `Skill` | AntV 官方数据可视化 Agent 技能集，助力智能体将数据转化为清晰的图表视觉语言。 | `通用` | ⭐ 544<br><sub>2026-09-22</sub> |
| **[Tavily Agent Skills](https://github.com/tavily-ai/skills)** `官方` | `Skill` | Tavily 官方 Agent 技能集，提供实时网页搜索、内容抓取与在线研究能力。 | `通用` | ⭐ 497<br><sub>2026-11-24</sub> |
| **[Accoil Product Tracking Skills](https://github.com/Accoil/product-tracking-skills)** `官方` | `Skill` | Accoil 官方产品埋点分析技能集，可扫描代码库、设计埋点方案并生成多平台分析埋点代码。 | `通用` | ⭐ 47<br><sub>2026-10-20</sub> |
| **[Alpaca MCP Server](https://github.com/alpacahq/alpaca-mcp-server)** `官方` | `MCP` | Alpaca 官方 MCP 服务器，支持 AI Agent 获取实时行情数据并操作股票、ETF、期权与加密货币交易接口。<br>`uvx alpaca-mcp-server` | `通用` | — |
| **[Apify Awesome Skills](https://github.com/apify/awesome-skills)** `官方` | `Skill` | Apify 官方数据采集技能集，支持抓取 Reddit 帖子、评论、社区及各类网页结构化数据。 | `Claude Code` `通用` | — |
| **[Apify MCP Server](https://github.com/apify/apify-mcp-server)** `官方` | `MCP` | Apify 官方 MCP 服务器，让 Agent 直接调用数千个 Apify Actors 完成网页抓取、社媒与电商数据采集。<br>`npx -y @apify/actors-mcp-server` | `通用` | — |
| **[CoinPaprika Skills](https://github.com/coinpaprika/skills)** `官方` | `Skill` | 免 API Key 的加密货币与 DEX 行情技能包，覆盖 1.2 万+ 代币、350+ 交易所与 36 条公链实时数据。 | `Claude Code` `通用` | — |
| **[DataLikers MCP](https://github.com/subzeroid/datalikers-mcp)** `官方` | `MCP` | 轻量级 stdio MCP 服务器，通过 DataLikers API 提供 29 个 Instagram 与 TikTok 社媒数据采集工具。 | `通用` | — |
| **[Firecrawl Claude Plugin](https://github.com/firecrawl/firecrawl-claude-plugin)** `官方` | `Plugin` | Firecrawl 官方 Claude Code 插件，支持实时联网搜索、抓取技术文档与抽取结构化网页数据。 | `Claude Code` | — |
| **[Firecrawl MCP Server](https://github.com/firecrawl/firecrawl-mcp-server)** `官方` | `MCP` | Firecrawl 官方 MCP 服务器，为 AI Agent 提供联网搜索、网页抓取、整站爬取与结构化数据抽取能力。<br>`npx -y firecrawl-mcp` | `通用` | — |
| **[Gaffa for AI](https://github.com/GaffaAI/gaffa-for-ai)** `官方` | `Skill` | Gaffa 官方网页数据采集技能包，用于编写、调试和运行爬虫、网页抓取、截图与浏览器自动化任务。 | `通用` `Claude Code` | — |
| **[Hugging Face Skills](https://github.com/huggingface/skills)** `官方` | `Skill` | 让编码助手查询 Hugging Face Hub 数据集、微调模型并运行模型评估的技能集。<br>`hf skills add huggingface-datasets` | `Claude Code` `Codex` `Cursor` `Gemini CLI` | — |
| **[Live Tennis API MCP](https://github.com/livetennisapi/livetennisapi-mcp)** `官方` | `MCP` | Live Tennis API 官方 MCP 服务器，为 AI Agent 提供实时网球比分、ATP/WTA 排名与赛事统计数据。 | `通用` | — |
| **[MarkItDown](https://github.com/microsoft/markitdown)** `官方` | `MCP` | 微软官方文件转 Markdown 工具及 MCP 服务，支持将 PDF、Office 文档、图片、音频等转换为适合大模型处理的 Markdown。 | `通用` | — |
| **[Microsoft Learn MCP](https://github.com/MicrosoftDocs/mcp)** `官方` | `MCP` | 微软官方 Learn MCP 服务器与 CLI，为 AI Agent 提供最新的 Microsoft、Azure 与 .NET 官方技术文档检索。 | `通用` | — |
| **[Milvus Agent Skill](https://github.com/zilliztech/milvus-skill)** `官方` | `Skill` | Zilliz 官方 Milvus 向量数据库技能，指导 Agent 使用 pymilvus 构建索引、检索与 RAG 应用。 | `通用` `Claude Code` | — |
| **[Recommerce Skills](https://github.com/budna-marketplace/recommerce)** `官方` | `Skill` | 面向二手与新品比价检索的 Agent 技能包，支持跨平台商品检索与价格对比。 | `通用` `Claude Code` | — |

_当前仅展示前 20 条（共 108 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 效率与协作

_文档、项目管理、日历、即时通讯与日常办公协作。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `官方` | `Skill` | Anthropic 官方维护的 Agent Skills 集合，覆盖文档制作（docx/pdf/pptx）、前端设计与 Skill 编写参考。<br>`npx skills add anthropics/skills` | `通用` `Claude Code` | ⭐ 201.1k<br><sub>2026-11-16</sub> |
| **[Obsidian Skills](https://github.com/obsidianmd/obsidian-skills)** `官方` | `Skill` | Obsidian 官方 Agent 技能包，让 AI 熟练操作 Obsidian 笔记库、Markdown、Bases 与 JSON Canvas。 | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 54.0k<br><sub>2026-11-26</sub> |
| **[Jane Street Agent Skills](https://github.com/janestreet/agent_skills)** `官方` | `Skill` | Jane Street 官方开源的 Agent 技能仓库，包含用于启发式教学的苏格拉底导师技能。 | `通用` | ⭐ 12.0k<br><sub>2026-11-17</sub> |
| **[Beezi Cost & Usage Plugin](https://github.com/Beezi-AI/beezi-claude-plugin)** `官方` | `Plugin` | Beezi 官方插件，用于追踪 Claude Code 单会话成本、生成个人用量摘要并一键起草工单。 | `Claude Code` | ⭐ 63<br><sub>2026-11-20</sub> |
| **[Airtable Agent Skills](https://github.com/Airtable/skills)** `官方` | `Skill` | Airtable 官方 Agent 技能包，辅助操作 Airtable 数据表结构、自动化流程与扩展开发。 | `通用` `Claude Code` | — |
| **[Colibird Local MCP](https://github.com/colibird-ai/local-mcp-releases)** `官方` | `MCP` | 本地桌面端 MCP 服务器，将 Claude、ChatGPT 与 Cursor 连接到 Mac 和 Windows 原生文件与工作流。 | `通用` | — |
| **[monday.com MCP](https://github.com/mondaycom/mcp)** `官方` | `MCP` | monday.com 官方 MCP 服务器，让 AI Agent 安全读写项目看板、任务条目与团队协作流程。 | `通用` | — |
| **[Notion MCP Server](https://github.com/makenotion/notion-mcp-server)** `官方` | `MCP` | Notion 官方 MCP 服务器，支持 AI Agent 检索、读取、创建并更新 Notion 页面与数据库。<br>`npx -y @notionhq/notion-mcp-server` | `通用` | — |
| **[WorkorAI Agent Kit](https://github.com/work0r-ai/agent-kit)** `官方` | `Skill` | WorkorAI 官方人才市场技能包，通过 MCP 支持求职检索、职位发布及带透明匹配解释的候选人评估。 | `通用` `Claude Code` | — |
| **[Career Ops](https://github.com/career-ops-hq/career-ops)** | `Plugin` | 本地运行的 AI 求职辅助插件与工具集，支持岗位匹配评分、ATS 简历定制、面试准备与投递追踪。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | ⭐ 85.1k<br><sub>2026-11-26</sub> |
| **[PPT Master](https://github.com/hugohe3/ppt-master)** | `Skill` | 将文档或主题转化为原生 PowerPoint 演示文稿的 Agent 技能，支持图表、动画、配音旁白与自定义模板。 | `通用` | ⭐ 80.5k<br><sub>2026-11-20</sub> |
| **[AI Job Search](https://github.com/ai-job-search-dev/ai-job-search)** | `工具` | 基于 Claude Code 的本地求职自动化工具集，涵盖职位抓取、简历定制、求职信撰写与面试准备。 | `Claude Code` | ⭐ 73.6k<br><sub>2026-11-26</sub> |
| **[I Have ADHD](https://github.com/ayghri/i-have-adhd)** | `Skill` | 优化编码 Agent 回复结构的实用技能，避免冗长铺垫，以清晰直观的 ADHD 友好格式直出重点。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | ⭐ 62.6k<br><sub>2026-11-25</sub> |
| **[Book to Skill](https://github.com/virgiliojr94/book-to-skill)** | `Skill` | 将技术书籍 PDF 自动提取并转化为结构化、可复用 Claude Code 技能的转换工具与技能。 | `Claude Code` | ⭐ 39.1k<br><sub>2026-11-24</sub> |
| **[Nuwa Skill](https://github.com/alchaincyf/nuwa-skill)** | `Skill` | 女娲元技能，可将特定人物的心智模型、决策启发式与表达 DNA 蒸馏为可复用的 Agent 技能。 | `Claude Code` `Codex` `Cursor` `DeepSeek Harness` | ⭐ 39.1k<br><sub>2026-11-21</sub> |
| **[Text to CAD](https://github.com/earthtojake/text-to-cad)** | `Plugin` | 支持主流编码 Agent 的文本生成 CAD 插件与 MCP 套件，可用自然语言设计实体模型并导出工程文件。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | ⭐ 27.6k<br><sub>2026-11-27</sub> |
| **[Distilly](https://github.com/titanwings/distilly)** | `Skill` | 思维与工作流蒸馏技能工具，可将他人经验与思考方式提炼为任意 Agent 可复用的技能包。 | `Claude Code` `Codex` | ⭐ 26.9k<br><sub>2026-10-13</sub> |
| **[Khazix Skills](https://github.com/KKKKhazix/khazix-skills)** | `Skill` | 数字生命卡兹克开源的实用 Agent 技能合集，包含目标拆解、环境清理、热点分析与写作辅助。 | `通用` | ⭐ 22.6k<br><sub>2026-11-18</sub> |
| **[Prompt Master](https://github.com/nidhinjs/prompt-master)** | `Skill` | 专注于为各类 AI 工具编写高精度提示词并保留完整上下文的 Claude 提示词工程技能。 | `Claude Code` | ⭐ 16.4k<br><sub>2026-10-22</sub> |
| **[Garden Skills](https://github.com/ConardLi/garden-skills)** | `Skill` | ConardLi 开源的实用 Agent 技能合集，覆盖网页设计、知识检索与图像生成等场景。 | `Claude Code` | ⭐ 15.9k<br><sub>2026-11-19</sub> |

_当前仅展示前 20 条（共 109 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 内容与营销

_写作、SEO、社媒发布、音视频制作与增长营销。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Hyperframes](https://github.com/heygen-com/hyperframes)** `官方` | `Plugin` | HeyGen 官方开源的 AI 视频编辑插件与 MCP 工具集，支持用 HTML 编写动效并渲染输出 MP4。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 90.9k<br><sub>2026-11-27</sub> |
| **[Video Use](https://github.com/browser-use/video-use)** `官方` | `Skill` | Browser Use 官方推出的 Agent 视频编辑技能，赋能编码 Agent 以程序化方式剪辑与处理视频。 | `通用` | ⭐ 31.6k<br><sub>2026-10-08</sub> |
| **[Social Media Research Skills](https://github.com/ScrapeCreators/social-media-research-skills)** `官方` | `Skill` | 跨平台社媒调研技能包，支持爆款挖掘、评论区洞察、竞品拆解与广告库分析，覆盖 TikTok、IG、YouTube 与 X。 | `Claude Code` `Cursor` `通用` | ⭐ 8.1k<br><sub>2026-08-26</sub> |
| **[Remotion Agent Skills](https://github.com/remotion-dev/skills)** `官方` | `Skill` | Remotion 官方维护的 Agent 技能集合，用于以 React 代码化方式创作和渲染编程视频。 | `通用` | ⭐ 8.1k<br><sub>2026-11-24</sub> |
| **[Scenario Creative Media Skills](https://github.com/scenario-labs/skills)** `官方` | `Skill` | 生产级多模态创作技能包，自动匹配生图/视频/音频/3D 模型、预估成本并保持角色与品牌风格一致。 | `Claude Code` `Codex` `通用` | ⭐ 4.1k<br><sub>2026-11-26</sub> |
| **[Higgsfield AI Skills](https://github.com/higgsfield-ai/skills)** `官方` | `Skill` | Higgsfield AI 官方技能集，覆盖品牌视觉套件、产品摄影、口播/解说视频及 YouTube 封面图生成。 | `Claude Code` `Codex` `Cursor` | ⭐ 2.1k<br><sub>2026-11-05</sub> |
| **[SE Ranking SEO Skills](https://github.com/seranking/seo-skills)** `官方` | `Skill` | SE Ranking 官方 SEO 技能包，支持内容简报、AI 搜索声量分析、站点审计、外链差距与关键词聚类。 | `Claude Code` `通用` | ⭐ 217<br><sub>2026-11-25</sub> |
| **[Akii SEO & AI Search Optimizer](https://github.com/akii-technologies-ltd/akii-seo-ai-search-optimizer)** `官方` | `Plugin` | 开源的 SEO/AEO/GEO 优化插件，包含 12 个技能、5 个子代理与 3 个命令，覆盖站点审计、Schema 与内容规划。 | `Claude Code` | ⭐ 80<br><sub>2026-11-13</sub> |
| **[Bria AI Image Skill](https://github.com/Bria-AI/bria-skill)** `官方` | `Skill` | 通过 Bria.ai API 实现文生图、自然语言修图与背景抠图，输出透明背景 PNG。 | `Claude Code` `通用` | — |
| **[deAPI Media Skills](https://github.com/deapi-ai/claude-code-skills)** `官方` | `Skill` | 基于 deAPI 的全能 AI 媒体技能包，支持 Flux 生图、语音合成、音视频转录、OCR、视频生成与超分。 | `Claude Code` `Cursor` `Windsurf` `通用` | — |
| **[HeyGen Agent Skills](https://github.com/heygen-com/skills)** `官方` | `Skill` | HeyGen 官方 AI Agent 技能包，支持通过 HeyGen v3 API 完成数字人创建与自动化视频制作。 | `通用` `Claude Code` | — |
| **[Linked API LinkedIn Skills](https://github.com/Linked-API/linkedin-skills)** `官方` | `Skill` | 基于 Linked API 的领英自动化技能，支持档案检索、消息触达、人脉管理、发帖与 Sales Navigator。 | `Claude Code` `通用` | — |
| **[Microsoft Clarity MCP](https://github.com/microsoft/clarity-mcp-server)** `官方` | `MCP` | 微软官方 Clarity MCP 服务器，用于查询网站用户体验分析、流量指标与行为洞察数据。<br>`npx -y @microsoft/clarity-mcp-server` | `通用` | — |
| **[NoizAI TTS Skills](https://github.com/NoizAI/skills)** `官方` | `Skill` | 拟人化语音合成（TTS）工作流技能，支持本地与云端引擎、风格预设及应用交付脚本。 | `Claude Code` `通用` | — |
| **[Sonilo Video-to-Music](https://github.com/sonilo-ai/skills)** `官方` | `Skill` | 使用 Sonilo 为成片视频自动创作贴合节奏的原创配乐。 | `Claude Code` `通用` | — |
| **[VideoDB Skills](https://github.com/video-db/skills)** `官方` | `Skill` | VideoDB 官方音视频技能包，支持音视频入库、语义检索、剪辑、生成与流式播放。 | `Claude Code` `通用` | — |
| **[Claude Blog](https://github.com/AgriciDaniel/claude-blog)** | `Plugin` | 开源博客创作插件，内置 32 个技能、30 个 /blog 命令与 5 个子代理，支持调研、百分制评审与五重交付门禁。 | `Claude Code` | ⭐ 2.9k<br><sub>2026-11-03</sub> |
| **[Humanizer](https://github.com/blader/humanizer)** | `Skill` | 用于识别并消除文本中典型 AI 写作痕迹、让表达更自然贴近真人风格的写作技能。 | `Claude Code` `Codex` `Cursor` | ⭐ 74.0k<br><sub>2026-11-19</sub> |
| **[Marketing Skills](https://github.com/coreyhaines31/marketingskills)** | `Skill` | 面向 AI Agent 的营销技能合集，覆盖转化率优化、文案撰写、SEO、数据分析与增长工程。 | `Claude Code` `Codex` | ⭐ 62.9k<br><sub>2026-11-26</sub> |
| **[Claude SEO](https://github.com/AgriciDaniel/claude-seo)** | `Plugin` | 集成 26 个子技能与 19 个子代理的 Claude Code 全栈 SEO 插件，覆盖技术 SEO、GEO 优化与报表生成。 | `Claude Code` | ⭐ 32.7k<br><sub>2026-11-26</sub> |

_当前仅展示前 20 条（共 176 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 安全与合规

_漏洞扫描、敏感信息检测、安全护栏与合规审计。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Cloudflare Security Audit Skill](https://github.com/cloudflare/security-audit-skill)** `官方` | `Skill` | Cloudflare 官方出品的多阶段安全审计技能，可生成经独立验证的机器可读漏洞报告。 | `通用` | ⭐ 78.9k<br><sub>2026-09-14</sub> |
| **[SkillSpector](https://github.com/NVIDIA/SkillSpector)** `官方` | `工具` | NVIDIA 官方开源的 Agent 技能安全扫描器，在安装前检测提示词注入、数据窃取与供应链风险。 | `Claude Code` `Codex` | ⭐ 27.8k<br><sub>2026-11-25</sub> |
| **[QuillShield Audit Skills](https://github.com/quillai-network/quillshield_skills)** `官方` | `Skill` | 结构化智能合约安全审计技能包，支持状态不变量推断、闪电贷/预言机攻击链建模与漏洞评级。 | `Claude Code` `通用` | ⭐ 136<br><sub>2026-11-24</sub> |
| **[Claude Code Security Review](https://github.com/anthropics/claude-code-security-review)** `官方` | `工具` | Anthropic 官方安全审计 GitHub Action，使用 Claude 自动分析 Pull Request 中的潜在安全漏洞。 | `Claude Code` | — |
| **[Codacy MCP Server](https://github.com/codacy/codacy-mcp-server)** `官方` | `MCP` | Codacy 官方 MCP 服务器，为 AI Agent 提供自动化代码质量检测、安全漏洞扫描与覆盖率分析。<br>`npx -y @codacy/codacy-mcp` | `通用` | — |
| **[Internet Court Skill](https://github.com/internet-court/internet-court-skill)** `官方` | `Skill` | 面向 Agent 间交易的开放信任层技能，覆盖自然语言授权、ERC-7710 权限委托、x402 支付、托管与争议仲裁。 | `通用` `Claude Code` | — |
| **[Trail of Bits Security Skills](https://github.com/trailofbits/skills)** `官方` | `Skill` | Trail of Bits 开源的安全审计技能集，涵盖 CodeQL/Semgrep 静态分析、变体分析与修复验证。 | `Claude Code` `通用` | — |
| **[Claude BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** | `Plugin` | 面向漏洞赏金与外部红队测试的技能插件包，内置 85 个安全技能、16 个命令与 24 类 681 个公开漏洞模式。 | `Claude Code` | ⭐ 25.2k<br><sub>2026-11-27</sub> |
| **[Claude Red](https://github.com/SnailSploit/Claude-Red)** | `Skill` | 结构化进攻性安全技能库，以 SKILL.md 形式为 Claude 提供专业红队测试与渗透方法论。 | `Claude Code` `通用` | ⭐ 11.6k<br><sub>2026-11-17</sub> |
| **[Rea](https://github.com/morluto/rea)** | `Plugin` | 面向 AI Agent 的逆向工程插件、MCP 服务与技能套件，支持从应用行为到原生二进制的深度分析。 | `Claude Code` `Codex` `Cursor` `DeepSeek Harness` | ⭐ 479.8k<br><sub>2026-11-27</sub> |
| **[Claude Guardian](https://github.com/DUNHKpcc/Claude-Guardian)** | `Skill` | Claude 账号防封与风控自检技能，全面评估设备、网络环境与使用习惯以降低封号风险。 | `Claude Code` `Codex` | ⭐ 2.3k<br><sub>2026-11-20</sub> |
| **[CC Safety Net](https://github.com/kenryu42/cc-safety-net)** | `Plugin` | 工具调用前安全拦截插件，实时阻断破坏性 Git、文件系统删除与敏感文件读取命令。 | `Claude Code` `Codex` `Antigravity` | ⭐ 2.1k<br><sub>2026-11-27</sub> |
| **[OpenOSINT](https://github.com/OpenOSINT/OpenOSINT)** | `Plugin` | 免 API Key、默认被动侦察的开源 OSINT 插件与 MCP，整合 21 个公开情报与攻击面分析工具。 | `Claude Code` `通用` | ⭐ 2.0k<br><sub>2026-11-15</sub> |
| **[GRC Compliance Skills](https://github.com/Sushegaad/Claude-Skills-Governance-Risk-and-Compliance)** | `Skill` | 覆盖 ISO 27001、SOC 2、FedRAMP、GDPR、HIPAA、PCI DSS 与欧盟 AI 法案的企业安全合规（GRC）技能库。 | `Claude Code` `通用` | ⭐ 1.1k<br><sub>2026-11-15</sub> |
| **[Safe Anything](https://github.com/erkamyaman/safe-anything)** | `Plugin` | 基于 Rust 的高速安全扫描插件与 MCP，自动检测 XSS、SQL 注入、密钥泄露、依赖漏洞与 Agent 配置风险。 | `Claude Code` `Codex` `Cursor` | ⭐ 805<br><sub>2026-11-27</sub> |
| **[CyberSecurity Operations Skills](https://github.com/Masriyan/Claude-Code-CyberSecurity-Skill)** | `Skill` | 22 个网络安全实战技能，涵盖攻防演练、蓝队运营、逆向工程、威胁狩猎与威胁情报分析。 | `Claude Code` `通用` | ⭐ 614<br><sub>2026-10-20</sub> |
| **[VN Law Check](https://github.com/mhfed/vn-law-check)** | `Skill` | 面向越南数据保护、电商、网络安全与 AI 法规的网站合规审计技能。 | `Claude Code` `Cursor` `GitHub Copilot` `Windsurf` | ⭐ 515<br><sub>2026-11-25</sub> |
| **[Writ Governance Runtime](https://github.com/infinri/Writ)** | `Plugin` | Claude Code 工程治理运行时插件，在工具调用期强制执行工作流门禁并跨会话沉淀架构决策溯源。 | `Claude Code` | ⭐ 332<br><sub>2026-11-21</sub> |
| **[codeArbiter](https://github.com/arbiterForge/codeArbiter)** | `Plugin` | 面向 Claude Code 与 Codex CLI 的开源安全治理与强制门禁插件，防范高危操作与违规变更。 | `Claude Code` `Codex` | ⭐ 155<br><sub>2026-11-27</sub> |
| **[Vigilo Web3 Security](https://github.com/BitterSecurity/Vigilo)** | `Plugin` | 面向 Web3 智能合约漏洞赏金与审计竞赛的攻防型安全分析插件。 | `Claude Code` `OpenCode` | ⭐ 76<br><sub>2026-10-26</sub> |

_当前仅展示前 20 条（共 29 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 插件市场与开发工具

_插件市场、技能聚合站、跨端安装器与插件开发工具。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Claude Code Official Plugins](https://github.com/anthropics/claude-plugins-official)** `官方` | `Plugin` | Anthropic 官方维护的 Claude Code 插件市场与目录，提供官方工作流插件、子代理、技能、钩子及合作方 MCP 集成。<br>`/plugin marketplace add anthropics/claude-plugins-official` | `Claude Code` | — |
| **[FastMCP](https://github.com/PrefectHQ/fastmcp)** `官方` | `工具` | Python 生态主流 MCP 开发框架，用于快速构建生产级 Model Context Protocol 服务器与客户端。 | `通用` | — |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `官方` | `MCP` | Model Context Protocol 官方参考服务器合集，提供文件系统、Git、数据库与网页接入等标准集成范例。 | `通用` | — |
| **[Vercel Skills CLI](https://github.com/vercel-labs/skills)** `官方` | `工具` | Vercel 官方开源的跨端 Agent 技能管理工具（npx skills），用于检索、安装与管理技能包。 | `通用` | ⭐ 41.0k<br><sub>2026-11-27</sub> |
| **[SkillOpt](https://github.com/microsoft/SkillOpt)** `官方` | `工具` | 微软开源的文本空间技能优化器，通过轨迹驱动迭代与验证门控自动训练可部署的 Agent 技能。 | `通用` | ⭐ 19.3k<br><sub>2026-11-23</sub> |
| **[mcp-use](https://github.com/mcp-use/mcp-use)** `官方` | `MCP` | 官方全栈 MCP 开发框架与 SDK，用于构建 MCP 服务端、客户端、可视化调试器及交互式 MCP 应用。 | `通用` `Claude Code` | ⭐ 11.0k<br><sub>2026-11-27</sub> |
| **[NVIDIA SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** `官方` | `工具` | NVIDIA 官方多层 Agent 技能与插件评估框架，提供安全扫描、兼容性检查、合成数据集与实测基准。 | `通用` `Claude Code` `Codex` | ⭐ 4.6k<br><sub>2026-11-26</sub> |
| **[hf-skills](https://github.com/huggingface/hf-skills)** `官方` | `工具` | 独立命令行工具，可查找 Hugging Face 技能，并将其安装或更新到项目或用户级技能目录。 | `Claude Code` `Codex` `Cursor` `OpenCode` | — |
| **[WebMCP](https://github.com/webmachinelearning/webmcp)** `官方` | `工具` | W3C WebML 社区组标准规范，让网页原生向浏览器侧 AI Agent 暴露结构化 MCP 工具接口。 | `通用` | — |
| **[Claude Code Templates](https://github.com/davila7/claude-code-templates)** | `工具` | 开源的 Claude Code 组件注册表与命令行工具，支持一键检索安装子代理、指令、技能、钩子与 MCP。 | `Claude Code` | ⭐ 34.2k<br><sub>2026-11-26</sub> |
| **[Skill Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)** | `工具` | 将文档网站、GitHub 仓库和 PDF 自动转换为 AI Agent 技能的工具与 MCP 服务，内置冲突检测。 | `通用` `Claude Code` `Codex` | ⭐ 15.4k<br><sub>2026-11-16</sub> |
| **[Darwin Skill Evolver](https://github.com/alchaincyf/darwin-skill)** | `Skill` | 受 Autoresearch 启发的 Skill 自主进化系统，通过评估、改进、测试与保留/回滚闭环持续优化技能表现。 | `Claude Code` `Codex` `通用` | ⭐ 7.1k<br><sub>2026-11-18</sub> |
| **[One Skill to Rule Them All](https://github.com/rebelytics/one-skill-to-rule-them-all)** | `Skill` | 基于会话纠错与重复工作流的元技能，在人工审批前生成带依据的技能更新与新技能候选。 | `通用` | ⭐ 4.0k<br><sub>2026-11-25</sub> |
| **[YAO Meta Skill](https://github.com/yaojingang/yao-meta-skill)** | `工具` | 用于构建可复用 Agent 技能的工程化、评测、安全治理与跨平台可移植性框架。 | `通用` | ⭐ 2.7k<br><sub>2026-11-09</sub> |
| **[Claude Code Tools](https://github.com/pchalasani/claude-code-tools)** | `工具` | 面向 Claude Code 与 Codex CLI 的实用效率工具集，提供快速会话检索、tmux 辅助及终端命令行工具。 | `Claude Code` `Codex` | ⭐ 2.0k<br><sub>2026-11-27</sub> |
| **[Agent Vision Toolkit](https://github.com/Anionex/agent-vision-toolkit)** | `工具` | 为纯文本大模型与命令行 Agent 提供看图能力的视觉工具箱与技能，支持多图问答、长图 OCR、UI 还原与 GUI 自动化。 | `Claude Code` `Codex` `OpenCode` `DeepSeek Harness` | ⭐ 1.3k<br><sub>2026-10-13</sub> |
| **[SkillForge](https://github.com/tripleyak/SkillForge)** | `Skill` | 证据驱动的 Agent Skill 创作与验证技能，内置基线测试生成、回归评测与生态健康检查。 | `Claude Code` `Codex` `通用` | ⭐ 920<br><sub>2026-07-29</sub> |
| **[Claude Code Skill Factory](https://github.com/alirezarezvani/claude-code-skill-factory)** | `工具` | 用于批量构建和部署生产级 Claude 技能、智能体、斜杠命令与提示词的开源工具包。 | `Claude Code` | ⭐ 914<br><sub>2025-11-12</sub> |
| **[Claude Skill Registry](https://github.com/majiayu000/claude-skill-registry)** | `工具` | 可检索的 Claude Code 技能注册表与目录，提供溯源指南与结构化索引元数据。 | `Claude Code` | ⭐ 754<br><sub>2026-11-26</sub> |
| **[Awesome OpenClaw Skills](https://github.com/sundial-org/awesome-openclaw-skills)** | `Skill` | 精选热门且实用的 OpenClaw Agent 技能合集。 | `通用` | ⭐ 676<br><sub>2026-03-07</sub> |

_当前仅展示前 20 条（共 44 条）。完整列表请浏览 [Plugins](docs/plugins.zh.md) · [Skills](docs/skills.zh.md) · [MCP](docs/mcp.zh.md) · [Subagents](docs/subagents.zh.md) · [工具](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)。_

## 参与贡献

想推荐优秀的 Plugin、Skill、MCP 或 Subagent？只需在 `data/<类型>/` 下新增一个 YAML 文件并提 PR，或直接[提交推荐 Issue](.github/ISSUE_TEMPLATE/submit-plugin.yml)。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

