/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let left = 0;
  let right = 0;

  let sum = 0;
  let minLength = Infinity;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
      }

      sum -= nums[left];
      left++;
    }

    right++;
  }

  return minLength === Infinity ? 0 : minLength;
}

exports.minSubArrayLen = minSubArrayLen;
