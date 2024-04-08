/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    while (numbers[left] + numbers[right] > target) right--;
    while (numbers[left] + numbers[right] < target) left++;

    if (numbers[left] + numbers[right] === target) break;
  }

  return [left + 1, right + 1];
};

exports.twoSum = twoSum;
