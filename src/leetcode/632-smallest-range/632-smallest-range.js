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
  constructor(extractValue) {
    super(extractValue, (itemA, itemB) => itemB - itemA);
  }

  getMin() {
    return this.getRoot();
  }

  extractMin() {
    return this.extractRoot();
  }
}

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
function smallestRange(nums) {
  const heap = new MinBinaryHeap((item) => item.value);
  const count = nums.length;

  const range = { min: Infinity, max: -Infinity };

  for (let index = 0; index < count; index++) {
    const value = nums[index][0];
    range.max = Math.max(range.max, value);
    heap.add({
      value: value,
      itemIndex: 0,
      arrayIndex: index,
    });
  }

  range.min = heap.getMin().value;
  const minRange = { min: range.min, max: range.max };

  while (true) {
    let minItem = heap.extractMin();
    const kArray = nums[minItem.arrayIndex];
    const kLength = kArray.length;

    // last item in k array
    if (minItem.itemIndex === kLength - 1) {
      break;
    }

    // find next item from k array not equal to minItem
    let nextIndex = minItem.itemIndex + 1;
    while (nextIndex < kLength && minItem.value === kArray[nextIndex]) {
      nextIndex++;
    }

    if (nextIndex >= kLength) break;

    const nextValue = kArray[nextIndex];
    range.min = Math.min(nextValue, heap.getMin().value);
    range.max = Math.max(nextValue, range.max);

    // udpate range
    if (range.max - range.min < minRange.max - minRange.min) {
      minRange.min = range.min;
      minRange.max = range.max;
    }

    heap.add({
      value: kArray[nextIndex],
      itemIndex: nextIndex,
      arrayIndex: minItem.arrayIndex,
    });
  }

  return [minRange.min, minRange.max];
}

exports.smallestRange = smallestRange;
