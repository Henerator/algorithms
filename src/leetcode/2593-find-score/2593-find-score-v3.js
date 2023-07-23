class SegmentTree {
  constructor() {
    this.tree = [];
    this.size = 0;
    this.itemsCount = 0;
  }

  build(arr) {
    const height = Math.ceil(Math.log2(arr.length));
    this.itemsCount = Math.pow(2, height);
    this.size = Math.pow(2, height + 1);
    this.tree = new Array(this.size);

    // insert leaf nodes in the tree
    for (let i = 0; i < this.itemsCount; i++) {
      this.tree[this.itemsCount + i] = {
        value: arr[i] ?? Infinity,
        index: i,
      };
    }

    // build the tree by calculating parents
    for (let i = this.itemsCount - 1; i > 0; i--) {
      this.tree[i] = this.comparer(this.getChildLeft(i), this.getChildRight(i));
    }
  }

  update(index, value) {
    if (index < 0 || index >= this.itemsCount) return;

    const treeItemIndex = this.itemsCount + index;
    let item = this.tree[treeItemIndex];
    item.value = value;

    let parentIndex = treeItemIndex >> 1;
    while (parentIndex > 0) {
      this.tree[parentIndex] = this.comparer(this.getChildLeft(parentIndex), this.getChildRight(parentIndex));
      parentIndex = parentIndex >> 1;
    }
  }

  getChildLeft(index) {
    return this.tree[index << 1];
  }

  getChildRight(index) {
    return this.tree[(index << 1) | 1];
  }

  comparer(itemA, itemB) {
    if (itemA.value === Infinity && itemB.value === Infinity) {
      return this.clone(itemA);
    }

    if (itemA.value === itemB.value) {
      return itemA.index < itemB.index ? this.clone(itemA) : this.clone(itemB);
    }

    return itemA.value < itemB.value ? this.clone(itemA) : this.clone(itemB);
  }

  clone(item) {
    return {
      index: item.index,
      value: item.value,
    };
  }

  getMin() {
    return this.tree[1];
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findScore(nums) {
  if (nums.length === 1) return nums[0];

  let score = 0;

  const tree = new SegmentTree();
  tree.build(nums);

  let min = tree.getMin();
  while (min.value !== Infinity) {
    score += min.value;
    tree.update(min.index, Infinity);
    tree.update(min.index - 1, Infinity);
    tree.update(min.index + 1, Infinity);
    min = tree.getMin();
  }

  return score;
}

exports.findScore = findScore;
