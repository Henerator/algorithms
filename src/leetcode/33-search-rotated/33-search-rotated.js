/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) left = mid + 1;
      else right = mid - 1;
      continue;
    }

    if (target < nums[mid] || target > nums[right]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};

exports.search = search;
