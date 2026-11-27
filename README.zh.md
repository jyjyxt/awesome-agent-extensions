<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->

# Awesome Agents

> 精选跨平台 AI Agent 插件、Skills、MCP Servers、Subagents 与扩展管理工具（支持 Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Antigravity 等）。

[English](README.md) | **简体中文**

![Awesome Agents 目录结构图](assets/intro/awesome-agents-zh.gif)

### Claude Code Plugins

Claude Code 插件是可安装的扩展包，可将 Skills、斜杠命令、Subagents、Hooks、MCP 服务及完整工作流组合在一起。适合需要复用和分发一套 Agent 工作流的场景。

浏览 [全部插件 (70)](docs/plugins.zh.md)，使用 `/plugin install <owner>/<repo>` 安装单个插件，或使用 `/plugin marketplace add <owner>/<repo>` 添加插件市场。

## 快速入口

- [Plugins（复合插件） (70)](docs/plugins.zh.md) · [Skills（技能包） (484)](docs/skills.zh.md) · [MCP / Connectors (82)](docs/mcp.zh.md) · [Subagents（子代理） (27)](docs/subagents.zh.md) · [扩展管理工具 (71)](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)

<details>
<summary>常见工具插件安装速查</summary>

- **Claude Code Plugin**: `/plugin install <owner>/<repo>` 或 `/plugin marketplace add <owner>/<repo>`
- **跨端 Agent Skills**: `npx skills add <owner>/<repo>`
- **MCP Server**: 按各项目文档配置到对应 Agent 的 MCP 设置（如 `mcpServers` JSON）

</details>

## 按场景目录

