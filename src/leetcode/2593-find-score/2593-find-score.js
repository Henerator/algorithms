/**
 * @param {number[]} nums
 * @return {number}
 */
function findScore(nums) {
  let score = 0;
  const numsMap = {};
  const markedIndices = new Set();

  for (let index = nums.length - 1; index >= 0; index--) {
    const value = nums[index];
    if (!numsMap[value]) numsMap[value] = [];
    numsMap[value].push(index);
  }

  Object.keys(numsMap).forEach((key) => {
    const indices = numsMap[key];

    while (indices.length > 0) {
      const index = indices.pop();
      if (!markedIndices.has(index)) {
        score += nums[index];
        markedIndices.add(index);
        markedIndices.add(index - 1);
        markedIndices.add(index + 1);
      }
    }
  });

  return score;
}

exports.findScore = findScore;
