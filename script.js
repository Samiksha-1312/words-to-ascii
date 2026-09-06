// Word / Sentence to ASCII Number Converter

// Standard ASCII Control Characters Mapping (0-32 and 127)
const ASCII_CONTROL_NAMES = {
  0: 'NUL',
  1: 'SOH',
  2: 'STX',
  3: 'ETX',
  4: 'EOT',
  5: 'ENQ',
  6: 'ACK',
  7: 'BEL',
  8: 'BS',
  9: 'TAB',
  10: 'LF',
  11: 'VT',
  12: 'FF',
  13: 'CR',
  14: 'SO',
  15: 'SI',
  16: 'DLE',
  17: 'DC1',
  18: 'DC2',
  19: 'DC3',
  20: 'DC4',
  21: 'NAK',
  22: 'SYN',
  23: 'ETB',
  24: 'CAN',
  25: 'EM',
  26: 'SUB',
  27: 'ESC',
  28: 'FS',
  29: 'GS',
  30: 'RS',
  31: 'US',
  32: 'SPACE',
  127: 'DEL'
};

// DOM Elements
const textInput = document.getElementById('text-input');
const btnSample = document.getElementById('btn-sample');
const btnClear = document.getElementById('btn-clear');
const btnCopy = document.getElementById('btn-copy');
const asciiNumbersDisplay = document.getElementById('ascii-numbers-display');
const breakdownTbody = document.getElementById('breakdown-tbody');
const tableBody = document.getElementById('table-body');
const toast = document.getElementById('toast');

// HTML Escape helper
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Format Hex (2 digits uppercase)
function formatHex(code) {
  return code.toString(16).toUpperCase().padStart(2, '0');
}

// Format Binary (8 digits padded)
function formatBinary(code) {
  return code.toString(2).padStart(8, '0');
}

// Format Octal (standard representation, e.g. 65 -> 101, 32 -> 40, 0 -> 0)
function formatOctal(code) {
  return code.toString(8);
}

// Get character display HTML
function getCharacterDisplay(char, code) {
  if (ASCII_CONTROL_NAMES[code]) {
    return `<span class="char-special">${ASCII_CONTROL_NAMES[code]}</span>`;
  }
  return `<span class="char-text">${escapeHtml(char)}</span>`;
}

// Update Section 2: Your ASCII Numbers
function updateConversion() {
  const text = textInput.value;

  if (text.length === 0) {
    asciiNumbersDisplay.textContent = '';
    breakdownTbody.innerHTML = `
      <tr>
        <td colspan="2" class="empty-state">
          Enter a word or sentence above to see ASCII decimal numbers.
        </td>
      </tr>
    `;
    return;
  }

  const decimalNumbers = [];
  const breakdownRows = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = text.charCodeAt(i);

    decimalNumbers.push(code);

    breakdownRows.push(`
      <tr>
        <td class="col-char">${getCharacterDisplay(char, code)}</td>
        <td class="col-dec font-mono">${code}</td>
      </tr>
    `);
  }

  // Primary output: ASCII Decimal numbers separated by space
  asciiNumbersDisplay.textContent = decimalNumbers.join(' ');
  breakdownTbody.innerHTML = breakdownRows.join('');
}

// Populate Section 3: Standard ASCII Reference Table (0–127)
function renderAsciiTable() {
  const rows = [];

  for (let code = 0; code <= 127; code++) {
    let charDisplay;
    if (ASCII_CONTROL_NAMES[code]) {
      charDisplay = `<span class="char-special">${ASCII_CONTROL_NAMES[code]}</span>`;
    } else {
      charDisplay = `<span class="char-text">${escapeHtml(String.fromCharCode(code))}</span>`;
    }

    rows.push(`
      <tr>
        <td class="col-dec">${code}</td>
        <td class="col-mono">${formatHex(code)}</td>
        <td class="col-char">${charDisplay}</td>
        <td class="col-mono">${formatBinary(code)}</td>
        <td class="col-mono">${formatOctal(code)}</td>
      </tr>
    `);
  }

  tableBody.innerHTML = rows.join('');
}

// Toast notification helper
let toastTimer = null;
function showToast(message = 'Copied to clipboard!') {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// Copy to clipboard
function copyOutput() {
  const text = asciiNumbersDisplay.textContent.trim();
  if (!text) return;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast());
  } else {
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
textInput.addEventListener('input', updateConversion);

btnSample.addEventListener('click', () => {
  textInput.value = 'Hello World';
  updateConversion();
  textInput.focus();
});

btnClear.addEventListener('click', () => {
  textInput.value = '';
  updateConversion();
  textInput.focus();
});

btnCopy.addEventListener('click', copyOutput);

// Initialization
renderAsciiTable();
updateConversion();
