/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n) {
  let counts = new Array(n + 1).fill(0);

  counts[0] = 1;
  counts[1] = 1;

  for (let right = 2; right <= n; right++) {
    for (let left = 1; left <= right; left++) {
      counts[right] = counts[right] + counts[right - left] * counts[left - 1];
    }
  }

  return counts[n];
}
