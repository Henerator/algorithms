/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
function numberOfWays(n, x) {
  const mod = 10 ** 9 + 7;
  const maxValue = Math.ceil(Math.pow(n, 1 / x));
  const cache = new Map();

  const getCacheKey = (value, sum) => `${value}-${sum}`;

  function getWays(value, sum) {
    if (sum > n) return 0;
    if (sum === n) return 1;
    if (value > maxValue) return 0;
    if (Math.pow(value, x) > n - sum) return 0;

    const cacheKey = getCacheKey(value, sum);
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    let subWays = getWays(value + 1, sum + Math.pow(value, x)) + getWays(value + 1, sum);
    subWays %= mod;

    cache.set(cacheKey, subWays);

    return subWays;
  }

  return getWays(1, 0);
}

exports.numberOfWays = numberOfWays;
