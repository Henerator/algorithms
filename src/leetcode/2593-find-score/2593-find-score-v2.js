class BaseBinaryHeap {
  constructor(extractValue, compareValues) {
    this.items = [];
    this.extractValue = extractValue;
    this.compareValues = compareValues;
  }

  get size() {
    return this.items.length;
  }

  getValue(index) {
    return this.extractValue(this.items[index]);
  }

  swap(indexA, indexB) {
    const temp = this.items[indexA];
    this.items[indexA] = this.items[indexB];
    this.items[indexB] = temp;
  }

  heapify(index) {
    let size = this.size;
    let leftChildIndex;
    let rightChildIndex;
    let largestIndex;

    while (true) {
      leftChildIndex = index * 2 + 1;
      rightChildIndex = index * 2 + 2;
      largestIndex = index;

      if (leftChildIndex < size && this.compareValues(this.items[leftChildIndex], this.items[largestIndex]) > 0) {
        largestIndex = leftChildIndex;
      }

      if (rightChildIndex < size && this.compareValues(this.items[rightChildIndex], this.items[largestIndex]) > 0) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex === index) {
        break;
      }

      this.swap(index, largestIndex);
      index = largestIndex;
    }
  }

  build(arr) {
    this.items = arr.map((value, index) => ({ value, index }));

    const middle = Math.floor(arr.length / 2) - 1;
    for (let index = middle; index >= 0; index--) {
      this.heapify(index);
    }
  }

  extractRoot() {
    const size = this.size;

    if (size === 0) {
      return null;
    }

    if (size === 1) {
      return this.items.pop();
    }

    const root = this.items[0];
    this.items[0] = this.items.pop();
    this.heapify(0);

    return root;
  }
}

class MinBinaryHeap extends BaseBinaryHeap {
  constructor(extractValue) {
    super(extractValue, (itemA, itemB) => {
      return itemA.value === itemB.value ? itemB.index - itemA.index : itemB.value - itemA.value;
    });
  }

  extractMin() {
    return this.extractRoot();
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findScoreV2(nums) {
  let score = 0;

  const markedIndices = new Set();
  const heap = new MinBinaryHeap((item) => item.value);
  heap.build(nums);

  let min = heap.extractMin();
  while (min) {
    if (!markedIndices.has(min.index)) {
      score += min.value;
      markedIndices.add(min.index);
      markedIndices.add(min.index - 1);
      markedIndices.add(min.index + 1);
    }

    min = heap.extractMin();
  }

  return score;
}

exports.findScoreV2 = findScoreV2;
