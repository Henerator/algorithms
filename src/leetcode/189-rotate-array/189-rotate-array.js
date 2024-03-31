/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  const count = nums.length;
  if (k % count === 0) return;

  let handled = 0;

  for (let index = 0; index < k; index++) {
    if (handled === count) break;

    let currentIndex = index;
    let value = nums[currentIndex];

    do {
      let next = (currentIndex + k) % count;
      const temp = nums[next];
      nums[next] = value;
      value = temp;
      currentIndex = next;
      handled++;
    } while (currentIndex !== index);
  }
}

exports.rotate = rotate;
