/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let value = 1;
  while (value * value <= x) value++;
  return value - 1;
};

exports.mySqrt = mySqrt;
