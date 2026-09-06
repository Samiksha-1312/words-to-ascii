# Words to ASCII 🔤 ➡️ 💻

An elegant, real-time web application to convert words and text into ASCII codes (Decimal, Hexadecimal, Binary, Octal, HTML entities) and generate customizable ASCII art banners.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## ✨ Features

- ⚡ **Instant Real-Time Conversion**: Converts text dynamically as you type.
- 🔢 **Multiple ASCII Encodings**:
  - **Decimal (Base 10)**: Standard ASCII numerical values (e.g. `72 101 108 108 111`).
  - **Hexadecimal (Base 16)**: Formatted in uppercase/lowercase with optional prefixes (`0x48`, `\x48`, or plain `48`).
  - **Binary (Base 2)**: Standard 8-bit padded byte strings (`01001000 01100101...`).
  - **Octal (Base 8)**: 3-digit base-8 representations (`110 145 154...`).
  - **HTML Entities**: Ready-to-use HTML character entities (`&#72;&#101;...`).
- 🎨 **ASCII Art Banner Generator**:
  - Transform words into multi-line ASCII art text banners.
  - Supports multiple font styles: **Block Banner**, **Slanted 3D**, **Bubble Text**, **Mini Grid**, and **Morse Code**.
  - Download ASCII art directly as a `.txt` file or copy with one click.
- 🔍 **Interactive Character Inspector**:
  - Detailed character-by-character table displaying position, glyph, ASCII code, hex, octal, binary, and category (Uppercase, Lowercase, Digit, Space, Control).
- 📋 **One-Click Copying**: Copy any converted output instantly with smooth toast notifications.
- 📱 **Modern Dark Aesthetic**: Clean, responsive layout designed for developers with monospace outputs and stats counters (character count, word count, byte size).
- 🚀 **Zero Dependencies**: Pure HTML5, CSS3, and modern vanilla JavaScript. Runs anywhere without npm or build tools.

---

## 🚀 Quick Start & Local Preview

Since this is a lightweight static web app, no build step or server is required!

### Option 1: Direct in Browser
Simply double-click `index.html` or open it in any web browser:
```powershell
Start-Process index.html
```

### Option 2: Local HTTP Server (Python)
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3: Local HTTP Server (Node.js)
```bash
npx serve .
```

---

## 🌐 Deploy to GitHub Pages

You can host this project completely free on **GitHub Pages**:

1. Push your code to your repository:
   ```bash
   git push -u origin main
   ```
2. Go to your repository on GitHub: `https://github.com/Samiksha-1312/words-to-ascii`
3. Click **Settings** > **Pages** (under the "Code and automation" section).
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. In a few seconds, your site will be live at:
   `https://samiksha-1312.github.io/words-to-ascii/`

---

## 📂 Project Structure

```text
words-to-ascii/
├── index.html     # Semantic HTML layout, tabs, and conversion containers
├── style.css      # Dark mode CSS with responsive styling and card designs
├── script.js      # Encoding logic, ASCII art generator & inspector table
├── .gitignore     # Files and folders to ignore in Git
├── LICENSE        # MIT Open Source License
└── README.md      # Documentation & quick start guide
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

## 👩‍💻 Author

Created with ❤️ by **[Samiksha Kalekar](https://github.com/Samiksha-1312)**.
