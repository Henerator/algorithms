/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dpLeft = new Array(prices.length);
  dpLeft[0] = 0;
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - min);
    dpLeft[i] = maxProfit;
    min = Math.min(min, prices[i]);
  }

  const dpRight = new Array(prices.length);
  dpRight[prices.length - 1] = 0;
  let max = prices[prices.length - 1];
  maxProfit = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    maxProfit = Math.max(maxProfit, max - prices[i]);
    dpRight[i] = maxProfit;
    max = Math.max(max, prices[i]);
  }
  dpRight.push(0);

  let globalMax = 0;
  for (let i = 0; i < dpRight.length; i++) {
    const profit = (dpLeft[i - 1] || 0) + dpRight[i];
    globalMax = Math.max(globalMax, profit);
  }

  return globalMax;
};

exports.maxProfit = maxProfit;
