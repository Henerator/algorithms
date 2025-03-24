/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let result = 1;

  function increaseMapValue(map, key) {
    if (!map.has(key)) map.set(key, 0);
    map.set(key, map.get(key) + 1);
  }

  for (let i = 0; i < points.length; i++) {
    const pointA = points[i];
    const map = new Map();

    for (let k = i + 1; k < points.length; k++) {
      const pointB = points[k];

      let slope = 0;

      if (pointA[0] === pointB[0]) slope = Infinity;
      else slope = (pointB[1] - pointA[1]) / (pointB[0] - pointA[0]);

      increaseMapValue(map, slope);
      result = Math.max(result, map.get(slope) + 1);
    }
  }

  return result;
};

exports.maxPoints = maxPoints;
