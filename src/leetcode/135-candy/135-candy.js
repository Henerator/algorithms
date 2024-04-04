/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const count = ratings.length;

  const left = new Array(count).fill(1);
  for (let i = 1; i < count; i++) {
    if (ratings[i - 1] < ratings[i]) {
      left[i] = left[i - 1] + 1;
    }
  }

  const right = new Array(count).fill(1);
  for (let i = count - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
  }

  return ratings.reduce((sum, _value, index) => sum + Math.max(left[index], right[index]), 0);
};

exports.candy = candy;
