/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  let count = BigInt(0);
  const mod = BigInt(1e9 + 7);
  const primes = new Set([2, 3, 5, 7]);
  const digitsCount = n;

  function dfs(pos) {
    if (pos === digitsCount) {
      count++;
      return;
    }

    for (let digit = 0; digit <= 9; digit++) {
      if (pos % 2 === 0 && digit % 2 !== 0) continue;
      if (pos % 2 !== 0 && !primes.has(digit)) continue;

      dfs(pos + 1);
    }
  }

  dfs(0);
  return Number(count % mod);
};

exports.countGoodNumbers = countGoodNumbers;
