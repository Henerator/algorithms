/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let left = 0;
  let right = 0;
  let maxProfit = 0;
  let min = prices[0];

  while (right < prices.length) {
    maxProfit = Math.max(prices[right] - prices[left], maxProfit);
    right++;

    if (prices[right] < min) {
      min = prices[right];
      left = right;
    }
  }

  return maxProfit;
}

exports.maxProfit = maxProfit;
