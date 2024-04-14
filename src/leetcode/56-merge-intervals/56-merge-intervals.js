/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  intervals.push([Infinity, Infinity]);

  const ranges = [];
  let maxEnd = intervals[0][1];
  for (let left = 0, right = 1; right < intervals.length; right++) {
    if (intervals[right][0] > maxEnd) {
      ranges.push([intervals[left][0], maxEnd]);
      left = right;
      maxEnd = intervals[left][1];
      continue;
    }

    maxEnd = Math.max(maxEnd, intervals[right][1]);
  }

  return ranges;
};

exports.merge = merge;
