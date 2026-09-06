// Words to ASCII - Main Application Logic

// Font definitions for ASCII Art
const FONTS = {
  block: {
    height: 5,
    chars: {
      'A': ["  ███  ", " █   █ ", " █████ ", " █   █ ", " █   █ "],
      'B': [" ████  ", " █   █ ", " ████  ", " █   █ ", " ████  "],
      'C': ["  ████ ", " █     ", " █     ", " █     ", "  ████ "],
      'D': [" ████  ", " █   █ ", " █   █ ", " █   █ ", " ████  "],
      'E': [" █████ ", " █     ", " ████  ", " █     ", " █████ "],
      'F': [" █████ ", " █     ", " ████  ", " █     ", " █     "],
      'G': ["  ████ ", " █     ", " █  ██ ", " █   █ ", "  ████ "],
      'H': [" █   █ ", " █   █ ", " █████ ", " █   █ ", " █   █ "],
      'I': [" ███ ", "  █  ", "  █  ", "  █  ", " ███ "],
      'J': ["   ███ ", "    █  ", "    █  ", " █  █  ", "  ██   "],
      'K': [" █   █ ", " █  █  ", " ███   ", " █  █  ", " █   █ "],
      'L': [" █     ", " █     ", " █     ", " █     ", " █████ "],
      'M': [" █   █ ", " ██ ██ ", " █ █ █ ", " █   █ ", " █   █ "],
      'N': [" █   █ ", " ██  █ ", " █ █ █ ", " █  ██ ", " █   █ "],
      'O': ["  ███  ", " █   █ ", " █   █ ", " █   █ ", "  ███  "],
      'P': [" ████  ", " █   █ ", " ████  ", " █     ", " █     "],
      'Q': ["  ███  ", " █   █ ", " █ █ █ ", " █  ██ ", "  ██ █ "],
      'R': [" ████  ", " █   █ ", " ████  ", " █  █  ", " █   █ "],
      'S': ["  ████ ", " █     ", "  ███  ", "     █ ", " ████  "],
      'T': [" █████ ", "   █   ", "   █   ", "   █   ", "   █   "],
      'U': [" █   █ ", " █   █ ", " █   █ ", " █   █ ", "  ███  "],
      'V': [" █   █ ", " █   █ ", " █   █ ", "  █ █  ", "   █   "],
      'W': [" █   █ ", " █   █ ", " █ █ █ ", " ██ ██ ", " █   █ "],
      'X': [" █   █ ", "  █ █  ", "   █   ", "  █ █  ", " █   █ "],
      'Y': [" █   █ ", "  █ █  ", "   █   ", "   █   ", "   █   "],
      'Z': [" █████ ", "    █  ", "   █   ", "  █    ", " █████ "],
      '0': ["  ███  ", " █  ██ ", " █ █ █ ", " ██  █ ", "  ███  "],
      '1': ["  ██  ", " █ █  ", "   █  ", "   █  ", " ████ "],
      '2': ["  ███  ", " █   █ ", "   ██  ", "  █    ", " █████ "],
      '3': [" ████  ", "     █ ", "  ███  ", "     █ ", " ████  "],
      '4': [" █  █  ", " █  █  ", " █████ ", "    █  ", "    █  "],
      '5': [" █████ ", " █     ", " ████  ", "     █ ", " ████  "],
      '6': ["  ████ ", " █     ", " ████  ", " █   █ ", "  ████ "],
      '7': [" █████ ", "    █  ", "   █   ", "  █    ", "  █    "],
      '8': ["  ███  ", " █   █ ", "  ███  ", " █   █ ", "  ███  "],
      '9': ["  ████ ", " █   █ ", "  ████ ", "     █ ", "  ████ "],
      '!': [" █ ", " █ ", " █ ", "   ", " █ "],
      '?': [" ███  ", "    █ ", "  ██  ", "      ", "  █   "],
      '.': ["   ", "   ", "   ", "   ", " █ "],
      ',': ["   ", "   ", "   ", " █ ", " █ "],
      ':': ["   ", " █ ", "   ", " █ ", "   "],
      '-': ["      ", "      ", " ████ ", "      ", "      "],
      '+': ["      ", "  █   ", " ███  ", "  █   ", "      "],
      '=': ["      ", " ████ ", "      ", " ████ ", "      "],
      ' ': ["     ", "     ", "     ", "     ", "     "]
    }
  },
  slant: {
    height: 5,
    chars: {
      'A': ["    /\\    ", "   /  \\   ", "  / /\\ \\  ", " / ____ \\ ", "/_/    \\_\\"],
      'B': [" ____  ", "|  _ \\ ", "| |_) |", "|  _ < ", "|____/ "],
      'C': ["  ____ ", " / ___|", "| |    ", "| |___ ", " \\____|"],
      'D': [" ____  ", "|  _ \\ ", "| | | |", "| |_| |", "|____/ "],
      'E': [" _____ ", "| ____|", "|  _|  ", "| |___ ", "|_____|"],
      'F': [" _____ ", "|  ___|", "| |_   ", "|  _|  ", "|_|    "],
      'G': ["  ____ ", " / ___|", "| |  _ ", "| |_| |", " \\____|"],
      'H': [" _   _ ", "| | | |", "| |_| |", "|  _  |", "|_| |_|"],
      'I': [" ___ ", "|_ _|", " | | ", " | | ", "|___|"],
      'J': ["     _ ", "    | |", " _  | |", "| |_| |", " \\___/ "],
      'K': [" _  __", "| |/ /", "| ' / ", "| . \\ ", "|_|\\_\\"],
      'L': [" _     ", "| |    ", "| |    ", "| |___ ", "|_____|"],
      'M': [" __  __ ", "|  \\/  |", "| |\\/| |", "| |  | |", "|_|  |_|"],
      'N': [" _   _ ", "| \\ | |", "|  \\| |", "| |\\  |", "|_| \\_|"],
      'O': ["  ___  ", " / _ \\ ", "| | | |", "| |_| |", " \\___/ "],
      'P': [" ____  ", "|  _ \\ ", "| |_) |", "|  __/ ", "|_|    "],
      'Q': ["  ___  ", " / _ \\ ", "| | | |", "| |_| |", " \\__\\_\\"],
      'R': [" ____  ", "|  _ \\ ", "| |_) |", "|  _ < ", "|_| \\_\\"],
      'S': [" ____  ", "/ ___| ", "\\___ \\ ", " ___) |", "|____/ "],
      'T': [" _____ ", "|_   _|", "  | |  ", "  | |  ", "  |_|  "],
      'U': [" _   _ ", "| | | |", "| | | |", "| |_| |", " \\___/ "],
      'V': ["__     __", "\\ \\   / /", " \\ \\ / / ", "  \\ V /  ", "   \\_/   "],
      'W': ["__        __", "\\ \\      / /", " \\ \\ /\\ / / ", "  \\ V  V /  ", "   \\_/\\_/   "],
      'X': ["__  __", "\\ \\/ /", " \\  / ", " /  \\ ", "/_/\\_\\"],
      'Y': ["__   __", "\\ \\ / /", " \\ V / ", "  | |  ", "  |_|  "],
      'Z': [" _____", "|__  /", "  / / ", " / /_ ", "/____|"],
      '0': ["  ___  ", " / _ \\ ", "| | | |", "| |_| |", " \\___/ "],
      '1': [" _ ", "/ |", "| |", "| |", "|_|"],
      '2': [" ____  ", "|___ \\ ", "  __) |", " / __/ ", "|_____|"],
      '3': [" _____ ", "|___ / ", "  |_ \\ ", " ___) |", "|____/ "],
      '4': [" _  _   ", "| || |  ", "| || |_ ", "|__   _|", "   |_|  "],
      '5': [" ____  ", "| ___| ", "|___ \\ ", " ___) |", "|____/ "],
      '6': ["  __   ", " / /_  ", "| '_ \\ ", "| (_) |", " \\___/ "],
      '7': [" _____ ", "|___  |", "   / / ", "  / /  ", " /_/   "],
      '8': ["  ___  ", " ( _ ) ", " / _ \\ ", "| (_) |", " \\___/ "],
      '9': ["  ___  ", " / _ \\ ", "| (_) |", " \\__, |", "   /_/ "],
      '!': [" _ ", "| |", "| |", "|_|", "(_)"],
      '?': [" ___  ", "|__ \\ ", "  / / ", " |_|  ", " (_)  "],
      '.': ["   ", "   ", "   ", " _ ", "(_)"],
      ' ': ["      ", "      ", "      ", "      ", "      "]
    }
  },
  mini: {
    height: 3,
    chars: {
      'A': ["┌─┐", "├─┤", "┴ ┴"],
      'B': ["┌┐ ", "├┴┐", "└─┘"],
      'C': ["┌─┐", "│  ", "└─┘"],
      'D': ["┌┬┐", "│││", "┴ ┴"],
      'E': ["┌─┐", "├┤ ", "└─┘"],
      'F': ["┌─┐", "├┤ ", "┴  "],
      'G': ["┌─┐", "│ ┬", "└─┘"],
      'H': ["┬ ┬", "├─┤", "┴ ┴"],
      'I': ["┬", "│", "┴"],
      'J': [" ┬", " │", "└┘"],
      'K': ["┬┌─", "├┴┐", "┴ ┴"],
      'L': ["┬  ", "│  ", "┴─┘"],
      'M': ["┌┬┐", "│││", "┴ ┴"],
      'N': ["┌┐┐", "│││", "┴└┘"],
      'O': ["┌─┐", "│ │", "└─┘"],
      'P': ["┌─┐", "├─┘", "┴  "],
      'Q': ["┌─┐", "│\x5C│", "└─┘"],
      'R': ["┬─┐", "├┬┘", "┴└─"],
      'S': ["┌─┐", "└─┐", "└─┘"],
      'T': ["┬", "│", "┴"],
      'U': ["┬ ┬", "│ │", "└─┘"],
      'V': ["┬  ┬", "│  │", " └┘ "],
      'W': ["┬ ┬", "│││", "└┴┘"],
      'X': ["─┼─", " ╳ ", "─┼─"],
      'Y': ["┬ ┬", "└┬┘", " ┴ "],
      'Z': ["┌─┐", "┌─┘", "└─┘"],
      '0': ["┌─┐", "│\x5C│", "└─┘"],
      '1': ["┐", "│", "┴"],
      '2': ["┌─┐", "┌─┘", "└─┘"],
      '3': ["──┐", " ─┤", "──┘"],
      '4': ["┬ ┬", "└─┼", "  ┴"],
      '5': ["┌─┐", "└─┐", "──┘"],
      '6': ["┌─┐", "├─┐", "└─┘"],
      '7': ["──┐", "  │", "  ┴"],
      '8': ["┌─┐", "├─┤", "└─┘"],
      '9': ["┌─┐", "└─┤", "──┘"],
      ' ': [" ", " ", " "]
    }
  },
  bubble: {
    transform: function(text) {
      const map = {
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
        'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
        'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
        'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
        'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
      };
      return text.split('').map(c => map[c] || c).join(' ');
    }
  },
  morse: {
    transform: function(text) {
      const map = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
      };
      return text.toUpperCase().split('').map(c => map[c] || c).join(' ');
    }
  }
};

