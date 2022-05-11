/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  function swap(i, j) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }

  let prev = null;
  let current;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    current = nums[i];

    if (prev !== current) {
      swap(left, i);
      left++;
      prev = current;
      continue;
    }
  }

  return left;
};

exports.removeDuplicates = removeDuplicates;
