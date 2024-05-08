/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  const offsets = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const dfs = (x, y) => {
    board[y][x] = 'S';

    for (const [dx, dy] of offsets) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;
      if (board[ny][nx] !== 'O') continue;

      dfs(nx, ny);
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row !== 0 && row !== rows - 1 && col !== 0 && col !== cols - 1) continue;
      if (board[row][col] !== 'O') continue;

      dfs(col, row);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const char = board[row][col];

      if (char === 'O') board[row][col] = 'X';
      else if (char === 'S') board[row][col] = 'O';
    }
  }

  return board;
};

exports.solve = solve;
