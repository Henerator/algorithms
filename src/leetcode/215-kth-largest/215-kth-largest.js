class MaxHeap {
  constructor() {
    this.values = [];
  }

  get size() {
    return this.values.length;
  }

  build(arr) {
    this.values = arr.slice();
    const mid = (arr.length >> 1) - 1;
    for (let i = mid; i >= 0; i--) {
      this.heapify(i);
    }
  }

  swap(indexA, indexB) {
    const temp = this.values[indexA];
    this.values[indexA] = this.values[indexB];
    this.values[indexB] = temp;
  }

  heapify(index) {
    const size = this.size;
    let leftChildIndex;
    let rightChildIndex;
    let maxIndex;

    while (true) {
      leftChildIndex = index * 2 + 1;
      rightChildIndex = index * 2 + 2;
      maxIndex = index;

      if (leftChildIndex < size && this.values[leftChildIndex] > this.values[maxIndex]) {
        maxIndex = leftChildIndex;
      }

      if (rightChildIndex < size && this.values[rightChildIndex] > this.values[maxIndex]) {
        maxIndex = rightChildIndex;
      }

      if (maxIndex === index) break;

      this.swap(index, maxIndex);
      index = maxIndex;
    }
  }

  extract() {
    const max = this.values[0];

    this.values[0] = this.values.pop();
    this.heapify(0);

    return max;
  }

  getMax() {
    return this.values[0];
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxHeap();
  heap.build(nums);

  while (k > 1) {
    k--;
    heap.extract();
  }
  return heap.getMax();
};

exports.findKthLargest = findKthLargest;
