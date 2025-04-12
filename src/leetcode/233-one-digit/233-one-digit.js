/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (value) {
  const valueDigits = String(value).split('').map(Number);
  const digitsCount = valueDigits.length;
  const dp = new Map();

  function dfs(pos, tight, count) {
    if (pos === digitsCount) return count;

    const dpKey = `${pos}-${tight}-${count}`;
    if (dp.has(dpKey)) return dp.get(dpKey);

    const limit = tight ? valueDigits[pos] : 9;
    let total = 0;

    for (let digit = 0; digit <= limit; digit++) {
      const newTight = tight && digit === limit;
      const newCount = count + (digit === 1 ? 1 : 0);
      total += dfs(pos + 1, newTight, newCount);
    }

    dp.set(dpKey, total);
    return total;
  }

  return dfs(0, 1, 0);
};

exports.countDigitOne = countDigitOne;
