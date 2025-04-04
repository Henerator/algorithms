/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let maxSize = 0;
  const dp = new Array(rows + 1).fill().map(() => new Array(cols + 1).fill(0));

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      if (matrix[row - 1][col - 1] === '0') continue;

      const top = dp[row - 1][col];
      const left = dp[row][col - 1];
      const topLeft = dp[row - 1][col - 1];
      dp[row][col] = Math.min(top, left, topLeft) + 1;
      maxSize = Math.max(maxSize, dp[row][col]);
    }
  }

  return maxSize * maxSize;
};

exports.maximalSquare = maximalSquare;
