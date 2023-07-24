/**
 * @param {string} text
 * @param {number} rowsCount
 * @return {string}
 */
function convert(text, rowsCount) {
  if (text.length <= rowsCount || rowsCount === 1) return text;

  const downStrategy = (row) => row + 1;
  const upStrategy = (row) => row - 1;

  let strategy = downStrategy;

  const matrix = new Array(rowsCount).fill().map(() => []);

  let charIndex = 0;
  let currentRow = 0;

  while (charIndex < text.length) {
    matrix[currentRow].push(text[charIndex]);

    if (currentRow === 0) strategy = downStrategy;
    else if (currentRow === rowsCount - 1) strategy = upStrategy;

    currentRow = strategy(currentRow);
    charIndex++;
  }

  return matrix.flat().join('');
}

exports.convert = convert;
