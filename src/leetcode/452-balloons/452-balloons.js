/**
 * @param {number[][]} intervals
 * @return {number}
 */
var findMinArrowShots = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let arrows = 1;
  let minEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] > minEnd) {
      arrows++;
      minEnd = interval[1];
    } else {
      minEnd = Math.min(minEnd, interval[1]);
    }
  }

  return arrows;
};

exports.findMinArrowShots = findMinArrowShots;
