<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->

# Awesome Agents

> 精选跨平台 AI Agent 插件、Skills、MCP Servers、Subagents 与扩展管理工具（支持 Claude Code、Codex、Cursor、Gemini CLI、OpenCode、Antigravity 等）。

[English](README.md) | **简体中文**

### Claude Code Plugins

Claude Code 插件是可安装的扩展包，可将 Skills、斜杠命令、Subagents、Hooks、MCP 服务及完整工作流组合在一起。适合需要复用和分发一套 Agent 工作流的场景。

浏览 [全部插件 (40)](docs/plugins.zh.md)，使用 `/plugin install <owner>/<repo>` 安装单个插件，或使用 `/plugin marketplace add <owner>/<repo>` 添加插件市场。

## 快速入口

- [Plugins（复合插件） (40)](docs/plugins.zh.md) · [Skills（技能包） (247)](docs/skills.zh.md) · [MCP / Connectors (26)](docs/mcp.zh.md) · [Subagents（子代理） (18)](docs/subagents.zh.md) · [扩展管理工具 (52)](docs/tools.zh.md) · [按工具浏览](docs/by-agent.zh.md)

<details>
<summary>常见工具插件安装速查</summary>

- **Claude Code Plugin**: `/plugin install <owner>/<repo>` 或 `/plugin marketplace add <owner>/<repo>`
- **跨端 Agent Skills**: `npx skills add <owner>/<repo>`
- **MCP Server**: 按各项目文档配置到对应 Agent 的 MCP 设置（如 `mcpServers` JSON）

</details>

## 按场景目录

