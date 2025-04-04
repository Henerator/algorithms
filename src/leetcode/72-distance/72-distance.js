/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dp = new Array(word1.length + 1).fill().map(() => new Array(word2.length + 1).fill(0));

  for (let row = 1; row <= word1.length; row++) dp[row][0] = dp[row - 1][0] + 1;
  for (let col = 1; col <= word2.length; col++) dp[0][col] = dp[0][col - 1] + 1;

  for (let row = 1; row <= word1.length; row++) {
    for (let col = 1; col <= word2.length; col++) {
      const topDistance = dp[row - 1][col] + 1;
      const leftDistance = dp[row][col - 1] + 1;
      const topLeftDistance = dp[row - 1][col - 1] + (word1[row - 1] === word2[col - 1] ? 0 : 1);
      dp[row][col] = Math.min(leftDistance, topDistance, topLeftDistance);
    }
  }

  return dp[word1.length][word2.length];
};

exports.minDistance = minDistance;
