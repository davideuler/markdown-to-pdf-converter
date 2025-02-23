# Markdown to PDF Converter

[中文文档](README_zh.md)

A TypeScript-based tool for converting Markdown files to PDF with syntax highlighting and proper formatting. This tool uses Puppeteer to generate high-quality PDFs with proper code formatting and text wrapping.

## Features

- Converts Markdown files to beautifully formatted PDFs
- Syntax highlighting for multiple programming languages
- Smart line wrapping for long code blocks and URLs
- Proper handling of Unicode characters
- Responsive tables and lists
- Automatic page breaks with proper content flow
- High-resolution output (2x scale factor)
- Command-line interface

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

This will generate a PDF file with the same name as your input file (e.g., `README.pdf`) in the same directory.

## Supported Features

### Code Blocks
- Syntax highlighting for multiple programming languages
- Proper line wrapping for long code lines
- Background color and padding
- Monospace font (Courier New)
- Page break prevention within code blocks

### Text and Links
- Smart wrapping for long URLs and text
- Proper handling of inline code
- Clean typography with system fonts
- Proper line height and margins

### Document Structure
- Hierarchical heading styles
- Proper page breaks between sections
- Responsive table formatting
- Clean list formatting with proper indentation

### PDF Output
- A4 format with 2cm margins
- High-resolution rendering (2x scale)
- Background colors and styling
- Content scaling for optimal display

## Technical Details

The converter uses:
- `markdown-it` for Markdown parsing
- `highlight.js` for code syntax highlighting
- `puppeteer` for PDF generation
- Custom CSS for styling and layout

## Development

Build the project:
```bash
npm run build
```

## License

Apache 2.0

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
