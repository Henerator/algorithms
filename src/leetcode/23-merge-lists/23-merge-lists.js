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
      (item) => item.val,
      (valueA, valueB) => {
        return valueB - valueA;
      }
    );
  }

  extractMin() {
    return this.extractRoot();
  }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;

  const minHeap = new MinBinaryHeap();
  lists.forEach((head) => {
    if (head) minHeap.add(head);
  });

  const dummy = new ListNode(0, null);
  let node = dummy;

  while (minHeap.size) {
    node.next = minHeap.extractMin();
    node = node.next;
    if (node.next) minHeap.add(node.next);
  }

  return dummy.next;
};

exports.mergeKLists = mergeKLists;
