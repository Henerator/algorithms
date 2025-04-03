/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = triangle.at(-1).slice();

  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      const value = triangle[row][col];
      dp[col] = Math.min(value + dp[col], value + dp[col + 1]);
    }
  }

  return dp[0];
};

exports.minimumTotal = minimumTotal;
