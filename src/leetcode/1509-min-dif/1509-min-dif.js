/**
 * @param {number[]} nums
 * @return {number}
 */
function minDifference(nums) {
  if (nums.length <= 4) return 0;

  nums.sort((a, b) => a - b);

  let min = Infinity;

  for (let index = 0; index <= 3; index++) {
    min = Math.min(min, nums.at(-(index + 1)) - nums.at(3 - index));
  }

  return min;
}

exports.minDifference = minDifference;
