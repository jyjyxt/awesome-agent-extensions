<!-- AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY. Run `npm run build` instead. -->

# Plugins（复合插件）

> 打包好的复合扩展，通常组合了 Skills、MCP/Connectors、Subagents、Hooks 或工作流。

[← 返回主目录](../README.zh.md) · [English](plugins.md)

## 编码与工程

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Elephant Goldfish Model](https://github.com/google/elephant-goldfish-model)** `官方` | Google 官方开源的规范驱动开发插件，支持借助编码 Agent 进行软件架构设计与结构化评审。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+3` | `spec-driven-development` `software-design` `code-review` | ⭐ 23.2k<br><sub>2026-11-25</sub> |
| **[Stripe AI](https://github.com/stripe/ai)** `官方` | Stripe 官方 AI 开发套件，集成 Agent 工具包、MCP 服务、多端插件与技能，助力构建支付与商业化工作流。 | `通用` | `stripe` `payments` `mcp` | ⭐ 2.1k<br><sub>2026-11-25</sub> |
| **[Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit)** `官方` | Sanity 官方 Agent 工具包，集成技能、规则、命令与 MCP 支持以助力 Sanity CMS 开发。 | `通用` | `sanity` `cms` `mcp-server` | ⭐ 201<br><sub>2026-11-25</sub> |
| **[wshobson/agents](https://github.com/wshobson/agents)** | 多端模块化插件市场，组合专业子代理、技能与命令，覆盖多语言开发、测试、安全与架构工作流。 | `Claude Code` `Codex` `Cursor` `OpenCode` `+2` | `/plugin marketplace add wshobson/agents` | ⭐ 42.9k<br><sub>2026-11-24</sub> |
| **[Ponytail](https://github.com/DietrichGebert/ponytail)** | 遵循 YAGNI 原则与极简主义的跨端 Agent 插件、钩子与技能集，减少冗余代码。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | `yagni` `code-simplicity` `prompt-engineering` | ⭐ 199.4k<br><sub>2026-11-22</sub> |
| **[Caveman](https://github.com/JuliusBrussee/caveman)** | 通过极简表达技能与本地代理压缩工具输出，大幅降低编码 Agent Token 消耗且可无损还原原文。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | `token-optimization` `proxy` `prompt-compression` | ⭐ 123.1k<br><sub>2026-11-26</sub> |
| **[Understand Anything](https://github.com/Egonex-AI/Understand-Anything)** | 将任意代码库转换为可检索、可提问的交互式知识图谱的多端 Agent 插件。 | `Claude Code` `Codex` `Cursor` `GitHub Copilot` `+3` | `knowledge-graph` `code-comprehension` `visualization` | ⭐ 94.6k<br><sub>2026-11-25</sub> |
| **[Claude Code Best Practice](https://github.com/shanraisshan/claude-code-best-practice)** | 面向工程化开发的 Claude Code 最佳实践集合，涵盖 Agent 团队、指令、技能与 MCP 编排工作流。 | `Claude Code` `Codex` | `best-practices` `agent-teams` `workflows` | ⭐ 69.4k<br><sub>2026-11-26</sub> |
| **[Claude Code Tips & dx Plugin](https://github.com/ykdojo/claude-code-tips)** | 包含 45+ Claude Code 进阶技巧、状态栏与容器化脚本，并内置日常开发工作流 dx 插件与技能。 | `Claude Code` | `claude-code` `tips` `dx` | ⭐ 10.4k<br><sub>2026-09-25</sub> |
| **[Universal Game Modder](https://github.com/rehan-remade/universal-modder)** | PC 游戏 Mod 开发插件，支持游戏结构逆向、AI 生成美术/3D/音频资产与游戏内自动化测试。 | `Claude Code` | `gamedev` `modding` `reverse-engineering` | ⭐ 9.9k<br><sub>2026-11-27</sub> |
| **[DSH TUI](https://github.com/ccch1mneyyy/dsh-TUI)** | DeepSeek Harness 生态的高性能终端 UI 插件，具备低占用、流畅鼠标交互与预设配置能力。 | `DeepSeek Harness` `Claude Code` | `dsh-plugin` `tui` `terminal` | ⭐ 8.3k<br><sub>2026-11-27</sub> |
| **[Floorplan Codebase Map](https://github.com/haydenschmitty/floorplan)** | 自动绘制通俗易懂的交互式代码库全景架构图，直观呈现各模块协作关系的插件。 | `Claude Code` `Codex` | `architecture` `visualization` `codebase-map` | ⭐ 7.0k<br><sub>2026-11-16</sub> |
| **[ModLens](https://github.com/liustack/modlens)** | DeepSeek Harness 外挂视觉插件与技能桥接器，为纯文本编码代理提供图片 OCR、版面与语义结构化解析。 | `DeepSeek Harness` `Claude Code` `Codex` `通用` | `dsh-plugin` `vision` `ocr` | ⭐ 5.1k<br><sub>2026-11-25</sub> |
| **[Fast Anything](https://github.com/EL4CTEO/fast-anything)** | 性能分析与热点加速插件：定位 Python/Node/Ruby 慢热点，自动移植为 Rust FFI 并验证行为一致。 | `Claude Code` `Codex` | `performance` `profiling` `rust` | ⭐ 4.3k<br><sub>2026-11-26</sub> |
| **[ArcKit Enterprise Architecture](https://github.com/tractorjuice/arc-kit)** | 企业级架构治理插件，提供 76 个命令辅助起草需求规格、商业论证、ADR 与架构评审。 | `Claude Code` `Codex` | `enterprise-architecture` `adr` `governance` | ⭐ 2.3k<br><sub>2026-11-25</sub> |
| **[BAMA (Build Any Mac App)](https://github.com/daveebbelaar/bama)** | 面向原生 macOS 应用开发的插件与技能包，覆盖调研、设计、Swift/SwiftUI 编写、调优与测试。 | `Claude Code` `Codex` | `macos` `swift` `swiftui` | ⭐ 2.0k<br><sub>2026-11-05</sub> |
| **[Rederive](https://github.com/EricJujianZou/rederive)** | 苏格拉底式代码理解技能，通过反向提问帮你重新推演 AI 编写代码的设计决策，从容应对评审与面试。 | `Claude Code` `通用` | `code-comprehension` `interview-prep` `learning` | ⭐ 1.8k<br><sub>2026-11-19</sub> |
| **[Brooks Lint](https://github.com/hyhmrright/brooks-lint)** | 6 个跨端代码质量审查技能，聚焦架构评审、技术债识别、测试完备度审计与修复建议。 | `Claude Code` `Codex` `Cursor` `GitHub Copilot` | `code-review` `architecture-review` `tech-debt` | ⭐ 1.6k<br><sub>2026-11-26</sub> |
| **[OpenQodex](https://github.com/openqodex/openqodex)** | 独立前置代码审查插件，在推送前由独立审查者自动检验编程 Agent 产出的每一处变更。 | `Claude Code` `Codex` `Cursor` `通用` | `code-review` `pre-push` `quality` | ⭐ 1.2k<br><sub>2026-11-26</sub> |
| **[Sno Station Skills](https://github.com/sno-ai/sno-station-skills)** | 沉淀资深研发团队协作习惯的跨端工程技能插件，强化跨角色代码审查与交付规范。 | `Claude Code` `Codex` `Cursor` `通用` | `code-review` `engineering-habits` `workflow` | ⭐ 874<br><sub>2026-11-26</sub> |
| **[Codex Autoresearch](https://github.com/TheGreenCedar/codex-autoresearch)** | 用于在代码库中围绕可量化指标自动执行循环优化实验的 Codex 插件。 | `Codex` | `codex` `optimization` `autoresearch` | ⭐ 840<br><sub>2026-10-11</sub> |
| **[Product Engineering Skills](https://github.com/phuryn/product-engineering)** | 从真实上线产品提炼的 38 个产品工程技能，覆盖需求决策、编码实现、双模型审查与发布流程。 | `Claude Code` `Codex` `Cursor` `通用` | `product-engineering` `shipping` `second-model-review` | ⭐ 823<br><sub>2026-11-26</sub> |
| **[Claude Code Tresor](https://github.com/alirezarezvani/claude-code-tresor)** | 集成自主技能、专家子代理、斜杠命令与提示词的 Claude Code 研发效率合集。 | `Claude Code` `Cursor` | `claude-code` `subagents` `slash-commands` | ⭐ 789<br><sub>2026-11-10</sub> |
| **[AI Doc Gen](https://github.com/divar-ir/ai-doc-gen)** | 多智能体代码库文档生成插件，并发分析源码结构并输出完整技术文档，支持 GitLab 集成。 | `Claude Code` `通用` | `documentation` `code-analysis` `gitlab` | ⭐ 772<br><sub>2026-07-21</sub> |
| **[Claude Skills Engineering Marketplace](https://github.com/mhattingpete/claude-skills-marketplace)** | 面向软件工程工作流的 Claude Code 插件市场，涵盖 Git 自动化、测试、代码审查与可视化文档。 | `Claude Code` | `git-automation` `code-review` `testing` | ⭐ 696<br><sub>2026-07-25</sub> |
| **[Modularity Architecture Plugin](https://github.com/vladikk/modularity)** | 基于领域驱动设计与平衡耦合原则的模块化系统设计及代码库耦合度审计插件。 | `Claude Code` | `ddd` `modularity` `coupling` | ⭐ 674<br><sub>2026-08-31</sub> |
| **[Abide Rule Enforcer](https://github.com/coldteadotai/abide)** | 通过 Hooks 与技能机制确保编程 Agent 严格遵守项目编码规范与架构约束的插件。 | `Claude Code` `Codex` | `hooks` `rules` `compliance` | ⭐ 634<br><sub>2026-10-10</sub> |
| **[Claude Elixir & Phoenix](https://github.com/oliver-kriska/claude-elixir-phoenix)** | 面向 Elixir/Phoenix/LiveView 开发的专精插件，集成 26 个专家子代理、铁律检查与 Tidewave MCP。 | `Claude Code` | `elixir` `phoenix` `liveview` | ⭐ 578<br><sub>2026-11-20</sub> |
| **[CC Polymath](https://github.com/rand/cc-polymath)** | 注重上下文效率的 Claude Code 插件，集成覆盖云架构、设计与数学等领域的技能、子代理与 MCP 服务。 | `Claude Code` | `claude-code` `context-efficiency` `workflows` | ⭐ 192<br><sub>2026-02-28</sub> |
| **[AI Software Architect](https://github.com/codenamev/ai-software-architect)** | 软件架构文档与评审插件，内置架构决策记录（ADR）、架构审查与务实设计模式。 | `Claude Code` | `architecture` `adr` `documentation` | ⭐ 81<br><sub>2026-11-20</sub> |
| **[Kitbash](https://github.com/Open-Dev-Society/kitbash)** | 实时检索并验证 GitHub 开源仓库的插件与技能，帮 Agent 判断哪些模块可直接复用、改造或自研。 | `Claude Code` `通用` | `github-search` `reuse` `architecture` | ⭐ 59<br><sub>2026-11-22</sub> |
| **[Agent Formal Verify](https://github.com/michael-denyer/agent-formal-verify)** | 为编程 Agent 引入 TLA+ 模型检验与 Lean 形式化证明能力的跨端验证插件。 | `Claude Code` `Codex` `OpenCode` `Antigravity` | `formal-verification` `tla+` `lean` | ⭐ 57<br><sub>2026-11-27</sub> |
| **[cc-best Dev Team](https://github.com/xiaobei930/cc-best)** | 将 Claude Code 打造为 PM→Lead→Dev→QA 完整开发团队的插件，内置 44 个命令、19 个技能、8 个子代理与 30 个 Hooks。 | `Claude Code` | `dev-team` `tdd` `hooks` | ⭐ 50<br><sub>2026-06-12</sub> |
| **[Bleu](https://github.com/Nirvaan05/Bleu-plugin)** | 编码前架构蓝图插件与技能，将初步项目想法拆解为包含组件、流程与文件级执行清单的完整实现方案。 | `通用` `Claude Code` | `architecture` `planning` `blueprint` | — |
| **[Great CTO](https://github.com/avelikiy/great_cto)** | 面向全软件生命周期的 Claude Code 插件，内置专家子代理、命令、合规流程与经验沉淀机制。 | `Claude Code` | `sdlc` `compliance` `engineering-leadership` | — |
| **[Ratchet](https://github.com/krishansubudhi/ratchet)** | 通过 Stop Hook 强制执行只降不增代码规模预算的 Claude Code 插件，防止编码 Agent 导致仓库膨胀。 | `Claude Code` | `code-quality` `hooks` `budget` | — |

## 前端与设计

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[PixelFX](https://github.com/patch-gg/pixelfx)** | 内置 244 种程序化像素特效及 Claude Code 技能，用代码快速创作自定义像素粒子与精灵表动画。 | `Claude Code` `通用` | `pixel-art` `vfx` `canvas` | ⭐ 9.6k<br><sub>2026-11-13</sub> |
| **[Interface Design](https://github.com/Dammyjay93/interface-design)** | 面向 Claude Code 的界面设计工程插件，通过设计记忆与规范约束确保前端 UI 的高度一致性。 | `Claude Code` | `ui-design` `design-engineering` `design-system` | ⭐ 6.0k<br><sub>2026-06-20</sub> |
| **[Design Extract](https://github.com/Manavarya09/design-extract)** | 一键提取任意网站完整设计系统为 DTCG Token 与多端代码（CSS、SwiftUI 等）的插件与 MCP。 | `Claude Code` `Cursor` `Windsurf` `通用` | `design-system` `tokens` `dtcg` | ⭐ 5.2k<br><sub>2026-11-25</sub> |
| **[Terminal Browser](https://github.com/zenbu-labs/terminal-browser)** | 基于 Rust 构建的终端内置真实浏览器插件，让编程 Agent 直接在命令行中浏览与交互网页。 | `Claude Code` `Codex` | `browser` `terminal` `rust` | ⭐ 5.0k<br><sub>2026-11-25</sub> |
| **[Artideck](https://github.com/Innei/artideck)** | 面向编码 Agent 的交互式决策工件插件，让 Agent 生成画板、设计稿、白板与验证报告供你挑选批注并回传。 | `Claude Code` `通用` | `artboard` `artifacts` `whiteboard` | ⭐ 988<br><sub>2026-11-27</sub> |
| **[AnyMove Motion Capture](https://github.com/patch-gg/anymove)** | 从单段 AI 视频提取任意生物动作捕捉数据（DINOv2 关节点追踪 + 骨骼绑定）并导出 GLB 动画的插件。 | `Claude Code` | `motion-capture` `blender` `dinov2` | ⭐ 670<br><sub>2026-11-13</sub> |
| **[SpriteCast](https://github.com/Sunghwan0112/spritecast)** | 3D 视角引导的游戏精灵图生成插件，按精确机位与美术风格生成道具与八方向行走角色序列帧。 | `Claude Code` | `gamedev` `sprites` `isometric` | ⭐ 555<br><sub>2026-11-26</sub> |
| **[Craft Design Plugin](https://github.com/diego3g/craft)** | 通过 /craft-setup 与 /craft 撰写设计简报、按设计系统生成完整交互状态页面并自动评审的 UI 设计插件。 | `Claude Code` | `design-system` `figma` `ui-design` | ⭐ 512<br><sub>2026-11-23</sub> |
| **[UI Craft](https://github.com/educlopez/ui-craft)** | 面向 AI 编程代理的设计工程系统，集成技能、规则与 MCP 工具以交付高质感 UI。 | `通用` | `design-engineering` `ui-design` `design-system` | ⭐ 484<br><sub>2026-11-20</sub> |
| **[Accessibility Agents](https://github.com/Community-Access/accessibility-agents)** | 面向编程代理的 WCAG 2.2 AA 无障碍审查套件，集成技能、编辑门禁钩子与扫描器。 | `Claude Code` `GitHub Copilot` `Gemini CLI` `Codex` | `accessibility` `wcag` `a11y` | ⭐ 456<br><sub>2026-11-23</sub> |
| **[Pixel Plugin](https://github.com/willibrandon/pixel-plugin)** | 通过自然语言调用 Aseprite 创作像素画、动画与游戏精灵图集的 Claude Code 插件。 | `Claude Code` | `pixel-art` `aseprite` `sprites` | ⭐ 435<br><sub>2025-10-19</sub> |
| **[App-It macOS](https://github.com/Christian-Katzmann/app-it)** | 将本地 Web 项目一键封装为独立窗口、图标且可固定到 Dock 栏的 macOS 应用插件。 | `Claude Code` `Codex` | `macos` `webkit` `dock` | ⭐ 217<br><sub>2026-11-02</sub> |
| **[Stark UI/UX Plugin](https://github.com/f0d010c/stark)** | 编码前置的 UI/UX 设计插件，覆盖产品流程、跨平台原生界面规范、视觉资产规划与参考分析。 | `Claude Code` `通用` | `ui-ux` `design-system` `swiftui` | ⭐ 54<br><sub>2026-07-26</sub> |

## 云与运维

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[PostgreSQL AI Guide](https://github.com/timescale/pg-aiguide)** `官方` | Timescale 官方 PostgreSQL MCP 与 Claude 插件，提供权威 Postgres 技能、版本文档与查询最佳实践。 | `Claude Code` `通用` | `official` `postgres` `timescale` | — |
| **[Sentry Agentic Toolkit](https://github.com/getsentry/toolkit)** `官方` | Sentry 官方 Agent 工具套件，融合 MCP 与技能用于排查线上报错、堆栈追踪与回归定位。 | `通用` `Claude Code` | `official` `sentry` `debugging` | — |
| **[Claude Carbon](https://github.com/gwittebolle/claude-carbon)** | 通过状态栏与 Hooks 实时追踪 Claude Code 会话碳足迹与能耗的环保监控插件。 | `Claude Code` | `carbon-footprint` `statusline` `hooks` | ⭐ 256<br><sub>2026-11-23</sub> |
| **[MSP Skills & Local MCP](https://github.com/Servosity/msp-skills)** | 面向 IT 托管服务商（MSP）的本地优先 MCP 与技能包，覆盖 PSA、RMM、备份与 Microsoft 365 运维。 | `Claude Code` `通用` | `msp` `psa` `rmm` | ⭐ 89<br><sub>2026-11-18</sub> |

## 编排与多代理协作

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[MemSearch](https://github.com/zilliztech/memsearch)** `官方` | Zilliz 官方出品的跨 Agent 持久化统一记忆层插件，结合本地 Markdown 与 Milvus 向量检索。 | `Claude Code` `Codex` `DeepSeek Harness` `通用` | `memory` `milvus` `markdown` | ⭐ 3.0k<br><sub>2026-11-27</sub> |
| **[Claude Brain (Memvid)](https://github.com/memvid/claude-brain)** `官方` | 基于 Rust 内核的便携式记忆插件，将 Claude Code 长期记忆压缩进单个可 Git 管理的 .mv2 文件。 | `Claude Code` | `memory` `rust` `portable-file` | ⭐ 585<br><sub>2026-01-19</sub> |
| **[Corezoid AI Plugin](https://github.com/corezoid/corezoid-ai-plugin)** `官方` | Corezoid 官方 AI 插件，提供流程编排技能、Schema、模板手册与 MCP 参考。 | `Claude Code` `Codex` | `corezoid` `workflow-automation` `api-orchestration` | ⭐ 74<br><sub>2026-11-13</sub> |
| **[Superpowers](https://github.com/obra/superpowers)** | 面向编码 Agent 的结构化工程工作流插件，内置方案设计、严格 TDD、系统化调试与子代理驱动开发。 | `Claude Code` `Codex` `Cursor` `OpenCode` | `/plugin install obra/superpowers` | ⭐ 327.5k<br><sub>2026-11-26</sub> |
| **[pstack Multi-Harness Plugin](https://github.com/michael-denyer/pstack-claude)** | 将 Cursor 工程工作流原语移植到 Claude Code、Codex、Copilot、Gemini CLI、OpenCode 与 Antigravity 的跨端插件。 | `Claude Code` `Codex` `GitHub Copilot` `Gemini CLI` `+3` | `workflow` `code-review` `pstack` | ⭐ 4.9k<br><sub>2026-11-26</sub> |
| **[Token Optimizer](https://github.com/alexgreensh/token-optimizer)** | 定位冗余 Token 消耗、优化上下文压缩并防止长会话上下文质量衰减的插件。 | `Claude Code` `Codex` | `token-optimization` `compaction` `context` | ⭐ 3.2k<br><sub>2026-11-26</sub> |
| **[LongHorizon Harness](https://github.com/AMAP-ML/LongHorizon-Harness)** | 面向长周期桌面与命令行任务的 Agent 运行时插件，支持刷新上下文执行、持久化状态校验与独立审计。 | `Claude Code` `Codex` `DeepSeek Harness` | `long-horizon` `computer-use` `gui` | ⭐ 1.9k<br><sub>2026-11-11</sub> |
| **[Oh My ClaudeCode](https://github.com/Yeachan-Heo/oh-my-claudecode)** | 面向团队协作的 Claude Code 多 Agent 编排插件，整合专业子代理、技能、Hooks 与并行执行工作流。 | `Claude Code` | `multi-agent` `teams` `orchestration` | — |
| **[Everything Claude Code (ECC)](https://github.com/affaan-m/ECC)** | 集成技能、直觉记忆、安全规范与研究驱动工作流的 Agent 运行框架性能优化套件。 | `Claude Code` `Codex` `OpenCode` `Cursor` `+2` | `agent-harness` `memory` `orchestration` | ⭐ 311.3k<br><sub>2026-11-23</sub> |
| **[Claude Mem](https://github.com/thedotmack/claude-mem)** | 跨会话持久化记忆插件，自动捕获并压缩 Agent 操作上下文，在后续会话中按需注入。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | `memory` `persistent-context` `session-history` | ⭐ 120.0k<br><sub>2026-11-26</sub> |
| **[Oh My OpenAgent (OmO)](https://github.com/code-yeongyu/oh-my-openagent)** | 面向 OpenCode 与主流编码工具的多 Agent 编排插件与运行框架，强化复杂任务协同工作流。 | `OpenCode` `Claude Code` `Codex` `Cursor` `+1` | `orchestration` `multi-agent` `opencode` | ⭐ 71.1k<br><sub>2026-11-27</sub> |
| **[Context Mode](https://github.com/mksglu/context-mode)** | 零遥测本地上下文优化插件，利用沙箱与 SQLite FTS5 检索将冗长工具输出隔离在上下文窗口之外。 | `Claude Code` `Codex` `Gemini CLI` `GitHub Copilot` `+2` | `context-management` `token-savings` `sandbox` | ⭐ 34.5k<br><sub>2026-11-26</sub> |
| **[AutoHarness](https://github.com/tigerless-labs/autoharness)** | 具备自学习能力的 Claude Code 插件，结合钩子、子代理与工具从真实任务中自动沉淀可复用技能。 | `Claude Code` | `self-learning` `skill-extraction` `harness` | ⭐ 10.2k<br><sub>2026-11-12</sub> |
| **[CCG Workflow](https://github.com/fengshao1227/ccg-workflow)** | 多模型协同工作流引擎插件，通过一条 /ccg:go 命令自动分析意图并编排 Codex、Gemini 与 Claude 协作执行。 | `Claude Code` `Codex` `Gemini CLI` `DeepSeek Harness` | `multi-model` `orchestration` `workflow` | ⭐ 6.0k<br><sub>2026-11-19</sub> |
| **[Obsidian Second Brain](https://github.com/eugeniughelbur/obsidian-second-brain)** | 基于 Obsidian Markdown 的跨代理持久化记忆插件，提供 48 条指令、语义检索、钩子及多端共享日志。 | `Claude Code` `Codex` `Cursor` `通用` | `obsidian` `persistent-memory` `second-brain` | ⭐ 5.5k<br><sub>2026-11-26</sub> |
| **[Claude Octopus](https://github.com/nyldn/claude-octopus)** | 多模型并行协作插件，对同一研究、设计或编码任务同时调用多个模型并在交付前暴露分歧。 | `Claude Code` `Codex` `GitHub Copilot` | `multi-model` `orchestration` `consensus` | ⭐ 4.5k<br><sub>2026-11-27</sub> |
| **[Continuous Claude v3](https://github.com/parcadei/Continuous-Claude-v3)** | 基于 Hooks、状态账本、交接清单与隔离上下文窗口的 Claude Code 长程上下文管理与编排插件。 | `Claude Code` | `context-management` `hooks` `ledgers` | ⭐ 4.0k<br><sub>2026-11-16</sub> |
| **[Pro Workflow](https://github.com/rohitg00/pro-workflow)** | 具备自我纠错记忆的工程工作流插件，跨 50+ 会话持续沉淀经验，集成并行 Worktrees 与 17 个实战技能。 | `Claude Code` | `self-correcting` `memory` `worktrees` | ⭐ 3.0k<br><sub>2026-09-29</sub> |
| **[Babysitter Orchestrator](https://github.com/a5c-ai/babysitter)** | 通过确定性流程约束保障复杂多阶段任务零幻觉、严格按规范执行的 Agent 编排插件。 | `Claude Code` `通用` | `orchestration` `deterministic` `workflow` | ⭐ 1.9k<br><sub>2026-11-01</sub> |
| **[Octogent](https://github.com/hesamsheikh/octogent)** | 面向 Claude Code 的轻量级多会话编排看板与 Hooks 自动化插件。 | `Claude Code` `Codex` | `dashboard` `hooks` `context` | ⭐ 1.4k<br><sub>2026-04-20</sub> |
| **[AgentRQ](https://github.com/agentrq/agentrq)** | 自托管的人机协同实时对话任务管理器插件，支持从手机、网页与桌面端远程掌控 AI Agent。 | `Claude Code` `Gemini CLI` `OpenCode` `DeepSeek Harness` | `task-manager` `human-in-the-loop` `acp` | ⭐ 1.2k<br><sub>2026-11-27</sub> |
| **[Lot Map](https://github.com/alexeyw/lot-map)** | 本地实时可视化地图插件，在对话旁动态高亮展示每次工具调用、Hook、技能与子代理的执行轨迹。 | `Claude Code` | `observability` `visualization` `svg` | ⭐ 1.2k<br><sub>2026-11-22</sub> |
| **[Squadra](https://github.com/dagoSte/squadra)** | 跨窗口协同编排 Claude、Codex 与 Cursor 的插件，支持共享任务、并行测试、源码取证与独立复核。 | `Claude Code` `Codex` `Cursor` | `multi-window` `orchestration` `parallel-tests` | ⭐ 971<br><sub>2026-11-22</sub> |
| **[Claude Council](https://github.com/hex/claude-council)** | 多模型议会插件，同步向 Gemini、OpenAI、Grok、Perplexity、Kimi 等模型提问并并排展示答案对比。 | `Claude Code` `Codex` `Cursor` `Antigravity` | `multi-model` `openrouter` `council` | ⭐ 966<br><sub>2026-11-17</sub> |
| **[AGY Staff](https://github.com/keli-wen/agy-staff)** | 将 Google Antigravity CLI 接入 Claude Code、Codex 与 DeepSeek Harness 作为高速 Gemini 协作者的插件。 | `Claude Code` `Codex` `DeepSeek Harness` `Antigravity` | `antigravity` `gemini` `delegation` | ⭐ 942<br><sub>2026-11-19</sub> |
| **[Citadel Operating Layer](https://github.com/SethGammon/Citadel)** | 面向 Claude Code 与 Codex 的统一运行层插件，整合项目记忆、意图路由、安全钩子、成本遥测与并行舰队。 | `Claude Code` `Codex` | `memory` `intent-routing` `safety-hooks` | ⭐ 940<br><sub>2026-11-26</sub> |
| **[Context Attachment Manager](https://github.com/chipfighter/context-attachment-manager)** | 将长会话中的历史图片转为按需拉取的 ID 占位符，保持缓存友好并防止多图对话变慢的上下文管理插件。 | `Claude Code` `Codex` | `images` `compaction` `context-window` | ⭐ 829<br><sub>2026-11-27</sub> |
| **[Claude Smart](https://github.com/ReflexioAI/claude-smart)** | 将日常纠错自动转化为个人偏好、项目专属技能与团队共享技能的跨端记忆插件。 | `Claude Code` `Codex` `OpenCode` | `memory` `preferences` `self-learning` | ⭐ 797<br><sub>2026-11-25</sub> |
| **[Hippo Memory](https://github.com/kitfunso/hippo-memory)** | 仓库级跨端共享记忆插件，教会任意一个编程 Agent 的经验自动同步给其他 Agent 复用。 | `Claude Code` `Codex` `Cursor` `通用` | `memory` `repo-memory` `cross-agent` | ⭐ 796<br><sub>2026-11-27</sub> |
| **[Recall Offline Memory](https://github.com/raiyanyahya/recall)** | 完全离线运行的持久化记忆插件，为 Claude Code 与 OpenCode 保留项目上下文，减少重复说明与 Token 浪费。 | `Claude Code` `OpenCode` | `memory` `offline` `local-first` | ⭐ 770<br><sub>2026-09-07</sub> |
| **[Flow Next](https://github.com/gmickel/flow-next)** | 从需求/工单到已验证 PR 的全流程交付插件，内置规格梳理、按风险跨模型审查与实时 QA 凭证。 | `Claude Code` | `pr-workflow` `specs` `cross-model-review` | ⭐ 734<br><sub>2026-11-26</sub> |
| **[Focused Claude Code Workflows](https://github.com/shinpr/claude-code-workflows)** | 让广泛代码探索始终聚焦于已批准目标的结构化 Claude Code 开发工作流插件。 | `Claude Code` | `workflows` `planning` `exploration` | ⭐ 721<br><sub>2026-11-26</sub> |
| **[PRD Taskmaster (Atlas)](https://github.com/anombyte93/prd-taskmaster)** | 零配置目标拆解与执行引擎插件，集成分级 PRD 校验、依赖任务图与证据门控执行。 | `Claude Code` | `prd` `task-graph` `product-management` | ⭐ 613<br><sub>2026-11-04</sub> |
| **[The Architect](https://github.com/Hainrixz/the-architect)** | 通过交互访谈设计完整架构并生成带 EARS 验收标准与可运行验证命令的零上下文构建蓝图插件。 | `Claude Code` | `architecture` `blueprint` `ears` | ⭐ 592<br><sub>2026-10-25</sub> |
| **[Smart Ralph](https://github.com/tzachbon/smart-ralph)** | 结合 Ralph 自主循环与智能上下文压缩的规格驱动开发插件。 | `Claude Code` | `ralph-loop` `spec-driven` `compaction` | ⭐ 565<br><sub>2026-10-28</sub> |
| **[Claude Ops](https://github.com/Lifecycle-Innovations-Limited/claude-ops)** | 企业运维自动化插件，内置 57 个技能、21 个子代理与守护进程，打通多渠道收件箱、PR 合并与 AWS 监控。 | `Claude Code` | `business-ops` `aws` `unified-inbox` | ⭐ 563<br><sub>2026-11-24</sub> |
| **[Adversarial Spec](https://github.com/zscole/adversarial-spec)** | 通过多大模型对抗辩论反复打磨产品需求规格直至达成共识的 Claude Code 插件。 | `Claude Code` | `spec-driven` `multi-model` `debate` | ⭐ 558<br><sub>2026-01-22</sub> |
| **[Vibecosystem](https://github.com/vibeeval/vibecosystem)** | 基于配置档案的模块化编程运行时插件，按需开启质量门禁、记忆、编排与看板模块。 | `Claude Code` `Codex` | `runtime` `quality` `memory` | ⭐ 554<br><sub>2026-11-11</sub> |
| **[Antigravity for Claude Code](https://github.com/yuting0624/antigravity-for-claude-code)** | 将 Google Antigravity CLI 作为协作 Gemini 子代理接入 Claude Code 并按研发阶段智能路由模型的插件。 | `Claude Code` `Antigravity` `Gemini CLI` | `antigravity` `gemini` `routing` | ⭐ 537<br><sub>2026-11-24</sub> |
| **[Operator Memory](https://github.com/aerovato/operator-memory)** | 持续自我进化的编程 Agent 上下文与记忆引擎插件。 | `Claude Code` `通用` | `memory` `context-engine` `self-improving` | ⭐ 528<br><sub>2026-11-26</sub> |
| **[OrchestKit](https://github.com/yonatangross/orchestkit)** | 全功能编排插件套装，内置 115 个技能、36 个专家子代理与 163 个 Hooks，适配 Claude Code、Cursor 与 Codex。 | `Claude Code` `Cursor` `Codex` `通用` | `orchestration` `hooks` `testing` | ⭐ 310<br><sub>2026-11-27</sub> |
| **[Claude DB](https://github.com/Avijit07x/claude-db)** | 基于本地数据库的开源 Claude Code 记忆插件，无需云端服务与订阅即可持久化会话知识。 | `Claude Code` | `memory` `database` `local-first` | ⭐ 237<br><sub>2026-11-22</sub> |
| **[AIWG (AI Writing & Workflow Guide)](https://github.com/jmagly/aiwg)** | 跨端多智能体 SDLC 工作流框架，集成专家代理、技能、规则、MCP 工具与会话记忆。 | `Claude Code` `Codex` `GitHub Copilot` `Cursor` `+1` | `sdlc` `multi-agent` `workflows` | ⭐ 233<br><sub>2026-11-26</sub> |
| **[CC Fleet](https://github.com/ethanhq/cc-fleet)** | 让 Claude Code 的动态工作流、Agent 团队与子代理无缝接入 DeepSeek、GLM、Kimi、Qwen 或 Codex 等第三方模型。 | `Claude Code` `Codex` | `multi-model` `deepseek` `qwen` | ⭐ 201<br><sub>2026-10-24</sub> |
| **[DSH Bridge for Claude Code](https://github.com/cpj-dev/dsh-plugin-cc)** | 将 DeepSeek Harness 桥接到 Claude Code 的插件，支持跨模型审查、挑错、任务委派与会话导入。 | `Claude Code` `DeepSeek Harness` | `deepseek-harness` `bridge` `code-review` | ⭐ 105<br><sub>2026-08-27</sub> |
| **[Cache Maxxing](https://github.com/5m0k3/cache-maxxing)** | 实时提示词缓存倒计时状态条插件，发送前预估缓存过期时间与下一条消息成本。 | `Claude Code` | `prompt-cache` `cost` `token-optimization` | ⭐ 91<br><sub>2026-11-21</sub> |
| **[CC Gemini Plugin](https://github.com/thepushkarp/cc-gemini-plugin)** | 将 Gemini CLI 以子代理和技能形式无缝集成到 Claude Code 与 Codex 中的跨模型协作插件。 | `Claude Code` `Codex` `Gemini CLI` | `gemini-cli` `multi-model` `bridge` | ⭐ 76<br><sub>2026-10-01</sub> |
| **[Caprock](https://github.com/dspv/caprock)** | 本地优先的多 Agent 开发环境与插件，支持并行运行 Claude Code、Codex、OpenCode 与 Gemini CLI 并追踪每个 PR 的成本。 | `Claude Code` `Codex` `OpenCode` `Gemini CLI` | `desktop` `multi-agent` `cost-tracking` | ⭐ 54<br><sub>2026-11-26</sub> |
| **[AI Maestro](https://github.com/23blocks-OS/ai-maestro)** | 带模块化技能系统、持久化记忆检索与跨代理通信的 AI Agent 编排器。 | `Claude Code` `通用` | `orchestrator` `memory` `skills` | — |
| **[AI Maestro Plugins](https://github.com/23blocks-OS/ai-maestro-plugins)** | AI Maestro 官方插件合集，包含 150+ 角色人格、核心技能、身份管理与代理间消息协作能力。 | `Claude Code` `通用` | `personas` `skills` `messaging` | — |
| **[Claude Agents View](https://github.com/qaokss/claude-agents-view)** | Claude Code 实时监控面板插件，以列表和拓扑图形式展示各会话中运行中的子代理、技能与执行计划。 | `Claude Code` | `subagents` `monitoring` `graph` | — |
| **[Loki Mode](https://github.com/asklokesh/loki-mode)** | 自主多 Agent 软件工厂插件，接收 GitHub Issue 或需求文档后端到端编排规划、编码、测试与交付。 | `Claude Code` `Codex` `Gemini CLI` | `autonomous` `multi-agent` `software-factory` | — |
| **[Pi Agent for Claude](https://github.com/FazalAAli/pi-agent-for-claude)** | Claude Code 扩展 Mod，新增基于 pi CLI 的多模型子代理类型并原生流式集成到 Claude Code 协作界面。 | `Claude Code` | `subagents` `multi-model` `pi` | — |
| **[Ruflo (Claude Flow)](https://github.com/ruvnet/ruflo)** | 面向 Claude Code 与 Codex 的多 Agent 蜂群编排平台，集成协同子代理、记忆层、技能系统与 MCP 工具。 | `Claude Code` `Codex` `通用` | `swarm` `orchestration` `multi-agent` | — |
| **[Savia](https://github.com/gonzalezpazmonica/savia)** | 不绑定厂商的工程治理与任务编排 Agent 套件，覆盖软件开发与项目管理全流程。 | `Claude Code` `通用` | `governance` `workflow` `multi-agent` | — |
| **[Subagent Tuner](https://github.com/Kruhlikau/subagent-tuner)** | Claude Code 子代理调优 Mod，按任务类型自动推荐并配置各子代理的模型与推理强度。 | `Claude Code` | `subagents` `model-routing` `reasoning-effort` | — |

## 数据、研究与知识

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Posit Data Science Skills](https://github.com/posit-dev/skills)** `官方` | Posit 官方维护的数据科学技能包，面向 R、Python、Quarto 与 Shiny 可复现分析工作流。 | `Claude Code` `通用` | `posit` `r` `python` | ⭐ 576<br><sub>2026-11-12</sub> |
| **[Firecrawl Claude Plugin](https://github.com/firecrawl/firecrawl-claude-plugin)** `官方` | Firecrawl 官方 Claude Code 插件，支持实时联网搜索、抓取技术文档与抽取结构化网页数据。 | `Claude Code` | `official` `firecrawl` `web-search` | — |
| **[Claude Obsidian](https://github.com/AgriciDaniel/claude-obsidian)** | 面向 Obsidian 与 Claude Code 的自组织 AI 第二大脑插件，自动阅读、关联并归档资料为本地 Markdown 知识图谱。 | `Claude Code` | `obsidian` `second-brain` `pkm` | ⭐ 16.8k<br><sub>2026-10-25</sub> |
| **[Academic Research Skills](https://github.com/Imbad0202/academic-research-skills)** | 覆盖文献检索、论文撰写、同行评审与修改定稿全流程的 Claude Code 学术研究插件。 | `Claude Code` | `academic-writing` `literature-review` `peer-review` | ⭐ 58.7k<br><sub>2026-11-27</sub> |
| **[UZI Skill](https://github.com/wbh604/UZI-Skill)** | 面向 A 股、港股与美股的量化投研插件，集成 66 位投资大师角色、180 条量化规则与 17 种机构分析方法。 | `Claude Code` `Codex` `Cursor` `OpenCode` `+1` | `finance` `quant` `stock-analysis` | ⭐ 7.7k<br><sub>2026-11-23</sub> |
| **[Ars Contexta](https://github.com/agenticnotetaking/arscontexta)** | 通过对话了解你的思考与工作方式，为你量身生成完整 Markdown 第二大脑知识系统的插件。 | `Claude Code` | `second-brain` `note-taking` `markdown` | ⭐ 3.5k<br><sub>2026-02-24</sub> |
| **[NanoResearch](https://github.com/OpenRaiser/NanoResearch)** | 自主 AI 科研助手插件，自动化推进假设提出、文献综合与实验迭代。 | `Claude Code` `通用` | `ai-scientist` `autonomous-research` `academic` | ⭐ 1.3k<br><sub>2026-10-09</sub> |
| **[ModSearch](https://github.com/liustack/modsearch)** | 免费免 API Key 的联网搜索插件与技能桥接工具，为 DeepSeek Harness 等模型返回带引用的结构化 JSON 网页与 X 搜索证据。 | `DeepSeek Harness` `Claude Code` `Codex` `OpenCode` | `web-search` `deepseek-harness` `research` | ⭐ 1.0k<br><sub>2026-11-25</sub> |
| **[Cambium Knowledge Governance](https://github.com/KimGLee/Cambium)** | 面向大模型维护知识语料库的确定性校验与人机协同治理插件工具集。 | `Claude Code` `DeepSeek Harness` | `knowledge-base` `governance` `validation` | ⭐ 663<br><sub>2026-09-12</sub> |
| **[Source-Grounded Buddhist Skills](https://github.com/xr843/Master-skill)** | 经 CBETA 与 SuttaCentral 校核的数字人文与佛学经典引文溯源技能及 MCP 服务。 | `Claude Code` `通用` | `buddhism` `digital-humanities` `cbeta` | ⭐ 604<br><sub>2026-11-26</sub> |
| **[Wenlan Living Playbook](https://github.com/wenlan-app/wenlan)** | 本地优先的活文档与规则同步插件，让人与多款 AI 工具始终基于同一套最新知识与技能协作。 | `Claude Code` `Codex` `通用` | `playbook` `knowledge-base` `llm-wiki` | ⭐ 501<br><sub>2026-11-27</sub> |
| **[Claude Patent Creator](https://github.com/RobThePCGuy/Claude-Patent-Creator)** | 集成 MCP 服务器、混合 RAG 检索与自主代理的美国专利撰写与检索 Claude Code 插件系统。 | `Claude Code` | `patents` `uspto` `rag` | ⭐ 217<br><sub>2026-11-26</sub> |
| **[Mycelium AI Brain](https://github.com/mycelium-hq/ai-brain-starter)** | 面向 Claude Code 的个人知识操作系统插件，整合长期记忆、日志复盘、知识图谱与模式识别。 | `Claude Code` | `memory` `obsidian` `journaling` | ⭐ 56<br><sub>2026-11-27</sub> |
| **[LLM Wiki Plugin](https://github.com/praneybehl/llm-wiki-plugin)** | 用于构建与维护个人 LLM 知识库的 Claude Code 插件，支持分片索引与快速检索。 | `Claude Code` | `wiki` `knowledge-base` `search` | — |
| **[pdfToMarkdown](https://github.com/ThiloReintjes/pdftomarkdown-skill)** | Claude Code 插件与技能，可将扫描件、表格、多栏排版及中日韩文档等复杂 PDF 高保真转换为 Markdown。 | `Claude Code` `通用` | `pdf` `markdown` `ocr` | — |

## 效率与协作

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Beezi Cost & Usage Plugin](https://github.com/Beezi-AI/beezi-claude-plugin)** `官方` | Beezi 官方插件，用于追踪 Claude Code 单会话成本、生成个人用量摘要并一键起草工单。 | `Claude Code` | `cost-tracking` `analytics` `token-usage` | ⭐ 63<br><sub>2026-11-20</sub> |
| **[Career Ops](https://github.com/career-ops-hq/career-ops)** | 本地运行的 AI 求职辅助插件与工具集，支持岗位匹配评分、ATS 简历定制、面试准备与投递追踪。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+2` | `job-search` `resume` `career` | ⭐ 85.1k<br><sub>2026-11-26</sub> |
| **[Text to CAD](https://github.com/earthtojake/text-to-cad)** | 支持主流编码 Agent 的文本生成 CAD 插件与 MCP 套件，可用自然语言设计实体模型并导出工程文件。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` `+1` | `cad` `3d-modeling` `mechanical-engineering` | ⭐ 27.6k<br><sub>2026-11-27</sub> |
| **[Vibe Wise](https://github.com/nykooi1/vibe-wise)** | 在 AI 编写代码的同时引导开发者理解架构与实现原理的伴随式学习插件。 | `Claude Code` `Codex` | `learning` `coding` `education` | ⭐ 4.5k<br><sub>2026-10-09</sub> |
| **[Fluent Korean Output Style](https://github.com/snflkd/fluent-korean)** | 专为韩语开发者优化的 Claude Code 输出风格插件，让回复更加清晰地道。 | `Claude Code` | `korean` `output-style` `localization` | ⭐ 1.5k<br><sub>2026-08-23</sub> |
| **[Engram Learning Engine](https://github.com/nagisanzenin/engram)** | 循证学习引擎插件，融合第一性原理课程、自由回忆检验、FSRS 间隔重复与可探索学习工件。 | `Claude Code` | `learning` `fsrs` `spaced-repetition` | ⭐ 1.5k<br><sub>2026-08-27</sub> |
| **[Claude Share](https://github.com/Paradigm-Study/claude-share)** | 自托管多人协作插件，分享链接即可让团队成员实时围观并协同评审同一个 Claude Code 会话与预览。 | `Claude Code` | `multiplayer` `pair-programming` `collaboration` | ⭐ 1.2k<br><sub>2026-10-30</sub> |
| **[Open Steps](https://github.com/kharmanskyi/open-steps)** | 以直白语言输出诚实会话总结、明确结论与可执行下一步建议的跨端技能插件。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | `session-reports` `plain-language` `workflow` | ⭐ 1.1k<br><sub>2026-11-15</sub> |
| **[Claude Skills for Founders](https://github.com/emotixco/claude-skills-founder)** | 面向创业者的终端技能插件，快速生成产品简报、竞品分析、定价策略、融资 Pitch Deck 与 GTM 方案。 | `Claude Code` | `founder` `pitch-deck` `pricing` | ⭐ 937<br><sub>2026-11-03</sub> |
| **[Claude Code 简体中文汉化插件](https://github.com/taekchef/claude-code-zh-cn)** | Claude Code CLI 简体中文汉化插件，支持 macOS/Linux/WSL/Windows，一行安装并在版本更新后自动修复。 | `Claude Code` | `chinese` `i18n` `localization` | ⭐ 870<br><sub>2026-11-25</sub> |
| **[Prismantis Terminal Themes](https://github.com/NahumLitvin/prismantis)** | 支持 15 套配色的 Claude Code 终端美化插件，增强表格、代码、Mermaid 图表渲染并附一键复制按钮。 | `Claude Code` | `terminal` `themes` `markdown` | ⭐ 510<br><sub>2026-11-24</sub> |
| **[Claude Multi-Desktop](https://github.com/jackson-cmd/claude-multi-desktop)** | macOS 多开 Claude Desktop 账号插件，支持独立登录、自定义图标、共享配置与跨账号会话通信。 | `Claude Code` | `macos` `multi-account` `desktop` | ⭐ 505<br><sub>2026-11-25</sub> |
| **[AgentCall](https://github.com/pattern-ai-labs/agentcall)** | 让 AI Agent 以语音、视频和共享屏幕方式加入 Google Meet、Teams 与 Zoom 会议实时协作。 | `Claude Code` `通用` | `meetings` `voice` `google-meet` | ⭐ 215<br><sub>2026-11-15</sub> |
| **[Management Consultant B1](https://github.com/DogInfantry/claude-skill-management-consultant-B1)** | 内置 129 个参考模块的顶级管理咨询技能插件，覆盖战略框架、市场测算、案例面试与董事会级方案拆解。 | `Claude Code` `通用` | `consulting` `strategy` `market-sizing` | ⭐ 170<br><sub>2026-09-21</sub> |
| **[CC Intelligent UI](https://github.com/razorback16/cc-intelligent-ui)** | 在 Claude Code 终端内直接美化渲染 Markdown、数学公式、数据图表与架构图。 | `Claude Code` | `terminal-ui` `markdown` `charts` | ⭐ 163<br><sub>2026-11-04</sub> |
| **[Claude Tutor](https://github.com/kirilxd/claude-tutor)** | 将 Claude Code 变为个人导师的插件，支持定制学习计划、自适应测验、SM-2 间隔重复与 Web 仪表盘。 | `Claude Code` | `education` `spaced-repetition` `quizzes` | ⭐ 162<br><sub>2026-07-20</sub> |
| **[Claude Telegram Supercharged](https://github.com/k1p1l0/claude-telegram-supercharged)** | 通过 Telegram 全天候远程运行 Claude Code 的增强插件，支持双向语音、守护进程自愈与工具调用实时播报。 | `Claude Code` | `telegram` `voice` `daemon` | ⭐ 145<br><sub>2026-11-16</sub> |
| **[Job Apply Plugin](https://github.com/neonwatty/job-apply-plugin)** | 面向 Claude Code 与 Codex 的求职自动填表插件，支持 LinkedIn、Greenhouse、Ashby 与 Workday 平台。 | `Claude Code` `Codex` | `job-application` `linkedin` `greenhouse` | ⭐ 144<br><sub>2026-11-26</sub> |
| **[Agent Inbox](https://github.com/petekp/inbox)** | 会话侧边收件箱插件，将编程过程中的待办事项、遗留问题与跟进项井然有序地集中管理。 | `Claude Code` `Codex` | `inbox` `adhd-friendly` `tasks` | ⭐ 138<br><sub>2026-11-27</sub> |
| **[WhatsApp Claude Plugin](https://github.com/Rich627/whatsapp-claude-plugin)** | 无需 Docker 与 API Key 的 WhatsApp 渠道插件，支持语音转写、远程工具审批与访问控制。 | `Claude Code` | `whatsapp` `voice-transcription` `remote-approval` | ⭐ 129<br><sub>2026-10-26</sub> |
| **[echook Audio Notifications](https://github.com/ChanMeng666/echook)** | 覆盖 39 个 Hook 事件的语音与提示音通知插件，支持 TTS、Webhook、限流告警与子代理状态栏。 | `Claude Code` `Cursor` `Codex` | `hooks` `audio` `notifications` | ⭐ 91<br><sub>2026-11-17</sub> |
| **[Talk To Anyone (/coach)](https://github.com/coltonjosephdean-rgb/talk-to-anyone)** | 通过检索 YouTube 字幕与全网资料构建任意公众人物思维模型的 /coach 角色对话插件。 | `Claude Code` | `persona` `coaching` `youtube` | ⭐ 71<br><sub>2026-07-07</sub> |
| **[Immich Photo Manager](https://github.com/drolosoft/immich-photo-manager)** | 面向自托管 Immich 相册的 94 工具 MCP 与插件，支持 CLIP/OCR 搜图、去重、人脸整理与 PDF 相册制作。 | `Claude Code` `通用` | `immich` `photos` `clip` | ⭐ 68<br><sub>2026-11-05</sub> |
| **[CC Arcade](https://github.com/sezaakgun/cc-arcade)** | 零 Token 消耗的 Claude Code 终端 Mod，在等待 Claude 执行任务期间于输入框上方嵌入 2048、俄罗斯方块等小游戏。 | `Claude Code` | `tui` `games` `mod` | — |
| **[ClickUp CLI (cup)](https://github.com/krodak/clickup-cli)** | 支持 40+ 命令的 ClickUp CLI 与 Claude Code 插件，轻松管理任务、迭代与工时追踪。 | `Claude Code` `通用` | `clickup` `cli` `sprints` | — |
| **[OpenPaw](https://github.com/daxaur/openpaw)** | 包含 38 个技能的个人助手套装，为 Claude Code 集成 Git、Telegram、Discord、Obsidian 与每日简报。 | `Claude Code` | `personal-assistant` `obsidian` `telegram` | — |

## 内容与营销

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Hyperframes](https://github.com/heygen-com/hyperframes)** `官方` | HeyGen 官方开源的 AI 视频编辑插件与 MCP 工具集，支持用 HTML 编写动效并渲染输出 MP4。 | `Claude Code` `Codex` `Cursor` `Gemini CLI` | `video-editing` `html-to-video` `animation` | ⭐ 90.9k<br><sub>2026-11-27</sub> |
| **[Akii SEO & AI Search Optimizer](https://github.com/akii-technologies-ltd/akii-seo-ai-search-optimizer)** `官方` | 开源的 SEO/AEO/GEO 优化插件，包含 12 个技能、5 个子代理与 3 个命令，覆盖站点审计、Schema 与内容规划。 | `Claude Code` | `seo` `aeo` `geo` | ⭐ 80<br><sub>2026-11-13</sub> |
| **[Claude Blog](https://github.com/AgriciDaniel/claude-blog)** | 开源博客创作插件，内置 32 个技能、30 个 /blog 命令与 5 个子代理，支持调研、百分制评审与五重交付门禁。 | `Claude Code` | `blog` `seo` `geo` | ⭐ 2.9k<br><sub>2026-11-03</sub> |
| **[Claude SEO](https://github.com/AgriciDaniel/claude-seo)** | 集成 26 个子技能与 19 个子代理的 Claude Code 全栈 SEO 插件，覆盖技术 SEO、GEO 优化与报表生成。 | `Claude Code` | `seo` `geo` `technical-seo` | ⭐ 32.7k<br><sub>2026-11-26</sub> |
| **[Lemo Opuscar](https://github.com/lemomo-ai/lemo-opuscar)** | 面向 Claude Code 的代码制片风格工具箱插件，无需视频生成模型即可用 99 种现成风格创作短片。 | `Claude Code` | `video-generation` `creative-coding` `filmmaking` | ⭐ 21.6k<br><sub>2026-11-26</sub> |
| **[Open SEO MCP & Skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills)** | 开源 SEO 与 GEO 技能及 MCP 组合，支持基于真实 GSC/GA4 数据的关键词研究、排名追踪与站点审计。 | `Claude Code` `通用` | `seo` `geo` `gsc` | ⭐ 10.7k<br><sub>2026-10-27</sub> |
| **[NotFair SEO & GEO Plugin](https://github.com/nowork-studio/notfair-plugin)** | 融合 SEO、GEO 与 Google Ads 营销技能及实时 MCP 连接器的跨端增长插件。 | `Claude Code` `Gemini CLI` `通用` | `seo` `geo` `google-ads` | ⭐ 4.3k<br><sub>2026-11-17</sub> |
| **[Procedural Canvas Animate](https://github.com/cth9191/animate)** | 程序化单文件 Canvas 动画视频插件，内置 7 套视觉风格并支持参考图匹配与分镜确认。 | `Claude Code` | `animation` `canvas` `explainer-video` | ⭐ 2.3k<br><sub>2026-10-05</sub> |
| **[Claude Video Vision](https://github.com/jordanrendric/claude-video-vision)** | 结合 FFmpeg 抽帧与多模态音频分析的插件，赋予 Claude Code 观看与深度理解视频文件的能力。 | `Claude Code` | `video-analysis` `ffmpeg` `multimodal` | ⭐ 1.5k<br><sub>2026-10-14</sub> |
| **[Agentic SEO Skill](https://github.com/Bhanunamikaze/Agentic-SEO-Skill)** | LLM 优先的深度 SEO 分析插件，内置 16 个子技能、10 个专家子代理与 88 个取证脚本。 | `Claude Code` `Codex` `Antigravity` `通用` | `seo` `subagents` `audit` | ⭐ 1.1k<br><sub>2026-10-14</sub> |
| **[Digital Marketing Pro](https://github.com/indranilbanerjee/digital-marketing-pro)** | 开源 AI 数字营销工作流插件，覆盖策略、SEO、AEO/GEO、付费投放、内容与数据分析，并内置人工审批门禁。 | `Claude Code` `Cursor` `Codex` `通用` | `marketing` `seo` `aeo` | ⭐ 987<br><sub>2026-11-07</sub> |
| **[ComfyUI Control Plane](https://github.com/artokun/comfyui-mcp)** | 本地优先的 ComfyUI 控制面插件与 MCP 服务，内置 178 个工具与 36 个技能，用自然语言编排和运行生图/视频节点图。 | `Claude Code` `通用` | `comfyui` `image-generation` `video` | ⭐ 960<br><sub>2026-11-23</sub> |
| **[AntiAlgorithm](https://github.com/mankidev/antialgorithm)** | 反平庸创意发散技能，引导大模型跳出套路化首选答案，提升命名、海报、Logo 与 UI 创意质量。 | `Claude Code` `Codex` `通用` | `creativity` `naming` `branding` | ⭐ 909<br><sub>2026-11-26</sub> |
| **[XActions](https://github.com/nirholas/XActions)** | 免付费 API 的 X/Twitter 自动化插件与 MCP 工具包，支持采集与人工审批门控发帖互动。 | `Claude Code` `通用` | `twitter` `x` `automation` | ⭐ 670<br><sub>2026-11-27</sub> |
| **[Humanizer RU Pro](https://github.com/ilyautov/humanizer-ru)** | 俄语文本深度编辑插件与 MCP，内置 67 项特征检测与 21 条禁用规则，消除公文腔并核查事实。 | `Claude Code` `通用` | `russian` `humanizer` `scanner` | ⭐ 618<br><sub>2026-11-26</sub> |
| **[Article2Media](https://github.com/threerocks/article2media)** | 零 npm 依赖的多形态内容转换技能，一键将文章或视频变为小红书图文、杂志长图、公众号排版与口播短视频。 | `Claude Code` `Codex` `通用` | `xiaohongshu` `wechat` `short-video` | ⭐ 587<br><sub>2026-11-23</sub> |
| **[Lemo Wake](https://github.com/lemomo-ai/lemo-wake)** | 将单张静态图片转化为约 5 秒无缝循环动图（MP4/GIF/WebP/Live Photo）的 Claude Code 插件。 | `Claude Code` | `image-animation` `gif` `motion-design` | ⭐ 398<br><sub>2026-10-17</sub> |
| **[AK Threads Booster](https://github.com/akseolabs-seo/AK-Threads-booster)** | 数据驱动的 Threads 写作决策插件，基于历史贴文协助选题、起草、发文前诊断、效果预测与复盘。 | `Claude Code` | `threads` `social-media` `writing` | ⭐ 284<br><sub>2026-10-17</sub> |
| **[DiffMode Growth Plays](https://github.com/acogood/diffmode_free)** | 面向初创团队的本地游击增长插件，自动产出竞品分析、买家画像与 7–9 套低成本增长打法。 | `Claude Code` `Codex` | `growth-hacking` `startups` `competitor-analysis` | ⭐ 169<br><sub>2026-08-10</sub> |
| **[Economist Style Guide Plugin](https://github.com/TAJD/economist-style-guide-plugin)** | 遵循《经济学人》写作规范的 Claude Code 润色校对插件，提升文章清晰度、精准度与简洁性。 | `Claude Code` | `writing` `style-guide` `editing` | ⭐ 130<br><sub>2026-08-01</sub> |
| **[Claude SEO AI](https://github.com/Hainrixz/claude-seo-ai)** | 面向传统 SEO 与 AI 搜索（GEO/AEO）的优化插件，提供双维度评分审计与可选自动修复。 | `Claude Code` | `seo` `geo` `aeo` | ⭐ 87<br><sub>2026-10-25</sub> |
| **[Claude AI Music Skills](https://github.com/bitwize-music-studio/claude-ai-music-skills)** | 面向 AI 音乐创作的 Claude Code 插件，涵盖作词、Suno 风格提示、分轨混音、母带处理与发行。 | `Claude Code` | `music` `suno` `mixing` | — |
| **[Curviate Plugin](https://github.com/Curviate/curviate-plugin)** | 基于 Curviate CLI 的 LinkedIn 自动化插件与技能套件，覆盖人脉检索、消息、发帖及招聘等工作流。 | `通用` `Claude Code` | `linkedin` `sales-navigator` `recruiting` | — |
| **[GoMarble Marketing Agent](https://github.com/gomarble-ai/marketing-agent)** | 面向效果广告团队的营销插件，结合投放分析技能与 OAuth 鉴权 MCP 连接器，覆盖 Meta、Google、TikTok、GA4 与 Shopify。 | `Claude Code` `Codex` | `/plugin marketplace add gomarble-ai/marketing-agent` | — |
| **[Growth Kit](https://github.com/kanaerulabs/growth-kit)** | 面向 Claude Code 的内容营销与增长自动化插件套件，覆盖 SEO、文案撰写与推广工作流。 | `Claude Code` | `marketing` `growth` `content` | — |
| **[Ocean Watch](https://github.com/westng/ocean-watch)** | 巨量引擎营销、巨量千川投放与巨量星图账号授权管理插件，集成多渠道技能、40+ MCP 工具与 Go CLI。 | `Claude Code` `Codex` `DeepSeek Harness` | `marketing` `ocean-engine` `qianchuan` | — |

## 安全与合规

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Claude BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** | 面向漏洞赏金与外部红队测试的技能插件包，内置 85 个安全技能、16 个命令与 24 类 681 个公开漏洞模式。 | `Claude Code` | `bug-bounty` `red-team` `appsec` | ⭐ 25.2k<br><sub>2026-11-27</sub> |
| **[Rea](https://github.com/morluto/rea)** | 面向 AI Agent 的逆向工程插件、MCP 服务与技能套件，支持从应用行为到原生二进制的深度分析。 | `Claude Code` `Codex` `Cursor` `DeepSeek Harness` | `reverse-engineering` `binary-analysis` `mcp` | ⭐ 479.8k<br><sub>2026-11-27</sub> |
| **[CC Safety Net](https://github.com/kenryu42/cc-safety-net)** | 工具调用前安全拦截插件，实时阻断破坏性 Git、文件系统删除与敏感文件读取命令。 | `Claude Code` `Codex` `Antigravity` | `safety` `guardrails` `git` | ⭐ 2.1k<br><sub>2026-11-27</sub> |
| **[OpenOSINT](https://github.com/OpenOSINT/OpenOSINT)** | 免 API Key、默认被动侦察的开源 OSINT 插件与 MCP，整合 21 个公开情报与攻击面分析工具。 | `Claude Code` `通用` | `osint` `cybersecurity` `attack-surface` | ⭐ 2.0k<br><sub>2026-11-15</sub> |
| **[Safe Anything](https://github.com/erkamyaman/safe-anything)** | 基于 Rust 的高速安全扫描插件与 MCP，自动检测 XSS、SQL 注入、密钥泄露、依赖漏洞与 Agent 配置风险。 | `Claude Code` `Codex` `Cursor` | `devsecops` `rust` `vulnerability-scanner` | ⭐ 805<br><sub>2026-11-27</sub> |
| **[Writ Governance Runtime](https://github.com/infinri/Writ)** | Claude Code 工程治理运行时插件，在工具调用期强制执行工作流门禁并跨会话沉淀架构决策溯源。 | `Claude Code` | `governance` `rules` `gates` | ⭐ 332<br><sub>2026-11-21</sub> |
| **[codeArbiter](https://github.com/arbiterForge/codeArbiter)** | 面向 Claude Code 与 Codex CLI 的开源安全治理与强制门禁插件，防范高危操作与违规变更。 | `Claude Code` `Codex` | `governance` `guardrails` `hard-gates` | ⭐ 155<br><sub>2026-11-27</sub> |
| **[Vigilo Web3 Security](https://github.com/BitterSecurity/Vigilo)** | 面向 Web3 智能合约漏洞赏金与审计竞赛的攻防型安全分析插件。 | `Claude Code` `OpenCode` | `web3` `smart-contracts` `bug-bounty` | ⭐ 76<br><sub>2026-10-26</sub> |
| **[CC Safe Setup](https://github.com/yurukusa/cc-safe-setup)** | 开箱即用的 Claude Code 安全 Hook 套件，在工具调用边界拦截高危 Shell 与文件破坏性操作。 | `Claude Code` | `hooks` `guardrails` `safety` | — |
| **[GuardLink](https://github.com/Bugb-Technologies/guardlink)** | AI 驱动的代码安全注解与 MCP 工具链，用于在代码库中持续进行威胁建模与安全边界校验。 | `通用` `Claude Code` | `security` `threat-modeling` `annotations` | — |

## 插件市场与开发工具

| 名称 | 简介 | 兼容工具 | 安装 / 标签 | 活跃度 |
| --- | --- | --- | --- | --- |
| **[Claude Code Official Plugins](https://github.com/anthropics/claude-plugins-official)** `官方` | Anthropic 官方维护的 Claude Code 插件市场与目录，提供官方工作流插件、子代理、技能、钩子及合作方 MCP 集成。 | `Claude Code` | `/plugin marketplace add anthropics/claude-plugins-official` | — |
| **[Bundles Forge](https://github.com/OdradekAI/bundles-forge)** | 面向 Agent 技能包与复合插件的开发、打包与测试工程框架。 | `Claude Code` `Cursor` `通用` | `bundle-plugin` `skill-authoring` `framework` | ⭐ 225<br><sub>2026-04-27</sub> |
| **[Skill Conductor](https://github.com/smixs/skill-conductor)** | 面向 Agent Skill 全生命周期管理的插件，内置二元评测裁判、压力测试与门控自更新闭环。 | `Claude Code` `通用` | `skill-authoring` `evals` `tdd` | ⭐ 213<br><sub>2026-08-03</sub> |
| **[Claude Code Live Docs](https://github.com/costiash/claude-code-docs)** | 轻量级文档插件，按需实时拉取最新 Anthropic 官方文档，支持即时检索、互动教程与变更报告。 | `Claude Code` | `documentation` `anthropic` `changelog` | ⭐ 58<br><sub>2026-11-26</sub> |
| **[Agent Almanac](https://github.com/pjt222/agent-almanac)** | 遵循 Agent Skills 开放标准的大型资源库，涵盖 50+ 领域的 317 个技能、65 个子代理与 14 个团队模板。 | `Claude Code` `通用` | `collection` `subagents` `teams` | — |
| **[Agent Starter](https://github.com/sneg55/agent-starter)** | 包含技能、Hooks 与项目模板的脚手架套装，快速初始化对 AI Agent 友好的代码仓库。 | `Claude Code` `通用` | `starter` `hooks` `templates` | — |
| **[Agent37 Skills Collection](https://github.com/agent37-platform/agent37-skills-collection)** | Claude Code 插件市场合集，包含 YC 创业顾问、本地代码审查等精选插件。 | `Claude Code` | `marketplace` `startup` `code-review` | — |

