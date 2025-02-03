class MinHeap {
  constructor() {
    this.items = [];
  }

  get size() {
    return this.items.length;
  }

  getValue(index) {
    return this.items[index].sum;
  }

  getParentIndex(index) {
    return (index - 1) >> 1;
  }

  swap(indexA, indexB) {
    const temp = this.items[indexA];
    this.items[indexA] = this.items[indexB];
    this.items[indexB] = temp;
  }

  push(item) {
    this.items.push(item);

    let index = this.size - 1;
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.getValue(index) < this.getValue(parentIndex)) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  extract() {
    if (this.size === 1) return this.items.pop();

    const root = this.items[0];
    this.items[0] = this.items.pop();
    this.heapify(0);

    return root;
  }

  heapify(index) {
    const size = this.size;

    let minIndex;
    let leftIndex;
    let rightIndex;

    while (true) {
      minIndex = index;
      leftIndex = index * 2 + 1;
      rightIndex = index * 2 + 2;

      if (leftIndex < size && this.getValue(leftIndex) < this.getValue(minIndex)) {
        minIndex = leftIndex;
      }

      if (rightIndex < size && this.getValue(rightIndex) < this.getValue(minIndex)) {
        minIndex = rightIndex;
      }

      if (minIndex === index) break;

      this.swap(index, minIndex);
      index = minIndex;
    }
  }
}

/**
 * @param {number[]} leftNums
 * @param {number[]} rightNums
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (leftNums, rightNums, k) {
  // node = [sum, leftIndex, rightIndex]
  const heap = new MinHeap();
  const visited = new Set();
  const result = [];

  heap.push({
    sum: leftNums[0] + rightNums[0],
    leftIndex: 0,
    rightIndex: 0,
  });

  function getKey(leftIndex, rightIndex) {
    return `${leftIndex}-${rightIndex}`;
  }

  function addHeapPair(leftIndex, rightIndex) {
    if (rightIndex >= rightNums.length || leftIndex >= leftNums.length) return;

    const key = getKey(leftIndex, rightIndex);
    if (visited.has(key)) return;

    heap.push({
      sum: leftNums[leftIndex] + rightNums[rightIndex],
      leftIndex,
      rightIndex,
    });
    visited.add(key);
  }

  while (heap.size && result.length < k) {
    const { leftIndex, rightIndex } = heap.extract();
    result.push([leftNums[leftIndex], rightNums[rightIndex]]);

    addHeapPair(leftIndex + 1, rightIndex);
    addHeapPair(leftIndex, rightIndex + 1);
  }

  return result;
};

exports.kSmallestPairs = kSmallestPairs;
