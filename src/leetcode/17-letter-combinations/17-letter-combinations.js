/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  if (!digits) return [];

  const charsMap = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ]);

  digits = digits.split('');
  const combinations = [];

  function findCombination(index, combination = []) {
    if (index === digits.length) {
      combinations.push(combination.join(''));
      return;
    }

    const digitChars = charsMap.get(digits[index]);
    for (const char of digitChars) {
      combination.push(char);
      findCombination(index + 1, combination);
      combination.pop();
    }
  }

  findCombination(0);

  return combinations;
}

exports.letterCombinations = letterCombinations;
