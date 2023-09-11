/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const candidates = new Array(n).fill().map((_value, index) => index + 1);
  const combinations = [];
  const lastIndex = n - k;

  function backtrack(index, stack) {
    if (index >= candidates.length) return;

    stack.push(candidates[index]);

    if (stack.length === k) {
      combinations.push(stack.slice());
      return;
    }

    for (let nextIndex = index + 1; nextIndex < n; nextIndex++) {
      backtrack(nextIndex, stack);
      stack.pop();
    }
  }

  for (let index = 0; index <= lastIndex; index++) {
    backtrack(index, []);
  }

  return combinations;
}

exports.combine = combine;
