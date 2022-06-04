/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.filter((value) => value > 0);
  nums.forEach((value, _, arr) => {
    const absValue = Math.abs(value);
    const valueIndex = absValue - 1;
    if (valueIndex < arr.length && arr[valueIndex] > 0) {
      arr[valueIndex] *= -1;
    }
  });

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) return i;
  }

  return nums.length + 1;
};

exports.firstMissingPositive = firstMissingPositive;
