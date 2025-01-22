/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let total = 0;
  let curMax = 0;
  let curMin = 0;
  let globalMax = nums[0];
  let globalMin = nums[0];

  nums.forEach((num) => {
    total += num;

    curMax = Math.max(curMax + num, num);
    globalMax = Math.max(globalMax, curMax);

    curMin = Math.min(curMin + num, num);
    globalMin = Math.min(globalMin, curMin);
  });

  return globalMax < 0 ? globalMax : Math.max(globalMax, total - globalMin);
};

exports.maxSubarraySumCircular = maxSubarraySumCircular;
