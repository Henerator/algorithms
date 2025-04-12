/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  function countUpTo(value) {
    const valueDigits = String(value).split('').map(Number);
    const digitsCount = valueDigits.length;
    const dp = new Map();

    function dfs(pos, leadingZeros, diff, tight) {
      if (pos === digitsCount) {
        if (leadingZeros === pos) return 0;
        if ((digitsCount - leadingZeros) % 2) return 0;
        return diff === 0 ? 1 : 0;
      }

      const dpKey = `${pos}-${diff}-${tight}-${leadingZeros}`;
      if (dp.has(dpKey)) return dp.get(dpKey);

      const limit = tight ? valueDigits[pos] : 9;
      let total = 0;

      for (let digit = 0; digit <= limit; digit++) {
        const newTight = tight && digit === limit;
        const newLeadingZeros = leadingZeros + (digit === 0 && leadingZeros === pos ? 1 : 0);

        let newDiff;
        const numberHalfLength = (digitsCount - leadingZeros) / 2;
        if (pos - leadingZeros < numberHalfLength) {
          newDiff = diff + digit;
        } else {
          newDiff = diff - digit;
        }

        total += dfs(pos + 1, newLeadingZeros, newDiff, newTight);
      }

      dp.set(dpKey, total);
      return total;
    }

    return dfs(0, 0, 0, true);
  }

  return countUpTo(high) - countUpTo(low - 1);
};

exports.countSymmetricIntegers = countSymmetricIntegers;
