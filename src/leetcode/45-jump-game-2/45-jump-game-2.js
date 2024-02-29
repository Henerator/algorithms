/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  const n = nums.length;
  let jumps = 0;
  let jumpIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < n; i++) {
    if (i > jumpIndex) {
      jumpIndex = maxIndex;
      jumps++;
    }
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }

  return jumps;
}

exports.jump = jump;
