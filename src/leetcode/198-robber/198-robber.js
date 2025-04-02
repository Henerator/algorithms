/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length <= 1) return nums[0];

  let max = nums[0];
  const dp = [0, max];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(dp[0] + nums[i], dp[1]);
    dp[0] = dp[1];
    dp[1] = max;
  }

  return max;
};

exports.rob = rob;
