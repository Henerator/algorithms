/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map(); // value - index

  for (let index = 0; index < nums.length; index++) {
    const value = nums[index];

    if (!map.has(value)) {
      map.set(value, index);
      continue;
    }

    const valueIndex = map.get(value);
    if (index - valueIndex <= k) return true;
    map.set(value, index);
  }

  return false;
};

exports.containsNearbyDuplicate = containsNearbyDuplicate;
