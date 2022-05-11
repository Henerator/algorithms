class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  toArray(arr = []) {
    arr.push(this.val);
    if (this.next) {
      this.next.toArray(arr);
    }
    return arr;
  }
}

function generateLinkedList(arr) {
  const nodes = [];
  arr.forEach((value, index) => {
    const node = new ListNode(value);
    if (nodes[index - 1]) {
      nodes[index - 1].next = node;
    }

    nodes.push(node);
  });

  return nodes[0];
}

exports.ListNode = ListNode;
exports.generateLinkedList = generateLinkedList;
