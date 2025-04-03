/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (grid[0][[0]] || grid[rows - 1][cols - 1]) return 0;

  grid = grid.map((row) => row.map((value) => (value ? Infinity : 0)));
  grid[rows - 1][cols - 1] = 1;

  function getValue(row, col) {
    if (row === rows || col === cols) return 0;
    if (grid[row][col] === Infinity) return 0;
    return grid[row][col];
  }

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      if (row === rows - 1 && col === cols - 1) continue;

      const value = grid[row][col];
      if (value === Infinity) continue;

      grid[row][col] = getValue(row, col + 1) + getValue(row + 1, col);
    }
  }

  return grid[0][0];
};

exports.uniquePathsWithObstacles = uniquePathsWithObstacles;
