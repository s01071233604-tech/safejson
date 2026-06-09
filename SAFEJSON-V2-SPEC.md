# SafeJSON V2 — Product Requirements Document

> 基于真实用户调研、Reddit 评论区分析、竞品分析和 Semrush 数据的完整需求文档。
> 交给 Codex 或其他 AI 编码工具执行。

---

## 核心战略洞察

### SafeJSON 真正的差异化

**不是"隐私"，是"可验证的隐私"。** 用户不应该相信 SafeJSON——用户应该自己验证 SafeJSON。

验证方法：打开 DevTools → Network 标签 → 贴 JSON → 看到零个新请求。

所有竞品要么做不到（jsonformatter.org 服务器处理），要么能做到但不说（Firefox 原生），要么说了但用户不知道（各种小工具）。**SafeJSON 应该把"你自己验证"变成产品最显眼的交互。**

### 为什么竞品不会复制

jsonformatter.org 年收入 $7-10 万靠广告。全客户端处理 = 零广告曝光 = 收入清零。**不是不能做，是商业模式锁死了。**

Firefox/Chrome 原生不需要你做——它们已经是客户端。但只有查看功能，没有 Diff、JWT、JSONPath、Schema。

---

## 一、首页改造：让隐私"可验证"

### 1.1 在工具区旁边加实时网络请求指示器

**位置：** 输出面板的右上角，工具栏旁边

**设计：**
```
┌─────────────────────────────────────────────┐
│  🟢 0 network requests    [How to verify?]  │
└─────────────────────────────────────────────┘
```

**逻辑：**
- 页面加载后自动显示 `🟢 0 network requests`
- 点击 "How to verify?" 弹出简短教程："Open DevTools → Network tab → paste JSON → see zero requests"
- 如果未来真有人通过 `fetch()` 发了请求（比如 GA 的 pageview），计数器实时显示

### 1.2 Hero 文案调整

**当前：**
> The JSON tool that never sees your data

**改为：**
> The JSON tool that never sees your data. Prove it yourself.

副标题加一句：
> Open DevTools → Network. You'll see zero requests. That's the whole point.

### 1.3 隐私验证卡片升级

把 Features 区域的 "Privacy First" 卡片改成：

**标题：** Verify, don't trust
**描述：** We don't ask you to trust us. Open DevTools → Network tab → paste any JSON. Zero requests. Your data never left your browser. Every SafeJSON feature — formatter, diff, JWT decoder — works the same way.

---

## 二、大文件支持（Reddit 评论区验证的真需求）

### 2.1 痛点来源

Reddit 真实用户评论：
> "VS Code slows to a crawl with a 10MB JSON log file. I just need a web tool to quickly compare."

这是 SafeJSON 的超车机会——**VS Code 和 Firefox 原生在处理大文件时会卡，网页工具又会上传数据。SafeJSON 两边的问题都解决了。**

### 2.2 实现方案

**首页 Formatter 和所有工具页：**
- 在输入框上方加一行提示：`Handles files up to 50MB locally — no upload, no slowdown`
- 用 Web Worker 在后台线程解析 JSON，避免阻塞 UI
- 大文件（>1MB）时显示进度条："Parsing 12MB JSON file..."

### 2.3 营销文案

在 Hero 下方加一行：
> **Handles 50MB+ JSON files that crash VS Code. All in your browser. No upload.**

---

## 三、定价页叙事升级

### 3.1 "为什么付钱"区块重写

当前是红色警报框，讲两次泄露事件。保留但微调结构：

**标题：** You paste sensitive data into online tools every day. Here's why that matters.

**三个短段：**
1. jsonformatter.org leaked 80K credentials (Nov 2025)
2. JSON Formatter extension sold & turned into adware (2M users)
3. Every time you paste JSON into a server-side tool, your data makes a round trip through infrastructure you don't control

**结尾：** SafeJSON Pro gives you Diff, JWT, JSONPath, Schema — all 100% client-side. Your data never leaves your browser. Prove it: open DevTools while using any Pro tool.

### 3.2 加"信任证明"区块

在定价卡下方加：

**标题：** Why developers trust SafeJSON

三列小卡片：
- **Open Source (MIT)** — Audit every line on GitHub. No obfuscated tracking scripts.
- **Verifiable** — Open DevTools → Network. Zero requests. You don't have to trust us.
- **Independent** — Solo developer, self-funded. No VC pressure to monetize data.

---

## 四、竞品对比页（SEO + GEO 核心页）

### 4.1 新建 `/compare` 页面

这是一个总览对比页，用表格展示 SafeJSON vs 全部主要竞品。

**页面标题：** JSON Formatter Comparison 2026 — SafeJSON vs jsonformatter.org, jsonviewer, Firefox

**对比矩阵（表格形式）：**

| Feature | SafeJSON | jsonformatter.org | jsonviewer.stack.hu | Firefox Native | VS Code |
|---------|----------|-------------------|---------------------|----------------|---------|
| Client-side | Yes | No (server) | No (no claim) | Yes | Yes |
| Verifiable (Network tab) | Yes | No | No | Yes | Yes |
| Data breach history | None | 80K leaked | None | None | None |
| Open source | MIT | No | No | Yes | Yes |
| JSON Diff | Yes (Pro) | No | No | No | No |
| JWT Decoder | Yes (Pro) | No | No | No | No |
| JSONPath | Yes (Pro) | No | No | No | No |
| Schema Validator | Yes (Pro) | No | No | No | No |
| Ads | None | Yes | None | None | None |
| Large file handling | 50MB+ | Limited | Limited | Limited | ~10MB |
| Price | Free / $5 Pro | Free (ads) | Free | Free | Free |

