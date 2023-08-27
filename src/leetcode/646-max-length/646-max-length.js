/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  const n = pairs.length;
  pairs.sort((a, b) => a[0] - b[0]);

  let max = 1;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    max = Math.max(max, dp[i]);
  }

  return max;
}

exports.findLongestChain = findLongestChain;
