class BaseHeap {
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

    while (index > 0 && this.compareValues(this.getValue(parentIndex), this.getValue(index)) < 0) {
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

      if (leftChildIndex < size && this.compareValues(this.getValue(leftChildIndex), this.getValue(largestIndex)) > 0) {
        largestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < size &&
        this.compareValues(this.getValue(rightChildIndex), this.getValue(largestIndex)) > 0
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

  getRoot() {
    return this.items[0] || 0;
  }

  extract() {
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

class MaxHeap extends BaseHeap {
  constructor(extractValue) {
    super(extractValue, (valueA, valueB) => {
      return valueA - valueB;
    });
  }

  getMax() {
    return this.getRoot();
  }

  extractMax() {
    return this.extract();
  }
}

class MinHeap extends BaseHeap {
  constructor(extractValue) {
    super(extractValue, (valueA, valueB) => {
      return valueB - valueA;
    });
  }

  getMin() {
    return this.getRoot();
  }

  extractMin() {
    return this.extract();
  }
}

class MedianFinder {
  constructor() {
    this.leftSide = new MaxHeap();
    this.rightSide = new MinHeap();
  }

  rebalanceRight() {
    const value = this.leftSide.extractMax();
    this.rightSide.add(value);
  }

  rebalanceLeft() {
    const value = this.rightSide.extractMin();
    this.leftSide.add(value);
  }

  addNum(num) {
    this.leftSide.add(num);

    if (this.rightSide.size && this.leftSide.getMax() > this.rightSide.getMin()) {
      this.rebalanceRight();
    }

    if (this.leftSide.size - this.rightSide.size > 1) {
      this.rebalanceRight();
    }

    if (this.rightSide.size - this.leftSide.size > 1) {
      this.rebalanceLeft();
    }
  }

  findMedian() {
    if (this.leftSide.size > this.rightSide.size) return this.leftSide.getMax();
    if (this.rightSide.size > this.leftSide.size) return this.rightSide.getMin();
    return (this.leftSide.getMax() + this.rightSide.getMin()) / 2;
  }
}
