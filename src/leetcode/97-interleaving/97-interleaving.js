/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const dp = new Array(s1.length + 2).fill(null).map(() => new Array(s2.length + 2).fill(false));
  dp[s1.length][s2.length] = true;

  for (let row = s1.length; row >= 0; row--) {
    for (let col = s2.length; col >= 0; col--) {
      if (col < s2.length && s2[col] === s3[row + col] && dp[row][col + 1]) dp[row][col] = true;
      if (row < s1.length && s1[row] === s3[row + col] && dp[row + 1][col]) dp[row][col] = true;
    }
  }

  return dp[0][0];
};

exports.isInterleave = isInterleave;
