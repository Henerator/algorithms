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

  shift() {
    if (!this.size) return;

    const node = this.head.next;
    this.removeNode(node);
    this.size--;

    return node.value;
  }

  removeNode(node) {
    if (!node.prev || !node.next) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
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
var levelOrder = function (root) {
  if (!root) return [];

  const deque = new Deque();
  const levels = [];

  deque.push(root);

  while (deque.size > 0) {
    const count = deque.size;
    const level = [];

    for (let i = 0; i < count; i++) {
      const node = deque.shift();
      level.push(node.val);

      if (node.left) deque.push(node.left);
      if (node.right) deque.push(node.right);
    }

    levels.push(level);
  }

  return levels;
};

exports.levelOrder = levelOrder;
