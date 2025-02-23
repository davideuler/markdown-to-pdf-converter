# Markdown 转 PDF 工具

[English](README.md)

一个基于 TypeScript 的工具，用于将 Markdown 文件转换为具有语法高亮和适当格式的 PDF。该工具使用 Puppeteer 生成高质量的 PDF，支持代码格式化和文本自动换行。

## 特性

- 将 Markdown 文件转换为格式精美的 PDF
- 多种编程语言的语法高亮
- 长代码块和 URL 的智能换行
- 完善的 Unicode 字符支持
- 响应式表格和列表
- 自动分页并保持内容流畅
- 高分辨率输出（2倍缩放）
- 命令行界面

## 安装

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/markdown-to-pdf.git
cd markdown-to-pdf
```

2. 安装依赖：
```bash
npm install
```

## 使用方法

转换 Markdown 文件为 PDF：
```bash
npm run convert <输入的Markdown文件>
```

示例：
```bash
npm run convert README.md
```

这将在相同目录下生成一个与输入文件同名的 PDF 文件（例如：`README.pdf`）。

## 支持的功能

### 代码块
- 多种编程语言的语法高亮
- 长代码行的自动换行
- 背景色和内边距
- 等宽字体（Courier New）
- 防止代码块在页面中间断开

### 文本和链接
- 长 URL 和文本的智能换行
- 行内代码的正确处理
- 使用系统字体的清晰排版
- 适当的行高和边距

### 文档结构
- 层级化的标题样式
- 章节之间的适当分页
- 响应式表格格式
- 带有正确缩进的列表格式

### PDF 输出
- A4 格式，2厘米页边距
- 高分辨率渲染（2倍缩放）
- 背景色和样式
- 最佳显示的内容缩放

## 技术细节

转换器使用：
- `markdown-it` 用于解析 Markdown
- `highlight.js` 用于代码语法高亮
- `puppeteer` 用于生成 PDF
- 自定义 CSS 用于样式和布局

## 开发

构建项目：
```bash
npm run build
```

## 许可证

Apache 2.0

## 貢獻

歡迎貢獻！請隨時提交 Pull Request。
