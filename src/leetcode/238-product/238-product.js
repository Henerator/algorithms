/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const count = nums.length;

  const prefixes = [1];
  for (let i = 1; i < count; i++) {
    prefixes[i] = prefixes[i - 1] * nums[i - 1];
  }

  const suffixes = [1];
  for (let i = 1; i < count; i++) {
    suffixes[i] = suffixes[i - 1] * nums[count - i];
  }

  return nums.map((_value, index) => prefixes[index] * suffixes[count - index - 1]);
};

exports.productExceptSelf = productExceptSelf;
