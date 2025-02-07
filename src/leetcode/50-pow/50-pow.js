/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function pow(value, power) {
    if (value === 0) return 0;
    if (power === 0) return 1;

    const whole = pow(value * value, Math.floor(power / 2));
    return power % 2 ? whole * value : whole;
  }

  const result = pow(x, Math.abs(n));
  return n < 0 ? 1 / result : result;
};

exports.myPow = myPow;
