/**
 * [DP]
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  const n = nums.length;
  let jumpIndex = n - 1;

  for (let index = n - 2; index >= 0; index--) {
    if (index + nums[index] >= jumpIndex) {
      jumpIndex = index;
    }
  }

  return jumpIndex === 0;
}

exports.canJump = canJump;
