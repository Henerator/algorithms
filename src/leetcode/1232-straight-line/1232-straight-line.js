/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const p1 = coordinates.pop();
  const p2 = coordinates.pop();

  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];

  while (coordinates.length) {
    const p3 = coordinates.pop();
    if ((p3[1] - p1[1]) * dx !== (p3[0] - p1[0]) * dy) return false;
  }

  return true;
};

exports.checkStraightLine = checkStraightLine;
