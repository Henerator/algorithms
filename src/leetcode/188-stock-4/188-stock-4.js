/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  function getCacheKey(index, hasStock, limit) {
    return `${index}-${limit}-${hasStock}`;
  }

  function getProfit(index, hasStock, limit, cache) {
    if (index === prices.length) return 0;
    if (limit === 0) return 0;

    const cacheKey = getCacheKey(index, hasStock, limit);
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    let profit = 0;

    if (hasStock) {
      const sellProfit = prices[index] + getProfit(index + 1, 0, limit - 1, cache);
      const skipProfit = getProfit(index + 1, 1, limit, cache);
      profit = Math.max(sellProfit, skipProfit);
    } else {
      const buyProfit = -prices[index] + getProfit(index + 1, 1, limit, cache);
      const skipProfit = getProfit(index + 1, 0, limit, cache);
      profit = Math.max(buyProfit, skipProfit);
    }

    cache.set(cacheKey, profit);
    return profit;
  }

  return getProfit(0, 0, k, new Map());
};

exports.maxProfit = maxProfit;