// DOM Elements
const textInput = document.getElementById('text-input');
const btnSample = document.getElementById('btn-sample');
const btnClear = document.getElementById('btn-clear');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const byteCount = document.getElementById('byte-count');

const delimiterSelect = document.getElementById('delimiter-select');
const hexPrefixSelect = document.getElementById('hex-prefix-select');
const fontSelect = document.getElementById('font-select');

const outDecimal = document.getElementById('out-decimal');
const outHex = document.getElementById('out-hex');
const outBinary = document.getElementById('out-binary');
const outOctal = document.getElementById('out-octal');
const outHtml = document.getElementById('out-html');
const artOutput = document.getElementById('art-output');
const tableBody = document.getElementById('table-body');

const btnCopyArt = document.getElementById('btn-copy-art');
const btnDownloadArt = document.getElementById('btn-download-art');
const toast = document.getElementById('toast');

// Delimiter mapping helper
function getDelimiter() {
  const val = delimiterSelect.value;
  switch (val) {
    case 'comma': return ', ';
    case 'none': return '';
    case 'dash': return '-';
    case 'space':
    default: return ' ';
  }
}

// Byte count calculation (UTF-8)
function getByteCount(str) {
  return new TextEncoder().encode(str).length;
}

// Character categorization for inspector table
function getCharCategory(char, code) {
  if (code >= 65 && code <= 90) return { name: 'Uppercase Letter', class: 'letter' };
  if (code >= 97 && code <= 122) return { name: 'Lowercase Letter', class: 'letter' };
  if (code >= 48 && code <= 57) return { name: 'Digit', class: 'digit' };
  if (code === 32) return { name: 'Space', class: 'space' };
  if (code === 10) return { name: 'Line Feed (\\n)', class: 'control' };
  if (code === 13) return { name: 'Carriage Return (\\r)', class: 'control' };
  if (code === 9) return { name: 'Horizontal Tab (\\t)', class: 'control' };
  if (code < 32 || code === 127) return { name: 'Control Char', class: 'control' };
  if ((code >= 33 && code <= 47) || (code >= 58 && code <= 64) || (code >= 91 && code <= 96) || (code >= 123 && code <= 126)) {
    return { name: 'Punctuation / Symbol', class: 'punctuation' };
  }
  return { name: 'Extended / Unicode', class: 'letter' };
}

