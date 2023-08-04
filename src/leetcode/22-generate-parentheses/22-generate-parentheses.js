/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const combinations = [];

  function findCombination(open, close, combination) {
    if (open === n && close === n) {
      combinations.push(combination.join(''));
      return;
    }

    if (open < n) {
      combination.push('(');
      findCombination(open + 1, close, combination);
      combination.pop();
    }

    if (close < open) {
      combination.push(')');
      findCombination(open, close + 1, combination);
      combination.pop();
    }
  }

  findCombination(0, 0, []);
  return combinations;
}

exports.generateParenthesis = generateParenthesis;
