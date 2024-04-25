class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
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
    return node;
  }

  shift() {
    if (!this.size) return;

    const node = this.head.next;
    this.remove(node);
    return node;
  }

  remove(node) {
    if (!node.prev || !node.next) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.size--;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.list = new DoubleLinkedList();
    this.map = new Map(); // key -> { value, node }
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) return -1;

    const item = this.map.get(key);
    this.list.remove(item.node);
    item.node = this.list.push(key);

    return item.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (!this.map.has(key)) {
      if (this.map.size === this.capacity) {
        const node = this.list.shift();
        this.map.delete(node.value);
      }

      const node = this.list.push(key);
      this.map.set(key, { value, node });
      return;
    }

    const item = this.map.get(key);
    item.value = value;
    this.list.remove(item.node);
    item.node = this.list.push(key);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

exports.LRUCache = LRUCache;
