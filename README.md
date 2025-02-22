# Markdown to PDF Converter

[中文文档](README_zh.md)

A TypeScript-based tool for converting Markdown files to PDF with syntax highlighting and proper formatting. This tool is particularly good at handling long code blocks and maintaining proper formatting in the generated PDF.

## Features

- Converts Markdown files to beautifully formatted PDFs
- Supports code syntax highlighting with multiple programming languages
- Handles long content with proper line wrapping
- Maintains code block formatting with proper display
- Supports tables and other Markdown elements
- Properly handles page breaks
- Responsive design for different content types
- High-quality PDF output with configurable options

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ihopeit/markdown-to-pdf-converter.git
   cd markdown-to-pdf-converter

   npm install
   ```


## Usage

### Basic Usage

1. Place your Markdown file in the project directory (default: `input.md`)
2. Run the converter:
3. Find the generated PDF (default: `output.pdf`)

### API Usage

``` typescript
import MarkdownToPdfConverter from './index';
const converter = new MarkdownToPdfConverter();
await converter.convertToPdf('input.md', 'output.pdf');
```

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
- High-resolution output
- Configurable page breaks
- Clean and professional layout

## Configuration

The converter supports various styling options through CSS and PDF generation options through Puppeteer. Key configurations include:
