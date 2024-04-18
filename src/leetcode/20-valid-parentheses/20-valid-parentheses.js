/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openBrackets = new Set(['(', '{', '[']);
  const bracketsMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    if (openBrackets.has(char)) {
      stack.push(char);
      continue;
    }

    const expectedOpenBracket = bracketsMap.get(char);
    const openBracket = stack.pop();

    if (expectedOpenBracket !== openBracket) return false;
  }

  return stack.length === 0;
};

exports.isValid = isValid;
