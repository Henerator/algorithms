function stringMatchesTemplate(s, p) {
  const cache = new Map();
  const sLength = s.length;
  const pLength = p.length;

  function getCacheKey(i, j) {
    return `${i}-${j}`;
  }

  function test(i, j) {
    const cacheKey = getCacheKey(i, j);

    if (cache.has(cacheKey)) return cache.get(cacheKey);
    if (i >= sLength && j >= pLength) return true;
    if (j >= pLength) return false;

    const match = i < sLength && (s[i] === p[j] || p[j] === '?' || p[j] === '*');
    if (p[j] === '*') {
      const recursiveMatch = test(i, j + 1) || (match && test(i + 1, j));
      cache.set(cacheKey, recursiveMatch);
      return cache.get(cacheKey);
    }

    if (match) {
      const recursiveMatch = test(i + 1, j + 1);
      cache.set(cacheKey, recursiveMatch);
      return cache.get(cacheKey);
    }

    cache.set(cacheKey, false);
    return false;
  }

  return test(0, 0);
}

exports.stringMatchesTemplate = stringMatchesTemplate;
