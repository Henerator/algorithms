/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }

    left = mid + 1;
  }

  return right + 1;
};

exports.searchInsert = searchInsert;
