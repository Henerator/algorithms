/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visitedCells = new Set();

  const moveMatrix = [
    { dx: 0, dy: -1 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
  ];

  function outBound(col, row) {
    return col < 0 || row < 0 || col === cols || row === rows;
  }

  function getCellKey(col, row) {
    return `${col}-${row}`;
  }

  function search(col, row, charIndex) {
    const cellKey = getCellKey(col, row);
    if (visitedCells.has(cellKey)) return false;

    if (board[row][col] !== word[charIndex]) return false;
    if (charIndex === word.length - 1) return true;

    visitedCells.add(cellKey);

    for (let index = 0; index < moveMatrix.length; index++) {
      const move = moveMatrix[index];
      const nCol = col + move.dx;
      const nRow = row + move.dy;

      if (outBound(nCol, nRow)) continue;
      if (search(nCol, nRow, charIndex + 1)) return true;
    }

    visitedCells.delete(cellKey);

    return false;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (search(col, row, 0)) return true;
    }
  }

  return false;
};

exports.exist = exist;
