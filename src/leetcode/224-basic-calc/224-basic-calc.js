/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let value = 0;
  let result = 0;
  let currentSign = 1;
  const sings = [currentSign];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(parseInt(char))) {
      value = value * 10 + parseInt(char);
    } else if (char === '(') {
      sings.push(currentSign);
    } else if (char === ')') {
      sings.pop();
    } else if (char === '+' || char === '-') {
      result += value * currentSign;
      currentSign = (char === '+' ? 1 : -1) * sings.at(-1);
      value = 0;
    }
  }

  return result + value * currentSign;
};

exports.calculate = calculate;
