/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const dp = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = n - 1; i >= 0; i--) {
    for (let k = i + 1; k < n; k++) {
      if (nums[i] >= nums[k]) continue;

      dp[i] = Math.max(dp[i], dp[k] + 1);
      max = Math.max(max, dp[i]);
    }
  }

  return max;
};

exports.lengthOfLIS = lengthOfLIS;
