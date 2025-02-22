"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_it_1 = __importDefault(require("markdown-it"));
const highlight_js_1 = __importDefault(require("highlight.js"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
class MarkdownToPdfConverter {
    constructor() {
        // 初始化 markdown-it，配置代碼高亮
        this.md = new markdown_it_1.default({
            highlight: (str, lang) => {
                if (lang && highlight_js_1.default.getLanguage(lang)) {
                    try {
                        const highlighted = highlight_js_1.default.highlight(str, {
                            language: lang,
                            ignoreIllegals: true
                        }).value;
                        return `<pre class="hljs"><code class="language-${lang}">${highlighted}</code></pre>`;
                    }
                    catch (e) {
                        console.error('Highlighting error:', e);
                    }
                }
                return `<pre class="hljs"><code>${this.md.utils.escapeHtml(str)}</code></pre>`;
            }
        });
    }
    async generateHtml(markdown) {
        const htmlContent = this.md.render(markdown);
        return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
              line-height: 1.6;
              padding: 2em;
              max-width: 900px;
              margin: 0 auto;
            }
            pre.hljs {
              padding: 1em;
              border-radius: 5px;
              background-color: #f5f5f5;
              overflow-x: auto;
            }
            code {
              font-family: 'Courier New', Courier, monospace;
            }
            h1, h2, h3 {
              color: #2c3e50;
            }
            ${await promises_1.default.readFile(path_1.default.join(require.resolve('highlight.js'), '../../styles/github.css'), 'utf-8')}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;
    }
    async convertToPdf(inputPath, outputPath) {
        try {
            // 讀取 Markdown 文件
            const markdown = await promises_1.default.readFile(inputPath, 'utf-8');
            // 生成 HTML
            const html = await this.generateHtml(markdown);
            // 啟動 Puppeteer
            const browser = await puppeteer_1.default.launch();
            const page = await browser.newPage();
            // 設置 HTML 內容
            await page.setContent(html, {
                waitUntil: 'networkidle0'
            });
            // 生成 PDF
            await page.pdf({
                path: outputPath,
                format: 'A4',
                margin: {
                    top: '2cm',
                    right: '2cm',
                    bottom: '2cm',
                    left: '2cm'
                },
                printBackground: true
            });
            await browser.close();
            console.log(`PDF 已成功生成：${outputPath}`);
        }
        catch (error) {
            console.error('轉換過程中發生錯誤:', error);
            throw error;
        }
    }
}
// 使用示例
async function main() {
    const converter = new MarkdownToPdfConverter();
    const inputFile = 'input.md';
    const outputFile = 'output.pdf';
    try {
        await converter.convertToPdf(inputFile, outputFile);
    }
    catch (error) {
        console.error('程序執行失敗:', error);
        process.exit(1);
    }
}
if (require.main === module) {
    main();
}
exports.default = MarkdownToPdfConverter;
