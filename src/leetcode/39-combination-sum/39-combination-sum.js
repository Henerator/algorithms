/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  const combinations = [];

  function backtrack(index, total, stack) {
    if (total === target) {
      combinations.push(stack.slice());
      return;
    }

    if (index >= candidates.length || total > target) {
      return;
    }

    stack.push(candidates[index]);
    backtrack(index, total + candidates[index], stack);

    stack.pop();
    backtrack(index + 1, total, stack);
  }

  backtrack(0, 0, []);

  return combinations;
}

exports.combinationSum = combinationSum;
