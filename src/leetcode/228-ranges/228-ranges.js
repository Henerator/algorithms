/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ranges = [];

  function addRange(start, end) {
    ranges.push(start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`);
  }

  nums.push(Infinity);
  for (let left = 0, right = 1; right < nums.length; right++) {
    if (nums[right] - nums[right - 1] !== 1) {
      addRange(left, right - 1);
      left = right;
    }
  }

  return ranges;
};

exports.summaryRanges = summaryRanges;
