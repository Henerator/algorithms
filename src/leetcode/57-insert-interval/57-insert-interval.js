/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  const findInsertIndex = (value, intervals) => {
    let left = 0;
    let right = intervals.length - 1;

    while (left < right) {
      const mid = left + Math.ceil((right - left) / 2);

      if (intervals[mid][0] > value) right = mid - 1;
      else left = mid;
    }

    return left;
  };

  let [start, end] = newInterval;

  let startIndex = findInsertIndex(start, intervals);
  let endIndex = findInsertIndex(end, intervals);

  if (intervals[startIndex][1] >= start) start = Math.min(start, intervals[startIndex][0]);
  else startIndex++;

  if (end >= intervals[endIndex][0]) {
    end = Math.max(end, intervals[endIndex][1]);
    endIndex++;
  }

  return []
    .concat(intervals.slice(0, startIndex))
    .concat([[start, end]])
    .concat(intervals.slice(endIndex));
};

exports.insert = insert;
