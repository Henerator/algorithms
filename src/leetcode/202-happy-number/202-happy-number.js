/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();

  while (true) {
    if (n === 1) return true;

    n = String(n)
      .split('')
      .map((value) => Math.pow(Number(value), 2))
      .reduce((sum, value) => sum + value);
    if (set.has(n)) break;
    set.add(n);
  }

  return false;
};

exports.isHappy = isHappy;
