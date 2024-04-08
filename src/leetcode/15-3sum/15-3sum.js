/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  if (nums[0] > 0) return [];

  const triples = [];
  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        triples.push([nums[i], nums[left], nums[right]]);
        const lastLeft = nums[left];
        const lastRight = nums[right];

        while (left < right && nums[left] === lastLeft) left++;
        while (left < right && nums[right] === lastRight) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triples;
};

exports.threeSum = threeSum;
