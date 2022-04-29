class MaxBinaryHeap {
  constructor(extractValue) {
    this.items = [];
    this.extractValue = extractValue || this.defaultExtractor;
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

    while (index > 0 && this.getValue(parentIndex) < this.getValue(index)) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extractMax() {
    const size = this.size;

    if (size === 0) {
      return null;
    }

    if (size === 1) {
      return this.items.pop();
    }

    const max = this.items[0];
    this.items[0] = this.items.pop();
    this.heapify(0);

    return max;
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
        this.getValue(leftChildIndex) > this.getValue(largestIndex)
      ) {
        largestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < size &&
        this.getValue(rightChildIndex) > this.getValue(largestIndex)
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
}

exports.MaxBinaryHeap = MaxBinaryHeap;
