/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curSum = 0;
  let maxSum = nums[0];

  nums.forEach((num) => {
    if (curSum < 0) curSum = 0;
    curSum += num;
    maxSum = Math.max(maxSum, curSum);
  });

  return maxSum;
};

exports.maxSubArray = maxSubArray;
