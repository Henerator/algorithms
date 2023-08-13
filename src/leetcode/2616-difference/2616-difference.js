/**
 * @param {number[]} nums
 * @param {number} pairs
 * @return {number}
 */
function minimizeMax(nums, pairs) {
  const n = nums.length;
  nums = nums.sort((a, b) => a - b);

  function findPairsCount(threshold) {
    let count = 0;
    let index = 0;

    while (index < n - 1) {
      if (nums[index + 1] - nums[index] <= threshold) {
        count++;
        index += 2;
        continue;
      }

      index++;
    }

    return count;
  }

  let minDif = 0;
  let maxDif = nums.at(-1) - nums.at(0);

  while (minDif < maxDif) {
    const midDif = minDif + Math.floor((maxDif - minDif) / 2);
    const midDifPairs = findPairsCount(midDif);

    if (midDifPairs >= pairs) maxDif = midDif;
    else minDif = midDif + 1;
  }

  return minDif;
}

exports.minimizeMax = minimizeMax;
