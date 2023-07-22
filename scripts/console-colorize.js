const resetColorCode = '\x1b[0m';
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
};

function colorizeLog(text, color, description = '') {
  console.log(`${color}%s${resetColorCode}%s`, text, ` ${description}`);
}

exports.colors = colors;
exports.colorizeLog = colorizeLog;
