/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let sumProfit = 0;

  while (right < prices.length) {
    sumProfit += Math.max(prices[right] - prices[left], 0);
    left++;
    right++;
  }

  return sumProfit;
}

exports.maxProfit = maxProfit;