**页面结构：**
1. 顶部 TL;DR：一句话总结 + 对比表
2. "Why SafeJSON is different" 段落
3. "The jsonformatter.org incident" 段落
4. "How to verify any JSON tool yourself" 教程
5. CTA → Pricing

### 4.2 已有竞品页优化

对 `/vs/jsonformatter-org`、`/vs/codebeautify`、`/vs/jsonformatter-extension` 三个子页面：
- 统一格式：对比表 + 事件描述 + 验证教程 + CTA
- 每个页面加 BreadcrumbList Schema
- 每个页面底部加 "Related comparisons" 链接区

---

## 五、定价页 Pro 功能更新

### 5.1 更新 Pro 功能列表

当前 Pro 列表：
- Everything in Free
- JSON Diff Checker
- JWT Decoder
- JSONPath Query (coming soon)
- Schema Validator (coming soon)
- Priority support

**改为：**
- Everything in Free
- JSON Diff Checker
- JWT Decoder
- JSONPath Query
- Schema Validator
- Large file support (50MB+)
- Priority support

---

## 六、SEO 优化（Semrush 数据驱动）

### 6.1 关键词-页面映射

基于 Semrush 关键词研究，确保以下关键词被对应页面承接：

| 关键词 | 目标页面 | 月搜索量 | KD |
|--------|---------|---------|-----|
| json formatter | / | 90.5K | 54 |
| json beautifier | /json-beautifier | 18.1K | — |
| json viewer | /json-viewer | 22.2K | — |
| json diff online | /diff | 880 | 低 |
| json parser | /json-parser | — | — |
| safest json formatter | /blog/safest-json-formatter | — | — |
| jsonformatter alternative | /vs/jsonformatter-org | — | 低 |

### 6.2 每个页面的 SEO 标题优化

确保每个页面 title 包含目标关键词，格式：`[关键词] — [副标题] | SafeJSON`

---

## 七、Reddit 推广策略（基于真实评论区）

### 7.1 核心话术（评论用）

**场景：有人在问 JSON 工具推荐**

> Here's what I use:
> 1. `jq` for CLI — fastest for quick terminal work
> 2. Firefox built-in viewer — zero setup, works offline
> 3. SafeJSON (safejson.dev) when I need tree view + I'm pasting sensitive data. Check the Network tab — zero requests. No server involved.
>
> Key thing I check with ANY online tool: open DevTools → Network tab while using it. If there's a request, your data left your browser.

### 7.2 核心话术（发帖用）

**r/SideProject 发帖标题：**

> I built a JSON formatter that you don't have to trust. Open DevTools, see zero network requests. Prove it yourself.

### 7.3 禁止话术

- ❌ "Check out my tool"
- ❌ "Would love your feedback" 出现在前 3 句
- ❌ "Free and open source" 作为开场
- ❌ "The best JSON formatter"
- ❌ AI 风格的夸张词（revolutionary, cutting-edge, seamless）

**正确语气：** 用 "I built X because I was frustrated by Y" 讲个人故事，不是营销文案。

---

## 八、GEO 完善（AI 搜索引擎优化）

### 8.1 待建设的 GEO 资产

| 资产 | 状态 | 优先级 |
|------|------|--------|
| FAQ Schema（首页已有） | ✅ | — |
| SoftwareApp Schema（首页已有）| ✅ | — |
| Organization Schema | ✅ Codex 刚加的 | — |
| Article Schema（博客页） | ✅ Codex 刚加的 | — |
| BreadcrumbList Schema | ✅ Codex 刚加的 | — |
| HowTo Schema（/support 页面） | ❌ 还没加 | 高 |
| Product Schema（定价页） | ❌ 还没加 | 高 |

### 8.2 llms.txt 持续更新

每当新增页面，必须同步更新 `public/llms.txt`。这是 AI 爬虫认识网站结构的第一入口。

---

## 九、产品原则（所有 AI 编码时必须遵守）

1. **可验证 > 可信任。** 任何功能都应该让用户能在 DevTools 里自行验证。
2. **零服务器是一切的前提。** 永远不引入后端处理用户数据。
3. **速度是体验。** 本地处理意味着零延迟——这是优势，不要加 loading spinner 假装在等待服务器。
4. **开源是信任的基石。** 所有代码在 GitHub 公开。
5. **不做广告是商业模式的承诺。** 收入只来自 Pro 订阅，不卖数据，不挂广告。

---

## 十、执行优先级

| 优先级 | 任务 | 预计工时 |
|--------|------|---------|
| P0 | 首页加网络请求指示器 | 1h |
| P0 | Hero 文案改为 "Prove it yourself" | 30min |
| P0 | 定价页叙事重写 + 信任证明区块 | 1h |
| P1 | 建 `/compare` 竞品总对比页 | 1h |
| P1 | 定价页 Pro 功能更新 | 15min |
| P1 | 三个竞品子页面格式统一 + Schema | 1h |
| P1 | /support 页面加 HowTo Schema | 30min |
| P1 | 定价页加 Product Schema | 30min |
| P2 | 大文件支持（Web Worker） | 3h |
| P2 | "Privacy First" 卡片改为 "Verify, don't trust" | 30min |

---

*最后更新：2026-06-08*
*本文件是 SafeJSON 的产品需求文档，所有 AI 编码工具应以此为准。*