- [官方与精选 (129)](#官方与精选)
- [编码与工程 (99)](#编码与工程) — 代码开发、重构、测试、调试、代码审查与 Git 工作流。
- [前端与设计 (100)](#前端与设计) — UI 开发、设计系统、浏览器自动化、视觉审查与 Figma 集成。
- [云与运维 (31)](#云与运维) — 部署、容器、可观测性、数据库与云平台集成。
- [编排与多代理协作 (58)](#编排与多代理协作) — 多 Agent 协同、规划流水线、记忆层与工作流编排。
- [数据、研究与知识 (81)](#数据研究与知识) — 联网检索、文档处理、数据分析、学术研究与知识库。
- [效率与协作 (75)](#效率与协作) — 文档、项目管理、日历、即时通讯与日常办公协作。
- [内容与营销 (113)](#内容与营销) — 写作、SEO、社媒发布、音视频制作与增长营销。
- [安全与合规 (16)](#安全与合规) — 漏洞扫描、敏感信息检测、安全护栏与合规审计。
- [插件市场与开发工具 (39)](#插件市场与开发工具) — 插件市场、技能聚合站、跨端安装器与插件开发工具。

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
| **[Elephant Goldfish Model](https://github.com/google/elephant-goldfish-model)** `官方` | `Plugin` | Google 官方开源的规范驱动开发插件，支持借助编码 Agent 进行软件架构设计与结构化评审。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+3` | ⭐ 23.2k<br><sub>2026-11-25</sub> |
| **[SkillOpt](https://github.com/microsoft/SkillOpt)** `官方` | `工具` | 微软开源的文本空间技能优化器，通过轨迹驱动迭代与验证门控自动训练可部署的 Agent 技能。 | `通用` | ⭐ 19.3k<br><sub>2026-11-23</sub> |
| **[Browser Harness](https://github.com/browser-use/browser-harness)** `官方` | `工具` | Browser Use 官方浏览器控制桥接工具，让编码 Agent 直接操作你本地已登录的 Chrome 浏览器。 | `Claude Code` `Codex` `Cursor` | ⭐ 19.3k<br><sub>2026-11-26</sub> |
| **[GSAP Skills](https://github.com/greensock/gsap-skills)** `官方` | `Skill` | GSAP 官方推出的 AI 技能集，指导编码 Agent 正确使用 GreenSock 动画模式与各类插件。 | `Claude Code` `Cursor` `Gemini CLI` | ⭐ 19.1k<br><sub>2026-07-29</sub> |
| **[Playwright CLI](https://github.com/microsoft/playwright-cli)** `官方` | `工具` | Playwright 官方命令行工具与 Agent 技能，支持录制浏览器操作、生成测试代码、检查选择器与截图。 | `通用` `Claude Code` | ⭐ 15.5k<br><sub>2026-11-24</sub> |
| **[MiniMax Agent Skills](https://github.com/MiniMax-AI/skills)** `官方` | `Skill` | MiniMax 官方维护的 AI Agent 技能与多端插件集合，适用于主流编码与效率工作流。 | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 13.9k<br><sub>2026-11-10</sub> |
| **[Google Stitch Skills](https://github.com/google-labs-code/stitch-skills)** `官方` | `Skill` | Google Labs 官方提供的开放标准 Agent Skills 库，配合 Stitch MCP 服务完成界面设计与前端开发工作流。 | `通用` `Antigravity` `Gemini CLI` `Claude Code` `+1` | ⭐ 13.3k<br><sub>2026-11-24</sub> |
| **[Jane Street Agent Skills](https://github.com/janestreet/agent_skills)** `官方` | `Skill` | Jane Street 官方开源的 Agent 技能仓库，包含用于启发式教学的苏格拉底导师技能。 | `通用` | ⭐ 12.0k<br><sub>2026-11-17</sub> |
| **[mcp-use](https://github.com/mcp-use/mcp-use)** `官方` | `MCP` | 官方全栈 MCP 开发框架与 SDK，用于构建 MCP 服务端、客户端、可视化调试器及交互式 MCP 应用。 | `通用` `Claude Code` | ⭐ 11.0k<br><sub>2026-11-27</sub> |
| **[Android Agent Skills](https://github.com/android/skills)** `官方` | `Skill` | Android 官方维护的 Agent 技能集合，覆盖 Jetpack Compose、构建系统、测试、性能优化、安全及多端适配。 | `通用` `Claude Code` `Codex` | ⭐ 10.8k<br><sub>2026-11-23</sub> |
| **[Honcho](https://github.com/plastic-labs/honcho)** `官方` | `工具` | Plastic Labs 官方有状态代理记忆库与 CLI/MCP 工具套件，为多端编码代理提供持续学习与记忆能力。 | `通用` `Claude Code` `Cursor` `DeepSeek Harness` | ⭐ 8.3k<br><sub>2026-11-25</sub> |
| **[Remotion Agent Skills](https://github.com/remotion-dev/skills)** `官方` | `Skill` | Remotion 官方维护的 Agent 技能集合，用于以 React 代码化方式创作和渲染编程视频。 | `通用` | ⭐ 8.1k<br><sub>2026-11-24</sub> |
| **[Google Agents CLI](https://github.com/google/agents-cli)** `官方` | `工具` | Google 官方推出的命令行工具与技能集，帮助编码助手基于 ADK 在 Google Cloud 上构建、评估与部署 AI Agent。 | `通用` `Claude Code` `Gemini CLI` | ⭐ 6.4k<br><sub>2026-11-24</sub> |
| **[HumanLayer Skills](https://github.com/humanlayer/skills)** `官方` | `Skill` | HumanLayer 官方开源的 Agent 技能与插件集，覆盖代码库调研、方案规划与工程实现工作流。 | `Claude Code` `通用` | ⭐ 6.0k<br><sub>2026-11-01</sub> |
| **[Diffusion Studio Lottie](https://github.com/diffusionstudio/lottie)** `官方` | `Skill` | Diffusion Studio 官方技能，支持使用 Claude Code 或 Codex 生成并预览生产级 Lottie 矢量动画。 | `Claude Code` `Codex` `通用` | ⭐ 5.8k<br><sub>2026-07-25</sub> |
| **[NVIDIA SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** `官方` | `工具` | NVIDIA 官方多层 Agent 技能与插件评估框架，提供安全扫描、兼容性检查、合成数据集与实测基准。 | `通用` `Claude Code` `Codex` | ⭐ 4.6k<br><sub>2026-11-26</sub> |
| **[Expo Agent Skills](https://github.com/expo/skills)** `官方` | `Skill` | Expo 官方维护的 AI Agent 技能集合，助力构建、配置并使用 EAS 发布 React Native 移动应用。 | `通用` `Claude Code` | ⭐ 4.2k<br><sub>2026-11-26</sub> |
| **[LottieFiles Motion Design Skill](https://github.com/LottieFiles/motion-design-skill)** `官方` | `Skill` | LottieFiles 官方动效设计技能，将时间节奏、缓动曲线、编排及经典动画原则应用于 UI 动效。 | `通用` | ⭐ 3.8k<br><sub>2026-11-23</sub> |
| **[Laravel Boost](https://github.com/laravel/boost)** `官方` | `MCP` | Laravel 官方 MCP 服务器，为 AI 辅助本地 Laravel 开发提供框架上下文与专用工具。 | `通用` | ⭐ 3.7k<br><sub>2026-11-25</sub> |
| **[Cloudflare Skills](https://github.com/cloudflare/skills)** `官方` | `Skill` | Cloudflare 官方 Agent 技能集，指导 AI 助手基于 Cloudflare Workers 及开发者平台进行构建与部署。 | `通用` | ⭐ 3.5k<br><sub>2026-11-25</sub> |
| **[Vue 3 Agent Skills](https://github.com/vuejs-ai/skills)** `官方` | `Skill` | Vue 官方组织维护的 Vue 3 开发技能集，为 AI Agent 提供规范的组合式 API 与组件开发指导。 | `通用` | ⭐ 3.4k<br><sub>2026-10-23</sub> |
| **[Supabase Agent Skills](https://github.com/supabase/agent-skills)** `官方` | `Skill` | Supabase 官方 Agent 技能集，帮助 AI 编程助手遵循 Postgres、认证、RLS 与边缘函数最佳实践。 | `通用` | ⭐ 3.1k<br><sub>2026-11-12</sub> |
| **[Stripe AI](https://github.com/stripe/ai)** `官方` | `Plugin` | Stripe 官方 AI 开发套件，集成 Agent 工具包、MCP 服务、多端插件与技能，助力构建支付与商业化工作流。 | `通用` | ⭐ 2.1k<br><sub>2026-11-25</sub> |
| **[Higgsfield AI Skills](https://github.com/higgsfield-ai/skills)** `官方` | `Skill` | Higgsfield AI 官方技能集，覆盖品牌视觉套件、产品摄影、口播/解说视频及 YouTube 封面图生成。 | `Claude Code` `Codex` `Cursor` | ⭐ 2.1k<br><sub>2026-11-05</sub> |
| **[Callstack React Native Agent Skills](https://github.com/callstackincubator/agent-skills)** `官方` | `Skill` | Callstack 官方推出的 React Native Agent 技能集，涵盖移动端架构优化、性能调优与工程最佳实践。 | `通用` | ⭐ 1.7k<br><sub>2026-10-08</sub> |
| **[ast-grep Agent Skill](https://github.com/ast-grep/agent-skill)** `官方` | `Skill` | ast-grep 官方 Agent 技能，用于基于抽象语法树的结构化代码检索与重构。 | `通用` | ⭐ 914<br><sub>2026-11-04</sub> |
| **[Angular Official Skills](https://github.com/angular/skills)** `官方` | `Skill` | Angular 官方 Agent 技能集，涵盖新项目搭建与现代 Angular 开发最佳实践。 | `通用` | ⭐ 736<br><sub>2026-11-25</sub> |
| **[Sleek Design Agent Skills](https://github.com/sleekdotdesign/agent-skills)** `官方` | `Skill` | Sleek 官方 Agent 技能，通过 REST API 创建和编辑移动应用界面设计并导出截图与 HTML。 | `通用` | ⭐ 603<br><sub>2026-10-05</sub> |
| **[AntV Chart Visualization Skills](https://github.com/antvis/chart-visualization-skills)** `官方` | `Skill` | AntV 官方数据可视化 Agent 技能集，助力智能体将数据转化为清晰的图表视觉语言。 | `通用` | ⭐ 544<br><sub>2026-09-22</sub> |
| **[Firebase Agent Skills](https://github.com/firebase/agent-skills)** `官方` | `Skill` | Firebase 官方 Agent 技能集，辅助智能体完成 Firebase 后端构建、配置与部署。 | `通用` | ⭐ 531<br><sub>2026-11-09</sub> |
| **[Tavily Agent Skills](https://github.com/tavily-ai/skills)** `官方` | `Skill` | Tavily 官方 Agent 技能集，提供实时网页搜索、内容抓取与在线研究能力。 | `通用` | ⭐ 497<br><sub>2026-11-24</sub> |
| **[Svelte Official MCP](https://github.com/sveltejs/ai-tools)** `官方` | `MCP` | Svelte 官方 MCP 服务器与 AI 开发工具集，助力 Svelte 与 SvelteKit 应用开发。 | `通用` | ⭐ 345<br><sub>2026-11-26</sub> |
| **[Resend Agent Skills](https://github.com/resend/resend-skills)** `官方` | `Skill` | Resend 官方 Agent 技能集，辅助智能体集成邮件发送与接收功能。 | `通用` | ⭐ 220<br><sub>2026-11-19</sub> |
| **[Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit)** `官方` | `Plugin` | Sanity 官方 Agent 工具包，集成技能、规则、命令与 MCP 支持以助力 Sanity CMS 开发。 | `通用` | ⭐ 201<br><sub>2026-11-25</sub> |
| **[Ant Design Official Skill](https://github.com/ant-design/antd-skill)** `官方` | `Skill` | Ant Design 官方 Agent 技能，辅助智能体按规范使用 Ant Design 组件库构建 React 界面。 | `通用` | ⭐ 142<br><sub>2026-03-27</sub> |
| **[AccessLint Official Skills](https://github.com/AccessLint/skills)** `官方` | `Skill` | AccessLint 官方无障碍审计 Agent 技能集，用于自动化检测并修复 Web 无障碍问题。 | `Claude Code` | ⭐ 126<br><sub>2026-08-25</sub> |
| **[Feature-Sliced Design Skills](https://github.com/feature-sliced/skills)** `官方` | `Skill` | Feature-Sliced Design（FSD）v2.1 官方 Agent 技能，指导前端项目按 FSD 架构规范组织与重构代码。 | `通用` | ⭐ 121<br><sub>2026-10-11</sub> |
| **[21st.dev Agent Elements](https://github.com/21st-dev/agent-elements)** `官方` | `Skill` | 21st.dev 官方 Agent UI 元素技能与组件工具集，用于构建 AI 原生前端界面。 | `通用` | ⭐ 111<br><sub>2026-04-24</sub> |
| **[Gesso Design Critique Skills](https://github.com/Gesso-Build/skills)** `官方` | `Skill` | Gesso 官方前端设计审查技能与确定性 HTML/CSS 检测工具，提供 73 项去模板化规则与自动修复。 | `Claude Code` | ⭐ 95<br><sub>2026-10-27</sub> |
| **[Lombiq Tailwind CSS v4 Skills](https://github.com/Lombiq/Tailwind-Agent-Skills)** `官方` | `Skill` | Lombiq 官方发布的 Tailwind CSS v4 本地索引文档技能，为 AI 编程代理提供精准样式参考。 | `通用` | ⭐ 80<br><sub>2026-04-09</sub> |
| **[Prisma Official Skills](https://github.com/prisma/skills)** `官方` | `Skill` | Prisma 官方 Agent 技能集，涵盖 Prisma ORM 配置、Client API、Prisma Postgres 与 v7 升级迁移。 | `通用` | ⭐ 80<br><sub>2026-11-26</sub> |
| **[Accoil Product Tracking Skills](https://github.com/Accoil/product-tracking-skills)** `官方` | `Skill` | Accoil 官方产品埋点分析技能集，可扫描代码库、设计埋点方案并生成多平台分析埋点代码。 | `通用` | ⭐ 47<br><sub>2026-10-20</sub> |
| **[Astrolicious Agent Skills](https://github.com/astrolicious/agent-skills)** `官方` | `Skill` | Astrolicious 官方 Astro 生态 Agent 技能集，助力智能体高效开发与维护 Astro Web 项目。 | `通用` | ⭐ 13<br><sub>2026-03-20</sub> |
| **[Airtable Agent Skills](https://github.com/Airtable/skills)** `官方` | `Skill` | Airtable 官方 Agent 技能包，辅助操作 Airtable 数据表结构、自动化流程与扩展开发。 | `通用` `Claude Code` | — |
| **[Alpaca MCP Server](https://github.com/alpacahq/alpaca-mcp-server)** `官方` | `MCP` | Alpaca 官方 MCP 服务器，支持 AI Agent 获取实时行情数据并操作股票、ETF、期权与加密货币交易接口。<br>`uvx alpaca-mcp-server` | `通用` | — |
| **[Apify Awesome Skills](https://github.com/apify/awesome-skills)** `官方` | `Skill` | Apify 官方数据采集技能集，支持抓取 Reddit 帖子、评论、社区及各类网页结构化数据。 | `Claude Code` `通用` | — |
| **[Apify MCP Server](https://github.com/apify/apify-mcp-server)** `官方` | `MCP` | Apify 官方 MCP 服务器，让 Agent 直接调用数千个 Apify Actors 完成网页抓取、社媒与电商数据采集。<br>`npx -y @apify/actors-mcp-server` | `通用` | — |
| **[Bria AI Image Skill](https://github.com/Bria-AI/bria-skill)** `官方` | `Skill` | 通过 Bria.ai API 实现文生图、自然语言修图与背景抠图，输出透明背景 PNG。 | `Claude Code` `通用` | — |
| **[Browser MCP](https://github.com/BrowserMCP/mcp)** `官方` | `MCP` | 结合浏览器插件的 MCP 服务器，让 AI Agent 复用本地浏览器登录态完成网页操作与自动化任务。<br>`npx -y @browsermcp/mcp@latest` | `通用` | — |
| **[BrowserAct Skills](https://github.com/browser-act/skills)** `官方` | `Skill` | BrowserAct 官方浏览器自动化技能集，支持复杂网页交互、数据采集与任务接管。 | `通用` `Claude Code` | — |
| **[Capgo Capacitor Skills](https://github.com/Cap-go/capgo-skills)** `官方` | `Skill` | Capgo 官方 Capacitor 技能包，涵盖版本升级、原生插件、移动端测试、安全与发布部署。 | `Claude Code` `通用` | — |
| **[Claude Code Security Review](https://github.com/anthropics/claude-code-security-review)** `官方` | `工具` | Anthropic 官方安全审计 GitHub Action，使用 Claude 自动分析 Pull Request 中的潜在安全漏洞。 | `Claude Code` | — |
| **[Cloud Run MCP](https://github.com/GoogleCloudPlatform/cloud-run-mcp)** `官方` | `MCP` | Google Cloud 官方 Cloud Run MCP 服务器，支持 AI Agent 一键构建、部署并管理云端容器服务。<br>`npx -y @google-cloud/cloud-run-mcp` | `通用` | — |
| **[Codacy MCP Server](https://github.com/codacy/codacy-mcp-server)** `官方` | `MCP` | Codacy 官方 MCP 服务器，为 AI Agent 提供自动化代码质量检测、安全漏洞扫描与覆盖率分析。<br>`npx -y @codacy/codacy-mcp` | `通用` | — |
| **[Code Graph MCP](https://github.com/diffbot/mcp-code-graph)** `官方` | `MCP` | 用于代码库知识图谱分析、依赖追踪与架构可视化的 MCP 服务器。 | `通用` | — |
| **[CoinPaprika Skills](https://github.com/coinpaprika/skills)** `官方` | `Skill` | 免 API Key 的加密货币与 DEX 行情技能包，覆盖 1.2 万+ 代币、350+ 交易所与 36 条公链实时数据。 | `Claude Code` `通用` | — |
| **[Colibird Local MCP](https://github.com/colibird-ai/local-mcp-releases)** `官方` | `MCP` | 本地桌面端 MCP 服务器，将 Claude、ChatGPT 与 Cursor 连接到 Mac 和 Windows 原生文件与工作流。 | `通用` | — |
| **[DataLikers MCP](https://github.com/subzeroid/datalikers-mcp)** `官方` | `MCP` | 轻量级 stdio MCP 服务器，通过 DataLikers API 提供 29 个 Instagram 与 TikTok 社媒数据采集工具。 | `通用` | — |
| **[DBHub MCP](https://github.com/bytebase/dbhub)** `官方` | `MCP` | Bytebase 开源的通用数据库 MCP 服务器，节省上下文 Token，支持 PostgreSQL、MySQL、SQL Server、Oracle 与 SQLite。<br>`npx -y @bytebase/dbhub` | `通用` | — |
| **[deAPI Media Skills](https://github.com/deapi-ai/claude-code-skills)** `官方` | `Skill` | 基于 deAPI 的全能 AI 媒体技能包，支持 Flux 生图、语音合成、音视频转录、OCR、视频生成与超分。 | `Claude Code` `Cursor` `Windsurf` `通用` | — |
| **[e2e Agent Skill](https://github.com/e2e-inc/e2e)** `官方` | `Skill` | e2e 智能端到端测试框架官方技能，支持在 Playwright 浏览器及 iOS/Android 设备上编写、运行与调试测试。 | `通用` `Claude Code` | — |
| **[FinOps MCP](https://github.com/getnable/finopsmcp)** `官方` | `MCP` | 面向云成本治理的无头 FinOps MCP 服务，为 AI Agent 提供云账单分析与资源成本优化能力。 | `通用` | — |
| **[Firecrawl Claude Plugin](https://github.com/firecrawl/firecrawl-claude-plugin)** `官方` | `Plugin` | Firecrawl 官方 Claude Code 插件，支持实时联网搜索、抓取技术文档与抽取结构化网页数据。 | `Claude Code` | — |
| **[Firecrawl MCP Server](https://github.com/firecrawl/firecrawl-mcp-server)** `官方` | `MCP` | Firecrawl 官方 MCP 服务器，为 AI Agent 提供联网搜索、网页抓取、整站爬取与结构化数据抽取能力。<br>`npx -y firecrawl-mcp` | `通用` | — |
| **[Firefly MCP](https://github.com/gofireflyio/firefly-mcp)** `官方` | `MCP` | Firefly 官方 MCP 服务器，支持 AI Agent 盘点云资产、检测配置漂移并生成基础设施即代码（IaC）。 | `通用` | — |
| **[Gaffa for AI](https://github.com/GaffaAI/gaffa-for-ai)** `官方` | `Skill` | Gaffa 官方网页数据采集技能包，用于编写、调试和运行爬虫、网页抓取、截图与浏览器自动化任务。 | `通用` `Claude Code` | — |
| **[HashiCorp Agent Skills](https://github.com/hashicorp/agent-skills)** `官方` | `Skill` | HashiCorp 官方维护的 Agent 技能集，面向 Terraform 工作流与基础设施自动化。 | `Claude Code` `通用` | — |
| **[HeyGen Agent Skills](https://github.com/heygen-com/skills)** `官方` | `Skill` | HeyGen 官方 AI Agent 技能包，支持通过 HeyGen v3 API 完成数字人创建与自动化视频制作。 | `通用` `Claude Code` | — |
| **[hf-skills](https://github.com/huggingface/hf-skills)** `官方` | `工具` | 独立命令行工具，可查找 Hugging Face 技能，并将其安装或更新到项目或用户级技能目录。 | `Claude Code` `Codex` `Cursor` `OpenCode` | — |
| **[Hugging Face Skills](https://github.com/huggingface/skills)** `官方` | `Skill` | 让编码助手查询 Hugging Face Hub 数据集、微调模型并运行模型评估的技能集。<br>`hf skills add huggingface-datasets` | `Claude Code` `Codex` `Cursor` `Gemini CLI` | — |
| **[Internet Court Skill](https://github.com/internet-court/internet-court-skill)** `官方` | `Skill` | 面向 Agent 间交易的开放信任层技能，覆盖自然语言授权、ERC-7710 权限委托、x402 支付、托管与争议仲裁。 | `通用` `Claude Code` | — |
| **[LaunchDarkly MCP Server](https://github.com/launchdarkly/mcp-server)** `官方` | `MCP` | LaunchDarkly 官方 MCP 服务器，支持 AI Agent 查询、创建与管理 Feature Flags 及灰度发布规则。 | `通用` | — |
| **[Linked API LinkedIn Skills](https://github.com/Linked-API/linkedin-skills)** `官方` | `Skill` | 基于 Linked API 的领英自动化技能，支持档案检索、消息触达、人脉管理、发帖与 Sales Navigator。 | `Claude Code` `通用` | — |
| **[Live Tennis API MCP](https://github.com/livetennisapi/livetennisapi-mcp)** `官方` | `MCP` | Live Tennis API 官方 MCP 服务器，为 AI Agent 提供实时网球比分、ATP/WTA 排名与赛事统计数据。 | `通用` | — |
| **[Mailtrap Skills](https://github.com/mailtrap/mailtrap-skills)** `官方` | `Skill` | Mailtrap 官方技能包，支持邮件发送、沙箱测试、域名配置与联系人管理。 | `Claude Code` `通用` | — |
| **[MarkItDown](https://github.com/microsoft/markitdown)** `官方` | `MCP` | 微软官方文件转 Markdown 工具及 MCP 服务，支持将 PDF、Office 文档、图片、音频等转换为适合大模型处理的 Markdown。 | `通用` | — |
| **[Microsoft Clarity MCP](https://github.com/microsoft/clarity-mcp-server)** `官方` | `MCP` | 微软官方 Clarity MCP 服务器，用于查询网站用户体验分析、流量指标与行为洞察数据。<br>`npx -y @microsoft/clarity-mcp-server` | `通用` | — |
| **[Microsoft Learn MCP](https://github.com/MicrosoftDocs/mcp)** `官方` | `MCP` | 微软官方 Learn MCP 服务器与 CLI，为 AI Agent 提供最新的 Microsoft、Azure 与 .NET 官方技术文档检索。 | `通用` | — |
| **[Milvus Agent Skill](https://github.com/zilliztech/milvus-skill)** `官方` | `Skill` | Zilliz 官方 Milvus 向量数据库技能，指导 Agent 使用 pymilvus 构建索引、检索与 RAG 应用。 | `通用` `Claude Code` | — |
| **[monday.com MCP](https://github.com/mondaycom/mcp)** `官方` | `MCP` | monday.com 官方 MCP 服务器，让 AI Agent 安全读写项目看板、任务条目与团队协作流程。 | `通用` | — |
| **[MongoDB MCP Server](https://github.com/mongodb-js/mongodb-mcp-server)** `官方` | `MCP` | MongoDB 官方 MCP 服务器，支持 AI Agent 查询集合、分析数据结构并管理 MongoDB Atlas 集群。<br>`npx -y mongodb-mcp-server` | `通用` | — |
| **[Neon Postgres Skills](https://github.com/neondatabase/postgres-skills)** `官方` | `Skill` | Neon 官方 PostgreSQL 技能包，涵盖表结构设计、索引策略、查询优化、数据库迁移及常见避坑指南。 | `通用` `Claude Code` | — |
| **[NoizAI TTS Skills](https://github.com/NoizAI/skills)** `官方` | `Skill` | 拟人化语音合成（TTS）工作流技能，支持本地与云端引擎、风格预设及应用交付脚本。 | `Claude Code` `通用` | — |
| **[Notion MCP Server](https://github.com/makenotion/notion-mcp-server)** `官方` | `MCP` | Notion 官方 MCP 服务器，支持 AI Agent 检索、读取、创建并更新 Notion 页面与数据库。<br>`npx -y @notionhq/notion-mcp-server` | `通用` | — |
| **[PostgreSQL AI Guide](https://github.com/timescale/pg-aiguide)** `官方` | `Plugin` | Timescale 官方 PostgreSQL MCP 与 Claude 插件，提供权威 Postgres 技能、版本文档与查询最佳实践。 | `Claude Code` `通用` | — |
| **[Pydantic Logfire MCP](https://github.com/pydantic/logfire-mcp)** `官方` | `MCP` | Pydantic 官方 Logfire MCP 服务器，支持 AI Agent 查询 OpenTelemetry 链路追踪、异常日志与线上指标。<br>`uvx logfire-mcp` | `通用` | — |
| **[Qdrant Skills](https://github.com/qdrant/skills)** `官方` | `Skill` | Qdrant 官方 Agent 技能包，涵盖向量检索操作、性能调优、部署升级与 SDK 开发。 | `Claude Code` `通用` | — |
| **[Railway Agent Skills](https://github.com/railwayapp/railway-skills)** `官方` | `Skill` | Railway 官方 Agent 技能包，支持创建服务、管理环境变量、查看日志与一键部署云端应用。 | `通用` `Claude Code` | — |
| **[Recommerce Skills](https://github.com/budna-marketplace/recommerce)** `官方` | `Skill` | 面向二手与新品比价检索的 Agent 技能包，支持跨平台商品检索与价格对比。 | `通用` `Claude Code` | — |
| **[Redis MCP Server](https://github.com/redis/mcp-redis)** `官方` | `MCP` | Redis 官方 MCP 服务器，为 AI Agent 提供自然语言查询、缓存管理与 Redis 数据检视接口。 | `通用` | — |
| **[Render Agent Skills](https://github.com/render-oss/skills)** `官方` | `Skill` | Render 官方 Agent 技能包，用于在 Render 平台上部署、配置与排查 Web 服务和托管数据库。 | `通用` `Claude Code` | — |
| **[Rootly MCP Server](https://github.com/rootlyhq/rootly-mcp-server)** `官方` | `MCP` | Rootly 官方 MCP 服务器，支持 AI Agent 排查线上故障、查询事件时间线并辅助 SRE 应急响应。 | `通用` | — |
| **[Screenpipe](https://github.com/screenpipe/screenpipe)** `官方` | `工具` | 本地优先的屏幕与音频记录引擎，配套技能可检索本地会议、屏幕与界面上下文。 | `Claude Code` `通用` | — |
| **[Sentry Agentic Toolkit](https://github.com/getsentry/toolkit)** `官方` | `Plugin` | Sentry 官方 Agent 工具套件，融合 MCP 与技能用于排查线上报错、堆栈追踪与回归定位。 | `通用` `Claude Code` | — |
| **[shadcn/ui Skill](https://github.com/shadcn-ui/ui)** `官方` | `Skill` | shadcn/ui 官方仓库内置 Agent 技能与上下文规范，辅助管理组件库、主题与现代 React 设计系统。 | `通用` `Claude Code` | — |
| **[SocialCrawl Skills](https://github.com/socialcrawl/skills)** `官方` | `Skill` | SocialCrawl 官方数据采集技能，通过 API 获取社交媒体、电商商品、评论、转录文本及市场研究数据。 | `通用` `Claude Code` | — |
| **[Sonilo Video-to-Music](https://github.com/sonilo-ai/skills)** `官方` | `Skill` | 使用 Sonilo 为成片视频自动创作贴合节奏的原创配乐。 | `Claude Code` `通用` | — |
| **[Supabase MCP](https://github.com/supabase/mcp)** `官方` | `MCP` | Supabase 官方 MCP 服务器，让 Agent 直接查询数据库、管理表结构迁移、Edge Functions 与项目日志。<br>`npx -y @supabase/mcp-server-supabase` | `通用` | — |
| **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `官方` | `MCP` | 在 MCP 客户端中查询 Terraform Registry 的提供程序和模块，并管理 HCP Terraform 工作区。<br>`codex mcp add terraform -- docker run -i --rm hashicorp/terraform-mcp-server` | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | — |
| **[Trail of Bits Security Skills](https://github.com/trailofbits/skills)** `官方` | `Skill` | Trail of Bits 开源的安全审计技能集，涵盖 CodeQL/Semgrep 静态分析、变体分析与修复验证。 | `Claude Code` `通用` | — |
| **[VideoDB Skills](https://github.com/video-db/skills)** `官方` | `Skill` | VideoDB 官方音视频技能包，支持音视频入库、语义检索、剪辑、生成与流式播放。 | `Claude Code` `通用` | — |
| **[WebMCP](https://github.com/webmachinelearning/webmcp)** `官方` | `工具` | W3C WebML 社区组标准规范，让网页原生向浏览器侧 AI Agent 暴露结构化 MCP 工具接口。 | `通用` | — |
| **[WorkorAI Agent Kit](https://github.com/work0r-ai/agent-kit)** `官方` | `Skill` | WorkorAI 官方人才市场技能包，通过 MCP 支持求职检索、职位发布及带透明匹配解释的候选人评估。 | `通用` `Claude Code` | — |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | 面向编码 Agent 的结构化工程工作流插件，内置方案设计、严格 TDD、系统化调试与子代理驱动开发。<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 327.5k<br><sub>2026-11-26</sub> |
| **[wshobson/agents](https://github.com/wshobson/agents)** | `Plugin` | 多端模块化插件市场，组合专业子代理、技能与命令，覆盖多语言开发、测试、安全与架构工作流。<br>`/plugin marketplace add wshobson/agents` | `Claude Code` `Codex` `Cursor` `OpenCode` `+2` | ⭐ 42.9k<br><sub>2026-11-24</sub> |
| **[AI Research SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs)** | `Skill` | 全面的开源 AI 科研与机器学习工程技能库，覆盖模型微调、RLHF、推理优化与评测实验。 | `通用` `Claude Code` | — |
| **[Awesome Claude Code Subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** | `Subagent` | 收录 100+ 专业子代理定义的精选合集，覆盖架构评审、安全审计、各语言专家与运维角色。 | `Claude Code` | — |
| **[Oh My ClaudeCode](https://github.com/Yeachan-Heo/oh-my-claudecode)** | `Plugin` | 面向团队协作的 Claude Code 多 Agent 编排插件，整合专业子代理、技能、Hooks 与并行执行工作流。 | `Claude Code` | — |
| **[Vibe Kanban](https://github.com/BloopAI/vibe-kanban)** | `工具` | 可视化看板编排工具，支持同时调度、监控并评审 Claude Code、Codex 等多个编码 Agent 的并行任务。 | `Claude Code` `Codex` `通用` | — |

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
| **[Resend Agent Skills](https://github.com/resend/resend-skills)** `官方` | `Skill` | Resend 官方 Agent 技能集，辅助智能体集成邮件发送与接收功能。 | `通用` | ⭐ 220<br><sub>2026-11-19</sub> |
| **[Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit)** `官方` | `Plugin` | Sanity 官方 Agent 工具包，集成技能、规则、命令与 MCP 支持以助力 Sanity CMS 开发。 | `通用` | ⭐ 201<br><sub>2026-11-25</sub> |
| **[Capgo Capacitor Skills](https://github.com/Cap-go/capgo-skills)** `官方` | `Skill` | Capgo 官方 Capacitor 技能包，涵盖版本升级、原生插件、移动端测试、安全与发布部署。 | `Claude Code` `通用` | — |
| **[Code Graph MCP](https://github.com/diffbot/mcp-code-graph)** `官方` | `MCP` | 用于代码库知识图谱分析、依赖追踪与架构可视化的 MCP 服务器。 | `通用` | — |
| **[wshobson/agents](https://github.com/wshobson/agents)** | `Plugin` | 多端模块化插件市场，组合专业子代理、技能与命令，覆盖多语言开发、测试、安全与架构工作流。<br>`/plugin marketplace add wshobson/agents` | `Claude Code` `Codex` `Cursor` `OpenCode` `+2` | ⭐ 42.9k<br><sub>2026-11-24</sub> |
| **[Awesome Claude Code Subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** | `Subagent` | 收录 100+ 专业子代理定义的精选合集，覆盖架构评审、安全审计、各语言专家与运维角色。 | `Claude Code` | — |
| **[Matt Pocock Skills](https://github.com/mattpocock/skills)** | `Skill` | 由 Matt Pocock 整理的实战型软件工程 Agent 技能集合，覆盖日常研发工作流。 | `通用` | ⭐ 333.6k<br><sub>2026-11-25</sub> |
| **[Andrej Karpathy Skills](https://github.com/multica-ai/andrej-karpathy-skills)** | `Skill` | 基于 Andrej Karpathy 对大模型编程常见陷阱的总结所提炼的编码规范与 Agent 技能。 | `Claude Code` `Cursor` | ⭐ 235.9k<br><sub>2026-04-20</sub> |
| **[Ponytail](https://github.com/DietrichGebert/ponytail)** | `Plugin` | 遵循 YAGNI 原则与极简主义的跨端 Agent 插件、钩子与技能集，减少冗余代码。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | ⭐ 199.4k<br><sub>2026-11-22</sub> |
| **[Caveman](https://github.com/JuliusBrussee/caveman)** | `Plugin` | 通过极简表达技能与本地代理压缩工具输出，大幅降低编码 Agent Token 消耗且可无损还原原文。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 123.1k<br><sub>2026-11-26</sub> |
| **[Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills)** | `Skill` | 由 Addy Osmani 打造的生产级软件工程 Agent 技能集，涵盖开发规范、测试与代码质量工作流。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | ⭐ 120.6k<br><sub>2026-11-24</sub> |
| **[Archify](https://github.com/tt-a1i/archify)** | `Skill` | 将想法、方案或代码库转化为交互式架构图、架构诊断报告与 PR 演示的 Agent 技能。 | `Claude Code` `Codex` `Cursor` `OpenCode` `+1` | ⭐ 100.6k<br><sub>2026-11-26</sub> |
| **[Understand Anything](https://github.com/Egonex-AI/Understand-Anything)** | `Plugin` | 将任意代码库转换为可检索、可提问的交互式知识图谱的多端 Agent 插件。 | `Claude Code` `Codex` `Cursor` `GitHub Copilot` `+3` | ⭐ 94.6k<br><sub>2026-11-25</sub> |
| **[Claude Code Best Practice](https://github.com/shanraisshan/claude-code-best-practice)** | `Plugin` | 面向工程化开发的 Claude Code 最佳实践集合，涵盖 Agent 团队、指令、技能与 MCP 编排工作流。 | `Claude Code` `Codex` | ⭐ 69.4k<br><sub>2026-11-26</sub> |
| **[Code Review Graph](https://github.com/tirth8205/code-review-graph)** | `MCP` | 本地优先的代码智能图谱 MCP 服务与命令行工具，大幅减少大型代码库评审时的上下文开销。 | `通用` | ⭐ 33.0k<br><sub>2026-11-16</sub> |
| **[OpenCLI](https://github.com/jackwener/OpenCLI)** | `工具` | 将任意网站转化为命令行工具并复用已登录浏览器会话的 Agent 自动化工具与扩展。 | `通用` | ⭐ 31.3k<br><sub>2026-11-07</sub> |
| **[Repomix](https://github.com/yamadashy/repomix)** | `工具` | 将整个代码仓库打包为单个 AI 友好上下文文件的命令行与 MCP 工具，方便大模型整体理解代码库。 | `通用` | ⭐ 29.5k<br><sub>2026-11-26</sub> |
| **[Unity MCP](https://github.com/CoplayDev/unity-mcp)** | `MCP` | 连接 AI 助手与 Unity 编辑器的 MCP 服务端，支持管理资源、控制场景、编辑脚本与自动化开发任务。 | `Claude Code` `GitHub Copilot` `Cursor` `Gemini CLI` | ⭐ 16.2k<br><sub>2026-11-17</sub> |
| **[Worktrunk](https://github.com/max-sixty/worktrunk)** | `工具` | 专为并行 AI 编码代理工作流设计的 Git Worktree 管理命令行工具与多端扩展。 | `通用` `Claude Code` `Codex` `Gemini CLI` | ⭐ 12.8k<br><sub>2026-11-26</sub> |
| **[shadcn Improve](https://github.com/shadcn/improve)** | `Skill` | 代码库审查与规划技能，利用强推理模型生成详细实施计划，交由轻量模型高效执行。 | `Claude Code` `通用` | ⭐ 12.2k<br><sub>2026-09-12</sub> |
| **[Awesome GameDev Agent Skills](https://github.com/gamedev-skills/awesome-gamedev-agent-skills)** | `Skill` | 涵盖 79 项实测游戏开发技能与任务路由器的技能集，支持 Godot、Unity、Unreal、Roblox 及 Phaser 等引擎。 | `Claude Code` `通用` | ⭐ 11.5k<br><sub>2026-11-12</sub> |
| **[Claude Code Tips & dx Plugin](https://github.com/ykdojo/claude-code-tips)** | `Plugin` | 包含 45+ Claude Code 进阶技巧、状态栏与容器化脚本，并内置日常开发工作流 dx 插件与技能。 | `Claude Code` | ⭐ 10.4k<br><sub>2026-09-25</sub> |
| **[UB Mode](https://github.com/unclebob/ub-mode)** | `Skill` | 由 Uncle Bob 推出的软件工艺 Agent 技能，引导编码代理遵循整洁代码、TDD 与严谨架构原则。 | `通用` | ⭐ 8.9k<br><sub>2026-11-02</sub> |
| **[DSH TUI](https://github.com/ccch1mneyyy/dsh-TUI)** | `Plugin` | DeepSeek Harness 生态的高性能终端 UI 插件，具备低占用、流畅鼠标交互与预设配置能力。 | `DeepSeek Harness` `Claude Code` | ⭐ 8.3k<br><sub>2026-11-27</sub> |
| **[Waza](https://github.com/tw93/Waza)** | `Skill` | 将成熟工程师日常开发习惯沉淀为可执行 Agent Skills 的技能集合，适配 Claude Code、Codex 与 Cursor。 | `通用` `Claude Code` `Codex` `Cursor` | ⭐ 7.7k<br><sub>2026-11-18</sub> |
| **[SwiftUI Agent Skill](https://github.com/twostraws/SwiftUI-Agent-Skill)** | `Skill` | 由 Paul Hudson 打造的 SwiftUI 开发技能，指导编码代理遵循现代苹果生态界面开发最佳实践。 | `通用` `Claude Code` `Codex` | ⭐ 6.6k<br><sub>2026-10-26</sub> |
| **[Anti-Slop Oxlint](https://github.com/dmmulroy/anti-slop)** | `工具` | 结合 Oxlint 严格规则与 Agent 技能的代码校验工具，自动拦截低可信度 TypeScript 与 JavaScript 模式。 | `通用` | ⭐ 6.5k<br><sub>2026-11-20</sub> |
| **[Anthony Fu Agent Skills](https://github.com/antfu/skills)** | `Skill` | Anthony Fu 维护的开源前端生态 Agent 技能精选集，涵盖 Vite、Vue、Vitest、Nuxt 与 pnpm 等工具。 | `通用` | ⭐ 6.1k<br><sub>2026-11-27</sub> |
| **[ModLens](https://github.com/liustack/modlens)** | `Plugin` | DeepSeek Harness 外挂视觉插件与技能桥接器，为纯文本编码代理提供图片 OCR、版面与语义结构化解析。 | `DeepSeek Harness` `Claude Code` `Codex` `通用` | ⭐ 5.1k<br><sub>2026-11-25</sub> |
| **[Benji Taylor Agent Skills](https://github.com/benjitaylor/skills)** | `Skill` | 面向 AI 编程 Agent 的技能合集，包含 StageShow 等技能。 | `通用` | ⭐ 4.2k<br><sub>2026-11-05</sub> |
| **[Dimillian Codex Skills](https://github.com/Dimillian/Skills)** | `Skill` | 聚焦 SwiftUI、iOS/macOS 调试、Swift 并发、React 性能与多智能体代码审查的 Codex 技能合集。 | `Codex` | ⭐ 4.0k<br><sub>2026-03-29</sub> |
| **[SwiftUI Agent Skill (AvdLee)](https://github.com/AvdLee/SwiftUI-Agent-Skill)** | `Skill` | 采用开放标准的 SwiftUI 专家技能，为 AI 编程工具提供 SwiftUI 最佳实践与架构指导。 | `通用` | ⭐ 3.9k<br><sub>2026-11-06</sub> |
| **[Playwright Skill](https://github.com/lackeyjb/playwright-skill)** | `Skill` | 面向 AI 编程 Agent 的通用 Playwright 浏览器自动化与端到端测试技能。 | `通用` | ⭐ 3.3k<br><sub>2026-11-01</sub> |
| **[Matteo Collina Node.js Skills](https://github.com/mcollina/skills)** | `Skill` | 由 Matteo Collina 整理的现代 Node.js、TypeScript 与高性能后端开发 Agent 技能合集。 | `通用` | ⭐ 2.0k<br><sub>2026-11-16</sub> |
| **[AI Evals Skills](https://github.com/ai-evals-course/evals-skills)** | `Skill` | 指导 AI 编程助手构建贴合具体业务产品的 AI 评测体系与自动化测试流程的技能集。 | `通用` | ⭐ 1.9k<br><sub>2026-10-24</sub> |
| **[Swift Concurrency Agent Skill](https://github.com/AvdLee/Swift-Concurrency-Agent-Skill)** | `Skill` | 提供 Swift 并发编程、Actor 安全模型、性能优化及 Swift 6 迁移指导的开放格式 Agent 技能。 | `通用` | ⭐ 1.7k<br><sub>2026-11-06</sub> |
| **[Chris Banes Android Skills](https://github.com/chrisbanes/skills)** | `Skill` | 由 Chris Banes 整理的 Kotlin、协程、Jetpack Compose 与跨平台 Android 开发 Agent 技能集。 | `通用` | ⭐ 1.2k<br><sub>2026-11-26</sub> |
| **[Jezweb Claude Skills](https://github.com/jezweb/claude-skills)** | `Skill` | 面向 Claude Code CLI 的全栈开发技能合集，涵盖 Cloudflare、React、Tailwind v4 与 AI 服务集成。 | `Claude Code` | ⭐ 1.1k<br><sub>2026-10-09</sub> |
| **[SeeCode](https://github.com/Aryanutkarsh/SeeCode)** | `Skill` | 由编程 Agent 通过简短 JSON 规范生成可交互、带动画的架构与系统原理图表的技能。 | `通用` | ⭐ 1.0k<br><sub>2026-11-24</sub> |
| **[No Negative Echo](https://github.com/LB623/no-negative-echo)** | `Skill` | 让 Codex 仅依据最终实现结果撰写标题、注释、提交信息与 PR 描述，消除被否决方案的冗余残留。 | `Codex` | ⭐ 969<br><sub>2026-08-31</sub> |
| **[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)** | `Skill` | 面向 iOS、macOS 和 iPadOS 苹果生态开发的 Claude Code 技能集，涵盖代码生成与 App Store 优化。 | `Claude Code` | ⭐ 912<br><sub>2026-11-09</sub> |
| **[Codex Autoresearch](https://github.com/TheGreenCedar/codex-autoresearch)** | `Plugin` | 用于在代码库中围绕可量化指标自动执行循环优化实验的 Codex 插件。 | `Codex` | ⭐ 840<br><sub>2026-10-11</sub> |
| **[Claude Code Tresor](https://github.com/alirezarezvani/claude-code-tresor)** | `Plugin` | 集成自主技能、专家子代理、斜杠命令与提示词的 Claude Code 研发效率合集。 | `Claude Code` `Cursor` | ⭐ 789<br><sub>2026-11-10</sub> |
| **[Rust Skills](https://github.com/leonardomso/rust-skills)** | `Skill` | 包含 26 个类别共 265 条规则的 Rust 编程技能集，助力 AI 编写地道、高效且安全的 Rust 代码。 | `通用` | ⭐ 761<br><sub>2026-11-26</sub> |
| **[Claude Skills Engineering Marketplace](https://github.com/mhattingpete/claude-skills-marketplace)** | `Plugin` | 面向软件工程工作流的 Claude Code 插件市场，涵盖 Git 自动化、测试、代码审查与可视化文档。 | `Claude Code` | ⭐ 696<br><sub>2026-07-25</sub> |
| **[SVG Diagram Skill](https://github.com/bybit-exchange/svg-diagram)** | `Skill` | 可绘制规范风格的手工布局 SVG 架构图、流程图、时序图与数据流图的 Agent 技能。 | `通用` | ⭐ 682<br><sub>2026-09-03</sub> |
| **[DotNet Skills](https://github.com/managedcode/dotnet-skills)** | `Skill` | 面向 .NET 开发的 AI 编程技能合集，附带技能目录、CLI 工具与多端编排代理。 | `Claude Code` `Codex` `GitHub Copilot` `Gemini CLI` | ⭐ 524<br><sub>2026-11-14</sub> |
| **[NestJS Agent Skills](https://github.com/Kadajett/agent-nestjs-skills)** | `Skill` | 面向 NestJS 后端框架架构设计与开发的 Agent 技能集。 | `通用` | ⭐ 304<br><sub>2026-07-23</sub> |
| **[OpenTUI Skill](https://github.com/msmps/opentui-skill)** | `Skill` | 专为 OpenCode 打造的 OpenTUI 终端界面开发技能与命令集成。 | `OpenCode` | ⭐ 231<br><sub>2026-08-27</sub> |
| **[Dot Skills](https://github.com/pproenca/dot-skills)** | `Skill` | 遵循 Agent Skills 开放标准的 AI 技能合集，覆盖研发流程、代码质量与知识管理。 | `通用` | ⭐ 228<br><sub>2026-08-15</sub> |
| **[Blode Agent Skills](https://github.com/mblode/agent-skills)** | `Skill` | 旨在消除 AI 敷衍产出的实用 Agent 技能集，帮助团队保持高工程与交付水准。 | `通用` | ⭐ 223<br><sub>2026-11-23</sub> |
| **[CC Polymath](https://github.com/rand/cc-polymath)** | `Plugin` | 注重上下文效率的 Claude Code 插件，集成覆盖云架构、设计与数学等领域的技能、子代理与 MCP 服务。 | `Claude Code` | ⭐ 192<br><sub>2026-02-28</sub> |
| **[Design Doc Mermaid](https://github.com/SpillwaveSolutions/design-doc-mermaid)** | `Skill` | 用于在设计文档中绘制高对比度 Mermaid 架构与流程图的 Claude Code 技能。 | `Claude Code` | ⭐ 190<br><sub>2026-08-24</sub> |
| **[Agent LSP](https://github.com/blackwell-systems/agent-lsp)** | `Skill` | 基于语义代码智能的 LSP 技能集，支持安全重构、符号重命名、影响面分析与校验。 | `Claude Code` `通用` | — |
| **[AlterLab GameForge](https://github.com/AlterLab-IEU/AlterLab_GameForge)** | `Skill` | 包含 34 个游戏开发技能的专题集合，覆盖游戏设计、核心机制与制作管线。 | `Claude Code` `通用` | — |
| **[Atlassian Bitbucket MCP](https://github.com/aashari/mcp-server-atlassian-bitbucket)** | `MCP` | 面向 Atlassian Bitbucket 的 MCP 服务器，支持 AI Agent 浏览代码仓库、评审 PR 与查看提交历史。<br>`npx -y @aashari/mcp-server-atlassian-bitbucket` | `通用` | — |
| **[Awesome Agentic AI Skills](https://github.com/adriannoes/awesome-agentic-ai)** | `Skill` | 面向 Claude Code、Cursor 与 Codex 的跨端技能合集，覆盖研发、设计、研究与产品工作。 | `Claude Code` `Cursor` `Codex` `通用` | — |
| **[ax Extract Workflow](https://github.com/Necmttn/ax)** | `Skill` | 从本地 ax 会话历史中还原功能的完整交付过程，便于沉淀工作流与交接。 | `Claude Code` `通用` | — |
| **[Birdview](https://github.com/Qiuner/birdview)** | `Skill` | 梳理代码库整体架构、界定变更范围并审查实现约束。 | `Claude Code` `通用` | — |
| **[Bleu](https://github.com/Nirvaan05/Bleu-plugin)** | `Plugin` | 编码前架构蓝图插件与技能，将初步项目想法拆解为包含组件、流程与文件级执行清单的完整实现方案。 | `通用` `Claude Code` | — |
| **[Charles Proxy Extract Skill](https://github.com/wannabehero/charles-proxy-extract-skill)** | `Skill` | 提取并分析 Charles Proxy 抓包会话文件中的 HTTP 流量数据，辅助接口排查与调试。 | `Claude Code` `通用` | — |
| **[Chisle](https://github.com/JayPokale/Chisle)** | `Skill` | 面向编码 Agent 的 Token 省流技能与规范，通过精简输出、YAGNI 优先编码与高效工具调用降低成本。 | `Claude Code` `通用` | — |
| **[Claude Code Skills ZH](https://github.com/laolaoshiren/claude-code-skills-zh)** | `Skill` | 面向中文开发者的 Claude Code 技能合集，涵盖软件开发与日常工程工作流。 | `Claude Code` | — |
| **[Claude Toolbox](https://github.com/serpro69/claude-toolbox)** | `Skill` | 面向 Claude Code 的研发工具箱技能集，涵盖方案规划、功能实现、文档编写与代码审查。 | `Claude Code` | — |
| **[Code Review Skill (kyy-logs)](https://github.com/kyy-logs/code-review-skill)** | `Skill` | 系统性审查代码变更中的缺陷、测试质量与合并就绪度。 | `Claude Code` `通用` | — |
| **[Crit](https://github.com/tomasz-tomczyk/crit)** | `Skill` | 对开发计划、代码 Diff 与前端界面进行批注评审，并将反馈直接回传给编程 Agent。 | `Claude Code` `通用` | — |
| **[Debug Skill](https://github.com/AlmogBaku/debug-skill)** | `Skill` | 为 AI Agent 接入真正的交互式调试器，通过 CLI 支持断点、单步执行、变量检查与调用栈追踪。 | `Claude Code` `通用` | — |
| **[Emblem AI Agent Wallet](https://github.com/EmblemCompany/Agent-skills)** | `Skill` | 支持 Solana、以太坊、Base、BSC、Polygon、Hedera 与比特币的跨链加密钱包管理与交易技能。 | `Claude Code` `通用` | — |
| **[Eval Genius](https://github.com/alexgreensh/eval-genius)** | `Skill` | 面向 AI 应用的评测设计技能，指导 Agent 判断何时需要 Eval、如何搭建基准测试与回归度量。 | `通用` `Claude Code` | — |
| **[Go Agent Skills](https://github.com/eduardo-sl/go-agent-skills)** | `Skill` | 28 个精选 Go 语言开发技能，涵盖代码审查、并发安全、测试、gRPC 与系统架构。 | `Claude Code` `通用` | — |
| **[Great CTO](https://github.com/avelikiy/great_cto)** | `Plugin` | 面向全软件生命周期的 Claude Code 插件，内置专家子代理、命令、合规流程与经验沉淀机制。 | `Claude Code` | — |
| **[JeffAllan Claude Skills](https://github.com/jeffallan/claude-skills)** | `Skill` | 包含 65 个全栈开发与项目协作技能的渐进式技能包，覆盖 React、NestJS、Python、DevOps 与 Jira 工作流。 | `Claude Code` `通用` | — |
| **[Move Code Quality Skill](https://github.com/1NickPappas/move-code-quality-skill)** | `Skill` | 对照官方 Move Book 代码质量清单审查 Move 语言包，确保符合 Move 2024 Edition 规范。 | `Claude Code` `通用` | — |
| **[Off Grid AI Skills](https://github.com/off-grid-ai/skills)** | `Skill` | 专注软件工程质量的技能集合，涵盖行为驱动测试、根因修复、合并前安全检查与图工程工作流。 | `通用` `Claude Code` | — |
| **[OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay)** | `工具` | 面向 AI Agent 的时光机调试与 MCP 工具，支持录制、回放、分叉与排查多步 Agent 执行过程。 | `通用` `Claude Code` | — |
| **[PyPICT Test Design Skill](https://github.com/omkamal/pypict-claude-skill)** | `Skill` | 使用 PICT 成对组合测试方法为需求或代码设计高质量、精简的自动化测试用例集。 | `Claude Code` `通用` | — |
| **[Ratchet](https://github.com/krishansubudhi/ratchet)** | `Plugin` | 通过 Stop Hook 强制执行只降不增代码规模预算的 Claude Code 插件，防止编码 Agent 导致仓库膨胀。 | `Claude Code` | — |
| **[Spartan AI Toolkit](https://github.com/spartan-stratos/spartan-ai-toolkit)** | `Skill` | 为 AI 编程助手提供质量门禁、强制 TDD 流程与原子化提交的工程工作流工具集。 | `Claude Code` `通用` | — |
| **[Suede Creator Skills](https://github.com/JasonColapietro/suede-creator-skills)** | `Skill` | 涵盖代码审查、产品设计、营销增长、AI 评测与发布流程的综合技能包。 | `Claude Code` `通用` | — |
| **[SuperScalar Lightning MCP](https://github.com/8144225309/superscalar-mcp)** | `MCP` | 面向比特币闪电网络通道工厂与 SuperScalar 协议的 MCP 与技能包，支持架构评审与二层扩容分析。 | `Claude Code` `通用` | — |
| **[Trace MCP](https://github.com/nikolai-vysotskyi/trace-mcp)** | `MCP` | 支持 90+ 框架与 80+ 编程语言的代码智能分析 MCP 服务器，用于跨文件符号追踪与架构理解。 | `通用` | — |
| **[tstack Skills](https://github.com/t3dotgg/tstack)** | `Skill` | Theo Browne 维护的工程工作流技能套件，涵盖 PR 提交、评审评论、CI 自动盯盘与代码库现代化改造。 | `通用` `Claude Code` | — |
| **[Unity Agent Skills](https://github.com/jahro-console/unity-agent-skills)** | `Skill` | 面向 Unity 游戏开发的 AI 调试技能集，提供结构化日志、运行时命令与变量监控能力。 | `Claude Code` `通用` | — |
| **[Vibe Replay](https://github.com/tuo-lei/vibe-replay)** | `Skill` | 将 AI 编程会话转化为可分享的交互式 HTML 回放报告，附带洞察摘要与 PR 链接。 | `Claude Code` `通用` | — |

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
| **[Browser MCP](https://github.com/BrowserMCP/mcp)** `官方` | `MCP` | 结合浏览器插件的 MCP 服务器，让 AI Agent 复用本地浏览器登录态完成网页操作与自动化任务。<br>`npx -y @browsermcp/mcp@latest` | `通用` | — |
| **[BrowserAct Skills](https://github.com/browser-act/skills)** `官方` | `Skill` | BrowserAct 官方浏览器自动化技能集，支持复杂网页交互、数据采集与任务接管。 | `通用` `Claude Code` | — |
| **[e2e Agent Skill](https://github.com/e2e-inc/e2e)** `官方` | `Skill` | e2e 智能端到端测试框架官方技能，支持在 Playwright 浏览器及 iOS/Android 设备上编写、运行与调试测试。 | `通用` `Claude Code` | — |
| **[shadcn/ui Skill](https://github.com/shadcn-ui/ui)** `官方` | `Skill` | shadcn/ui 官方仓库内置 Agent 技能与上下文规范，辅助管理组件库、主题与现代 React 设计系统。 | `通用` `Claude Code` | — |
| **[UI/UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)** | `Skill` | 为编码 Agent 提供跨平台专业 UI/UX 设计规范与审美指导的设计智能技能。 | `Claude Code` `Cursor` `GitHub Copilot` `Antigravity` | ⭐ 154.7k<br><sub>2026-11-27</sub> |
| **[Taste Skill](https://github.com/Leonxlnx/taste-skill)** | `Skill` | 通过艺术指导、参考图约束与浏览器校验提升前端设计品味的 Agent 技能，告别千篇一律的 AI 页面。 | `Claude Code` `Codex` `Cursor` | ⭐ 122.0k<br><sub>2026-11-26</sub> |
| **[Impeccable](https://github.com/pbakaus/impeccable)** | `Skill` | 为编码 Agent 提供专业设计词汇、界面打磨与审校指令的技能套件，上线前拦截低质 AI 风格。 | `通用` | ⭐ 117.6k<br><sub>2026-11-26</sub> |
| **[Diagram Design](https://github.com/cathrynlavery/diagram-design)** | `Skill` | 支持 52 种图表类型的编辑级信息图设计技能，输出简洁独立的 HTML 与 SVG 图形。 | `Claude Code` `Codex` `GitHub Copilot` `Cursor` | ⭐ 73.9k<br><sub>2026-11-26</sub> |
| **[Hallmark](https://github.com/Nutlope/hallmark)** | `Skill` | 专为 Claude Code、Cursor 与 Codex 打造的反模板化前端设计技能，并配套效果评测。 | `Claude Code` `Cursor` `Codex` | ⭐ 61.7k<br><sub>2026-11-11</sub> |
| **[Emil Kowalski Design Skills](https://github.com/emilkowalski/skills)** | `Skill` | 由 Emil Kowalski 打造的设计工程技能与 UI/性能速查指南，助力编写精致流畅的前端交互。 | `Claude Code` `Codex` `Cursor` | ⭐ 60.1k<br><sub>2026-11-15</sub> |
| **[AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template)** | `工具` | 面向 AI 编码 Agent 的 Next.js 网页复刻模板与指令集，支持一键复刻目标网站界面。 | `通用` | ⭐ 39.8k<br><sub>2026-11-26</sub> |
| **[Frontend Slides](https://github.com/zarazhangrui/frontend-slides)** | `Skill` | 内置多种风格预设与动画模式的 Claude Code 技能，用前端代码生成高质量网页幻灯片。 | `Claude Code` | ⭐ 33.0k<br><sub>2026-06-23</sub> |
| **[Huashu Design](https://github.com/alchaincyf/huashu-design)** | `Skill` | 内置 92 种风格样张库的 HTML 原生设计技能，可交付网页、App 原型、小红书图文与可编辑 PPTX。 | `Claude Code` `Codex` `Cursor` | ⭐ 31.1k<br><sub>2026-11-23</sub> |
| **[Guizang PPT Skill](https://github.com/op7418/guizang-ppt-skill)** | `Skill` | 生成杂志风与瑞士网格排版 HTML 幻灯片的 Agent 技能，自带配图提示词与 WebGL 演示运行时。 | `Claude Code` `Codex` | ⭐ 30.5k<br><sub>2026-10-30</sub> |
| **[Anatomy](https://github.com/wheresryan22/anatomy)** | `Skill` | 用于生成机械与复杂系统交互式等距矢量插画的 Agent 技能，支持精细 SVG 与 WebGL 着色器效果。 | `通用` | ⭐ 29.4k<br><sub>2026-10-18</sub> |
| **[Img2ThreeJS](https://github.com/img2threejs/img2threejs)** | `Skill` | 根据参考图以纯代码重建程序化、可动画 Three.js 三维模型的编码 Agent 技能。 | `Claude Code` | ⭐ 22.0k<br><sub>2026-11-25</sub> |
| **[React Doctor](https://github.com/millionco/react-doctor)** | `工具` | 面向 AI 编码代理的 React 代码体检工具与技能，自动识别不良 React 模式、性能隐患与代码质量问题。 | `通用` `Claude Code` `Cursor` | ⭐ 15.2k<br><sub>2026-11-27</sub> |
| **[Jakub Krehel UI Skills](https://github.com/jakubkrehel/skills)** | `Skill` | 专注于界面打磨与前端交互工程的 Agent 技能集合，帮助代理构建高品质用户界面。 | `通用` `Claude Code` `OpenCode` | ⭐ 12.9k<br><sub>2026-11-19</sub> |
| **[UI Skills](https://github.com/ibelick/ui-skills)** | `Skill` | 面向设计工程师的 Agent 技能集，助力打造精致、可访问且风格一致的前端界面组件。 | `通用` | ⭐ 11.5k<br><sub>2026-11-25</sub> |
| **[Anti-Slop Design & Copy Rules](https://github.com/miqdadbadjuber/anti-slop)** | `Skill` | 跨端规则集与技能，过滤并拦截 AI 编码代理生成的千篇一律 UI 界面、套路化文案与低质量代码。 | `通用` `Claude Code` `Codex` `Cursor` | ⭐ 10.2k<br><sub>2026-11-26</sub> |
| **[MengTo Design Skills](https://github.com/MengTo/Skills)** | `Skill` | 由 Meng To 整理的界面设计与构建技能集，帮助设计师和开发者借助编码代理打造高质感应用界面。 | `通用` `Claude Code` `Codex` `Cursor` | ⭐ 8.4k<br><sub>2026-11-26</sub> |
| **[Logo Design Skill](https://github.com/kaankiziltug/logo-design-skill)** | `Skill` | 系统化 Logo 设计技能，包含矢量 SVG 工艺规范、评测工具及 1400+ 品牌标识参考库。 | `通用` `Claude Code` `Gemini CLI` `Codex` | ⭐ 7.9k<br><sub>2026-11-13</sub> |
| **[IP as Logo Skill](https://github.com/s1dashu/ip-as-logo-skill)** | `Skill` | 专注于生成圆润极简、轻拟物风格 IP 吉祥物 Logo 的轻量级 Agent 技能。 | `通用` `Codex` | ⭐ 6.7k<br><sub>2026-11-06</sub> |
| **[Interface Design](https://github.com/Dammyjay93/interface-design)** | `Plugin` | 面向 Claude Code 的界面设计工程插件，通过设计记忆与规范约束确保前端 UI 的高度一致性。 | `Claude Code` | ⭐ 6.0k<br><sub>2026-06-20</sub> |
| **[Appllama Skills](https://github.com/Appllama/appllama-skills)** | `Skill` | 结合 MCP 的移动端界面设计技能集，将高营收应用设计模式转化为原生级高质量页面实现。 | `Claude Code` `Codex` `Cursor` | ⭐ 5.7k<br><sub>2026-11-21</sub> |
| **[Scroll Craft](https://github.com/nateherkai/scroll-craft)** | `Skill` | 专注于构建沉浸式滚动交互网站的前端设计技能与插件，兼顾动效质感与无障碍访问。 | `通用` `Claude Code` `Codex` | ⭐ 5.5k<br><sub>2026-09-30</sub> |
| **[Agentation](https://github.com/benjitaylor/agentation)** | `工具` | 面向 AI 代理的网页可视化批注与反馈工具，支持通过 MCP 将界面元素标注精准传递给编码代理。 | `通用` `Claude Code` | ⭐ 5.5k<br><sub>2026-09-22</sub> |
| **[Blender Skills](https://github.com/arjun988/blender-skills)** | `Skill` | 包含 94 项 Blender 专项技能的合集，结合 MCP 打通从灰模搭建到游戏引擎导出的 3D 制作管线。 | `Claude Code` `Cursor` `Codex` | ⭐ 5.1k<br><sub>2026-11-06</sub> |
| **[Three.js Skills](https://github.com/CloudAI-X/threejs-skills)** | `Skill` | 面向 Three.js 开发的 Agent 技能集，涵盖 3D 场景搭建、着色器、光照与交互式 WebGL 渲染。 | `通用` | ⭐ 4.5k<br><sub>2026-10-19</sub> |
| **[Effective HTML](https://github.com/plannotator/effective-html)** | `Skill` | 专注于生成实用单文件 HTML 产物、线框图、交互原型、计划面板与图示的 Agent 技能。 | `通用` `Claude Code` `Codex` | ⭐ 4.3k<br><sub>2026-11-24</sub> |
| **[Make Interfaces Feel Better](https://github.com/jakubkrehel/make-interfaces-feel-better)** | `Skill` | 聚焦界面交互细节与质感打磨的 Agent 技能，引导编码代理优化微交互、过渡动画与操作手感。 | `通用` `Claude Code` | ⭐ 4.3k<br><sub>2026-11-18</sub> |
| **[Oil UI](https://github.com/oil-oil/oil-ui)** | `Skill` | 面向 AI Agent 的 UI 设计技能，支持探索多种视觉方向、并排对比并基于真实截图迭代打磨。 | `通用` | ⭐ 4.0k<br><sub>2026-11-25</sub> |
| **[Apple Design Skill](https://github.com/dickwu/apple-design-skill)** | `Skill` | 基于 Apple 人机界面指南的跨平台 UI/UX 设计审查技能，支持 Flutter、Tauri、Electron 与 React Native。 | `Claude Code` `Cursor` `Codex` `Gemini CLI` | ⭐ 3.9k<br><sub>2026-11-26</sub> |
| **[Awesome Design Skills](https://github.com/bergside/awesome-design-skills)** | `Skill` | 精选 67 个 DESIGN.md 与 SKILL.md 设计技能文件及注册表模板的合集，适用于各类 AI 设计与编程工具。 | `通用` | ⭐ 3.8k<br><sub>2026-06-28</sub> |
| **[Web Quality Skills](https://github.com/addyosmani/web-quality-skills)** | `Skill` | 由 Addy Osmani 推出的网页质量优化技能集，基于 Lighthouse 与 Core Web Vitals 改进性能与无障碍体验。 | `通用` | ⭐ 3.1k<br><sub>2026-08-24</sub> |
| **[Oil Motion](https://github.com/oil-oil/oil-motion)** | `Skill` | 面向 Claude Code 与 Codex 的网页动效技能，专注制作跟随滚动与鼠标交互的前端动画。 | `Claude Code` `Codex` | ⭐ 3.0k<br><sub>2026-11-25</sub> |
| **[Pixel2Motion](https://github.com/nolangz/pixel2motion)** | `Skill` | AI Logo 动效技能，可将位图标志转化为流畅的 SVG 矢量动画、HTML 演示及 GIF/视频预览。 | `Claude Code` `Codex` | ⭐ 2.7k<br><sub>2026-08-21</sub> |
| **[Dimensional Drawing](https://github.com/enesozturk/dimensional-drawing)** | `Skill` | 用于生成 Apple 风格 UI 组件尺寸标注图与技术规格插画的 Agent 技能。 | `通用` | ⭐ 2.3k<br><sub>2026-10-24</sub> |
| **[Design DNA](https://github.com/zanwei/design-dna)** | `Skill` | 从参考界面图片或链接中提取量化 Design DNA 令牌与视觉特征，并据此生成风格一致的新界面。 | `通用` | ⭐ 2.2k<br><sub>2026-08-28</sub> |
| **[Beautify GitHub README](https://github.com/oil-oil/beautify-github-readme)** | `Skill` | 面向 Claude Code 与 Codex 的 GitHub README 美化技能，生成结构清晰、排版美观的开源项目文档与 SVG 配图。 | `Claude Code` `Codex` | ⭐ 2.0k<br><sub>2026-11-24</sub> |
| **[Design Motion Principles](https://github.com/kylezantos/design-motion-principles)** | `Skill` | 支持构建交互动效与审查现有动画的双模式动效设计技能，凝练一线前端动效设计师实践准则。 | `通用` | ⭐ 1.7k<br><sub>2026-05-30</sub> |
| **[Material 3 Skill](https://github.com/hamen/material-3-skill)** | `Skill` | 面向 Claude Code 的 Material Design 3 技能，涵盖 30 余种组件规范、设计令牌、主题定制与合规审查。 | `Claude Code` | ⭐ 1.6k<br><sub>2026-07-15</sub> |
| **[Punk Posters Skills](https://github.com/adrianpunk/Punk-Posters)** | `Skill` | 包含多种视觉风格与排版脚本的海报及平面设计 Agent 技能合集。 | `通用` | ⭐ 1.5k<br><sub>2026-11-04</sub> |
| **[Line Art Animation](https://github.com/JDhruv14/line-art-animation)** | `Skill` | 用于生成线稿风 SVG 动画组件的 Claude 技能与 TypeScript 库，支持行走互动人物与昼夜场景切换。 | `Claude Code` | ⭐ 1.3k<br><sub>2026-11-10</sub> |
| **[Revenue-Centric Design](https://github.com/heliocosta-dev/revenue-centric-design)** | `Skill` | 融合 SaaS 产品设计、转化率优化（CRO）与行为科学原则的 Agent 设计技能。 | `Claude Code` `Codex` | ⭐ 1.2k<br><sub>2026-09-04</sub> |
| **[SuperDesign Skill](https://github.com/superdesigndev/superdesign-skill)** | `Skill` | 面向编程 Agent 的前端设计技能，帮助摆脱同质化 AI 界面模板，产出精致且可直接上线的前端设计。 | `通用` | ⭐ 1.1k<br><sub>2026-08-21</sub> |
| **[Hue](https://github.com/dominikmartn/hue)** | `Skill` | 开源品牌设计系统学习技能，提取任意品牌视觉规范，让编程 Agent 生成的每个界面都保持品牌一致性。 | `Claude Code` `Codex` | ⭐ 965<br><sub>2026-11-10</sub> |
| **[UserInterface Wiki](https://github.com/raphaelsalaja/userinterface-wiki)** | `Skill` | 聚焦高水准界面设计原则的活手册与配套 Agent 技能，帮助打造更精致的用户界面。 | `通用` | ⭐ 962<br><sub>2026-07-29</sub> |
| **[Auteur](https://github.com/agiwhitelist/auteur)** | `Skill` | 像执导电影一样打造网站的 Claude Code 技能，集成视觉资产生成、WebGL/GSAP 动效与反模板化质量门禁。 | `Claude Code` | ⭐ 936<br><sub>2026-08-06</sub> |
| **[Unslop UI](https://github.com/felipebasurto/unslop-ui)** | `Skill` | 去除 UI 文案、图表和仪表盘中 AI 痕迹与套话的 Agent 技能。 | `通用` | ⭐ 928<br><sub>2026-11-25</sub> |
| **[Color Expert Skill](https://github.com/meodai/skill.color-expert)** | `Skill` | 涵盖色彩空间、APCA/WCAG 无障碍对比度、配色方案生成与颜料混合的色彩科学 Agent 技能。 | `通用` | ⭐ 677<br><sub>2026-10-21</sub> |
| **[Platform Design Skills](https://github.com/ehmo/platform-design-skills)** | `Skill` | 包含 300 余条 Apple HIG、Material Design 3 与 WCAG 2.2 设计规范的跨平台设计技能包。 | `通用` | ⭐ 653<br><sub>2026-03-19</sub> |
| **[Brand Identity Skill](https://github.com/fatihaydost/brand-identity-skill)** | `Skill` | 从单一需求出发系统化设计品牌标识（Logo、字体、配色与品牌规范套件）的 Claude Code 技能。 | `Claude Code` | ⭐ 486<br><sub>2026-11-15</sub> |
| **[UI Craft](https://github.com/educlopez/ui-craft)** | `Plugin` | 面向 AI 编程代理的设计工程系统，集成技能、规则与 MCP 工具以交付高质感 UI。 | `通用` | ⭐ 484<br><sub>2026-11-20</sub> |
| **[Accessibility Agents](https://github.com/Community-Access/accessibility-agents)** | `Plugin` | 面向编程代理的 WCAG 2.2 AA 无障碍审查套件，集成技能、编辑门禁钩子与扫描器。 | `Claude Code` `GitHub Copilot` `Gemini CLI` `Codex` | ⭐ 456<br><sub>2026-11-23</sub> |
| **[Inkworks Skill](https://github.com/Moh4696/inkworks-skill)** | `Skill` | 用于生成工程图纸风格交互式 3D 原理解析页面的 Agent 技能。 | `通用` | ⭐ 456<br><sub>2026-11-25</sub> |
| **[Pixel Plugin](https://github.com/willibrandon/pixel-plugin)** | `Plugin` | 通过自然语言调用 Aseprite 创作像素画、动画与游戏精灵图集的 Claude Code 插件。 | `Claude Code` | ⭐ 435<br><sub>2025-10-19</sub> |
| **[Extract Design System](https://github.com/arvindrk/extract-design-system)** | `Skill` | 从公开网站提取色彩、字体、间距与阴影等设计令牌并生成 JSON 与 CSS 变量的 Agent 技能及 CLI。 | `Claude Code` `Cursor` `Codex` | ⭐ 321<br><sub>2026-09-05</sub> |
| **[Dembrandt UX Skills](https://github.com/dembrandt/dembrandt-skills)** | `Skill` | 将资深 UX、无障碍规范、排版与设计系统经验封装为自动生效的 Agent 技能包。 | `通用` | ⭐ 238<br><sub>2026-11-25</sub> |
| **[SwiftUI Design Skill](https://github.com/Wholiver/swiftui-design-skill)** | `Skill` | 面向 SwiftUI 的前端设计技能，包含防敷衍铁律、设计方向咨询与五维界面评审规范。 | `通用` | ⭐ 215<br><sub>2026-05-01</sub> |
| **[iOS Accessibility Agent Skill](https://github.com/dadederk/iOS-Accessibility-Agent-Skill)** | `Skill` | 遵循 Agent Skills 开放标准的 iOS 无障碍开发最佳实践专家指导技能。 | `通用` | ⭐ 177<br><sub>2026-03-09</sub> |
| **[React-PDF Claude Skill](https://github.com/molefrog/skills)** | `Skill` | 使用 react-pdf 设计并生成高质量 PDF 文档的 Claude 技能。 | `Claude Code` | ⭐ 173<br><sub>2026-02-12</sub> |
| **[Uizze Design Skills](https://github.com/uizze/uizze)** | `Skill` | 面向编程代理的 UI 与设计系统技能集，助力打造高质量 Web 与 iOS 界面并避免 AI 模板感。 | `通用` | ⭐ 146<br><sub>2026-11-17</sub> |
| **[Kelvinkn17 Agent Skills](https://github.com/kelvinkn17/skills)** | `Skill` | 包含 fun-isometric 等创意视觉技能的 Agent 技能集，可用于生成动态等距贴纸图形。 | `Claude Code` `Codex` | ⭐ 125<br><sub>2026-10-26</sub> |
| **[Aria Icons](https://github.com/LeulAria/Aria-Icons)** | `Skill` | 快速检索并将开源 SVG 图标集成到前端项目中。 | `Claude Code` `通用` | — |
| **[Blender Kiln](https://github.com/elithril/blender-kiln)** | `Skill` | 在 Blender 中创建并优化可直接用于游戏引擎的 3D 美术资产。 | `Claude Code` `通用` | — |
| **[Claude Design Auditor](https://github.com/Ashutos1997/claude-design-auditor-skill)** | `Skill` | 依据 17 项专业设计规范（排版、WCAG 无障碍、间距、图标、设计 Token 等）审查界面设计并给出百分制评分。 | `Claude Code` `通用` | — |
| **[Design OS 3D Blender](https://github.com/jangtrinh/design-os-3d-blender)** | `Skill` | 在 Blender 中以参数化方式构建、校验并导出 3D 模型。 | `Claude Code` `通用` | — |
| **[Email HTML MJML Skill](https://github.com/framix-team/skill-email-html-mjml)** | `Skill` | 使用 MJML 4.x 生成跨邮件客户端兼容的响应式 HTML 邮件模板，支持编译与校验。 | `Claude Code` `通用` | — |
| **[GenAI Mesh Gradient](https://github.com/9929y/genai-mesh-gradient)** | `Skill` | 为网站、演示文稿与品牌视觉生成可自由编辑的弥散网格渐变背景。 | `Claude Code` `通用` | — |
| **[Genjutsu](https://github.com/AThevon/genjutsu)** | `Skill` | 面向 Web 与移动端的动效设计与创意编程技能，打造富有表现力的交互界面。 | `Claude Code` `通用` | — |
| **[Illos Skills](https://github.com/navedux/illos-skills)** | `Skill` | 为网站与应用集成 Illos.dev 动态 SVG 插画的 Agent 技能，适用于首屏、引导页、空状态与文档配图。 | `通用` `Claude Code` | — |
| **[iOS Simulator MCP](https://github.com/joshuayoes/ios-simulator-mcp)** | `MCP` | 用于操控 Apple iOS 模拟器的 MCP 服务器，支持 UI 树检查、点击交互、截图与移动端自动化调试。<br>`npx -y ios-simulator-mcp` | `通用` | — |
| **[MCP Server Playwright](https://github.com/VikashLoomba/MCP-Server-Playwright)** | `MCP` | 轻量级 Playwright MCP 服务器，支持浏览器导航、表单交互、DOM 检查与自动截图。 | `通用` | — |
| **[MyOG Checker MCP](https://github.com/MyOG-social/myog-checker-plugin)** | `MCP` | 本地 MCP 服务器，用于检测公开网页的 Open Graph 与 Twitter Card 元数据并报告缺失或冲突标签。<br>`npx -y myog-checker` | `通用` `Claude Code` | — |
| **[Oh My Android](https://github.com/ateymoori/oh-my-android)** | `Skill` | 在 Android 模拟器或真机上直接检查与自动化测试移动端界面。 | `Claude Code` `通用` | — |
| **[Playwright MCP (ExecuteAutomation)](https://github.com/executeautomation/mcp-playwright)** | `MCP` | 社区版 Playwright MCP 服务器，支持 AI Agent 驱动浏览器自动化、截图、测试代码生成与接口测试。<br>`npx -y @executeautomation/playwright-mcp-server` | `通用` | — |
| **[TestDino Playwright Skill](https://github.com/testdino-hq/playwright-skill)** | `Skill` | 面向 AI Agent 的 Playwright 测试技能包，提供结构化 SKILL.md、自动化测试流与 MCP 兼容配置。 | `Claude Code` `通用` | — |
| **[Unbrowse](https://github.com/unbrowse-ai/unbrowse)** | `Skill` | 通过 Unbrowse 浏览网站、复用站点工具并直接调用底层 Web API。 | `Claude Code` `通用` | — |
| **[WebCmd Browser](https://github.com/agentrhq/webcmd)** | `Skill` | 使用 webcmd 在真实浏览器中检查页面结构并与网站实时交互。 | `Claude Code` `通用` | — |

## 云与运维

_部署、容器、可观测性、数据库与云平台集成。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Google Agent Skills](https://github.com/google/skills)** `官方` | `Skill` | Google 官方 Agent Skills 仓库，覆盖 Google Cloud 与各类 Google 开发者技术栈的标准技能。 | `通用` `Gemini CLI` `Claude Code` | — |
| **[Google Agents CLI](https://github.com/google/agents-cli)** `官方` | `工具` | Google 官方推出的命令行工具与技能集，帮助编码助手基于 ADK 在 Google Cloud 上构建、评估与部署 AI Agent。 | `通用` `Claude Code` `Gemini CLI` | ⭐ 6.4k<br><sub>2026-11-24</sub> |
| **[Cloudflare Skills](https://github.com/cloudflare/skills)** `官方` | `Skill` | Cloudflare 官方 Agent 技能集，指导 AI 助手基于 Cloudflare Workers 及开发者平台进行构建与部署。 | `通用` | ⭐ 3.5k<br><sub>2026-11-25</sub> |
| **[Supabase Agent Skills](https://github.com/supabase/agent-skills)** `官方` | `Skill` | Supabase 官方 Agent 技能集，帮助 AI 编程助手遵循 Postgres、认证、RLS 与边缘函数最佳实践。 | `通用` | ⭐ 3.1k<br><sub>2026-11-12</sub> |
| **[Firebase Agent Skills](https://github.com/firebase/agent-skills)** `官方` | `Skill` | Firebase 官方 Agent 技能集，辅助智能体完成 Firebase 后端构建、配置与部署。 | `通用` | ⭐ 531<br><sub>2026-11-09</sub> |
| **[Prisma Official Skills](https://github.com/prisma/skills)** `官方` | `Skill` | Prisma 官方 Agent 技能集，涵盖 Prisma ORM 配置、Client API、Prisma Postgres 与 v7 升级迁移。 | `通用` | ⭐ 80<br><sub>2026-11-26</sub> |
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
| **[Railway Agent Skills](https://github.com/railwayapp/railway-skills)** `官方` | `Skill` | Railway 官方 Agent 技能包，支持创建服务、管理环境变量、查看日志与一键部署云端应用。 | `通用` `Claude Code` | — |
| **[Redis MCP Server](https://github.com/redis/mcp-redis)** `官方` | `MCP` | Redis 官方 MCP 服务器，为 AI Agent 提供自然语言查询、缓存管理与 Redis 数据检视接口。 | `通用` | — |
| **[Render Agent Skills](https://github.com/render-oss/skills)** `官方` | `Skill` | Render 官方 Agent 技能包，用于在 Render 平台上部署、配置与排查 Web 服务和托管数据库。 | `通用` `Claude Code` | — |
| **[Rootly MCP Server](https://github.com/rootlyhq/rootly-mcp-server)** `官方` | `MCP` | Rootly 官方 MCP 服务器，支持 AI Agent 排查线上故障、查询事件时间线并辅助 SRE 应急响应。 | `通用` | — |
| **[Sentry Agentic Toolkit](https://github.com/getsentry/toolkit)** `官方` | `Plugin` | Sentry 官方 Agent 工具套件，融合 MCP 与技能用于排查线上报错、堆栈追踪与回归定位。 | `通用` `Claude Code` | — |
| **[Supabase MCP](https://github.com/supabase/mcp)** `官方` | `MCP` | Supabase 官方 MCP 服务器，让 Agent 直接查询数据库、管理表结构迁移、Edge Functions 与项目日志。<br>`npx -y @supabase/mcp-server-supabase` | `通用` | — |
| **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `官方` | `MCP` | 在 MCP 客户端中查询 Terraform Registry 的提供程序和模块，并管理 HCP Terraform 工作区。<br>`codex mcp add terraform -- docker run -i --rm hashicorp/terraform-mcp-server` | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | — |
| **[Terraform Skill](https://github.com/antonbabenko/terraform-skill)** | `Skill` | 涵盖模块设计、自动化测试、CI/CD 流程与生产级基础设施实践的 Terraform 与 OpenTofu Agent 技能。 | `通用` | ⭐ 2.5k<br><sub>2026-11-19</sub> |
| **[GoLive Skill](https://github.com/mikehasa/golive-skill)** | `Skill` | 零依赖 Node CLI 与 Agent 技能，按检测、规划、审批、部署与验证流程帮产品一站式上线生产环境。 | `通用` | ⭐ 1.6k<br><sub>2026-10-11</sub> |
| **[AWS Architecture Diagram Skill](https://github.com/vidanov/aws-architecture-diagram-skill)** | `Skill` | 使用官方标准图标生成可编辑的 AWS 架构图，并支持多种格式导出。 | `Claude Code` `通用` | — |
| **[AWS Skills](https://github.com/zxkane/aws-skills)** | `Skill` | AWS 开发技能集，涵盖 CDK 最佳实践、成本优化与无服务器事件驱动架构模式。 | `Claude Code` `通用` | — |
| **[PinMe Deploy Skill](https://github.com/glitternetwork/pinme)** | `Skill` | 使用 PinMe 快速部署静态网站或全栈 Web 项目。 | `Claude Code` `通用` | — |
| **[Self-Host Skill](https://github.com/ajnart/self-host)** | `Skill` | 在自有服务器或 Homelab 硬件上快速部署并串联各类自托管应用服务。 | `Claude Code` `通用` | — |

## 编排与多代理协作

_多 Agent 协同、规划流水线、记忆层与工作流编排。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Honcho](https://github.com/plastic-labs/honcho)** `官方` | `工具` | Plastic Labs 官方有状态代理记忆库与 CLI/MCP 工具套件，为多端编码代理提供持续学习与记忆能力。 | `通用` `Claude Code` `Cursor` `DeepSeek Harness` | ⭐ 8.3k<br><sub>2026-11-25</sub> |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | 面向编码 Agent 的结构化工程工作流插件，内置方案设计、严格 TDD、系统化调试与子代理驱动开发。<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 327.5k<br><sub>2026-11-26</sub> |
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
| **[Harness Meta-Skill](https://github.com/revfactory/harness)** | `Skill` | 面向 Claude Code 的元技能，用于设计领域专属 Agent 团队、定义专业子代理并自动生成配套技能。 | `Claude Code` | ⭐ 9.4k<br><sub>2026-09-28</sub> |
| **[Autoresearch Skill](https://github.com/uditgoenka/autoresearch)** | `Skill` | 受 Karpathy autoresearch 启发的自主目标迭代技能，驱动代理持续执行修改、验证与保留/回滚闭环。 | `通用` `Claude Code` `OpenCode` | ⭐ 6.9k<br><sub>2026-10-31</sub> |
| **[CCG Workflow](https://github.com/fengshao1227/ccg-workflow)** | `Plugin` | 多模型协同工作流引擎插件，通过一条 /ccg:go 命令自动分析意图并编排 Codex、Gemini 与 Claude 协作执行。 | `Claude Code` `Codex` `Gemini CLI` `DeepSeek Harness` | ⭐ 6.0k<br><sub>2026-11-19</sub> |
| **[Obsidian Mind](https://github.com/breferrari/obsidian-mind)** | `工具` | 可自组织的 Obsidian 知识库模板与多端配置集，为 AI 编码代理提供持久化记忆底座。 | `Claude Code` `Codex` `Gemini CLI` `通用` | ⭐ 5.6k<br><sub>2026-10-17</sub> |
| **[Obsidian Second Brain](https://github.com/eugeniughelbur/obsidian-second-brain)** | `Plugin` | 基于 Obsidian Markdown 的跨代理持久化记忆插件，提供 48 条指令、语义检索、钩子及多端共享日志。 | `Claude Code` `Codex` `Cursor` `通用` | ⭐ 5.5k<br><sub>2026-11-26</sub> |
| **[Council of High Intelligence](https://github.com/0xNyk/council-of-high-intelligence)** | `Skill` | 多视角结构化审议技能，支持跨多款编码代理开展议会制、三方或双人辩论以辅助复杂决策。 | `Claude Code` `Codex` `Gemini CLI` `OpenCode` | ⭐ 4.9k<br><sub>2026-11-23</sub> |
| **[Agents Best Practices](https://github.com/DenisSergeevitch/agents-best-practices)** | `Skill` | 跨模型厂商的 Agent 最佳实践技能，沉淀 Codex、Claude Code 与高可靠智能体执行框架设计规范。 | `通用` | ⭐ 2.4k<br><sub>2026-10-19</sub> |
| **[Self-Improving Agent](https://github.com/pskoett/self-improving-agent)** | `Skill` | 跨会话记录经验教训、错误与功能需求以实现持续自我改进的 Agent 技能。 | `通用` | ⭐ 792<br><sub>2026-10-22</sub> |
| **[Emulo](https://github.com/ohad6k/emulo)** | `工具` | 从 Claude Code 与 Codex 会话日志中挖掘个人偏好并生成本地 you.md 智能体画像的工具。 | `Claude Code` `Codex` `Cursor` | ⭐ 306<br><sub>2026-10-12</sub> |
| **[AIWG (AI Writing & Workflow Guide)](https://github.com/jmagly/aiwg)** | `Plugin` | 跨端多智能体 SDLC 工作流框架，集成专家代理、技能、规则、MCP 工具与会话记忆。 | `Claude Code` `Codex` `GitHub Copilot` `Cursor` `+1` | ⭐ 233<br><sub>2026-11-26</sub> |
| **[AgentFund MCP](https://github.com/RioTheGreat-ai/agentfund-mcp)** | `MCP` | 基于 Base 链的 AI Agent 众筹与里程碑托管 MCP，支持提案管理、进度追踪与自动结算。 | `Claude Code` `通用` | — |
| **[AgentMemory](https://github.com/rohitg00/agentmemory)** | `Skill` | 跨会话持久化记忆插件与技能套件，支持记忆写入、检索、会话交接、复盘沉淀与隐私清理。 | `通用` `Claude Code` | — |
| **[agentMemory MCP](https://github.com/webzler/agentMemory)** | `MCP` | 零配置的本地 MCP 记忆服务器，适配 Claude Code、Cline、RooCode 与 Cursor 以持久保留项目上下文。 | `通用` | — |
| **[AgentTrace](https://github.com/luoyuctl/agenttrace)** | `Skill` | 审计 AI 编程会话的成本、失败记录、延迟、代码变更与 CI 门禁表现。 | `Claude Code` `通用` | — |
| **[AI Maestro](https://github.com/23blocks-OS/ai-maestro)** | `Plugin` | 带模块化技能系统、持久化记忆检索与跨代理通信的 AI Agent 编排器。 | `Claude Code` `通用` | — |
| **[AI Maestro Plugins](https://github.com/23blocks-OS/ai-maestro-plugins)** | `Plugin` | AI Maestro 官方插件合集，包含 150+ 角色人格、核心技能、身份管理与代理间消息协作能力。 | `Claude Code` `通用` | — |
| **[Archcore Skills](https://github.com/archcore-ai/archcore)** | `Skill` | 面向规格驱动开发的规划、文档化与评审技能集。 | `Claude Code` `通用` | — |
| **[Awesome Agentic Patterns](https://github.com/nibzard/awesome-agentic-patterns)** | `工具` | 精选生产级 AI Agent 架构与工作流设计模式目录，汇总实战验证的工程模式。 | `通用` | — |
| **[Blueprint Spec Skill](https://github.com/JuliusBrussee/blueprint)** | `Skill` | 规格驱动开发技能，将需求转化为蓝图设计、构建计划并验证实现结果。 | `Claude Code` `通用` | — |
| **[Claude Agents View](https://github.com/qaokss/claude-agents-view)** | `Plugin` | Claude Code 实时监控面板插件，以列表和拓扑图形式展示各会话中运行中的子代理、技能与执行计划。 | `Claude Code` | — |
| **[Context Architecture](https://github.com/sergioazoc/context-architecture)** | `Skill` | 面向 AI 编码时代的上下文架构方法论与模板，帮助组织仓库知识文档以提升 Agent 准确率。 | `通用` `Claude Code` | — |
| **[Court Skill](https://github.com/alexyc9381/court-skill)** | `Skill` | 通过控方、辩方、陪审团与法官多角色对抗辩论，对方案与创意进行压力测试。 | `Claude Code` `通用` | — |
| **[Crowdcast](https://github.com/TheQmaks/crowdcast)** | `Skill` | 零依赖多 Agent 社交模拟技能，生成多个 AI 角色在模拟平台互动讨论并输出预测报告。 | `Claude Code` `通用` | — |
| **[Deja Vu MCP](https://github.com/vshulcz/deja-vu)** | `MCP` | 面向 Claude Code、Codex 与 Cursor 的本地 MCP 记忆层，支持跨会话历史检索与经验复用。 | `Claude Code` `Codex` `Cursor` `通用` | — |
| **[Dory](https://github.com/tjqscott/dory)** | `Skill` | 使用关联 Wiki、调研结论与交接清单持续维护项目级 Agent 记忆。 | `Claude Code` `通用` | — |
| **[Feature Track](https://github.com/JunsW/feature-track)** | `Skill` | 仓库原生的共享特性记忆层，让多个编程 Agent 在状态、文档、决策与风险上保持一致。 | `Claude Code` `通用` | — |
| **[Git Context Controller](https://github.com/faugustdev/git-context-controller)** | `工具` | 类 Git 风格的 Agent 上下文管理框架，支持对大模型上下文执行提交、分支与合并操作。 | `通用` | — |
| **[Harness Evolver](https://github.com/raphaelchristi/harness-evolver)** | `Skill` | 结合 LangSmith 回归守护机制，持续迭代优化 Agent 提示词、路由策略、工具与架构。 | `Claude Code` `通用` | — |
| **[Imbue Blueprint](https://github.com/imbue-ai/blueprint)** | `Skill` | 面向编程 Agent 的规划副驾驶，自动探索代码库、澄清需求并生成可一次性执行的 Markdown 计划。 | `Claude Code` `通用` | — |
| **[Imprint](https://github.com/ilang-ai/Imprint)** | `Skill` | 可跨工具迁移的 AI 协作偏好档案，沉淀个人记忆、规划、审查、调试与测试习惯。 | `Claude Code` `通用` | — |
| **[Loki Mode](https://github.com/asklokesh/loki-mode)** | `Plugin` | 自主多 Agent 软件工厂插件，接收 GitHub Issue 或需求文档后端到端编排规划、编码、测试与交付。 | `Claude Code` `Codex` `Gemini CLI` | — |
| **[Memex MCP](https://github.com/STiFLeR7/memex)** | `MCP` | 开源 MCP 服务器与 Hook 服务，用于持久化沉淀 Claude Code 与 Codex 的工程上下文与架构决策。 | `Claude Code` `Codex` `通用` | — |
| **[n8n MCP](https://github.com/czlonkowski/n8n-mcp)** | `MCP` | 面向 n8n 的 MCP 服务器，支持 AI Agent 检索节点文档、校验参数并构建或运行 n8n 自动化工作流。<br>`npx -y n8n-mcp` | `通用` | — |
| **[n8n Skills](https://github.com/czlonkowski/n8n-skills)** | `Skill` | 精选 n8n 技能包，帮助 Claude Code 等 Agent 设计、校验并调试生产级 n8n 自动化工作流。 | `Claude Code` `通用` | — |
| **[Pi Agent for Claude](https://github.com/FazalAAli/pi-agent-for-claude)** | `Plugin` | Claude Code 扩展 Mod，新增基于 pi CLI 的多模型子代理类型并原生流式集成到 Claude Code 协作界面。 | `Claude Code` | — |
| **[PUA Skill](https://github.com/tanweai/pua)** | `Skill` | 高强度激励提示技能，驱动 AI Agent 在放弃前穷尽一切排查与解决思路。 | `Claude Code` `通用` | — |
| **[Repo Context Ledger](https://github.com/gviiisen/repo-context-ledger)** | `Skill` | 跨会话持久化经过验证的仓库上下文与架构决策，避免 Agent 重复摸索。 | `Claude Code` `通用` | — |
| **[Rote](https://github.com/trevhud/rote)** | `工具` | 将成熟 SKILL.md 技能编译为无大模型参与的确定性流水线，并重新封装为 MCP 工具供 Agent 调用。 | `通用` `Claude Code` | — |
| **[Ruflo (Claude Flow)](https://github.com/ruvnet/ruflo)** | `Plugin` | 面向 Claude Code 与 Codex 的多 Agent 蜂群编排平台，集成协同子代理、记忆层、技能系统与 MCP 工具。 | `Claude Code` `Codex` `通用` | — |
| **[Savia](https://github.com/gonzalezpazmonica/savia)** | `Plugin` | 不绑定厂商的工程治理与任务编排 Agent 套件，覆盖软件开发与项目管理全流程。 | `Claude Code` `通用` | — |
| **[Skills for Humanity](https://github.com/human-avatar/skills-for-humanity)** | `Skill` | 结构化思维方法论技能集，涵盖逻辑推理、决策分析、创意发散、伦理评估与战略思考。 | `Claude Code` `通用` | — |
| **[Subagent Tuner](https://github.com/Kruhlikau/subagent-tuner)** | `Plugin` | Claude Code 子代理调优 Mod，按任务类型自动推荐并配置各子代理的模型与推理强度。 | `Claude Code` | — |
| **[SwarmClaw](https://github.com/swarmclawai/swarmclaw)** | `Skill` | 驱动自托管多 Agent 运行时，跨多个编程 CLI 工具分发与协作执行任务。 | `Claude Code` `通用` | — |
| **[Vibe Check](https://github.com/TexasBedouin/vibe-check)** | `Skill` | 引导开发者从模糊的应用想法一步步梳理需求、用户流程并生成可落地的可视化蓝图。 | `Claude Code` `通用` | — |

## 数据、研究与知识

_联网检索、文档处理、数据分析、学术研究与知识库。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
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
| **[Screenpipe](https://github.com/screenpipe/screenpipe)** `官方` | `工具` | 本地优先的屏幕与音频记录引擎，配套技能可检索本地会议、屏幕与界面上下文。 | `Claude Code` `通用` | — |
| **[SocialCrawl Skills](https://github.com/socialcrawl/skills)** `官方` | `Skill` | SocialCrawl 官方数据采集技能，通过 API 获取社交媒体、电商商品、评论、转录文本及市场研究数据。 | `通用` `Claude Code` | — |
| **[AI Research SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs)** | `Skill` | 全面的开源 AI 科研与机器学习工程技能库，覆盖模型微调、RLHF、推理优化与评测实验。 | `通用` `Claude Code` | — |
| **[Last 30 Days Skill](https://github.com/mvanhorn/last30days-skill)** | `Skill` | 跨 Reddit、X、YouTube、Hacker News、Polymarket 与全网检索近 30 天动态并生成扎实综述的研究技能。 | `Claude Code` `Codex` `Gemini CLI` | ⭐ 75.8k<br><sub>2026-11-26</sub> |
| **[Academic Research Skills](https://github.com/Imbad0202/academic-research-skills)** | `Plugin` | 覆盖文献检索、论文撰写、同行评审与修改定稿全流程的 Claude Code 学术研究插件。 | `Claude Code` | ⭐ 58.7k<br><sub>2026-11-27</sub> |
| **[Scientific Agent Skills](https://github.com/K-Dense-AI/scientific-agent-skills)** | `Skill` | 包含 177 项经过验证的科研技能与上百个科学数据库，覆盖生物、化学、医学与药物研发领域。 | `Cursor` `Claude Code` `Codex` `Antigravity` | ⭐ 58.6k<br><sub>2026-11-23</sub> |
| **[Nature Skills](https://github.com/Yuan1z0825/nature-skills)** | `Skill` | 面向顶刊科研标准的 Agent 技能集，专注于符合 Nature 风格的学术英文润色与科研绘图。 | `Codex` | ⭐ 55.2k<br><sub>2026-11-26</sub> |
| **[Claude Video](https://github.com/bradautomates/claude-video)** | `Skill` | 让 Agent 具备“看懂视频”能力的技能包，支持下载视频、抽取关键帧并转写字幕以供分析。 | `Claude Code` `Codex` | ⭐ 21.9k<br><sub>2026-09-25</sub> |
| **[NotebookLM Py](https://github.com/teng-lin/notebooklm-py)** | `工具` | 非官方 Google NotebookLM Python SDK、命令行工具与 Agent 技能，支持全功能程序化调用。 | `Claude Code` `Codex` | ⭐ 20.4k<br><sub>2026-11-26</sub> |
| **[Academic Research Skills (Codex)](https://github.com/Imbad0202/academic-research-skills-codex)** | `Skill` | 面向 Codex 的学术研究技能套件，支持人机协同的文献综述、论文撰写与同行评审全流程。 | `Codex` `通用` | ⭐ 15.1k<br><sub>2026-11-26</sub> |
| **[UZI Skill](https://github.com/wbh604/UZI-Skill)** | `Plugin` | 面向 A 股、港股与美股的量化投研插件，集成 66 位投资大师角色、180 条量化规则与 17 种机构分析方法。 | `Claude Code` `Codex` `Cursor` `OpenCode` `+1` | ⭐ 7.7k<br><sub>2026-11-23</sub> |
| **[Geo-Sleuth](https://github.com/Oldcircle/geo-sleuth)** | `Skill` | 结合 OpenStreetMap 几何特征、地形天际线、卫星图与街景进行照片地理位置溯源的 OSINT 技能。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | ⭐ 7.6k<br><sub>2026-11-25</sub> |
| **[Lieflat Charts](https://github.com/larashero3-dotcom/lieflat-charts)** | `Skill` | 面向 AI Agent 的数据可视化技能，将数据快速生成精致且可交互的 HTML/SVG 图表与报告。 | `通用` `Claude Code` `Codex` | ⭐ 7.0k<br><sub>2026-11-12</sub> |
| **[LLM Wiki Compiler](https://github.com/atomicstrata/llm-wiki-compiler)** | `工具` | 受 Karpathy LLM Wiki 模式启发的知识编译器与技能，将原始资料编译为互相链接的 Markdown 知识库。 | `通用` | ⭐ 2.3k<br><sub>2026-11-25</sub> |
| **[Boss Zhipin Scraper](https://github.com/eatmoreduck/boss-zhipin-scraper)** | `Skill` | 基于 Chrome CDP 协议的 Boss 直聘职位抓取技能与工具，绕过字体反爬并输出明文薪资 JSON/CSV 与技能分析。 | `通用` | ⭐ 1.8k<br><sub>2026-11-03</sub> |
| **[ModSearch](https://github.com/liustack/modsearch)** | `Plugin` | 免费免 API Key 的联网搜索插件与技能桥接工具，为 DeepSeek Harness 等模型返回带引用的结构化 JSON 网页与 X 搜索证据。 | `DeepSeek Harness` `Claude Code` `Codex` `OpenCode` | ⭐ 1.0k<br><sub>2026-11-25</sub> |
| **[Claude Patent Creator](https://github.com/RobThePCGuy/Claude-Patent-Creator)** | `Plugin` | 集成 MCP 服务器、混合 RAG 检索与自主代理的美国专利撰写与检索 Claude Code 插件系统。 | `Claude Code` | ⭐ 217<br><sub>2026-11-26</sub> |
| **[MinerU Document Skill](https://github.com/Nebutra/MinerU-Skill)** | `Skill` | 基于 MinerU 的零依赖文档解析 CLI 与 Agent 技能，支持将 PDF、Office 文档和图片转为含公式与表格的 Markdown。 | `通用` | ⭐ 138<br><sub>2026-09-24</sub> |
| **[0xArchive Quant](https://github.com/0xArchiveIO/0xarchive-quant)** | `Skill` | 开发量化交易策略并基于 Hyperliquid 历史行情数据进行回测验证。 | `Claude Code` `通用` | — |
| **[AI Skills](https://github.com/sanjay3290/ai-skills)** | `Skill` | AI Agent 技能集合，内置自主深度研究工作流，支持规划、检索、阅读并汇总生成完整研究报告。 | `通用` `Claude Code` | — |
| **[Alpha Insights](https://github.com/Ericyoung-183/alpha-insights)** | `Skill` | 结构化商业研究技能，内置战略分析框架、证据评级体系与研究报告生成能力。 | `Claude Code` `通用` | — |
| **[AlterLab Academic Skills](https://github.com/AlterLab-IEU/AlterLab-Academic-Skills)** | `Skill` | 面向高等教育与科研工作的 186+ 学术研究技能包，覆盖 13 个学科领域。 | `Claude Code` `通用` | — |
| **[Arcmira Transcript Search](https://github.com/arcmira/mcp)** | `MCP` | 通过 MCP 与技能检索 YouTube 与播客字幕中的原话引用、品牌提及与赞助信息。 | `Claude Code` `通用` | — |
| **[arXiv MCP Server](https://github.com/blazickjp/arxiv-mcp-server)** | `MCP` | 面向学术文献研究的本地 arXiv MCP 服务器，支持论文检索、下载、LaTeX 章节解析与 BibTeX 管理。<br>`uvx arxiv-mcp-server` | `通用` | — |
| **[Browser Search](https://github.com/Johell1NS/browser-search)** | `Skill` | 支持多搜索引擎与隐身浏览模式的 AI Agent 网页搜索与抓取技能。 | `Claude Code` `通用` | — |
| **[Bullshit Detector](https://github.com/SerhiiKorniienko/bullshit-detector)** | `Skill` | 从媒体内容或 PDF 中提取论点，对照独立信源交叉核验并评估失实风险。 | `Claude Code` `通用` | — |
| **[Buyer Eval Skill](https://github.com/salespeak-ai/buyer-eval-skill)** | `Skill` | 系统化评估 B2B 供应商，核查产品宣称并按加权标准打分。 | `Claude Code` `通用` | — |
| **[Claude Ally Health](https://github.com/huifer/Claude-Ally-Health)** | `Skill` | 综合健康管理助手技能，用于解读体检与医疗报告、追踪健康指标并提供个性化建议。 | `Claude Code` `通用` | — |
| **[Claude Ecom](https://github.com/takechanman1228/claude-ecom)** | `Skill` | 根据订单 CSV 数据生成完整的电商经营复盘报告，涵盖核心 KPI、问题诊断与行动方案。 | `Claude Code` `通用` | — |
| **[Claude Persona](https://github.com/takechanman1228/claude-persona)** | `Skill` | 构建 AI 用户画像面板，用于模拟客户访谈、概念测试与消费者调研报告生成。 | `Claude Code` `通用` | — |
| **[Claude Scientific Skills](https://github.com/K-Dense-AI/claude-scientific-skills)** | `Skill` | 超过 125 个科研专用技能，覆盖生物信息学、化学信息学、临床研究与机器学习。 | `Claude Code` `通用` | — |
| **[Claude Video Plus](https://github.com/abe238/claude-video-plus)** | `Skill` | 对视频内容精准提问，仅检索并定位回答问题所需的章节、事实与画面片段。 | `Claude Code` `通用` | — |
| **[CSV Data Summarizer](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill)** | `Skill` | 自动分析 CSV 数据集，输出字段分布、缺失值统计与相关性摘要。 | `Claude Code` `通用` | — |
| **[DeepRead](https://github.com/xiehuan123/dsh-deepread)** | `Skill` | 深度精读文档技能，提供可溯源论点提取、结构化知识图谱与多文档对比分析。 | `Claude Code` `DeepSeek Harness` `通用` | — |
| **[DNA Claude Analysis](https://github.com/shmlkv/dna-claude-analysis)** | `Skill` | 个人基因组分析工具包，解析 23andMe/AncestryDNA 原始数据并生成涵盖 17 个维度的 HTML 仪表盘。 | `Claude Code` `通用` | — |
| **[Family History Research Skill](https://github.com/emaynard/claude-family-history-research-skill)** | `Skill` | 辅助规划与推进家族史及家谱学研究项目。 | `Claude Code` `通用` | — |
| **[Fly Mode](https://github.com/alextitonis/fly.ai)** | `Skill` | 基于果蝇脑连接组模型的实验性技能，以仿生神经网络视角生成响应。 | `Claude Code` `通用` | — |
| **[GH Star History](https://github.com/ykdojo/gh-star-history)** | `Skill` | 可视化对比 GitHub 仓库 Star 增长曲线，并展示标星用户的地域分布。 | `Claude Code` `通用` | — |
| **[HyperGrok Trading Desk](https://github.com/galleonlabs/hypergrok-trading-desk)** | `Skill` | 在 Hyperliquid 上协同执行市场研究、风控审查与人工审批驱动的交易流程。 | `Claude Code` `通用` | — |
| **[Jev Social](https://github.com/socai-io/jev-social)** | `Skill` | 基于真实浏览器取证调研 Instagram、TikTok 与 LinkedIn 社媒动态与账号表现。 | `Claude Code` `通用` | — |
| **[Junshi Research Strategist](https://github.com/junshi-research/research-junshi)** | `Skill` | 个性化科研策略助手，阅读你的论文、追踪前沿文献并提出排序后的研究构想与首轮实验方案。 | `Claude Code` `通用` | — |
| **[Jupyter MCP Server](https://github.com/datalayer/jupyter-mcp-server)** | `MCP` | 面向 Jupyter Notebook 的 MCP 服务器，支持 AI Agent 实时执行代码单元、读取输出并完成数据科学分析。<br>`uvx jupyter-mcp-server` | `通用` | — |
| **[Kaggle Skill](https://github.com/shepsci/kaggle-skill)** | `Skill` | 完整的 Kaggle 工作流集成，支持竞赛报告、数据集/模型下载、Notebook 运行与结果提交。 | `Claude Code` `通用` | — |
| **[Karpathy LLM Wiki](https://github.com/Astro-Han/karpathy-llm-wiki)** | `Skill` | Markdown 优先的个人 LLM Wiki 技能，从原始资料编译知识页并提供查询与一致性校验流。 | `Claude Code` `通用` | — |
| **[Krexa Skills](https://github.com/Krexa-xyz/skills)** | `Skill` | 通过 Krexa 研究、回测并部署量化交易策略。 | `Claude Code` `通用` | — |
| **[LLM Wiki CLI](https://github.com/JanYork/llm-wiki-cli)** | `Skill` | 通过命令行 Wiki 为编程 Agent 提供可溯源的持久化项目记忆与检索能力。 | `Claude Code` `通用` | — |
| **[LLM Wiki Plugin](https://github.com/praneybehl/llm-wiki-plugin)** | `Plugin` | 用于构建与维护个人 LLM 知识库的 Claude Code 插件，支持分片索引与快速检索。 | `Claude Code` | — |
| **[Materials Simulation Skills](https://github.com/HeshamFS/materials-simulation-skills)** | `Skill` | 计算材料科学专用技能集，涵盖数值稳定性、线性求解器、网格划分、仿真验证与后处理。 | `Claude Code` `通用` | — |
| **[New Term Radar](https://github.com/zhuyansen/new-term-radar)** | `Skill` | 跨全网信源追踪最新发布的 AI 模型、产品与热门开源仓库。 | `Claude Code` `通用` | — |
| **[Octav API Skill](https://github.com/Octav-Labs/octav-api-skill)** | `Skill` | 调用 Octav API 查询 20+ 公链的钱包余额、交易历史、DeFi 仓位与代币分析数据。 | `Claude Code` `通用` | — |
| **[Paper Search (OpenAlex)](https://github.com/ykdojo/paper-search)** | `Skill` | 免 API Key 检索 OpenAlex 2.5 亿+ 学术论文，支持关键词查询、DOI 检索、排序与分页。 | `Claude Code` `通用` | — |
| **[pdfToMarkdown](https://github.com/ThiloReintjes/pdftomarkdown-skill)** | `Plugin` | Claude Code 插件与技能，可将扫描件、表格、多栏排版及中日韩文档等复杂 PDF 高保真转换为 Markdown。 | `Claude Code` `通用` | — |
| **[Plasma Wiki Skill](https://github.com/plasma-ai/wiki)** | `Skill` | 面向 Agent 的结构化 Markdown 知识库管理技能，支持限定范围检索与确定性索引。 | `Claude Code` `通用` | — |
| **[Polaris DataInsight Doc Extract](https://github.com/jacob-g-park/polaris-datainsight-doc-extract)** | `Skill` | 通过 Polaris AI DataInsight API 从 DOCX、PPTX、XLSX、HWP、HWPX 等办公文档中提取结构化数据。 | `Claude Code` `通用` | — |
| **[Research Agent Skills](https://github.com/KalarisLabs/research-agent-skills)** | `Skill` | 面向学术研究的 Agent 技能集，覆盖文献综述、数据分析、论文写作、引用管理与同行评审。 | `Claude Code` `通用` | — |
| **[Research Field Onboarding](https://github.com/ljx-chase/research-field-onboarding)** | `Skill` | 通过前置知识诊断与循序渐进的引导课程，快速入门陌生研究领域。 | `Claude Code` `通用` | — |
| **[Research Toolkit](https://github.com/rrrrrredy/research-toolkit)** | `Skill` | 规划、撰写并审校带完整信源引用的深度研究报告。 | `Claude Code` `通用` | — |
| **[SearXNG MCP](https://github.com/ihor-sokoliuk/mcp-searxng)** | `MCP` | 基于自建 SearXNG 的隐私优先联网搜索 MCP 服务器，适配 Claude、Cursor 等主流 MCP 客户端。<br>`npx -y mcp-searxng` | `通用` | — |
| **[SwarmVault](https://github.com/swarmclawai/swarmvault)** | `工具` | 本地优先的 LLM Wiki 与知识图谱构建工具，为 AI Agent 提供结构化 RAG 知识库。 | `通用` `Claude Code` | — |
| **[Tapestry Skills](https://github.com/michalparkola/tapestry-skills)** | `Skill` | 内容提取与学习工作流技能集，包含网页文章提取、YouTube 字幕总结与迭代学习计划。 | `Claude Code` `通用` | — |
| **[TasteRay Skills](https://github.com/tasteray/skills)** | `Skill` | 通过自然对话构建用户画像，并提供影视、餐饮、商品、旅行与求职等个性化推荐。 | `Claude Code` `通用` | — |
| **[X Twitter Scraper Skill](https://github.com/Xquik-dev/x-twitter-scraper)** | `Skill` | 面向 Agent 的 X/Twitter 数据采集技能，支持推文搜索、用户查询、粉丝与互动指标分析。 | `Claude Code` `通用` | — |
| **[YouTube Full Skills](https://github.com/ZeroPointRepo/youtube-skills)** | `Skill` | 通过 TranscriptAPI 获取 YouTube 字幕文本、搜索视频并提取频道与播放列表数据。 | `Claude Code` `通用` | — |
| **[YouTube Transcript Skills](https://github.com/tubeagentkit/youtube-transcript-skills)** | `Skill` | 提取 YouTube 视频字幕，并支持按视频、频道与播放列表快速检索内容。 | `Claude Code` `通用` | — |

## 效率与协作

_文档、项目管理、日历、即时通讯与日常办公协作。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `官方` | `Skill` | Anthropic 官方维护的 Agent Skills 集合，覆盖文档制作（docx/pdf/pptx）、前端设计与 Skill 编写参考。<br>`npx skills add anthropics/skills` | `通用` `Claude Code` | ⭐ 201.1k<br><sub>2026-11-16</sub> |
| **[Obsidian Skills](https://github.com/obsidianmd/obsidian-skills)** `官方` | `Skill` | Obsidian 官方 Agent 技能包，让 AI 熟练操作 Obsidian 笔记库、Markdown、Bases 与 JSON Canvas。 | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 54.0k<br><sub>2026-11-26</sub> |
| **[Jane Street Agent Skills](https://github.com/janestreet/agent_skills)** `官方` | `Skill` | Jane Street 官方开源的 Agent 技能仓库，包含用于启发式教学的苏格拉底导师技能。 | `通用` | ⭐ 12.0k<br><sub>2026-11-17</sub> |
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
| **[Fireworks Tech Graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph)** | `Skill` | 根据自然语言生成高质量 SVG/PNG 技术架构图、UML 图及 AI Agent 工作流图示的技能。 | `Claude Code` `通用` | ⭐ 12.1k<br><sub>2026-11-26</sub> |
| **[Visual Explainer](https://github.com/nicobailon/visual-explainer)** | `Skill` | 将架构图、代码 Diff 审查、方案审计、数据表与项目复盘生成交互式 HTML 页面或演示文稿的技能。 | `Claude Code` `通用` | ⭐ 11.3k<br><sub>2026-11-25</sub> |
| **[Dashi PPT Skill](https://github.com/chuspeeism/dashi-ppt-skill)** | `Skill` | 支持多套视觉主题的演示文稿生成技能，可在浏览器中在线编辑并导出为 HTML、PDF 与 PPTX。 | `Claude Code` `通用` | ⭐ 11.2k<br><sub>2026-11-06</sub> |
| **[Draw.io Skill](https://github.com/Agents365-ai/drawio-skill)** | `Skill` | 从自然语言、代码、Terraform/K8s、SQL 或 OpenAPI 生成可编辑 draw.io 架构图并支持增量同步与校验的技能。 | `通用` `Claude Code` `Codex` | ⭐ 11.0k<br><sub>2026-11-26</sub> |
| **[Codex PPT Skill](https://github.com/ningzimu/codex-ppt-skill)** | `Skill` | 基于 GPT-Image-2 生成高视觉表现力 PPT 演示文稿的技能，兼容 Codex 及主流 Agent 工具。 | `通用` `Codex` `Claude Code` | ⭐ 8.2k<br><sub>2026-11-16</sub> |
| **[PeonPing](https://github.com/PeonPing/peon-ping)** | `工具` | 编码代理语音与桌面通知伴侣工具，内置魔兽苦工等语音包，支持多端 IDE 钩子与 MCP。 | `通用` `Claude Code` `Codex` `Cursor` `+3` | ⭐ 5.1k<br><sub>2026-11-06</sub> |
| **[Image to Editable PPT Skill](https://github.com/ningzimu/image-to-editable-ppt-skill)** | `Skill` | 可将幻灯片图片、PDF 及纯图 PPTX 文件还原为可编辑 PowerPoint 演示文稿的 Codex 技能。 | `Codex` | ⭐ 3.5k<br><sub>2026-09-16</sub> |
| **[Wondel.ai Skills](https://github.com/wondelai/skills)** | `Skill` | 提炼畅销商业、营销、UX 与工程经典方法论的技能库，包含 50 个 Agent 技能与 12 条引导工作流。 | `通用` | ⭐ 2.8k<br><sub>2026-11-21</sub> |
| **[EduLab](https://github.com/wy51ai/edulab)** | `Skill` | 面向数理化教学的 STEM 可视化技能集，可生成解析几何、立体几何、物理与化学教学演示动画。 | `Claude Code` | ⭐ 1.9k<br><sub>2026-10-23</sub> |
| **[Academic PPTX Skill](https://github.com/Gabberflast/academic-pptx-skill)** | `Skill` | 面向学术报告、研讨会、论文答辩与基金汇报的 PPTX 制作技能，强化论点结构与引文规范。 | `Claude Code` | ⭐ 1.7k<br><sub>2026-07-14</sub> |
| **[Jinba Consulting PPTX Skill](https://github.com/carnot-tech/jinba-consulting-pptx-skill)** | `Skill` | 面向 Claude Code 与 Codex 的咨询级 PPTX 生成技能，输出结构严谨、版式专业的商务演示文稿。 | `Claude Code` `Codex` | ⭐ 1.7k<br><sub>2026-11-26</sub> |
| **[Pretty Mermaid Skills](https://github.com/imxv/Pretty-mermaid-skills)** | `Skill` | 无需浏览器的 Mermaid 图表生成与渲染技能，支持 15 套主题、6 类图表及 SVG/终端 ASCII 批量输出。 | `通用` | ⭐ 1.6k<br><sub>2026-08-22</sub> |
| **[Learn from Materials](https://github.com/dmoshehun-prog/learn-from-materials)** | `Skill` | 将 PDF、书籍与学术论文转化为可溯源、可测验、可做笔记的交互式学习网页的 Agent 技能。 | `Claude Code` `Codex` | ⭐ 1.5k<br><sub>2026-10-19</sub> |
| **[JourniOne Planning Skills](https://github.com/JourniOne-ai/JourniOne-Planning-Skills)** | `Skill` | 旅行规划 Agent 技能，从行程灵感到逐日路线、带地图的可分享旅行手账，并按需衔接酒店与航班预订。 | `通用` | ⭐ 1.2k<br><sub>2026-11-25</sub> |
| **[Immortal Skill](https://github.com/agenmod/immortal-skill)** | `Skill` | 开源数字分身蒸馏技能，从微信、飞书、iMessage 与 Telegram 等聊天记录中提炼多维角色画像。 | `通用` | ⭐ 1.2k<br><sub>2026-04-15</sub> |
| **[OneWave AI Claude Skills](https://github.com/OneWave-AI/claude-skills)** | `Skill` | 覆盖销售、营销、设计、工程与智能体架构的 200+ 生产级 Claude Code 技能合集。 | `Claude Code` | ⭐ 449<br><sub>2026-10-20</sub> |
| **[Marp Slides Skill](https://github.com/robonuggets/marp-slides)** | `Skill` | 用于制作 Marp Markdown 演示文稿的 Claude Code 技能，内置 22 套示例模板、SVG 图表与仪表盘组件。 | `Claude Code` | ⭐ 337<br><sub>2026-04-08</sub> |
| **[Markdown Exporter](https://github.com/bowenliang123/markdown-exporter)** | `Skill` | 可将 Markdown 导出为 DOCX、PPTX、XLSX、PDF、PNG、HTML 等多种格式文件的 Agent 技能与 Dify 插件。 | `通用` | ⭐ 275<br><sub>2026-08-13</sub> |
| **[Claude Mermaid MCP](https://github.com/veelenga/claude-mermaid)** | `MCP` | 支持实时热重载预览 Mermaid 图表的 Claude Code MCP 服务器。 | `Claude Code` | ⭐ 223<br><sub>2026-11-23</sub> |
| **[Vibe Resume Skill](https://github.com/KevinYoung-Kw/vibe-resume-skill)** | `Skill` | 内置 12 套可投递 HTML/PDF 模板的 AI 简历生成与排版技能，支持按岗位 JD 定制简历。 | `Codex` `Claude Code` `Cursor` | ⭐ 107<br><sub>2026-10-02</sub> |
| **[Agent Cards Skill](https://github.com/agent-cards/skill)** | `Skill` | 为 AI Agent 管理预付虚拟 Visa 卡，通过 MCP 支持开卡、查余额、凭证查看与停卡。 | `Claude Code` `通用` | — |
| **[Bro Skill](https://github.com/luchasarie/bro-skill)** | `Skill` | 将晦涩冗长的技术回答或文本转化为通俗易懂的大白话解释。 | `Claude Code` `通用` | — |
| **[CC Arcade](https://github.com/sezaakgun/cc-arcade)** | `Plugin` | 零 Token 消耗的 Claude Code 终端 Mod，在等待 Claude 执行任务期间于输入框上方嵌入 2048、俄罗斯方块等小游戏。 | `Claude Code` | — |
| **[Claude Code Terminal Title](https://github.com/bluzername/claude-code-terminal-title)** | `Skill` | 为每个 Claude Code 终端窗口动态设置任务标题，方便在多窗口并行开发时快速区分。 | `Claude Code` | — |
| **[Claude EPUB Skill](https://github.com/smerchek/claude-epub-skill)** | `Skill` | 将 Markdown 文档、对话摘要或研究报告一键打包为可发送到 Kindle 的 EPUB 电子书。 | `Claude Code` `通用` | — |
| **[Claudemy](https://github.com/assafkip/claudemy)** | `Skill` | 自动调研主题并生成包含音频课程、知识卡片与随堂练习的微型学习课程。 | `Claude Code` `通用` | — |
| **[ClickUp CLI (cup)](https://github.com/krodak/clickup-cli)** | `Plugin` | 支持 40+ 命令的 ClickUp CLI 与 Claude Code 插件，轻松管理任务、迭代与工时追踪。 | `Claude Code` `通用` | — |
| **[Composio Awesome Claude Skills](https://github.com/ComposioHQ/awesome-claude-skills)** | `Skill` | Composio 出品的实用 Claude 技能集，涵盖深度写作、会议洞察、文件/发票整理与音视频工具。 | `Claude Code` `通用` | — |
| **[Devil Spec Reviewer](https://github.com/dhha22/devil-skill)** | `Skill` | 实现前需求与设计文档评审技能，专门挖掘 PRD 和方案中未写明的边界条件、缺失状态与策略漏洞。 | `通用` `Claude Code` | — |
| **[DOCX CLI Skill](https://github.com/kklimuk/docx-cli)** | `Skill` | 通过命令行编辑 Word 文档，支持修订追踪、批注、表格与排版格式调整。 | `Claude Code` `通用` | — |
| **[Factory Floor](https://github.com/Swiftner/Factory-Floor)** | `Skill` | 融合约束理论与品牌增长框架的创业教练技能，帮助创始人识别并突破核心业务瓶颈。 | `Claude Code` `通用` | — |
| **[Google Workspace CLI](https://github.com/googleworkspace/cli)** | `工具` | 面向终端与 AI Agent 的 Google Workspace CLI 及技能命令套件，覆盖云盘、邮件、文档、表格与管理接口。 | `通用` `Claude Code` | — |
| **[Google Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp)** | `MCP` | 功能完善的 Google Workspace MCP 服务器，覆盖 Gmail、日历、云盘、文档、表格、幻灯片与任务管理。<br>`uvx workspace-mcp` | `通用` | — |
| **[Headcount](https://github.com/cbrock84/headcount)** | `Skill` | 覆盖战略、财务、运营与安全等企业核心职能角色的商业技能库。 | `Claude Code` `通用` | — |
| **[HubSpot Admin Skills](https://github.com/TomGranot/hubspot-admin-skills)** | `Skill` | 面向 HubSpot CRM 的全流程运维技能包，覆盖审计、数据清洗、信息补全与自动化维护。 | `Claude Code` `通用` | — |
| **[ITR Wala](https://github.com/karanb192/itr-wala)** | `Skill` | 基于确定性税务引擎辅助准备印度 ITR-1 至 ITR-4 个人所得税申报表。 | `Claude Code` `通用` | — |
| **[Job Application Agent](https://github.com/vaibhavarora14/job-application-agent)** | `Skill` | 基于真实个人履历事实，自动发现、评估、准备并跟踪求职投递全流程。 | `Claude Code` `通用` | — |
| **[Kanban Skill](https://github.com/mattjoyce/kanban-skill)** | `Skill` | 无数据库的 Markdown 看板技能，以带 YAML 元数据的本地文件管理任务状态、优先级与依赖。 | `Claude Code` `通用` | — |
| **[Linear Claude Skill](https://github.com/wrsmith108/linear-claude-skill)** | `Skill` | 结合 MCP、SDK 脚本与 GraphQL 回退机制稳定管理 Linear 议题、项目与团队协作。 | `Claude Code` `通用` | — |
| **[Linear CLI Skill](https://github.com/Valian/linear-cli-skill)** | `Skill` | 轻量级 Linear CLI 与配套技能，无需部署完整 MCP 服务器即可高效操作 Linear 任务。 | `Claude Code` `通用` | — |
| **[Maoxuan Skill](https://github.com/leezythu/maoxuan-skill)** | `Skill` | 毛选思维框架中文决策技能，提炼核心心智模型与决策启发式方法用于复杂问题分析与策略制定。 | `通用` `Claude Code` | — |
| **[Master Skill](https://github.com/swaylq/master-skill)** | `Skill` | 大师元技能，可自动调研并蒸馏整个细分行业的资深心智模型、工作流与工具栈，生成可装载的行业 Master OS 技能。<br>`npx skills add swaylq/master-skill` | `通用` `Claude Code` `Codex` | — |
| **[MoodTrip Hotel Search](https://github.com/adiny/moodtrip-hotel-search)** | `MCP` | 通过 MoodTrip.ai MCP 提供语义酒店检索、比价、评价分析与预订跳转能力。 | `Claude Code` `通用` | — |
| **[OpenPaw](https://github.com/daxaur/openpaw)** | `Plugin` | 包含 38 个技能的个人助手套装，为 Claude Code 集成 Git、Telegram、Discord、Obsidian 与每日简报。 | `Claude Code` | — |
| **[PlaceCall](https://github.com/voygr-tech/placecall)** | `Skill` | 通过 PlaceCall 自动致电美国本地商家，完成预约、咨询与询价任务。 | `Claude Code` `通用` | — |
| **[PM Claude Skills (1100+)](https://github.com/mohitagw15856/pm-claude-skills)** | `Skill` | 覆盖 35 个职业领域、超 1,100 个专业技能的庞大技能库，包含 PRD、复盘报告与谈判模板。 | `Claude Code` `通用` | — |
| **[PM Skills (Product on Purpose)](https://github.com/product-on-purpose/pm-skills)** | `Skill` | 包含 68 个产品管理技能的完整工具库，覆盖三钻生命周期、标准模板与产研工作流。 | `Claude Code` `通用` | — |
| **[Product Decision Agent](https://github.com/atdy/maoxuan-product-agent)** | `Skill` | 中文互联网产品决策 Agent 技能，覆盖需求分析、PRD、优先级排期、增长诊断、数据指标与跨部门协作决策。 | `通用` `Claude Code` | — |
| **[Product Manager Skills (Dean Peters)](https://github.com/deanpeters/Product-Manager-Skills)** | `Skill` | 产品经理技能库，涵盖需求探索、优先级排序、PRD 撰写、路线图规划与 SaaS 指标分析。 | `Claude Code` `通用` | — |
| **[Public Google Drive Skill](https://github.com/zagmoai/public-google-drive)** | `Skill` | 无需登录 Google 账号即可创建、编辑并生成可分享链接的在线文档与电子表格。 | `Claude Code` `通用` | — |
| **[Satori](https://github.com/MetcalfSolutions/Satori)** | `Skill` | 支持围绕压力管理、人际关系与人生重大决策展开结构化反思对话。 | `Claude Code` `通用` | — |
| **[Senior PM Agent Skills](https://github.com/Digidai/product-manager-skills)** | `Skill` | 资深产品经理技能体系，包含 6 大知识域、12 套模板与 30+ 框架，覆盖战略、交付与 AI 产品打磨。 | `Claude Code` `通用` | — |
| **[Structured Thinking Skills](https://github.com/ysskrishna/ai-agent-skills)** | `Skill` | 面向 AI Agent 的结构化思维技能集合，覆盖头脑风暴、决策分析与系统性思考框架。 | `通用` `Claude Code` | — |
| **[Switch AI Teammates](https://github.com/sandbox-quantum/switch)** | `工具` | 开源协作桥接工具，将 AI 工程与办公代理直接接入 Slack、Teams、Discord、Telegram 与 Mattermost。 | `通用` | — |
| **[tlgr Telegram Skill](https://github.com/tlgrcli/tlgr)** | `Skill` | 通过 tlgr 命令行工具读取、检索并管理 Telegram 聊天会话。 | `Claude Code` `通用` | — |
| **[Universal Exam Cram Coach](https://github.com/ZeKaiNie/universal-examprep-skill)** | `Skill` | 基于个人笔记生成带出处解析与针对性练习题的通用备考辅导技能。 | `Claude Code` `通用` | — |

## 内容与营销

_写作、SEO、社媒发布、音视频制作与增长营销。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Hyperframes](https://github.com/heygen-com/hyperframes)** `官方` | `Plugin` | HeyGen 官方开源的 AI 视频编辑插件与 MCP 工具集，支持用 HTML 编写动效并渲染输出 MP4。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 90.9k<br><sub>2026-11-27</sub> |
| **[Video Use](https://github.com/browser-use/video-use)** `官方` | `Skill` | Browser Use 官方推出的 Agent 视频编辑技能，赋能编码 Agent 以程序化方式剪辑与处理视频。 | `通用` | ⭐ 31.6k<br><sub>2026-10-08</sub> |
| **[Remotion Agent Skills](https://github.com/remotion-dev/skills)** `官方` | `Skill` | Remotion 官方维护的 Agent 技能集合，用于以 React 代码化方式创作和渲染编程视频。 | `通用` | ⭐ 8.1k<br><sub>2026-11-24</sub> |
| **[Higgsfield AI Skills](https://github.com/higgsfield-ai/skills)** `官方` | `Skill` | Higgsfield AI 官方技能集，覆盖品牌视觉套件、产品摄影、口播/解说视频及 YouTube 封面图生成。 | `Claude Code` `Codex` `Cursor` | ⭐ 2.1k<br><sub>2026-11-05</sub> |
| **[Bria AI Image Skill](https://github.com/Bria-AI/bria-skill)** `官方` | `Skill` | 通过 Bria.ai API 实现文生图、自然语言修图与背景抠图，输出透明背景 PNG。 | `Claude Code` `通用` | — |
| **[deAPI Media Skills](https://github.com/deapi-ai/claude-code-skills)** `官方` | `Skill` | 基于 deAPI 的全能 AI 媒体技能包，支持 Flux 生图、语音合成、音视频转录、OCR、视频生成与超分。 | `Claude Code` `Cursor` `Windsurf` `通用` | — |
| **[HeyGen Agent Skills](https://github.com/heygen-com/skills)** `官方` | `Skill` | HeyGen 官方 AI Agent 技能包，支持通过 HeyGen v3 API 完成数字人创建与自动化视频制作。 | `通用` `Claude Code` | — |
| **[Linked API LinkedIn Skills](https://github.com/Linked-API/linkedin-skills)** `官方` | `Skill` | 基于 Linked API 的领英自动化技能，支持档案检索、消息触达、人脉管理、发帖与 Sales Navigator。 | `Claude Code` `通用` | — |
| **[Microsoft Clarity MCP](https://github.com/microsoft/clarity-mcp-server)** `官方` | `MCP` | 微软官方 Clarity MCP 服务器，用于查询网站用户体验分析、流量指标与行为洞察数据。<br>`npx -y @microsoft/clarity-mcp-server` | `通用` | — |
| **[NoizAI TTS Skills](https://github.com/NoizAI/skills)** `官方` | `Skill` | 拟人化语音合成（TTS）工作流技能，支持本地与云端引擎、风格预设及应用交付脚本。 | `Claude Code` `通用` | — |
| **[Sonilo Video-to-Music](https://github.com/sonilo-ai/skills)** `官方` | `Skill` | 使用 Sonilo 为成片视频自动创作贴合节奏的原创配乐。 | `Claude Code` `通用` | — |
| **[VideoDB Skills](https://github.com/video-db/skills)** `官方` | `Skill` | VideoDB 官方音视频技能包，支持音视频入库、语义检索、剪辑、生成与流式播放。 | `Claude Code` `通用` | — |
| **[Humanizer](https://github.com/blader/humanizer)** | `Skill` | 用于识别并消除文本中典型 AI 写作痕迹、让表达更自然贴近真人风格的写作技能。 | `Claude Code` `Codex` `Cursor` | ⭐ 74.0k<br><sub>2026-11-19</sub> |
| **[Marketing Skills](https://github.com/coreyhaines31/marketingskills)** | `Skill` | 面向 AI Agent 的营销技能合集，覆盖转化率优化、文案撰写、SEO、数据分析与增长工程。 | `Claude Code` `Codex` | ⭐ 62.9k<br><sub>2026-11-26</sub> |
| **[Claude SEO](https://github.com/AgriciDaniel/claude-seo)** | `Plugin` | 集成 26 个子技能与 19 个子代理的 Claude Code 全栈 SEO 插件，覆盖技术 SEO、GEO 优化与报表生成。 | `Claude Code` | ⭐ 32.7k<br><sub>2026-11-26</sub> |
| **[Baoyu Skills](https://github.com/JimLiu/baoyu-skills)** | `Skill` | 由宝玉开源的创作者 Agent 技能合集，涵盖小红书信息图生成、微信公众号排版与内容创作流。 | `Claude Code` `Codex` | ⭐ 27.9k<br><sub>2026-11-20</sub> |
| **[Humanizer-zh](https://github.com/op7418/Humanizer-zh)** | `Skill` | Humanizer 技能的中文汉化版本，专门用于识别并改写中文文案中的 AI 生成腔调。 | `Claude Code` | ⭐ 23.9k<br><sub>2026-09-23</sub> |
| **[Video Shotcraft](https://github.com/Vincentwei1021/video-shotcraft)** | `Skill` | 基于 Remotion 的产品宣传片制作技能，内置 124 张分镜配方卡、卡点同步与剪映工程导出。 | `Claude Code` `Codex` | ⭐ 22.8k<br><sub>2026-11-25</sub> |
| **[Brag](https://github.com/latent-spaces/brag)** | `Skill` | 一键将刚完成的开发项目转化为可分享产品发布短视频的 Agent 营销技能。 | `Claude Code` `Codex` `OpenCode` | ⭐ 22.7k<br><sub>2026-11-15</sub> |
| **[Lemo Opuscar](https://github.com/lemomo-ai/lemo-opuscar)** | `Plugin` | 面向 Claude Code 的代码制片风格工具箱插件，无需视频生成模型即可用 99 种现成风格创作短片。 | `Claude Code` | ⭐ 21.6k<br><sub>2026-11-26</sub> |
| **[Stop Slop](https://github.com/hardikpandya/stop-slop)** | `Skill` | 专注于去除文本中常见 AI 套话与机械腔调的精简写作润色技能文件。 | `通用` | ⭐ 19.2k<br><sub>2026-03-17</sub> |
| **[dbskill](https://github.com/dontbesilent2025/dbskill)** | `Skill` | dontbesilent 开源的商业诊断、内容创作与营销增长全套实战 Agent Skills。 | `Claude Code` `通用` | ⭐ 11.6k<br><sub>2026-11-17</sub> |
| **[Lieflat Less AI Tone](https://github.com/larashero3-dotcom/lieflat-less-ai-tone)** | `Skill` | 基于 520 万字语料统计研究的去 AI 味写作技能，精准检测并改写机械化表达，还原自然文风。 | `通用` | ⭐ 8.8k<br><sub>2026-11-11</sub> |
| **[Stickman Video Director](https://github.com/kaomei/stickman-video-director)** | `Skill` | 将脚本一键制作成火柴人动画解说视频的 Agent 技能，内置 20+ 风格、配音、字幕与音效生成。 | `通用` `Claude Code` `Codex` | ⭐ 8.5k<br><sub>2026-11-24</sub> |
| **[Seedance 2.0 Filmmaking](https://github.com/Emily2040/seedance-2.0)** | `Skill` | 面向 Seedance 2.0 的四模态 AI 影视制作流水线与提示词编排技能集。 | `通用` | ⭐ 8.3k<br><sub>2026-10-03</sub> |
| **[Guizang Social Card Skill](https://github.com/op7418/guizang-social-card-skill)** | `Skill` | 面向小红书图文卡片与微信公众号封面的生成技能，内置 28 种排版与 10 套主题，支持 HTML 转 PNG 渲染。 | `Claude Code` `Codex` | ⭐ 8.3k<br><sub>2026-10-30</sub> |
| **[Handraw Style](https://github.com/yang0/handraw-style)** | `Skill` | 收录 200+ 种编号手绘风格、配色与版式模板的双语提示词画廊 Agent 技能。 | `通用` | ⭐ 8.2k<br><sub>2026-11-23</sub> |
| **[Huashu Art Motion](https://github.com/alchaincyf/huashu-art-motion)** | `Skill` | 艺术动画生成技能，提供 35 种艺术风格与 9 种解说动画语法，用代码驱动画面动态呈现。 | `通用` `Claude Code` `Codex` | ⭐ 7.8k<br><sub>2026-11-18</sub> |
| **[YouTube Agent Skill](https://github.com/Jakeschincariol/youtube-agent-skill)** | `Skill` | 包含 11 项 YouTube 频道运营技能的套件，涵盖开场钩子评分、标题封面校验、完播率分析与短视频切片。 | `Claude Code` | ⭐ 7.6k<br><sub>2026-09-16</sub> |
| **[Shuohao Short-Drama Skills](https://github.com/eternityspring/shuohao-skills)** | `Skill` | AI 短剧制作全流程技能集，覆盖角色设定、改编大纲、场景道具、剧本创作与分镜切分。 | `Claude Code` `Codex` `通用` | ⭐ 7.2k<br><sub>2026-11-09</sub> |
| **[I'm Not AI (Korean Humanizer)](https://github.com/epoko77-ai/im-not-ai)** | `Skill` | 韩语去 AI 味文本润色技能，能够检测并改写翻译腔、机械排比等 70 余种 AI 写作痕迹。 | `Claude Code` `Codex` `Gemini CLI` `GitHub Copilot` `+1` | ⭐ 6.8k<br><sub>2026-11-23</sub> |
| **[Avoid AI Writing](https://github.com/conorbronsdon/avoid-ai-writing)** | `Skill` | 集成检测器与 Vale 规则的写作审计与改写技能，用于识别并消除常见 AI 腔调与套话。 | `通用` `Claude Code` `Codex` `Cursor` | ⭐ 6.4k<br><sub>2026-11-24</sub> |
| **[Human Writing](https://github.com/KKKKhazix/human-writing)** | `Skill` | 开箱即用的中文创作与改稿技能，消除模板化表达，让 AI 输出具备真实具体的人味与口语质感。 | `通用` `Claude Code` | ⭐ 4.8k<br><sub>2026-11-15</sub> |
| **[OneTake Motion](https://github.com/feitangyuan/onetake)** | `Skill` | 一镜到底动态宣传片制作技能，帮助编码代理创作连续镜头转场的产品发布片与功能演示视频。 | `通用` `Claude Code` | ⭐ 4.5k<br><sub>2026-11-19</sub> |
| **[Sepia](https://github.com/Nanako0129/sepia)** | `Skill` | 去 AI 味写作技能，提供小说叙事结构修复与贴合发表场景的专业散文润色规则。 | `通用` | ⭐ 4.0k<br><sub>2026-11-25</sub> |
| **[Anything2Explainer](https://github.com/Vincentwei1021/anything2explainer)** | `Skill` | 将任意主题一键转化为 Remotion 渲染的动态图形讲解视频，自带中英文配音、字幕与章节进度条。 | `Claude Code` `Codex` | ⭐ 3.7k<br><sub>2026-11-25</sub> |
| **[Yomiyasu](https://github.com/nanaism/yomiyasu)** | `Skill` | 用于将 AI 生成的日语文本推敲润色为自然流畅日语表达的 Agent 技能。 | `Claude Code` `Codex` `Cursor` | ⭐ 3.5k<br><sub>2026-11-25</sub> |
| **[Huashu Motion](https://github.com/alchaincyf/huashu-motion)** | `Skill` | 让编程 Agent 一键生成商业级产品宣传片，支持配乐制作与指着画面进行帧级修改。 | `Claude Code` `Codex` | ⭐ 3.2k<br><sub>2026-11-23</sub> |
| **[Native Subtitle Quote Image](https://github.com/chengyi-ai/native-subtitle-quote-image)** | `Skill` | 保留视频内嵌字幕并精确取帧，自动拼接生成 3:4 社交长图金句卡片的 Agent 技能。 | `Claude Code` `Codex` | ⭐ 3.0k<br><sub>2026-11-06</sub> |
| **[ManimGX](https://github.com/academa-labs/manimgx)** | `工具` | 面向 AI Agent 的高性能动画引擎，结合 Manim Python API 与 Rust GPU 内核渲染数学与 3D 视频。 | `通用` | ⭐ 2.9k<br><sub>2026-11-23</sub> |
| **[Claude Code Video Toolkit](https://github.com/digitalsamba/claude-code-video-toolkit)** | `工具` | 面向 Claude Code 的端到端视频制作工具包，整合脚本生成、AI 配音、配乐、视频片段与低成本开源渲染。 | `Claude Code` `Codex` | ⭐ 2.8k<br><sub>2026-11-27</sub> |
| **[Video TalkCraft](https://github.com/Vincentwei1021/video-talkcraft)** | `Skill` | 面向口播讲解视频的动效工作室技能，内置词级音画同步、109 种动效配方卡与 Remotion 渲染管线。 | `Claude Code` `Codex` | ⭐ 2.6k<br><sub>2026-11-25</sub> |
| **[Natural Japanese](https://github.com/coji/natural-japanese)** | `Skill` | 面向商务日语写作与改写的 Agent 技能，结合词法检查与语料评测产出清晰自然的日语内容。 | `通用` | ⭐ 2.1k<br><sub>2026-11-06</sub> |
| **[MotionMaxxing](https://github.com/Tejashmakwana/motionmaxxing)** | `Skill` | 专注于提升代码生成动态影像审美的 Agent 技能，将普通 AI 视频打磨为专业动效设计师水准成片。 | `Claude Code` | ⭐ 1.9k<br><sub>2026-10-06</sub> |
| **[E-Commerce Visual Copywriting Skill](https://github.com/feichanggege/ecommerce-visual-copywriting-skill)** | `Skill` | 电商视觉与文案设计 SOP 技能，覆盖主图策划、A+ 详情页、多语本地化、合规检查与生图提示词生成。 | `通用` | ⭐ 1.5k<br><sub>2026-10-30</sub> |
| **[Cinetic](https://github.com/Leonxlnx/cinetic)** | `Skill` | 由编程 Agent 执导的电影感产品发布片与代码化动效制作技能，基于 Remotion 构建。 | `Claude Code` | ⭐ 1.4k<br><sub>2026-11-27</sub> |
| **[CapCut CLI](https://github.com/renezander030/capcut-cli)** | `工具` | 可直接读写剪映与 CapCut 本地草稿的命令行工具与插件，支持字幕、变速、模板套用与长视频切片。 | `Claude Code` | ⭐ 1.3k<br><sub>2026-11-24</sub> |
| **[Speak Human TW](https://github.com/Raymondhou0917/speak-human-tw)** | `Skill` | 繁体中文去 AI 味改写技能，识别 38 种机器写作痕迹并顺手校正台湾本地用语与标点规范。 | `Claude Code` `Codex` `Cursor` | ⭐ 1.2k<br><sub>2026-11-26</sub> |
| **[Violin](https://github.com/shang-zhu/violin)** | `Skill` | 开源视频翻译与配音技能，整合语音识别、翻译提示词与自动化音视频合成管线。 | `Claude Code` | ⭐ 1.1k<br><sub>2026-09-04</sub> |
| **[Simplified Technical English](https://github.com/0xpili/simplified-technical-english)** | `Skill` | 让大模型严格遵循 ASD-STE100 简化技术英语规范的技能，内置核准词表与自动校验脚本。 | `Claude Code` | ⭐ 1.0k<br><sub>2026-08-16</sub> |
| **[Guizang Product Video Skill](https://github.com/op7418/guizang-product-video-skill)** | `Skill` | 归藏出品的产品宣传片技能，复用真实产品组件与设计语言，一站式完成分镜文案、原创配乐、音效与视频渲染。 | `Claude Code` `Codex` | ⭐ 977<br><sub>2026-10-09</sub> |
| **[Yuwen Publish Precheck](https://github.com/yuwen-cool/yuwen-publish-precheck)** | `Skill` | 基于平台官方规则的抖音、小红书与视频号发布前内容合规自审技能，支持本地规则库沉淀。 | `通用` | ⭐ 821<br><sub>2026-10-08</sub> |
| **[Qu AI Wei (Chinese Humanizer)](https://github.com/LifelongLazyLearner/qu-ai-wei)** | `Skill` | 去除简体中文 AI 写作痕迹与机械化表达的文案润色技能。 | `通用` | ⭐ 791<br><sub>2026-11-24</sub> |
| **[Visual Skills](https://github.com/smixs/visual-skills)** | `Skill` | 面向 AI 影像创作的导演技能集，涵盖电影戏剧构作及主流图像与视频模型提示词语法。 | `Claude Code` `Cursor` | ⭐ 771<br><sub>2026-11-06</sub> |
| **[Stick Scene](https://github.com/nilbuild/stick-scene)** | `Skill` | 用于绘制和生成火柴人动画视觉场景与演示图解的 Agent 技能。 | `通用` | ⭐ 706<br><sub>2026-11-16</sub> |
| **[Simon Video Skills](https://github.com/trustfuture/simon-skills)** | `Skill` | 面向不露脸视频创作的 AI 技能合集，支持调查长片与手绘白板视频的一键出片、配音字幕及多平台文案。 | `Claude Code` `Codex` | ⭐ 559<br><sub>2026-10-13</sub> |
| **[Social Media Skills](https://github.com/social-media-skills/skills)** | `Skill` | 包含 106 项社媒运营技能的 Agent 技能库，覆盖策略、写作、视频、设计、发布与增长分析。 | `通用` | ⭐ 439<br><sub>2026-10-15</sub> |
| **[Lemo Wake](https://github.com/lemomo-ai/lemo-wake)** | `Plugin` | 将单张静态图片转化为约 5 秒无缝循环动图（MP4/GIF/WebP/Live Photo）的 Claude Code 插件。 | `Claude Code` | ⭐ 398<br><sub>2026-10-17</sub> |
| **[SEO & GEO Claude Skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills)** | `Skill` | 涵盖研究、优化与监测流程的 20 项 SEO 及生成式引擎优化（GEO）Agent 技能合集。 | `通用` | ⭐ 256<br><sub>2026-09-04</sub> |
| **[Podcast to Article](https://github.com/orange2ai/podcast-to-article)** | `Skill` | 将多人对谈播客逐字稿重构、校准、精简并去 AI 味整理为可发布长文的 Agent 技能。 | `通用` | ⭐ 198<br><sub>2026-10-08</sub> |
| **[Not-Ai Writing Skill](https://github.com/udaysharmadev/Not-Ai)** | `Skill` | 注重自然真实文风的写作 Agent 技能，适用于文章、社交动态、邮件与 GitHub README 润色。 | `通用` | ⭐ 165<br><sub>2026-10-30</sub> |
| **[HyperFX Marketing Skills](https://github.com/hyperfx-ai/marketing-skills)** | `Skill` | 基于 Hyper MCP 的营销 Agent 技能集，涵盖信息流广告投放、社媒、SEO、竞品调研与数据分析。 | `通用` | ⭐ 124<br><sub>2026-11-26</sub> |
| **[AI Shortfilm Prompts](https://github.com/jnMetaCode/ai-shortfilm-prompts)** | `Skill` | 将任意故事创意转化为电影级文生视频提示词，适配 Sora、可灵、Veo 与 Seedance。 | `Claude Code` `通用` | — |
| **[AlterLab Creative Tech Skills](https://github.com/AlterLab-IEU/AlterLab-FC-Skills)** | `Skill` | 面向创意科技工作流的 72 个 Agent 技能集合，覆盖 11 个跨学科领域。 | `Claude Code` `通用` | — |
| **[Anidoodle](https://github.com/alexgreensh/anidoodle)** | `Skill` | 以代码方式创作手绘风格插画、动画、贴纸与微短片。 | `Claude Code` `通用` | — |
| **[Awesome Seedance Prompts Skills](https://github.com/AtlasCloudAI/awesome-seedance-2.5-prompts-skills)** | `Skill` | 面向 Seedance 2.5 视频生成的分镜规划与提示词创作技能集。 | `Claude Code` `通用` | — |
| **[Backlink Guard](https://github.com/zhuyansen/backlink-guard)** | `Skill` | 检测网站外链与导航目录中的死链与垃圾外链风险，辅助 SEO 维护。 | `Claude Code` `通用` | — |
| **[Claude AI Music Skills](https://github.com/bitwize-music-studio/claude-ai-music-skills)** | `Plugin` | 面向 AI 音乐创作的 Claude Code 插件，涵盖作词、Suno 风格提示、分轨混音、母带处理与发行。 | `Claude Code` | — |
| **[Claude Real Video](https://github.com/HUANGCHIHHUNGLeo/claude-real-video)** | `Skill` | 通过场景感知关键帧与带时间戳字幕，让 Claude 等大模型真正“看懂”视频内容。 | `Claude Code` `通用` | — |
| **[ClawFu Marketing MCP Skills](https://github.com/guia-matthieu/clawfu-skills)** | `MCP` | 汇聚 169 个大师级营销方法论技能的 MCP 服务，内置品牌记忆与转化文案体系。 | `Claude Code` `通用` | — |
| **[CognyAI Marketing Skills](https://github.com/cognyai/claude-code-marketing-skills)** | `Skill` | 面向增长营销的技能集，涵盖 SEO 审计、落地页诊断、竞品分析、广告文案与线索筛选。 | `Claude Code` `通用` | — |
| **[Creative Director Skill](https://github.com/smixs/creative-director-skill)** | `Skill` | AI 创意总监技能，提供创意发散、方案评分、递归打磨与叙事框架支持。 | `Claude Code` `通用` | — |
| **[Curviate Plugin](https://github.com/Curviate/curviate-plugin)** | `Plugin` | 基于 Curviate CLI 的 LinkedIn 自动化插件与技能套件，覆盖人脉检索、消息、发帖及招聘等工作流。 | `通用` `Claude Code` | — |
| **[Dashmotion](https://github.com/csthink/dashmotion)** | `Skill` | 将文字描述或 Mermaid 源码转化为独立可运行的动态技术架构图。 | `Claude Code` `通用` | — |
| **[Dev GTM Claude Skills](https://github.com/Infrasity-Labs/dev-gtm-claude-skills)** | `Skill` | 面向开发者产品的 GTM 技能集，涵盖发布规划、产品定位与外呼触达流程。 | `Claude Code` `通用` | — |
| **[DevMarketing Skills](https://github.com/jonathimer/devmarketing-skills)** | `Skill` | 面向开发者工具的 33 个增长营销技能，涵盖 HN 策略、技术教程、文档营销与 DevTools SEO。 | `Claude Code` `通用` | — |
| **[Ecommerce Image Skills](https://github.com/xianyu110/ecommerce-image-skills)** | `Skill` | 电商视觉图片制作技能包，覆盖商品主图、卖点信息图与亚马逊详情页素材。 | `Claude Code` `通用` | — |
| **[Ecommerce Video Skills](https://github.com/xianyu110/ecommerce-video-skills)** | `Skill` | 面向电商短视频的创作技能包，覆盖黄金开头、分镜脚本、配音与字幕制作。 | `Claude Code` `通用` | — |
| **[Email Marketing Bible](https://github.com/CosmoBlk/email-marketing-bible)** | `Skill` | 规划、撰写与审计邮件营销活动，内置送达率优化与合规检查指南。 | `Claude Code` `通用` | — |
| **[FFmpeg Skill](https://github.com/kajisho5/ffmpeg-skill)** | `Skill` | 基于本地 FFmpeg 的自然语言音视频剪辑技能，支持裁剪拼接、画幅重构、字幕压制、去静音与混音处理。 | `通用` `Claude Code` | — |
| **[Forward Deployed Selling](https://github.com/vonarmen-wq/forward-deployed-selling)** | `Skill` | 面向企业级 AI 销售的实战方法论技能，涵盖 ICP 资格评估、GTM 策略、商机辅导与打分。 | `Claude Code` `通用` | — |
| **[GoMarble Marketing Agent](https://github.com/gomarble-ai/marketing-agent)** | `Plugin` | 面向效果广告团队的营销插件，结合投放分析技能与 OAuth 鉴权 MCP 连接器，覆盖 Meta、Google、TikTok、GA4 与 Shopify。<br>`/plugin marketplace add gomarble-ai/marketing-agent` | `Claude Code` `Codex` | — |
| **[Goose Growth Skills](https://github.com/gooseworks-ai/goose-skills)** | `Skill` | 包含 125 个增长与 GTM 技能的营销技能库，覆盖广告投放、内容、获客、外呼调研与 SEO。 | `Claude Code` `通用` | — |
| **[Growth Kit](https://github.com/kanaerulabs/growth-kit)** | `Plugin` | 面向 Claude Code 的内容营销与增长自动化插件套件，覆盖 SEO、文案撰写与推广工作流。 | `Claude Code` | — |
| **[Humanizer RU](https://github.com/Vladimir-Human/humanizer-ru)** | `Skill` | 结合文风模式与确定性特征检测并改写俄语文本，去除 AI 写作痕迹。 | `Claude Code` `通用` | — |
| **[HumanPen Skill](https://github.com/humanpen/humanpen-skill)** | `Skill` | 润色并改写 Word 文档与 PowerPoint 演示文稿中的 AI 生成文本。 | `Claude Code` `通用` | — |
| **[JP Essay](https://github.com/lucasbabur/jp-essay)** | `Skill` | 按结构化写作流程完成深度随笔与议论文的调研、起草、修订与事实核查。 | `Claude Code` `通用` | — |
| **[Kinetograph](https://github.com/0xS4N4TG/kinetograph)** | `Skill` | 使用 Kinetograph 创建与渲染程序化动态图形与视频内容。 | `Claude Code` `通用` | — |
| **[Levea Video MCP](https://github.com/brajendrak00068/agentic-ai-video-production)** | `MCP` | 面向自动化 AI 视频剪辑的远程 MCP 服务，可将自然语言指令或长视频处理为带字幕与智能构图的成片。 | `通用` `Claude Code` | — |
| **[LinkedIn Marketing Skills](https://github.com/sergebulaev/linkedin-skills)** | `Skill` | 领英内容营销技能合集，涵盖发帖创作、评论互动、主页优化、账号诊断与内容排期。 | `Claude Code` `通用` | — |
| **[MD2WeChat Skill](https://github.com/geekjourneyx/md2wechat-skill)** | `Skill` | 将 Markdown 文章一键转换为微信公众号草稿，支持预览、配图与封面处理。 | `Claude Code` `通用` | — |
| **[Mermaid MCP](https://github.com/hustcc/mcp-mermaid)** | `MCP` | 动态生成与渲染 Mermaid 流程图、时序图和架构图的 MCP 服务器。<br>`npx -y mcp-mermaid` | `通用` | — |
| **[MoltDJ Skill](https://github.com/polaroteam/moltdj-skill)** | `Skill` | 面向自主 Agent 的 AI 音乐与播客平台技能，支持生成曲目、发现音频与版税激励。 | `Claude Code` `通用` | — |
| **[Motion Graphics Skills](https://github.com/iart-ai/motion-skills)** | `Skill` | 包含 14 个可安装扩展包、共 50 个动态图形、动画与视频制作技能。 | `Claude Code` `通用` | — |
| **[Naming Skill](https://github.com/glacierphonk/naming)** | `Skill` | 基于隐喻思维的产品、SaaS、品牌与开源项目系统化命名技能。 | `Claude Code` `通用` | — |
| **[Next.js Sanity Blog Skill](https://github.com/BuildShipGrowRepeat/nextjs-sanity-blog-skill)** | `Skill` | 面向 Next.js 项目的 Claude Code 技能，一键搭建 SEO 优先、支持多语言的 Sanity CMS 博客系统。 | `Claude Code` `通用` | — |
| **[NotFair Growth Skills](https://github.com/nowork-studio/NotFair)** | `Skill` | 结合实时数据连接器的开源 SEO、Google Ads 与 Meta Ads 增长优化技能集。 | `Claude Code` `通用` | — |
| **[Ocean Watch](https://github.com/westng/ocean-watch)** | `Plugin` | 巨量引擎营销、巨量千川投放与巨量星图账号授权管理插件，集成多渠道技能、40+ MCP 工具与 Go CLI。 | `Claude Code` `Codex` `DeepSeek Harness` | — |
| **[Orkas VideoStudio](https://github.com/Orkas-AI/Orkas-VideoStudio)** | `Skill` | 将视频需求简报自动路由至 AI 生成、合成、剪辑或混合制作工作流。 | `Claude Code` `通用` | — |
| **[Papercut Explainer](https://github.com/0xS4N4TG/papercut-explainer)** | `Skill` | 基于 Remotion 将网页链接转化为带旁白的剪纸风格解说视频。 | `Claude Code` `通用` | — |
| **[Product Launch Motion](https://github.com/AbubakrChan/product-launch-motion)** | `Skill` | 根据产品官网链接自动生成动效精美的产品发布宣传视频。 | `Claude Code` `通用` | — |
| **[Reveal.js Presentation Skill](https://github.com/ryanbbrown/revealjs-skill)** | `Skill` | 基于 Reveal.js 框架生成精美、专业的 HTML 演示文稿与幻灯片。 | `Claude Code` `通用` | — |
| **[RU Text Quality](https://github.com/talkstream/ru-text)** | `Skill` | 内置约 1,040 条规则的俄语文本质量优化技能，覆盖排版、编辑规范、UX 文案与商务信函。 | `Claude Code` `通用` | — |
| **[Story Skills](https://github.com/danjdewhurst/story-skills)** | `Skill` | 小说与虚构故事创作技能集，覆盖人物塑造、场景设计、情节架构与连贯性检查。 | `Claude Code` `通用` | — |
| **[SuperSEO Skills](https://github.com/inhouseseo/superseo-skills)** | `Skill` | 专业 SEO 技能合集，覆盖站点审计、内容简报、文章撰写、E-E-A-T 优化与主题集群建设。 | `Claude Code` `通用` | — |
| **[TopRank SEO & Ads](https://github.com/nowork-studio/toprank)** | `Skill` | 面向 SEO 与 Google Ads 的优化技能集，涵盖元数据、Schema 结构化标记、出价优化与 CMS 修复。 | `Claude Code` `通用` | — |
| **[TweetClaw](https://github.com/Xquik-dev/tweetclaw)** | `Skill` | X/Twitter 自动化运营技能，支持检索、发帖、粉丝导出、实时监控与 Webhook 集成。 | `Claude Code` `通用` | — |
| **[Understanding Ladder](https://github.com/ChangWenC/understanding-ladder)** | `Skill` | 根据概念复杂度选择文字、图表、交互式可视化或视频等最佳载体进行清晰讲解。 | `Claude Code` `通用` | — |
| **[Upload-Post Skill](https://github.com/Upload-Post/upload-post-skill)** | `Skill` | 在单一 Agent 工作流中跨 10+ 社交媒体平台一键发布与定时排期内容。 | `Claude Code` `通用` | — |
| **[Vibe Creating Skill](https://github.com/Alisa0808/vibe-creating-skill)** | `Skill` | 将粗略创意改写为适配 Seedance、Sora、可灵、Veo 等模型的专业文生视频提示词。 | `Claude Code` `通用` | — |
| **[Video Prompting Skill](https://github.com/Square-Zero-Labs/video-prompting-skill)** | `Skill` | 为 LTX-2、Sora、Veo 3 等主流视频生成模型起草与精修高质量提示词。 | `Claude Code` `通用` | — |
| **[Vox Director](https://github.com/Alisa0808/vox-director)** | `Skill` | 将单个主题自动转化为完整的 Vox 风格纸艺拼贴科普或广告视频。 | `Claude Code` `通用` | — |
| **[ZeroSlop](https://github.com/manavmishra/ZeroSlop)** | `Skill` | 优化消除 AI 腔草稿，同时严格保留原文人名、数字、引文与链接。 | `Claude Code` `通用` | — |

## 安全与合规

_漏洞扫描、敏感信息检测、安全护栏与合规审计。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Cloudflare Security Audit Skill](https://github.com/cloudflare/security-audit-skill)** `官方` | `Skill` | Cloudflare 官方出品的多阶段安全审计技能，可生成经独立验证的机器可读漏洞报告。 | `通用` | ⭐ 78.9k<br><sub>2026-09-14</sub> |
| **[SkillSpector](https://github.com/NVIDIA/SkillSpector)** `官方` | `工具` | NVIDIA 官方开源的 Agent 技能安全扫描器，在安装前检测提示词注入、数据窃取与供应链风险。 | `Claude Code` `Codex` | ⭐ 27.8k<br><sub>2026-11-25</sub> |
| **[Claude Code Security Review](https://github.com/anthropics/claude-code-security-review)** `官方` | `工具` | Anthropic 官方安全审计 GitHub Action，使用 Claude 自动分析 Pull Request 中的潜在安全漏洞。 | `Claude Code` | — |
| **[Codacy MCP Server](https://github.com/codacy/codacy-mcp-server)** `官方` | `MCP` | Codacy 官方 MCP 服务器，为 AI Agent 提供自动化代码质量检测、安全漏洞扫描与覆盖率分析。<br>`npx -y @codacy/codacy-mcp` | `通用` | — |
| **[Internet Court Skill](https://github.com/internet-court/internet-court-skill)** `官方` | `Skill` | 面向 Agent 间交易的开放信任层技能，覆盖自然语言授权、ERC-7710 权限委托、x402 支付、托管与争议仲裁。 | `通用` `Claude Code` | — |
| **[Trail of Bits Security Skills](https://github.com/trailofbits/skills)** `官方` | `Skill` | Trail of Bits 开源的安全审计技能集，涵盖 CodeQL/Semgrep 静态分析、变体分析与修复验证。 | `Claude Code` `通用` | — |
| **[Rea](https://github.com/morluto/rea)** | `Plugin` | 面向 AI Agent 的逆向工程插件、MCP 服务与技能套件，支持从应用行为到原生二进制的深度分析。 | `Claude Code` `Codex` `Cursor` `DeepSeek Harness` | ⭐ 479.8k<br><sub>2026-11-27</sub> |
| **[AgentWard Sanitize](https://github.com/agentward-ai/agentward)** | `Skill` | 零依赖本地隐私脱敏技能，自动检测并擦除文本中的 15 类个人敏感信息与 API 密钥。 | `Claude Code` `通用` | — |
| **[CC Safe Setup](https://github.com/yurukusa/cc-safe-setup)** | `Plugin` | 开箱即用的 Claude Code 安全 Hook 套件，在工具调用边界拦截高危 Shell 与文件破坏性操作。 | `Claude Code` | — |
| **[ChainAware Behavioral Prediction](https://github.com/ChainAware/behavioral-prediction-mcp)** | `MCP` | 用于 Web3 钱包行为预测、欺诈检测与跑路风险评估的 MCP 与技能工具。 | `Claude Code` `通用` | — |
| **[Claude Code OWASP](https://github.com/agamm/claude-code-owasp)** | `Skill` | 涵盖 OWASP Top 10:2025、ASVS 5.0 与 Agentic AI 安全规范的 20+ 语言安全审查清单。 | `Claude Code` `通用` | — |
| **[FFUF Claude Skill](https://github.com/jthack/ffuf_claude_skill)** | `Skill` | 将 Claude 与 FFUF 模糊测试工具集成，自动分析探测结果与潜在安全漏洞。 | `Claude Code` `通用` | — |
| **[GuardLink](https://github.com/Bugb-Technologies/guardlink)** | `Plugin` | AI 驱动的代码安全注解与 MCP 工具链，用于在代码库中持续进行威胁建模与安全边界校验。 | `通用` `Claude Code` | — |
| **[ShellWard Security Guide](https://github.com/jnMetaCode/shellward)** | `Skill` | AI Agent 安全防护指南技能，涵盖提示词注入防御、数据防泄漏、高危命令拦截与 PII 扫描。 | `Claude Code` `通用` | — |
| **[Varlock Claude Skill](https://github.com/wrsmith108/varlock-claude-skill)** | `Skill` | 安全的环境变量管理技能，防止密钥泄露到 Claude 会话、终端日志或 Git 提交记录中。 | `Claude Code` `通用` | — |
| **[VibeSec Skill](https://github.com/BehiSecc/VibeSec-Skill)** | `Skill` | 安全编码技能，帮助 Claude 在开发 Web 应用时规避常见安全漏洞。 | `Claude Code` `通用` | — |

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
| **[One Skill to Rule Them All](https://github.com/rebelytics/one-skill-to-rule-them-all)** | `Skill` | 基于会话纠错与重复工作流的元技能，在人工审批前生成带依据的技能更新与新技能候选。 | `通用` | ⭐ 4.0k<br><sub>2026-11-25</sub> |
| **[YAO Meta Skill](https://github.com/yaojingang/yao-meta-skill)** | `工具` | 用于构建可复用 Agent 技能的工程化、评测、安全治理与跨平台可移植性框架。 | `通用` | ⭐ 2.7k<br><sub>2026-11-09</sub> |
| **[Claude Code Tools](https://github.com/pchalasani/claude-code-tools)** | `工具` | 面向 Claude Code 与 Codex CLI 的实用效率工具集，提供快速会话检索、tmux 辅助及终端命令行工具。 | `Claude Code` `Codex` | ⭐ 2.0k<br><sub>2026-11-27</sub> |
| **[Agent Vision Toolkit](https://github.com/Anionex/agent-vision-toolkit)** | `工具` | 为纯文本大模型与命令行 Agent 提供看图能力的视觉工具箱与技能，支持多图问答、长图 OCR、UI 还原与 GUI 自动化。 | `Claude Code` `Codex` `OpenCode` `DeepSeek Harness` | ⭐ 1.3k<br><sub>2026-10-13</sub> |
| **[Claude Code Skill Factory](https://github.com/alirezarezvani/claude-code-skill-factory)** | `工具` | 用于批量构建和部署生产级 Claude 技能、智能体、斜杠命令与提示词的开源工具包。 | `Claude Code` | ⭐ 914<br><sub>2025-11-12</sub> |
| **[Claude Skill Registry](https://github.com/majiayu000/claude-skill-registry)** | `工具` | 可检索的 Claude Code 技能注册表与目录，提供溯源指南与结构化索引元数据。 | `Claude Code` | ⭐ 754<br><sub>2026-11-26</sub> |
| **[Awesome OpenClaw Skills](https://github.com/sundial-org/awesome-openclaw-skills)** | `Skill` | 精选热门且实用的 OpenClaw Agent 技能合集。 | `通用` | ⭐ 676<br><sub>2026-03-07</sub> |
| **[Ordinary Claude Skills](https://github.com/Microck/ordinary-claude-skills)** | `Skill` | 按类别整理的 Claude Skills 技能与配套资源集合。 | `Claude Code` | ⭐ 415<br><sub>2026-09-06</sub> |
| **[Anyone to Skill](https://github.com/OpenDemon/anyone-to-skill)** | `工具` | 从视频、PDF、电子书或聊天记录中提取人物心智模型与表达风格并生成 SKILL.md 的技能蒸馏工具。 | `通用` | ⭐ 134<br><sub>2026-04-07</sub> |
| **[PRPM](https://github.com/pr-pm/prpm)** | `工具` | 面向各类 AI 编程工具的通用提示词、规则与技能包管理器及注册中心。 | `通用` | ⭐ 125<br><sub>2026-10-14</sub> |
| **[Agent Almanac](https://github.com/pjt222/agent-almanac)** | `Plugin` | 遵循 Agent Skills 开放标准的大型资源库，涵盖 50+ 领域的 317 个技能、65 个子代理与 14 个团队模板。 | `Claude Code` `通用` | — |
| **[Agent Starter](https://github.com/sneg55/agent-starter)** | `Plugin` | 包含技能、Hooks 与项目模板的脚手架套装，快速初始化对 AI Agent 友好的代码仓库。 | `Claude Code` `通用` | — |
| **[Agent37 Skills Collection](https://github.com/agent37-platform/agent37-skills-collection)** | `Plugin` | Claude Code 插件市场合集，包含 YC 创业顾问、本地代码审查等精选插件。 | `Claude Code` | — |
| **[AgentBay Skills](https://github.com/agentbay-ai/agentbay-skills)** | `Skill` | 帮助用户从 AgentBay 市场快速发现、检索并安装各类 Agent 技能。 | `Claude Code` `通用` | — |
| **[Agentic Awesome Skills](https://github.com/sickn33/agentic-awesome-skills)** | `Skill` | 收录 3,000+ 可复用 AI Agent 技能的大型社区合集，兼容 Claude Code、Codex、Cursor 与 Gemini CLI。 | `通用` `Claude Code` `Codex` `Cursor` `+1` | — |
| **[agnix](https://github.com/avifenesh/agnix)** | `工具` | 面向 AI Agent 配置的静态检查工具，内置 156 条规则、自动修复与 LSP 支持，校验 SKILL.md、CLAUDE.md、Hooks 与 MCP 配置。 | `通用` `Claude Code` | — |
| **[Awesome Claude Skills (BehiSecc)](https://github.com/BehiSecc/awesome-claude-skills)** | `Skill` | 社区精选的 Claude Skills 导航目录，覆盖文档处理、开发工具、数据分析、科研、媒体制作、安全与自动化。 | `Claude Code` `通用` | — |
| **[Borghei Claude Skills](https://github.com/borghei/Claude-Skills)** | `Skill` | 跨领域大型 Claude 技能合集，覆盖软件工程、合规、营销、法务与财务等场景。 | `Claude Code` `通用` | — |
| **[Claude Code Guide](https://github.com/zebbern/claude-code-guide)** | `工具` | 全面的 Claude Code 社区实战指南，覆盖环境配置、斜杠命令、子代理、技能、Hooks 与最佳实践。 | `Claude Code` | — |
| **[Claude Code Plugin Template](https://github.com/ivan-magda/claude-code-plugin-template)** | `Skill` | 用于创建、校验与调试 Claude Code 插件的模板与开发指导技能。 | `Claude Code` | — |
| **[Hivemind](https://github.com/activeloopai/hivemind)** | `Skill` | 从编程 Agent 会话轨迹中自动提炼并生成可复用技能，支持 Claude Code、Codex 与 Cursor。 | `Claude Code` `Codex` `Cursor` `通用` | — |
| **[KC AI Skills](https://github.com/KerberosClaw/kc_ai_skills)** | `Skill` | 以繁体中文为主、附双语文档的 22 个可复用 AI Agent 技能合集。 | `Claude Code` `通用` | — |
| **[mcp-remote](https://github.com/punkpeye/mcp-remote)** | `MCP` | MCP 协议桥接工具，让仅支持本地 stdio 的 MCP 客户端也能通过 OAuth 连接远程 HTTP/SSE MCP 服务器。<br>`npx -y mcp-remote` | `通用` | — |
| **[npm-agentskills](https://github.com/onmax/npm-agentskills)** | `工具` | 与框架无关的 Agent Skills 发现与导出工具，支持直接从 npm 包中提取和分发技能。 | `通用` | — |
| **[Provider-Agnostic Claude Code SDK](https://github.com/SeifBenayed/claude-code-sdk)** | `工具` | 开源的跨模型提供商 AI Agent CLI，支持 13 家模型后端、内置工具与技能市场。 | `通用` `Claude Code` | — |
| **[Skill Optimizer](https://github.com/hqhq1025/skill-optimizer)** | `Skill` | 结合会话日志数据与静态分析，诊断并优化现有 Agent Skills 的触发与执行效果。 | `Claude Code` `通用` | — |
| **[SkillCheck Free](https://github.com/olgasafonova/SkillCheck-Free)** | `工具` | 免费的 SKILL.md 校验工具，内置 30+ 项结构、命名与语义检查，助力发布前排错。 | `Claude Code` `通用` | — |
| **[Skills Manager CLI](https://github.com/shenysun/skills-manager)** | `工具` | 使用 skills-manager 命令行工具统一管理、更新与分发本地 Agent Skills。 | `Claude Code` `通用` | — |

## 支持的 Agent 工具

[通用](https://agentskills.io) · [Claude Code](https://docs.anthropic.com/en/docs/claude-code) · [Codex](https://github.com/openai/codex) · [Cursor](https://cursor.com) · [Gemini CLI](https://github.com/google-gemini/gemini-cli) · [OpenCode](https://opencode.ai) · [Antigravity](https://antigravity.google) · [GitHub Copilot](https://github.com/features/copilot) · [Windsurf](https://windsurf.com) · [DeepSeek Harness](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)

## 参与贡献

想推荐优秀的 Plugin、Skill、MCP 或 Subagent？只需在 `data/<类型>/` 下新增一个 YAML 文件并提 PR，或直接[提交推荐 Issue](.github/ISSUE_TEMPLATE/submit-plugin.yml)。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

