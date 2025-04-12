/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1;

  let count = 0;
  const value = Math.pow(10, n) - 1;
  const valueDigits = String(value).split('').map(Number);
  const digitsCount = valueDigits.length;

  function dfs(pos, zeros, digits) {
    if (pos === digitsCount) {
      count++;
      return;
    }

    for (let digit = 0; digit <= 9; digit++) {
      if ((digit !== 0 || zeros !== pos) && digits.has(digit)) continue;

      const newZeros = zeros + (digit === 0 && zeros === pos ? 1 : 0);

      digits.add(digit);
      dfs(pos + 1, newZeros, digits);
      digits.delete(digit);
    }
  }

  dfs(0, 0, new Set());
  return count;
};

exports.countNumbersWithUniqueDigits = countNumbersWithUniqueDigits;
