/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
function removeElement(nums, value) {
  let left = 0;
  let right = nums.length - 1;
  let matches = 0;

  function swap(i, k) {
    const temp = nums[k];
    nums[k] = nums[i];
    nums[i] = temp;
  }

  while (left <= right) {
    if (nums[left] === value) {
      while (nums[right] === value && right > left) {
        right--;
        matches++;
      }

      swap(left, right);
      right--;
      matches++;
    }

    left++;
  }

  return nums.length - matches;
}

exports.removeElement = removeElement;
