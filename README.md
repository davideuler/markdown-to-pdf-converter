# Markdown to PDF Converter

[中文](README_zh.md)

A TypeScript-based tool for converting Markdown files to PDF with syntax highlighting and proper formatting. The tool uses Puppeteer to generate high-quality PDFs with code formatting and text wrapping.

## Features

- Convert Markdown files to beautifully formatted PDFs
- Syntax highlighting for multiple programming languages
- Smart line wrapping for long code blocks and URLs
- Full Unicode character support
- Responsive tables and lists
- Automatic pagination with content flow
- High-resolution output (2x scaling)
- Command-line interface
- Optimized CJK (Chinese, Japanese, Korean) font support with system auto-detection

## System Requirements

### For Mac Users
No additional configuration needed. Uses system default CJK fonts:
- PingFang SC
- Hiragino Sans GB
- Microsoft YaHei (if installed)

### For Linux Users
Install one of the following font packages:
```bash
# Ubuntu/Debian
sudo apt-get install fonts-noto-cjk fonts-wqy-microhei

# Fedora
sudo dnf install google-noto-sans-cjk-ttc-fonts wqy-microhei-fonts

# Arch Linux
sudo pacman -S noto-fonts-cjk wqy-microhei
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/markdown-to-pdf.git
cd markdown-to-pdf
```

2. Install dependencies:
```bash
npm install
```

## Usage

Convert a Markdown file to PDF:
```bash
npm run convert <input-markdown-file>
```

Example:
```bash
npm run convert README.md
```

This will generate a PDF file with the same name as the input file (e.g., `README.pdf`) in the same directory.

## Supported Features

### Code Blocks
- Syntax highlighting for multiple programming languages
- Automatic line wrapping for long code lines
- Background color and padding
- Monospace font (Courier New)
- Prevention of code block breaks across pages

### Text and Links
- Smart wrapping for long URLs and text
- Proper handling of inline code
- Clear typography with system fonts
- Appropriate line height and margins
- Optimized CJK punctuation display

### Document Structure
- Hierarchical heading styles (optimized for CJK)
- Proper page breaks between sections
- Responsive table formatting
- List formatting with proper indentation

### PDF Output
- A4 format with 2cm margins
- High-resolution rendering (2x scaling)
- Background colors and styling
- Content scaling for optimal display
- Optimized font rendering

## Technical Details

The converter uses:
- `markdown-it` for Markdown parsing
- `highlight.js` for code syntax highlighting
- `puppeteer` for PDF generation
- Custom CSS for styling and layout
- System native fonts for optimal display

## Development

Build the project:
```bash
npm run build
```

## License

Apache 2.0

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## Features in Detail

### Code Block Handling
- Syntax highlighting for multiple programming languages
- Proper formatting maintained in PDF
- Horizontal scrolling for long code lines
- Monospace font for better code readability

### Text and Content
- Automatic line wrapping for long text
- Proper handling of links and URLs
- Clean and readable typography
- Responsive tables with proper formatting

### PDF Output
- A4 format with configurable margins
- High-quality PDF output with configurable options

## Configuration

The converter supports various styling options through CSS and PDF generation options through Puppeteer. Key configurations include:
