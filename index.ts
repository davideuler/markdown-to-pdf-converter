import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

class MarkdownToPdfConverter {
  private md: MarkdownIt;
  private platform: string;

  constructor() {
    this.platform = os.platform();
    this.md = new MarkdownIt({
      highlight: (str: string, lang: string) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            const highlighted = hljs.highlight(str, {
              language: lang,
              ignoreIllegals: true
            }).value;
            return `<pre class="hljs"><code class="language-${lang}">${highlighted}</code></pre>`;
          } catch (e) {
            console.error('Highlighting error:', e);
          }
        }
        return `<pre class="hljs"><code>${this.md.utils.escapeHtml(str)}</code></pre>`;
      }
    });
  }

  private getFontFamily(): string {
    // 根据不同操作系统返回合适的字体
    switch (this.platform) {
      case 'darwin': // macOS
        return `-apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei"`;
      case 'linux': // may also support LXGW-Neo-XiHei: not tested on Linux yet
        return `"Noto Sans CJK SC", "WenQuanYi Micro Hei", "Microsoft YaHei", "LXGW-Neo-XiHei"`;
      default:
        return `"Microsoft YaHei", "PingFang SC", sans-serif`;
    }
  }

  private async generateHtml(markdown: string): Promise<string> {
    const htmlContent = this.md.render(markdown);
    const fontFamily = this.getFontFamily();
    
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            @page {
              size: A4;
              margin: 2cm;
            }
            body {
              font-family: ${fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
            }
            /* Text wrapping for normal content */
            p, li {
              white-space: pre-wrap;
              word-break: break-word;
              margin: 1em 0;
            }
            /* Link wrapping */
            a {
              word-wrap: break-word;
              word-break: break-all;
            }
            /* Code block styling */
            pre.hljs {
              margin: 1em 0;
              padding: 1em;
              background-color: #f5f5f5;
              border-radius: 5px;
              white-space: pre;
              overflow-x: visible;
              font-size: 14px;
              page-break-inside: avoid;
            }
            /* Ensure code is not truncated */
            pre.hljs code {
              display: inline-block;
              min-width: fit-content;
              font-family: 'Courier New', Courier, monospace;
            }
            /* Inline code styling */
            :not(pre) > code {
              font-family: 'Courier New', Courier, monospace;
              padding: 0.2em 0.4em;
              background-color: rgba(175, 184, 193, 0.2);
              border-radius: 3px;
              font-size: 0.9em;
              white-space: pre-wrap;
              word-break: break-word;
            }
            /* Heading styles */
            h1, h2, h3 {
              color: #2c3e50;
              page-break-after: avoid;
              font-family: ${fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
              font-weight: 600;
            }
            /* Table styles */
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 1em 0;
              page-break-inside: avoid;
            }
            table, th, td {
              border: 1px solid #ddd;
            }
            th, td {
              padding: 8px;
              text-align: left;
              word-wrap: break-word;
            }
            /* Content container */
            .markdown-body {
              width: 100%;
              max-width: 100%;
              padding: 0 1em;
              box-sizing: border-box;
            }
            ${await fs.readFile(
              path.join(require.resolve('highlight.js'), '../../styles/github.css'),
              'utf-8'
            )}
          </style>
        </head>
        <body>
          <div class="markdown-body">
            ${htmlContent}
          </div>
        </body>
      </html>
    `;
  }

  public async convertToPdf(
    inputPath: string,
    outputPath: string
  ): Promise<void> {
    try {
      const markdown = await fs.readFile(inputPath, 'utf-8');
      const html = await this.generateHtml(markdown);

      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--font-render-hinting=none']
      });
      const page = await browser.newPage();
      
      // Set larger viewport to ensure complete content rendering
      await page.setViewport({
        width: 1200,
        height: 1600,
        deviceScaleFactor: 2
      });

      await page.setContent(html, {
        waitUntil: 'networkidle0'
      });

      // Configure PDF generation options
      await page.pdf({
        path: outputPath,
        format: 'A4',
        margin: {
          top: '2cm',
          right: '2cm',
          bottom: '2cm',
          left: '2cm'
        },
        printBackground: true,
        scale: 0.8, // Scale down content to ensure code blocks fit
        displayHeaderFooter: false,
        preferCSSPageSize: true
      });

      await browser.close();
      console.log(`PDF generated successfully: ${outputPath}`);
    } catch (error) {
      console.error('Error during conversion:', error);
      throw error;
    }
  }
}

// Usage example
async function main() {
  const inputFile = process.argv[2];
  
  if (!inputFile) {
    console.error('Usage: npm run convert <input-markdown-file>');
    console.error('Example: npm run convert README.md');
    process.exit(1);
  }

  try {
    // 检查输入文件是否存在
    await fs.access(inputFile);
    
    // 生成输出文件名
    const inputPath = path.parse(inputFile);
    const outputFile = path.join(
      inputPath.dir,
      `${inputPath.name}.pdf`
    );

    const converter = new MarkdownToPdfConverter();
    await converter.convertToPdf(inputFile, outputFile);
  } catch (error: any) {
    if (error?.code === 'ENOENT') {
      console.error(`Error: Input file "${inputFile}" does not exist.`);
    } else {
      console.error('Program execution failed:', error);
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export default MarkdownToPdfConverter;