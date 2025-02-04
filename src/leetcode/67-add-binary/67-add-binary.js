/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  function getValue(text, index) {
    if (index < 0) return 0;
    return Number(text[index]);
  }

  const result = [];
  let overflow = 0;
  let maxLength = Math.max(a.length, b.length);

  for (let index = 0; index < maxLength; index++) {
    const aValue = getValue(a, a.length - index - 1);
    const bValue = getValue(b, b.length - index - 1);
    const sum = aValue + bValue + overflow;
    result.push(sum % 2);
    overflow = sum > 1 ? 1 : 0;
  }

  if (overflow) result.push(1);
  return result.reverse().join('');
};

exports.addBinary = addBinary;
