/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) - 1;
  const sign = Math.sign(x);

  const reversedXString = String(Math.abs(x))
    .split('')
    .reverse()
    .join('')
    .replace(/^0+(\d)/, '$1');
  const reversedX = parseInt(reversedXString) * sign;

  return reversedX >= min && reversedX <= max ? reversedX : 0;
};

exports.reverse = reverse;
