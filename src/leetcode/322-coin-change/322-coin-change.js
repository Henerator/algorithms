/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let value = 1; value <= amount; value++) {
    coins.forEach((coin) => {
      if (value - coin < 0) return;
      dp[value] = Math.min(dp[value], dp[value - coin] + 1);
    });
  }

  return dp[amount] !== Infinity ? dp[amount] : -1;
};

exports.coinChange = coinChange;
