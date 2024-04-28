class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;

    this.size++;
  }

  pop() {
    if (!this.size) return;

    const node = this.tail.prev;
    this.removeNode(node);

    return node.value;
  }

  unshift(value) {
    const node = new Node(value);
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;

    this.size++;
  }

  shift() {
    if (!this.size) return;

    const node = this.head.next;
    this.removeNode(node);

    return node.value;
  }

  removeNode(node) {
    if (!node.prev || !node.next) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;

    this.size--;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const deque = new Deque();
  const levels = [];

  const oddStrategy = {
    add: (node) => {
      if (node.left) deque.push(node.left);
      if (node.right) deque.push(node.right);
    },
    extract: () => deque.shift(),
  };

  const evenStrategy = {
    add: (node) => {
      if (node.right) deque.unshift(node.right);
      if (node.left) deque.unshift(node.left);
    },
    extract: () => deque.pop(),
  };

  deque.push(root);

  let levelIndex = 1;
  while (deque.size > 0) {
    const count = deque.size;
    const levelValues = [];
    const strategy = levelIndex % 2 === 0 ? evenStrategy : oddStrategy;

    for (let i = 0; i < count; i++) {
      const node = strategy.extract();
      levelValues.push(node.val);
      strategy.add(node);
    }

    levels.push(levelValues);
    levelIndex++;
  }

  console.log(levels);

  return levels;
};

exports.zigzagLevelOrder = zigzagLevelOrder;
