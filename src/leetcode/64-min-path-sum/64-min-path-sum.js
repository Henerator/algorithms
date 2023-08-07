/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let mins = new Array(cols + 1).fill(Infinity);
  mins[1] = 0;

  for (let row = 0; row < rows; row++) {
    const nextMins = [Infinity];

    for (let col = 1; col <= cols; col++) {
      const diff = Math.min(nextMins[col - 1], mins[col]);
      nextMins[col] = grid[row][col - 1] + diff;
    }

    mins = nextMins;
  }

  return mins[cols];
}

exports.minPathSum = minPathSum;
