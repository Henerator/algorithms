/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set();
  nums.forEach((value) => set.add(value));

  let maxSeqLength = 0;
  let currentSeqLength = 0;

  nums.forEach((value) => {
    const isFirstInSeq = !set.has(value - 1);
    if (!isFirstInSeq) return;

    let offset = 0;
    currentSeqLength = 0;
    while (set.has(value + offset)) {
      currentSeqLength++;
      offset++;
    }

    maxSeqLength = Math.max(maxSeqLength, currentSeqLength);
  });

  return maxSeqLength;
};

exports.longestConsecutive = longestConsecutive;
