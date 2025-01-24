/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binSearch(direction) {
    let left = 0;
    let right = nums.length - 1;
    let targetIndex = -1;

    while (left <= right) {
      const mid = left + ((right - left) >> 1);

      if (target < nums[mid]) {
        right = mid - 1;
        continue;
      }

      if (target > nums[mid]) {
        left = mid + 1;
        continue;
      }

      targetIndex = mid;

      if (direction) left = mid + 1;
      else right = mid - 1;
    }

    return targetIndex;
  }

  return [binSearch(false), binSearch(true)];
};

exports.searchRange = searchRange;
