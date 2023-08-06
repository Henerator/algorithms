/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  let counts = new Array(n).fill(1);

  for (let row = 1; row < m; row++) {
    const nextCounts = [1];
    for (let col = 1; col < n; col++) {
      nextCounts[col] = nextCounts[col - 1] + counts[col];
    }
    counts = nextCounts;
  }

  return counts[n - 1];
}

exports.uniquePaths = uniquePaths;
