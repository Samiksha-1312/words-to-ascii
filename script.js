// ASCII Converter - Simple Number Lookup Tool

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
const asciiInput = document.getElementById('ascii-input');
const btnClear = document.getElementById('btn-clear');
const inputError = document.getElementById('input-error');
const resultContent = document.getElementById('result-content');
const emptyResult = document.getElementById('empty-result');

const prominentChar = document.getElementById('prominent-char');
const resDec = document.getElementById('res-dec');
const resHex = document.getElementById('res-hex');
const resBin = document.getElementById('res-bin');
const resOct = document.getElementById('res-oct');

const tableBody = document.getElementById('table-body');

// HTML Escape helper
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Get display label for an ASCII code
function getCharacterDisplay(code) {
  if (ASCII_CONTROL_NAMES[code]) {
    return ASCII_CONTROL_NAMES[code];
  }
  return String.fromCharCode(code);
}

// Format Hex (2 digits uppercase)
function formatHex(code) {
  return code.toString(16).toUpperCase().padStart(2, '0');
}

// Format Binary (8 digits padded)
function formatBinary(code) {
  return code.toString(2).padStart(8, '0');
}

// Format Octal (standard representation, e.g. 65 -> 101, 0 -> 0)
function formatOctal(code) {
  return code.toString(8);
}

// Highlight active table row
function highlightTableRow(code) {
  const allRows = tableBody.querySelectorAll('tr');
  allRows.forEach(row => {
    if (parseInt(row.getAttribute('data-code'), 10) === code) {
      row.classList.add('row-active');
    } else {
      row.classList.remove('row-active');
    }
  });
}

// Update Section 2: Your ASCII Number
function updateLookup() {
  const valStr = asciiInput.value.trim();

  if (valStr === '') {
    inputError.style.display = 'none';
    resultContent.style.display = 'none';
    emptyResult.style.display = 'block';
    highlightTableRow(-1);
    return;
  }

  const num = Number(valStr);

  if (isNaN(num) || !Number.isInteger(num) || num < 0 || num > 127) {
    inputError.style.display = 'block';
    resultContent.style.display = 'none';
    emptyResult.style.display = 'block';
    highlightTableRow(-1);
    return;
  }

  // Valid ASCII number
  inputError.style.display = 'none';
  resultContent.style.display = 'flex';
  emptyResult.style.display = 'none';

  const charName = getCharacterDisplay(num);
  const isControl = Boolean(ASCII_CONTROL_NAMES[num]);

  prominentChar.textContent = charName;
  if (isControl) {
    prominentChar.classList.add('is-control');
  } else {
    prominentChar.classList.remove('is-control');
  }

  resDec.textContent = num.toString(10);
  resHex.textContent = formatHex(num);
  resBin.textContent = formatBinary(num);
  resOct.textContent = formatOctal(num);

  highlightTableRow(num);
}

// Populate Section 3: Complete ASCII Table (0–127)
function renderAsciiTable() {
  const rows = [];

  for (let code = 0; code <= 127; code++) {
    const isControl = Boolean(ASCII_CONTROL_NAMES[code]);
    const charDisplay = getCharacterDisplay(code);

    const charHtml = isControl
      ? `<span class="table-control-tag">${escapeHtml(charDisplay)}</span>`
      : `<span class="table-char-text">${escapeHtml(charDisplay)}</span>`;

    rows.push(`
      <tr data-code="${code}">
        <td class="col-dec">${code}</td>
        <td class="col-mono">${formatHex(code)}</td>
        <td class="col-char">${charHtml}</td>
        <td class="col-mono">${formatBinary(code)}</td>
        <td class="col-mono">${formatOctal(code)}</td>
      </tr>
    `);
  }

  tableBody.innerHTML = rows.join('');

  // Allow clicking any row to set input
  tableBody.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', () => {
      const code = row.getAttribute('data-code');
      asciiInput.value = code;
      updateLookup();
      asciiInput.focus();
    });
  });
}

// Event Listeners
asciiInput.addEventListener('input', updateLookup);

btnClear.addEventListener('click', () => {
  asciiInput.value = '';
  updateLookup();
  asciiInput.focus();
});

// Initialization
renderAsciiTable();
updateLookup();
