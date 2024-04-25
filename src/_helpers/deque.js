class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * Double linked list
 */
class Deque {
  constructor() {
    this.tail = new Node(null);
    this.head = new Node(null);

    this.tail.next = this.head;
    this.head.prev = this.tail;

    this.size = 0;
  }

  get headValue() {
    return this.head.prev.value;
  }

  get tailValue() {
    return this.tail.next.value;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    node.prev = this.head.prev;

    this.head.prev.next = node;
    this.head.prev = node;

    this.size++;
  }

  pop() {
    if (!this.size) return;

    const node = this.head.prev;
    this.removeNode(node);
    this.size--;

    return node.value;
  }

  unshift(value) {
    const node = new Node(value);
    node.next = this.tail.next;
    node.prev = this.tail;

    this.tail.next.prev = node;
    this.tail.next = node;

    this.size++;
  }

  shift() {
    if (!this.size) return;

    const node = this.tail.next;
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

exports.Deque = Deque;
