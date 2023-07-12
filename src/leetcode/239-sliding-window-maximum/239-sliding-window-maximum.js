const { Deque } = require('./../../_helpers/deque');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const maximums = [];
  const deque = new Deque();

  for (let index = 0; index < nums.length; index++) {
    while (deque.size && index - deque.tailValue >= k) deque.shift();

    const max = Math.max(nums[index], nums[deque.tailValue] ?? -Infinity);

    while (deque.size && nums[deque.headValue] < nums[index]) deque.pop();
    deque.push(index);

    if (index + 1 >= k) {
      maximums.push(max);
    }
  }

  return maximums;
}

exports.maxSlidingWindow = maxSlidingWindow;
