# Jinny Lee — Kimi 推广大使申请作品集 V2

这是一套无后端、无网站运行依赖的静态作品集，包含：

- 公开网站：https://19960705.github.io/jinny-kimi-portfolio/
- 公开网站首页：`index.html`
- 共用案例数据：`data.js`
- 独立打印页面：`print.html`
- 飞书上传 PDF：`deliverables/Jinny-Lee-Kimi-Ambassador-Portfolio.pdf`
- 飞书“其他信息”栏文案：`deliverables/feishu-other-info.txt`
- 素材来源与公开状态：`MATERIALS.md`

## 本地查看

1. 执行 `npm run build`
2. 执行 `npm run serve`
3. 打开终端显示的本地地址

网站运行只需要静态文件；项目中的脚本仅用于打包、验收和重新导出 PDF。

## 更新案例

九个案例都集中在 `data.js`。更新标题、简介、职责、AI 参与方式、成果、证据和链接后，网站会自动同步；打印页也读取同一份数据。

若替换封面，请保持 `assets/projects/` 下的文件名不变，推荐使用 1600×1000 WebP。

## 重新导出 PDF

在已提供 Playwright 与 Chrome 的环境中执行 `npm run export:pdf`。导出前应先检查 `data.js` 内的 `publicSiteUrl` 已写入当前公开网址。

## 发布

本项目通过 Sites 保存版本并发布。`.openai/hosting.json` 中的 `project_id` 是现有站点身份，不应删除、重写或复制到其他项目。
