const { MaxBinaryHeap } = require("./../../binary-heap/binary-heap");

function getLongestIncreasingPath(matrix) {
  const offsetMatrx = [
    { dx: 0, dy: -1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
  ];

  const maxY = matrix.length - 1;
  const maxX = matrix[0].length - 1;

  let maxPath = 0;

  const dataMatrix = matrix.map((row) =>
    row.map((value) => ({
      value,
      touched: false,
      maxPath: 0,
    }))
  );

  function isOutOfMatrix(x, y) {
    return x < 0 || x > maxX || y < 0 || y > maxY;
  }

  function touch(item) {
    item.touched = true;
  }

  function fillItem(x, y) {
    const item = dataMatrix[y][x];
    if (item.touched) return;

    touch(item);

    const paths = [];
    offsetMatrx.forEach((offset) => {
      const nx = x + offset.dx;
      const ny = y + offset.dy;

      if (isOutOfMatrix(nx, ny)) return;

      const offsetItem = dataMatrix[ny][nx];

      if (item.value >= offsetItem.value) {
        paths.push(1);
        return;
      }

      if (!offsetItem.touched) {
        fillItem(nx, ny);
      }

      paths.push(offsetItem.maxPath + 1);
    });

    item.maxPath = paths.length === 0 ? 1 : Math.max(...paths);
    maxPath = Math.max(maxPath, item.maxPath);
  }

  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      fillItem(x, y);
    }
  }

  return maxPath;
}

function getLongestIncreasingPathV2(matrix) {
  const offsetMatrx = [
    { dx: 0, dy: -1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
  ];

  const maxY = matrix.length - 1;
  const maxX = matrix[0].length - 1;

  let maxPath = 0;

  const dataMatrix = matrix.map((row, y) =>
    row.map((value, x) => ({
      x,
      y,
      value,
      touched: false,
      completed: false,
      maxPath: 0,
    }))
  );

  function isOutOfMatrix(x, y) {
    return x < 0 || x > maxX || y < 0 || y > maxY;
  }

  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      const item = dataMatrix[y][x];

      if (item.completed) continue;

      const heap = new MaxBinaryHeap(item => item.value);
      item.touched = true;
      heap.add(item);

      while (heap.size > 0) {
        const maxItem = heap.extractMax();

        const neighbors = offsetMatrx
          .filter((offset) => {
            const nx = maxItem.x + offset.dx;
            const ny = maxItem.y + offset.dy;

            return !isOutOfMatrix(nx, ny);
          })
          .map((offset) => {
            return dataMatrix[maxItem.y + offset.dy][maxItem.x + offset.dx];
          });

        const incompleteNeighbors = neighbors.filter((neighbor) => {
          return maxItem.value < neighbor.value && !neighbor.completed;
        });

        if (incompleteNeighbors.length) {
          heap.add(maxItem);
          incompleteNeighbors.forEach((neighbor) => {
            if (!neighbor.touched) {
              neighbor.touched = true;
              heap.add(neighbor);
            }
          });
          continue;
        }

        const paths = [];
        neighbors.forEach((neighbor) => {
          if (maxItem.value >= neighbor.value) {
            paths.push(1);
            return;
          }

          paths.push(neighbor.maxPath + 1);
        });

        maxItem.maxPath = paths.length === 0 ? 1 : Math.max(...paths);
        maxItem.completed = true;
        maxPath = Math.max(maxPath, maxItem.maxPath);
      }
    }
  }

  return maxPath;
}

exports.getLongestIncreasingPath = getLongestIncreasingPath;
exports.getLongestIncreasingPathV2 = getLongestIncreasingPathV2;
