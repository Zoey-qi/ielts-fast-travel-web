# 转换阅读 · Starlight Rebirth

读中文小说 / 英文原著，自动挖出雅思词汇（7306 词库，带英/美音标 + 中文释义），点击单词弹出词汇书级讲解。支持：

- 📖 导入 PDF / EPUB 电子书（中英文自动识别）
- 🇨🇳→🇬🇧 中文小说：命中雅思词库中文释义的词，替换/挖空为英文单词，阅读中自然记词
- 🎧 英/美双音标 + 🔊 发音朗读 + 例句 + 词族 + 搭配 + CEFR 级别
- 📊 词库覆盖率报告：每本书按 CEFR 分级统计命中比例与缺失词清单
- 📝 章节词汇测试 / ⭐ 收藏 / 阅读进度持久化（IndexedDB，无需后端）

## 在线体验

https://ielts-fast-travel.app.workbuddy.host/?sharecode=BZHERICD5G

## 技术栈

纯前端静态站：原生 JS + IndexedDB（本地存储）+ pdf.js（PDF 解析）+ jszip（EPUB 解析）。无后端、无依赖部署，可直接托管于 GitHub Pages / Vercel / 任意静态服务器。

## 本地运行

```bash
# 任意静态服务器即可
python -m http.server 8321
# 打开 http://127.0.0.1:8321/index.html
```

## 目录结构

```
ielts-fast-travel-web/
├── index.html          # 单页应用
├── style.css           # 样式
├── app.js              # 应用逻辑（导入/阅读/测试/收藏/覆盖率）
├── lexer.js            # 词库索引 + 中/英文扫描挖空 + 渲染
├── data/
│   ├── words.js        # 7306 雅思词库（含释义/音标/例句/CEFR）
│   ├── jszip.min.js    # EPUB 解压
│   └── pdf.min.js      # PDF 解析
└── tests/              # Node 单测
```
