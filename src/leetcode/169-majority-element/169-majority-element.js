/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const map = new Map();

  nums.forEach((value) => {
    const count = map.get(value) || 0;
    if (!count) map.set(value, 0);
    map.set(value, count + 1);
  });

  let maxCount = 0;
  let maxValue = 0;
  map.forEach((count, value) => {
    if (count > maxCount) {
      maxCount = count;
      maxValue = value;
    }
  });

  return maxValue;
}

exports.majorityElement = majorityElement;