// Display representation for characters (visible tags for invisible chars)
function getDisplayChar(char, code) {
  if (code === 32) return '<span class="inspector-char-badge">SPACE</span>';
  if (code === 10) return '<span class="inspector-char-badge">\\n</span>';
  if (code === 13) return '<span class="inspector-char-badge">\\r</span>';
  if (code === 9) return '<span class="inspector-char-badge">\\t</span>';
  if (code < 32 || code === 127) return `<span class="inspector-char-badge">#${code}</span>`;
  return escapeHtml(char);
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Generate ASCII Art
function generateAsciiArt(text, fontName) {
  if (!text || text.trim() === '') {
    return '/* Type something above to see ASCII Art */';
  }

  const font = FONTS[fontName];
  if (!font) return 'Selected font not found.';

  // Special transform fonts (bubble, morse)
  if (font.transform) {
    return font.transform(text);
  }

  // Multi-line banner fonts
  const lines = text.split('\n');
  const bannerLines = [];

  for (const line of lines) {
    if (line.length === 0) {
      bannerLines.push('');
      continue;
    }

    const rowOutputs = Array(font.height).fill('');
    const upperLine = line.toUpperCase();

    for (let i = 0; i < upperLine.length; i++) {
      const ch = upperLine[i];
      const glyph = font.chars[ch] || font.chars[' '] || Array(font.height).fill('   ');

      for (let r = 0; r < font.height; r++) {
        rowOutputs[r] += (glyph[r] || '   ') + ' ';
      }
    }

    bannerLines.push(...rowOutputs);
    bannerLines.push(''); // Blank row between paragraphs
  }

  return bannerLines.join('\n').trimEnd();
}

// Update all encodings and tables
function updateOutputs() {
  const text = textInput.value;
  const delimiter = getDelimiter();
  const hexPrefix = hexPrefixSelect.value;

  // Stats
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const bytes = getByteCount(text);

  charCount.textContent = `Characters: ${chars}`;
  wordCount.textContent = `Words: ${words}`;
  byteCount.textContent = `Bytes: ${bytes} B`;

  if (chars === 0) {
    outDecimal.textContent = '';
    outHex.textContent = '';
    outBinary.textContent = '';
    outOctal.textContent = '';
    outHtml.textContent = '';
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No input text. Type or click "Sample" above.</td></tr>`;
    artOutput.textContent = '/* Type something above to see ASCII Art */';
    return;
  }

  const decimals = [];
  const hexes = [];
  const binaries = [];
  const octals = [];
  const htmlEntities = [];
  let tableRowsHtml = '';

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = text.charCodeAt(i);

    // Decimal
    decimals.push(code.toString(10));

    // Hexadecimal
    let hexVal = code.toString(16).toUpperCase();
    if (hexVal.length === 1) hexVal = '0' + hexVal;

    if (hexPrefix === '0x') {
      hexes.push('0x' + hexVal);
    } else if (hexPrefix === '\\x') {
      hexes.push('\\x' + hexVal);
    } else if (hexPrefix === 'lowercase') {
      hexes.push(hexVal.toLowerCase());
    } else {
      hexes.push(hexVal);
    }

    // Binary (8-bit padded)
    binaries.push(code.toString(2).padStart(8, '0'));

    // Octal
    octals.push(code.toString(8).padStart(3, '0'));

    // HTML Entity
    htmlEntities.push(`&#${code};`);

    // Inspector Table Row
    const category = getCharCategory(char, code);
    const displayChar = getDisplayChar(char, code);

    tableRowsHtml += `
      <tr>
        <td>${i + 1}</td>
        <td>${displayChar}</td>
        <td>${code}</td>
        <td>0x${hexVal}</td>
        <td>${code.toString(8)}</td>
        <td>${code.toString(2).padStart(8, '0')}</td>
        <td><span class="category-pill ${category.class}">${category.name}</span></td>
      </tr>
    `;
  }

  // Join outputs
  outDecimal.textContent = decimals.join(delimiter);
  outHex.textContent = hexes.join(hexPrefix === '\\x' ? '' : delimiter);
  outBinary.textContent = binaries.join(delimiter);
  outOctal.textContent = octals.join(delimiter);
  outHtml.textContent = htmlEntities.join(delimiter === ' ' ? ' ' : delimiter);

  tableBody.innerHTML = tableRowsHtml;

  // ASCII Art output
  artOutput.textContent = generateAsciiArt(text, fontSelect.value);
}

// Show Toast notification
let toastTimer = null;
function showToast(msg = 'Copied to clipboard!') {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Copy helper
function copyTextToClipboard(text) {
  if (!text) return;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast());
  } else {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast();
    } catch (err) {
      console.error('Copy failed:', err);
    }
    document.body.removeChild(textarea);
  }
}

// Event Listeners
textInput.addEventListener('input', updateOutputs);
delimiterSelect.addEventListener('change', updateOutputs);
hexPrefixSelect.addEventListener('change', updateOutputs);
fontSelect.addEventListener('change', () => {
  artOutput.textContent = generateAsciiArt(textInput.value, fontSelect.value);
});

// Sample button
btnSample.addEventListener('click', () => {
  textInput.value = 'Hello World!';
  updateOutputs();
});

// Clear button
btnClear.addEventListener('click', () => {
  textInput.value = '';
  updateOutputs();
  textInput.focus();
});

// Tab navigation
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-tab');

    tabButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
  });
});

// Copy buttons on cards
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      copyTextToClipboard(targetEl.textContent);
    }
  });
});

// Copy Art button
btnCopyArt.addEventListener('click', () => {
  copyTextToClipboard(artOutput.textContent);
});

// Download Art button
btnDownloadArt.addEventListener('click', () => {
  const artContent = artOutput.textContent;
  if (!artContent) return;

  const blob = new Blob([artContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'words-to-ascii-art.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('Downloaded text file!');
});

// Initial invocation
updateOutputs();