- [官方与精选 (64)](#官方与精选)
- [编码与工程 (64)](#编码与工程) — 代码开发、重构、测试、调试、代码审查与 Git 工作流。
- [前端与设计 (79)](#前端与设计) — UI 开发、设计系统、浏览器自动化、视觉审查与 Figma 集成。
- [云与运维 (8)](#云与运维) — 部署、容器、可观测性、数据库与云平台集成。
- [编排与多代理协作 (22)](#编排与多代理协作) — 多 Agent 协同、规划流水线、记忆层与工作流编排。
- [数据、研究与知识 (19)](#数据研究与知识) — 联网检索、文档处理、数据分析、学术研究与知识库。
- [效率与协作 (34)](#效率与协作) — 文档、项目管理、日历、即时通讯与日常办公协作。
- [内容与营销 (54)](#内容与营销) — 写作、SEO、社媒发布、音视频制作与增长营销。
- [安全与合规 (3)](#安全与合规) — 漏洞扫描、敏感信息检测、安全护栏与合规审计。
- [插件市场与开发工具 (19)](#插件市场与开发工具) — 插件市场、技能聚合站、跨端安装器与插件开发工具。

## 官方与精选

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `官方` | `Skill` | Anthropic 官方维护的 Agent Skills 集合，覆盖文档制作（docx/pdf/pptx）、前端设计与 Skill 编写参考。<br>`npx skills add anthropics/skills` | `通用` `Claude Code` | ⭐ 201.1k<br><sub>2026-11-16</sub> |
| **[Claude Code Official Plugins](https://github.com/anthropics/claude-plugins-official)** `官方` | `Plugin` | Anthropic 官方维护的 Claude Code 插件市场与目录，提供官方工作流插件、子代理、技能、钩子及合作方 MCP 集成。<br>`/plugin marketplace add anthropics/claude-plugins-official` | `Claude Code` | — |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `官方` | `MCP` | Model Context Protocol 官方参考服务器合集，提供文件系统、Git、数据库与网页接入等标准集成范例。 | `通用` | — |
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
| **[hf-skills](https://github.com/huggingface/hf-skills)** `官方` | `工具` | 独立命令行工具，可查找 Hugging Face 技能，并将其安装或更新到项目或用户级技能目录。 | `Claude Code` `Codex` `Cursor` `OpenCode` | — |
| **[Hugging Face Skills](https://github.com/huggingface/skills)** `官方` | `Skill` | 让编码助手查询 Hugging Face Hub 数据集、微调模型并运行模型评估的技能集。<br>`hf skills add huggingface-datasets` | `Claude Code` `Codex` `Cursor` `Gemini CLI` | — |
| **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `官方` | `MCP` | 在 MCP 客户端中查询 Terraform Registry 的提供程序和模块，并管理 HCP Terraform 工作区。<br>`codex mcp add terraform -- docker run -i --rm hashicorp/terraform-mcp-server` | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | — |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | 面向编码 Agent 的结构化工程工作流插件，内置方案设计、严格 TDD、系统化调试与子代理驱动开发。<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 327.5k<br><sub>2026-11-26</sub> |
| **[wshobson/agents](https://github.com/wshobson/agents)** | `Plugin` | 多端模块化插件市场，组合专业子代理、技能与命令，覆盖多语言开发、测试、安全与架构工作流。<br>`/plugin marketplace add wshobson/agents` | `Claude Code` `Codex` `Cursor` `OpenCode` `+2` | ⭐ 42.9k<br><sub>2026-11-24</sub> |
| **[Awesome Claude Code Subagents](https://github.com/VoltAgent/awesome-claude-code-subagents)** | `Subagent` | 收录 100+ 专业子代理定义的精选合集，覆盖架构评审、安全审计、各语言专家与运维角色。 | `Claude Code` | — |

## 编码与工程

_代码开发、重构、测试、调试、代码审查与 Git 工作流。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
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

## 前端与设计

_UI 开发、设计系统、浏览器自动化、视觉审查与 Figma 集成。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
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

## 云与运维

_部署、容器、可观测性、数据库与云平台集成。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Google Agents CLI](https://github.com/google/agents-cli)** `官方` | `工具` | Google 官方推出的命令行工具与技能集，帮助编码助手基于 ADK 在 Google Cloud 上构建、评估与部署 AI Agent。 | `通用` `Claude Code` `Gemini CLI` | ⭐ 6.4k<br><sub>2026-11-24</sub> |
| **[Cloudflare Skills](https://github.com/cloudflare/skills)** `官方` | `Skill` | Cloudflare 官方 Agent 技能集，指导 AI 助手基于 Cloudflare Workers 及开发者平台进行构建与部署。 | `通用` | ⭐ 3.5k<br><sub>2026-11-25</sub> |
| **[Supabase Agent Skills](https://github.com/supabase/agent-skills)** `官方` | `Skill` | Supabase 官方 Agent 技能集，帮助 AI 编程助手遵循 Postgres、认证、RLS 与边缘函数最佳实践。 | `通用` | ⭐ 3.1k<br><sub>2026-11-12</sub> |
| **[Firebase Agent Skills](https://github.com/firebase/agent-skills)** `官方` | `Skill` | Firebase 官方 Agent 技能集，辅助智能体完成 Firebase 后端构建、配置与部署。 | `通用` | ⭐ 531<br><sub>2026-11-09</sub> |
| **[Prisma Official Skills](https://github.com/prisma/skills)** `官方` | `Skill` | Prisma 官方 Agent 技能集，涵盖 Prisma ORM 配置、Client API、Prisma Postgres 与 v7 升级迁移。 | `通用` | ⭐ 80<br><sub>2026-11-26</sub> |
| **[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server)** `官方` | `MCP` | 在 MCP 客户端中查询 Terraform Registry 的提供程序和模块，并管理 HCP Terraform 工作区。<br>`codex mcp add terraform -- docker run -i --rm hashicorp/terraform-mcp-server` | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | — |
| **[Terraform Skill](https://github.com/antonbabenko/terraform-skill)** | `Skill` | 涵盖模块设计、自动化测试、CI/CD 流程与生产级基础设施实践的 Terraform 与 OpenTofu Agent 技能。 | `通用` | ⭐ 2.5k<br><sub>2026-11-19</sub> |
| **[GoLive Skill](https://github.com/mikehasa/golive-skill)** | `Skill` | 零依赖 Node CLI 与 Agent 技能，按检测、规划、审批、部署与验证流程帮产品一站式上线生产环境。 | `通用` | ⭐ 1.6k<br><sub>2026-10-11</sub> |

## 编排与多代理协作

_多 Agent 协同、规划流水线、记忆层与工作流编排。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Honcho](https://github.com/plastic-labs/honcho)** `官方` | `工具` | Plastic Labs 官方有状态代理记忆库与 CLI/MCP 工具套件，为多端编码代理提供持续学习与记忆能力。 | `通用` `Claude Code` `Cursor` `DeepSeek Harness` | ⭐ 8.3k<br><sub>2026-11-25</sub> |
| **[Superpowers](https://github.com/obra/superpowers)** | `Plugin` | 面向编码 Agent 的结构化工程工作流插件，内置方案设计、严格 TDD、系统化调试与子代理驱动开发。<br>`/plugin install obra/superpowers` | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 327.5k<br><sub>2026-11-26</sub> |
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

## 数据、研究与知识

_联网检索、文档处理、数据分析、学术研究与知识库。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[AntV Chart Visualization Skills](https://github.com/antvis/chart-visualization-skills)** `官方` | `Skill` | AntV 官方数据可视化 Agent 技能集，助力智能体将数据转化为清晰的图表视觉语言。 | `通用` | ⭐ 544<br><sub>2026-09-22</sub> |
| **[Tavily Agent Skills](https://github.com/tavily-ai/skills)** `官方` | `Skill` | Tavily 官方 Agent 技能集，提供实时网页搜索、内容抓取与在线研究能力。 | `通用` | ⭐ 497<br><sub>2026-11-24</sub> |
| **[Accoil Product Tracking Skills](https://github.com/Accoil/product-tracking-skills)** `官方` | `Skill` | Accoil 官方产品埋点分析技能集，可扫描代码库、设计埋点方案并生成多平台分析埋点代码。 | `通用` | ⭐ 47<br><sub>2026-10-20</sub> |
| **[Hugging Face Skills](https://github.com/huggingface/skills)** `官方` | `Skill` | 让编码助手查询 Hugging Face Hub 数据集、微调模型并运行模型评估的技能集。<br>`hf skills add huggingface-datasets` | `Claude Code` `Codex` `Cursor` `Gemini CLI` | — |
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

## 效率与协作

_文档、项目管理、日历、即时通讯与日常办公协作。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Anthropic Agent Skills](https://github.com/anthropics/skills)** `官方` | `Skill` | Anthropic 官方维护的 Agent Skills 集合，覆盖文档制作（docx/pdf/pptx）、前端设计与 Skill 编写参考。<br>`npx skills add anthropics/skills` | `通用` `Claude Code` | ⭐ 201.1k<br><sub>2026-11-16</sub> |
| **[Obsidian Skills](https://github.com/obsidianmd/obsidian-skills)** `官方` | `Skill` | Obsidian 官方 Agent 技能包，让 AI 熟练操作 Obsidian 笔记库、Markdown、Bases 与 JSON Canvas。 | `Claude Code` `Codex` `Cursor` `OpenCode` | ⭐ 54.0k<br><sub>2026-11-26</sub> |
| **[Jane Street Agent Skills](https://github.com/janestreet/agent_skills)** `官方` | `Skill` | Jane Street 官方开源的 Agent 技能仓库，包含用于启发式教学的苏格拉底导师技能。 | `通用` | ⭐ 12.0k<br><sub>2026-11-17</sub> |
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

## 内容与营销

_写作、SEO、社媒发布、音视频制作与增长营销。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Hyperframes](https://github.com/heygen-com/hyperframes)** `官方` | `Plugin` | HeyGen 官方开源的 AI 视频编辑插件与 MCP 工具集，支持用 HTML 编写动效并渲染输出 MP4。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | ⭐ 90.9k<br><sub>2026-11-27</sub> |
| **[Video Use](https://github.com/browser-use/video-use)** `官方` | `Skill` | Browser Use 官方推出的 Agent 视频编辑技能，赋能编码 Agent 以程序化方式剪辑与处理视频。 | `通用` | ⭐ 31.6k<br><sub>2026-10-08</sub> |
| **[Remotion Agent Skills](https://github.com/remotion-dev/skills)** `官方` | `Skill` | Remotion 官方维护的 Agent 技能集合，用于以 React 代码化方式创作和渲染编程视频。 | `通用` | ⭐ 8.1k<br><sub>2026-11-24</sub> |
| **[Higgsfield AI Skills](https://github.com/higgsfield-ai/skills)** `官方` | `Skill` | Higgsfield AI 官方技能集，覆盖品牌视觉套件、产品摄影、口播/解说视频及 YouTube 封面图生成。 | `Claude Code` `Codex` `Cursor` | ⭐ 2.1k<br><sub>2026-11-05</sub> |
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

## 安全与合规

_漏洞扫描、敏感信息检测、安全护栏与合规审计。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Cloudflare Security Audit Skill](https://github.com/cloudflare/security-audit-skill)** `官方` | `Skill` | Cloudflare 官方出品的多阶段安全审计技能，可生成经独立验证的机器可读漏洞报告。 | `通用` | ⭐ 78.9k<br><sub>2026-09-14</sub> |
| **[SkillSpector](https://github.com/NVIDIA/SkillSpector)** `官方` | `工具` | NVIDIA 官方开源的 Agent 技能安全扫描器，在安装前检测提示词注入、数据窃取与供应链风险。 | `Claude Code` `Codex` | ⭐ 27.8k<br><sub>2026-11-25</sub> |
| **[Rea](https://github.com/morluto/rea)** | `Plugin` | 面向 AI Agent 的逆向工程插件、MCP 服务与技能套件，支持从应用行为到原生二进制的深度分析。 | `Claude Code` `Codex` `Cursor` `DeepSeek Harness` | ⭐ 479.8k<br><sub>2026-11-27</sub> |

## 插件市场与开发工具

_插件市场、技能聚合站、跨端安装器与插件开发工具。_

| 名称 | 类型 | 简介 | 兼容工具 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Claude Code Official Plugins](https://github.com/anthropics/claude-plugins-official)** `官方` | `Plugin` | Anthropic 官方维护的 Claude Code 插件市场与目录，提供官方工作流插件、子代理、技能、钩子及合作方 MCP 集成。<br>`/plugin marketplace add anthropics/claude-plugins-official` | `Claude Code` | — |
| **[MCP Reference Servers](https://github.com/modelcontextprotocol/servers)** `官方` | `MCP` | Model Context Protocol 官方参考服务器合集，提供文件系统、Git、数据库与网页接入等标准集成范例。 | `通用` | — |
| **[Vercel Skills CLI](https://github.com/vercel-labs/skills)** `官方` | `工具` | Vercel 官方开源的跨端 Agent 技能管理工具（npx skills），用于检索、安装与管理技能包。 | `通用` | ⭐ 41.0k<br><sub>2026-11-27</sub> |
| **[SkillOpt](https://github.com/microsoft/SkillOpt)** `官方` | `工具` | 微软开源的文本空间技能优化器，通过轨迹驱动迭代与验证门控自动训练可部署的 Agent 技能。 | `通用` | ⭐ 19.3k<br><sub>2026-11-23</sub> |
| **[mcp-use](https://github.com/mcp-use/mcp-use)** `官方` | `MCP` | 官方全栈 MCP 开发框架与 SDK，用于构建 MCP 服务端、客户端、可视化调试器及交互式 MCP 应用。 | `通用` `Claude Code` | ⭐ 11.0k<br><sub>2026-11-27</sub> |
| **[NVIDIA SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** `官方` | `工具` | NVIDIA 官方多层 Agent 技能与插件评估框架，提供安全扫描、兼容性检查、合成数据集与实测基准。 | `通用` `Claude Code` `Codex` | ⭐ 4.6k<br><sub>2026-11-26</sub> |
| **[hf-skills](https://github.com/huggingface/hf-skills)** `官方` | `工具` | 独立命令行工具，可查找 Hugging Face 技能，并将其安装或更新到项目或用户级技能目录。 | `Claude Code` `Codex` `Cursor` `OpenCode` | — |
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

## 支持的 Agent 工具

[通用](https://agentskills.io) · [Claude Code](https://docs.anthropic.com/en/docs/claude-code) · [Codex](https://github.com/openai/codex) · [Cursor](https://cursor.com) · [Gemini CLI](https://github.com/google-gemini/gemini-cli) · [OpenCode](https://opencode.ai) · [Antigravity](https://antigravity.google) · [GitHub Copilot](https://github.com/features/copilot) · [Windsurf](https://windsurf.com) · [DeepSeek Harness](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)

## 参与贡献

想推荐优秀的 Plugin、Skill、MCP 或 Subagent？只需在 `data/<类型>/` 下新增一个 YAML 文件并提 PR，或直接[提交推荐 Issue](.github/ISSUE_TEMPLATE/submit-plugin.yml)。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

