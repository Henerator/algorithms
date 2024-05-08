/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let count = 0;

  const getVisitedKey = (x, y) => `${x}-${y}`;

  const offsets = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const dfs = (x, y) => {
    const key = getVisitedKey(x, y);
    if (visited.has(key)) return;

    visited.add(key);

    for (const [dx, dy] of offsets) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;
      if (grid[ny][nx] !== '1') continue;

      dfs(nx, ny);
    }
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== '1') continue;

      const key = getVisitedKey(col, row);
      if (visited.has(key)) continue;

      count++;
      dfs(col, row);
    }
  }

  return count;
};

exports.numIslands = numIslands;
