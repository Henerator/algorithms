var twoSum = function (nums, target) {
  const map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const valueA = nums[index];
    const valueB = target - valueA;

    if (map.has(valueB)) {
      return [map.get(valueB), index];
    }

    map.set(valueA, index);
  }
};

exports.twoSum = twoSum;
