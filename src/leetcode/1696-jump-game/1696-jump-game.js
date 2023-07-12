const { Deque } = require('./../../_helpers/deque');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxResult(nums, k) {
  let index = nums.length - 1;

  const deque = new Deque();
  deque.push(index);

  const dp = [];
  dp[index] = nums[index];

  while (index > 0) {
    index--;

    while (deque.size && deque.tailValue - index > k) deque.shift();

    const max = nums[index] + dp[deque.tailValue];
    dp[index] = max;

    while (deque.size && dp[deque.headValue] <= max) deque.pop();
    deque.push(index);
  }

  return dp[0];
}

exports.maxResult = maxResult;
