/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  function getValue(index) {
    if (index < 0 || index === nums.length) return Infinity;
    return nums[index];
  }

  function isHollow(index) {
    const value = nums[index];
    const leftValue = getValue(index - 1);
    const rightValue = getValue(index + 1);
    return value < leftValue && value < rightValue;
  }

  let left = 0;
  let right = nums.length - 1;

  while (true) {
    const mid = left + ((right - left) >> 1);

    if (isHollow(mid)) return nums[mid];

    if (nums[mid] > nums[right]) {
      left = mid + 1;
      continue;
    }

    right = mid - 1;
  }
};

exports.findMin = findMin;
