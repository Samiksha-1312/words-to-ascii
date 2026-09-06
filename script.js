// Words to ASCII - Core Logic

// Standard ASCII Control Characters (0-31 and 127)
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
  32: 'Space',
  127: 'DEL'
};

// DOM Elements
const textInput = document.getElementById('text-input');
const statChars = document.getElementById('stat-chars');
const statWords = document.getElementById('stat-words');
const statBytes = document.getElementById('stat-bytes');
const numbersTbody = document.getElementById('numbers-tbody');
const referenceTbody = document.getElementById('reference-tbody');

// HTML Escape helper
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Format Character Representation
function formatCharacter(char, code) {
  if (ASCII_CONTROL_NAMES[code]) {
    return `<span class="control-tag">${ASCII_CONTROL_NAMES[code]}</span>`;
  }
  return escapeHtml(char);
}

// Format Hexadecimal (uppercase, 2 digits)
function formatHex(code) {
  return code.toString(16).toUpperCase().padStart(2, '0');
}

// Format Binary (8-bit padded)
function formatBinary(code) {
  return code.toString(2).padStart(8, '0');
}

// Format Octal (standard representation, e.g. 65 -> 101)
function formatOctal(code) {
  return code.toString(8);
}

// Calculate UTF-8 byte count
function getByteCount(str) {
  return new TextEncoder().encode(str).length;
}

// Update Section 1: ASCII Numbers Table
function updateNumbersTable() {
  const text = textInput.value;
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const bytes = getByteCount(text);

  statChars.textContent = `Characters: ${chars}`;
  statWords.textContent = `Words: ${words}`;
  statBytes.textContent = `Bytes: ${bytes} B`;

  if (chars === 0) {
    numbersTbody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-state">
          Enter text above to see the ASCII numerical representation.
        </td>
      </tr>
    `;
    return;
  }

  const rows = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = text.charCodeAt(i);

    rows.push(`
      <tr>
        <td class="col-char">${formatCharacter(char, code)}</td>
        <td class="col-code">${code}</td>
        <td class="col-code">${formatHex(code)}</td>
        <td class="col-code font-mono">${formatBinary(code)}</td>
        <td class="col-code font-mono">${formatOctal(code)}</td>
      </tr>
    `);
  }

  numbersTbody.innerHTML = rows.join('');
}

// Populate Section 2: Standard ASCII Reference Table (0–127)
function renderReferenceTable() {
  const rows = [];

  for (let code = 0; code <= 127; code++) {
    let charDisplay;
    if (ASCII_CONTROL_NAMES[code]) {
      charDisplay = `<span class="control-tag">${ASCII_CONTROL_NAMES[code]}</span>`;
    } else {
      charDisplay = escapeHtml(String.fromCharCode(code));
    }

    rows.push(`
      <tr>
        <td class="col-code">${code}</td>
        <td class="col-code">${formatHex(code)}</td>
        <td class="col-char">${charDisplay}</td>
        <td class="col-code font-mono">${formatBinary(code)}</td>
        <td class="col-code font-mono">${formatOctal(code)}</td>
      </tr>
    `);
  }

  referenceTbody.innerHTML = rows.join('');
}

// Event Listeners
textInput.addEventListener('input', updateNumbersTable);

// Initialization
updateNumbersTable();
renderReferenceTable();
