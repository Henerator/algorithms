class DequeNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.size = 0;

    this.head = new DequeNode(null);
    this.tail = new DequeNode(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  getHeadNodeValue() {
    return this.head.next.value;
  }

  push(value) {
    const node = new DequeNode(value);

    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;

    this.size++;
  }

  shift() {
    if (this.size === 0) return;
    const node = this.remove(this.head.next);
    return node.value;
  }

  remove(node) {
    if (!node.prev || !node.next) return;

    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;

    this.size--;

    return node;
  }
}

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  const list = new Deque();
  list.push(root);
  list.push(null);

  while (list.size > 0) {
    const count = list.size - 1;

    for (let i = 0; i < count; i++) {
      const node = list.shift();
      node.next = list.getHeadNodeValue();

      if (node.left) list.push(node.left);
      if (node.right) list.push(node.right);
    }

    list.shift();
    if (list.size) list.push(null);
  }

  return root;
};
