class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function isOnOneLine(points) {
  const p1 = points.pop();
  const p2 = points.pop();

  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  while (points.length) {
    const p3 = points.pop();
    if ((p3.y - p1.y) * dx !== (p3.x - p1.x) * dy) return false;
  }

  return true;
}

exports.Point = Point;
exports.isOnOneLine = isOnOneLine;
