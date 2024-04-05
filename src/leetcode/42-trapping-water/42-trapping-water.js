/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  let left = 0;
  let right = heights.length - 1;
  let min = Math.min(heights[left], heights[right]);
  let sum = 0;

  while (left < right) {
    while (left < right && heights[left] <= heights[right]) {
      min = Math.max(min, heights[left]);
      sum += Math.max(min - heights[left], 0);
      left++;
    }

    while (left < right && heights[right] <= heights[left]) {
      min = Math.max(min, heights[right]);
      sum += Math.max(min - heights[right], 0);
      right--;
    }
  }

  return sum;
};

exports.trap = trap;
