/**
 * @param {number[]} nums
 * @return {number}
 */
function hIndex(nums) {
  let count = nums.length;
  let index = 1;
  let hIndex = 0;
  nums.sort((a, b) => a - b);

  while (index <= count) {
    if (index <= nums[count - index]) {
      hIndex = index;
    }
    index++;
  }

  return hIndex;
}

exports.hIndex = hIndex;
