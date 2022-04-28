class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(item) {
    this.values.push(item);

    let index = this.values.length - 1;
    const inserted = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (inserted.value <= parent.value) break;
      this.values[parentIndex] = inserted;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this.values;
  }

  // create our extractMax method
  extractMax() {
    // store the root as a variable so we can return it at the end
    const max = this.values[0];
    // pop off the last value in our array
    const end = this.values.pop();

    // if the values array is now empty, we do not need to do run the following code and can return the max variable
    if (this.values.length > 0) {
      // swap the root as the popped off value
      this.values[0] = end;

      // start the bubble down effect
      // store the parent index that we will check
      let index = 0;
      // store the length of the array
      const length = this.values.length;
      // store the value that we are checking
      const check = this.values[0];

      // loop while true
      while (true) {
        // store the left child index
        let leftIndex = 2 * index + 1;
        // store the right child index
        let rightIndex = 2 * index + 2;
        // initialize variables for left and right child values
        let leftChild, rightChild;
        // keep track if there are any swaps, so we know when to break out of the loop
        let swap = null;

        // check if there is a left child and set the value of left child
        if (leftIndex < length) {
          leftChild = this.values[leftIndex];
          // check if we should swap the left child
          if (leftChild.value > check.value) {
            swap = leftIndex;
          }
        }
        // check if there is a right child and set the value of right child
        if (rightIndex < length) {
          rightChild = this.values[rightIndex];
          // check if we should swap the right child
          if (
            // if left child was not swapped and right child is greater than check value
            (swap === null && rightChild.value > check.value) ||
            // if left child was swapped, and right child is greater than left child
            (swap !== null && rightChild.value > leftChild.value)
          ) {
            swap = rightIndex;
          }
        }

        // if no swaps were done, we will break out of the while loop
        if (swap === null) break;
        // else, swap the values at our index and swap
        this.values[index] = this.values[swap];
        this.values[swap] = check;
        // update index to the swap index to check the next level
        index = swap;
      }
    }

    // return the removed root
    return max;
  }

  hasValues() {
    return this.values.length > 0;
  }
}

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

      const heap = new MaxBinaryHeap();
      item.touched = true;
      heap.insert(item);

      while (heap.hasValues()) {
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
          heap.insert(maxItem);
          incompleteNeighbors.forEach((neighbor) => {
            if (!neighbor.touched) {
              neighbor.touched = true;
              heap.insert(neighbor);
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
