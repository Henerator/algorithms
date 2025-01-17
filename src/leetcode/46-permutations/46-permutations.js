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

  unshift(value) {
    const node = new Node(value);
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;

    this.size++;
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

  clone() {
    const deque = new Deque();
    let node = this.head.next;

    while (node !== this.tail) {
      deque.push(node.value);
      node = node.next;
    }

    return deque;
  }

  toArray() {
    const array = [];
    let node = this.head.next;
    while (node !== this.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const numsDeque = new Deque();
  nums.forEach((num) => numsDeque.push(num));

  function getPermutations(deque) {
    if (deque.size === 1) return [deque.clone()];

    const result = [];

    for (let i = 0; i < deque.size; i++) {
      const value = deque.pop();

      const perms = getPermutations(deque);
      perms.forEach((perm) => perm.push(value));
      result.push(...perms);

      deque.unshift(value);
    }

    return result;
  }

  return getPermutations(numsDeque).map((deque) => deque.toArray());
};

exports.permute = permute;
