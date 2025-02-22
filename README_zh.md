# Markdown 轉 PDF 工具

[English](README.md)

一個基於 TypeScript 的工具，用於將 Markdown 文件轉換為具有語法高亮和適當格式的 PDF。該工具特別善於處理長代碼塊並在生成的 PDF 中保持正確的格式。

## 特性

- 將 Markdown 文件轉換為格式精美的 PDF
- 支持多種程序語言的代碼語法高亮
- 處理長內容時自動換行
- 保持代碼塊格式，正確顯示
- 支持表格等 Markdown 元素
- 正確處理分頁
- 針對不同內容類型的響應式設計
- 可配置選項的高質量 PDF 輸出

## 安裝

```bash
# 克隆倉庫
git clone https://github.com/ihopeit/markdown-to-pdf-converter.git
cd markdown-to-pdf-converter

# 安裝依賴
npm install
```

## 使用方法

### 基本使用

1. 將 Markdown 文件放在項目目錄中（默認：`input.md`）
2. 運行轉換器：
```bash
npm run start
```
3. 查看生成的 PDF（默認：`output.pdf`）

### API 使用

```typescript
import MarkdownToPdfConverter from './index';

const converter = new MarkdownToPdfConverter();
await converter.convertToPdf('input.md', 'output.pdf');
```

## 功能詳情

### 代碼塊處理
- 支持多種程序語言的語法高亮
- 在 PDF 中保持正確的格式
- 長代碼行的正確顯示
- 使用等寬字體提高代碼可讀性

### 文本和內容
- 長文本自動換行
- 正確處理鏈接和 URL
- 清晰可讀的排版
- 格式正確的響應式表格

### PDF 輸出
- A4 格式，可配置頁邊距
- 高分辨率輸出
- 可配置的分頁處理
- 清晰專業的佈局

## 配置

轉換器通過 CSS 支持各種樣式選項，通過 Puppeteer 支持 PDF 生成選項。主要配置包括：

```typescript
// PDF 生成選項
{
  format: 'A4',
  margin: {
    top: '2cm',
    right: '2cm',
    bottom: '2cm',
    left: '2cm'
  },
  printBackground: true,
  scale: 0.8,
  displayHeaderFooter: false,
  preferCSSPageSize: true
}
```

## 依賴

- `markdown-it`：用於解析 Markdown
- `highlight.js`：用於代碼語法高亮
- `puppeteer`：用於生成 PDF

## 開發

```bash
# 構建項目
npm run build

# 使用 TypeScript 運行
npm run start
```

## 許可證

ISC

## 貢獻

歡迎貢獻！請隨時提交 Pull Request。
