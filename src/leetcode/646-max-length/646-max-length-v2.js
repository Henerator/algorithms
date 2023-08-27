/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let max = 0;
  let right = -Infinity;

  for (const pair of pairs) {
    if (pair[0] > right) {
      max++;
      right = pair[1];
    }
  }

  return max;
}

exports.findLongestChain = findLongestChain;
