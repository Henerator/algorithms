/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((sum, value) => sum + value);

  if (total % 2) return false;

  const target = total / 2;
  let dp = new Set([0]);

  for (const value of nums) {
    const nextDp = new Set();

    for (const dpValue of dp) {
      const sum = dpValue + value;

      if (sum === target) return true;
      nextDp.add(sum);
      nextDp.add(dpValue);
    }

    dp = nextDp;
  }

  return dp.has(target);
};

exports.canPartition = canPartition;
