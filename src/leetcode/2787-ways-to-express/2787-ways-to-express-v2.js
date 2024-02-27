/**
 * [DP]
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
function numberOfWays(n, x) {
  const mod = 10 ** 9 + 7;
  const max = Math.ceil(Math.pow(n, 1 / x));
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;

  for (let value = 1; value <= max; value++) {
    const pow = Math.pow(value, x);

    for (let sum = n; sum >= pow; sum--) {
      dp[sum] += dp[sum - pow];
      dp[sum] %= mod;
    }
  }

  return dp[n];
}

exports.numberOfWays = numberOfWays;
