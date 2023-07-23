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

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
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

  add(item) {
    this.items.push(item);

    let index = this.size - 1;
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.compareValues(this.items[parentIndex], this.items[index]) < 0) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
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

class MinBinaryHeap extends BaseBinaryHeap {
  constructor() {
    super(
      (item) => item.power,
      (itemA, itemB) => {
        return itemA.power === itemB.power ? itemB.value - itemA.value : itemB.power - itemA.power;
      }
    );
  }

  extractMin() {
    return this.extractRoot();
  }
}

/**
 * @param {number} start
 * @param {number} end
 * @param {number} k
 * @return {number}
 */
function getKth(start, end, k) {
  const cachePower = new Map();

  function getNextValue(value) {
    return value % 2 === 0 ? value >> 1 : 3 * value + 1;
  }

  function getPower(value) {
    if (cachePower.has(value)) return cachePower.get(value);

    let power = 0;
    let nextValue = value;

    while (nextValue !== 1) {
      if (cachePower.has(nextValue)) {
        return power + cachePower.get(nextValue);
      }

      power++;
      nextValue = getNextValue(nextValue);
    }

    cachePower.set(value, power);
    return power;
  }

  const heap = new MinBinaryHeap();
  for (let index = start; index <= end; index++) {
    heap.add({ value: index, power: getPower(index) });
  }

  while (k > 1) {
    k--;
    heap.extractMin();
  }

  return heap.getRoot().value;
}

exports.getKth = getKth;
