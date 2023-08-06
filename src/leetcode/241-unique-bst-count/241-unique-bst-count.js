/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  const cache = new Map();

  function getHashKey(left, right) {
    return `${left}-${right}`;
  }

  function findBsts(left, right) {
    if (left > right) return 1;

    const cacheKey = getHashKey(left, right);
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    let count = 0;
    for (let i = left; i <= right; i++) {
      const leftCount = findBsts(left, i - 1);
      const rightCount = findBsts(i + 1, right);
      count += leftCount * rightCount;
    }

    cache.set(cacheKey, count);
    return count;
  }

  return findBsts(1, n);
}
