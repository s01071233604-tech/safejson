# SafeJSON — 战略纪要

## 核心定位
SafeJSON = 可验证的隐私 JSON 工具箱。不是"trust us"，是"prove it yourself via DevTools Network tab"。竞品无法复制因为广告模式锁死了他们的服务器架构。

## 产品现状
- 16 个页面全部上线 (safejson.vercel.app)
- Chrome/Edge 扩展已完成
- Lemon Squeezy 支付已接入 ($5/月, $39/年)
- GitHub: github.com/s01071233604-tech/safejson
- npm: @safjson/safejson-formatter
- GA: G-QTRHE1MP9Y
- Google Search Console: 已验证

## 获客渠道状态
- SEO: 16 页 + sitemap + robots.txt + 每页独立 meta，等 Google 收录 (2-4周沙盒期)
- GEO: llms.txt + FAQ/SoftwareApp/Organization Schema + 3 对比页 + 博客 + dev.to 文章
- Reddit: 账号被 r/webdev 永久封禁。教训：评论必须短(≤4句)、口语化、带瑕疵、不结构化。两周后重新在 r/SideProject 开始
- Product Hunt: 草稿就绪，待发布
- Edge Add-ons: 已提交，审核中

## 竞品格局
- 最大竞品不是其他网页工具，是 VS Code 内置和 Firefox 原生 JSON viewer
- Reddit 评论区验证的真需求：大文件处理(VS Code 卡 10MB+)
- jsonformatter.org: 340万月访问，广告模式，泄露8万凭证，无法转客户端
- jsonviewer.stack.hu: Reddit 推荐度高，极简，无隐私保护

## 定价叙事
不是"我们便宜"，是"免费工具泄露了8万凭证。你的数据不该离开你的电脑。你自己验证。"

## 当前阻塞
1. Reddit 运营暂停——需等账号恢复/重新养号
2. Google 收录太新——沙盒期正常，1-2周后看
3. Vercel 子域名中国无法访问——需买自定义域名解决
4. Chrome Web Store 上架需要 $5 注册费

## Codex 工作流
- Codex 负责代码实现，我负责策略和审核
- Codex 改完必须 `npm run build` 通过 + `npx vercel --prod --yes` 部署
- 最新需求文档: SAFEJSON-V2-SPEC.md

## 下一步优先级
1. 发 Product Hunt (等 Edge 审核通过)
2. 买自定义域名 (safejson.dev)
3. Reddit 恢复——纯浏览+极短评论，不提产品
4. Semrush 持续监控关键词排名
