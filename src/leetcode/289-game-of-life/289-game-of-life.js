/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  const moveMatrix = [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ];

  // 0 - was dead   will dead
  // 1 - was alive  will dead
  // 2 - was dead   will alive
  // 3 - was alive  will alive

  function getCellValue(x, y) {
    if (y < 0 || y >= rows || x < 0 || x >= cols) return null;
    return board[y][x];
  }

  function getAliveNeighboursCount(x, y) {
    return moveMatrix
      .map((move) => getCellValue(x + move.x, y + move.y))
      .filter((value) => value !== null)
      .reduce((sum, value) => {
        const isAlive = value === 1 || value === 3;
        return sum + (isAlive ? 1 : 0);
      }, 0);
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const neighbours = getAliveNeighboursCount(x, y);

      if (board[y][x]) {
        if (neighbours === 2 || neighbours === 3) board[y][x] = 3;
        else board[y][x] = 1;
        continue;
      }

      if (neighbours === 3) {
        board[y][x] = 2;
      }
    }
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const value = board[y][x];

      if (value === 2 || value === 3) board[y][x] = 1;
      else board[y][x] = 0;
    }
  }
};

exports.gameOfLife = gameOfLife;
