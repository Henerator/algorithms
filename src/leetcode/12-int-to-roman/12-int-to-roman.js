/**
 * @param {number} value
 * @return {string}
 */
var intToRoman = function (value) {
  const valueString = String(value);
  const count = valueString.length;
  const map = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M', ''],
  ];

  return valueString
    .split('')
    .map((char, index) => {
      const charValue = Number(char);
      const mapIndex = count - index - 1;

      if (charValue <= 3) return map[mapIndex][0].repeat(charValue);
      if (charValue === 4) return `${map[mapIndex][0]}${map[mapIndex][1]}`;
      if (charValue <= 8) return `${map[mapIndex][1]}${map[mapIndex][0].repeat(charValue - 5)}`;
      if (charValue === 9) return `${map[mapIndex][0]}${map[mapIndex + 1][0]}`;

      return '';
    })
    .join('');
};

exports.intToRoman = intToRoman;
