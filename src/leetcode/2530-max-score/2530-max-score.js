class MaxHeap {
  constructor() {
    this.items = [];
  }

  get size() {
    return this.items.length;
  }

  compareValues(itemA, itemB) {
    return itemA - itemB;
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
    this.items = arr.slice();

    const middle = Math.floor(arr.length / 2) - 1;
    for (let index = middle; index >= 0; index--) {
      this.heapify(index);
    }
  }

  getMax() {
    return this.items[0] || null;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxKelements(nums, k) {
  let sum = 0;
  const heap = new MaxHeap();
  heap.build(nums);

  while (k > 0) {
    const max = heap.getMax();
    sum += max;

    heap.items[0] = Math.ceil(max / 3);
    heap.heapify(0);
    k--;
  }

  return sum;
}

exports.maxKelements = maxKelements;
