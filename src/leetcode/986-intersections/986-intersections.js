function intervalIntersection(firstList, secondList) {
  const intersections = [];

  let indexA = 0;
  let indexB = 0;
  let segA = firstList[indexA];
  let segB = secondList[indexB];

  function pointInsideSegment(x, seg) {
    return x >= seg[0] && x <= seg[1];
  }

  while (segA && segB) {
    if (pointInsideSegment(segA[0], segB) || pointInsideSegment(segB[0], segA)) {
      intersections.push([Math.max(segA[0], segB[0]), Math.min(segA[1], segB[1])]);
    }

    if (segA[1] <= segB[1]) {
      segA = firstList[++indexA];
    } else {
      segB = secondList[++indexB];
    }
  }

  return intersections;
}

exports.intervalIntersection = intervalIntersection;
