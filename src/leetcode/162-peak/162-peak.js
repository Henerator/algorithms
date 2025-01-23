/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  function getValue(index) {
    if (index < 0 || index === nums.length) return -Infinity;
    return nums[index];
  }

  function isPeak(index) {
    const value = nums[index];
    const leftValue = getValue(index - 1);
    const rightValue = getValue(index + 1);
    return value > leftValue && value > rightValue;
  }

  let left = 0;
  let right = nums.length - 1;

  while (true) {
    const mid = left + ((right - left) >> 1);

    if (isPeak(mid)) return mid;

    const midValue = nums[mid];
    if (midValue <= getValue(mid + 1)) {
      left = mid + 1;
      continue;
    }

    right = mid - 1;
  }
};

exports.findPeakElement = findPeakElement;
