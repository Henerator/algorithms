/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  function swap(i, k) {
    if (i === k) return;

    const tmp = nums[i];
    nums[i] = nums[k];
    nums[k] = tmp;
  }

  let left = 0;
  let right = 0;
  let current = nums[0];
  let repeats = 0;

  while (right < nums.length) {
    if (nums[right] === current) {
      repeats++;
    } else {
      current = nums[right];
      repeats = 1;
    }

    if (repeats <= 2) {
      swap(left, right);
      left++;
    }

    right++;
  }

  return left;
}

exports.removeDuplicates = removeDuplicates;
