class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  toArray(arr = []) {
    arr.push(this.value);
    if (this.next) {
      this.next.toArray(arr);
    }
    return arr;
  }
}

function generateLinkedList(arr) {
  const nodes = [];
  arr.forEach((value, index) => {
    const node = new Node(value);
    if (nodes[index - 1]) {
      nodes[index - 1].next = node;
    }

    nodes.push(node);
  });

  return nodes[0];
}

/**
 * @param {Node} head
 * @param {number} left
 * @param {number} right
 * @return {Node}
 */
var Reverse = function (head, left, right) {
  let prev = null;
  let current = head;
  let index = 1;

  while (index < left) {
    prev = current;
    current = current.next;
    index++;
  }

  const preHead = prev;
  const rangeHead = current;

  prev = current;
  current = current.next;
  index++;

  let tmp = null;
  while (index <= right) {
    tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
    index++;
  }

  if (preHead) {
    preHead.next = prev;
  }
  rangeHead.next = current;

  return left !== 1 ? head : prev;
};

var ReverseV2 = function (head, left, right) {
  function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  if (left === right) return head;

  let rangeHead = null;
  let rangeTail = null;
  let preRangeNode = null;
  let postRangeNode = null;

  let index = 1;
  let current = head;
  while (current && index <= right) {
    if (index < left) preRangeNode = current;
    if (index === left) rangeHead = current;

    if (index === right) {
      rangeTail = current;
      postRangeNode = current.next;
    }

    current = current.next;
    index++;
  }

  rangeTail.next = null;
  rangeTail = reverseList(rangeHead);

  if (preRangeNode) {
    preRangeNode.next = rangeTail;
  } else {
    head = rangeTail;
  }

  rangeHead.next = postRangeNode;
  return head;
};

exports.generateLinkedList = generateLinkedList;
exports.Reverse = Reverse;
exports.ReverseV2 = ReverseV2;
