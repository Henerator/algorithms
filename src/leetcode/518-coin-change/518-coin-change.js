/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
  if (amount === 0) return 1;

  let counts = new Array(amount + 1).fill(0);

  for (const coin of coins) {
    const nextCounts = [1];
    for (let curAmount = 1; curAmount <= amount; curAmount++) {
      const withoutCoinAmount = curAmount - coin;
      const withoutCoinCount = withoutCoinAmount < 0 ? 0 : nextCounts[withoutCoinAmount];
      nextCounts[curAmount] = withoutCoinCount + counts[curAmount];
    }
    counts = nextCounts;
  }

  return counts[amount];
}

exports.change = change;
