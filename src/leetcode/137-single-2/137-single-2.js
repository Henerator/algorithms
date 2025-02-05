/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    let bitSum = 0;
    nums.forEach((num) => (bitSum += (num >> i) & 1));
    result += bitSum % 3 << i;
  }

  return result;
};

exports.singleNumber = singleNumber;
