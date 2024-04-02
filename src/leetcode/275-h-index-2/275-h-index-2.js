/**
 * @param {number[]} nums
 * @return {number}
 */
function hIndex(nums) {
  const count = nums.length;

  let left = 0;
  let right = count - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] >= count - middle) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return count - left;
}

exports.hIndex = hIndex;
