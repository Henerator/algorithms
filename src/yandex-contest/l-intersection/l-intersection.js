class Segment {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

function getIntersection(firstSequence, secondSequence) {
  const intersections = [];

  let indexA = 0;
  let indexB = 0;
  let segA = firstSequence[indexA];
  let segB = secondSequence[indexB];

  function pointInsideSegment(x, seg) {
    return x >= seg.left && x <= seg.right;
  }

  while (segA && segB) {
    if (pointInsideSegment(segA.left, segB) || pointInsideSegment(segB.left, segA)) {
      intersections.push(new Segment(Math.max(segA.left, segB.left), Math.min(segA.right, segB.right)));
    }

    if (segA.right <= segB.right) {
      segA = firstSequence[++indexA];
    } else {
      segB = secondSequence[++indexB];
    }
  }

  return intersections;
}

exports.getIntersection = getIntersection;
exports.Segment = Segment;
