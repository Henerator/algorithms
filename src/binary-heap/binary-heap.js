class BaseBinaryHeap {
  constructor(extractValue, compareValues) {
    this.items = [];
    this.extractValue = extractValue || this.defaultExtractor;
    this.compareValues = compareValues;
  }

  get size() {
    return this.items.length;
  }

  defaultExtractor(item) {
    return item;
  }

  getValue(index) {
    return this.extractValue(this.items[index]);
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(indexA, indexB) {
    const temp = this.items[indexA];
    this.items[indexA] = this.items[indexB];
    this.items[indexB] = temp;
  }

  add(item) {
    this.items.push(item);

    let index = this.size - 1;
    let parentIndex = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compareValues(this.getValue(parentIndex), this.getValue(index)) < 0
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
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

      if (
        leftChildIndex < size &&
        this.compareValues(
          this.getValue(leftChildIndex),
          this.getValue(largestIndex)
        ) > 0
      ) {
        largestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < size &&
        this.compareValues(
          this.getValue(rightChildIndex),
          this.getValue(largestIndex)
        ) > 0
      ) {
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
    this.items = arr.slice();

    const middle = Math.floor(arr.length / 2) - 1;
    for (let index = middle; index >= 0; index--) {
      this.heapify(index);
    }
  }

  getRoot() {
    return this.items[0] || null;
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

class MaxBinaryHeap extends BaseBinaryHeap {
  constructor(extractValue) {
    super(extractValue, (itemA, itemB) => {
      return itemA - itemB;
    });
  }

  getMax() {
    return this.getRoot();
  }

  extractMax() {
    return this.extractRoot();
  }
}

class MinBinaryHeap extends BaseBinaryHeap {
  constructor(extractValue) {
    super(extractValue, (itemA, itemB) => {
      return itemB - itemA;
    });
  }

  getMin() {
    return this.getRoot();
  }

  extractMin() {
    return this.extractRoot();
  }
}

exports.MaxBinaryHeap = MaxBinaryHeap;
exports.MinBinaryHeap = MinBinaryHeap;
