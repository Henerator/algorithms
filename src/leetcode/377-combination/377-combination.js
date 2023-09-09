/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
function combinationSum4(coins, target) {
  coins.sort((a, b) => a - b);

  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let value = 1; value <= target; value++) {
    for (const coin of coins) {
      if (value - coin >= 0) dp[value] += dp[value - coin];
    }
  }

  return dp[target];
}

exports.combinationSum4 = combinationSum4;
