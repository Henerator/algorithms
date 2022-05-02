const { middleNode } = require("./876-middle-linked-list");

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
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

it("odd count", () => {
  const input = generateLinkedList([1, 2, 3, 4, 5]);
  const output = middleNode(input);

  expect(output).toEqual(3);
});

it("even count", () => {
  const input = generateLinkedList([1, 2, 3, 4, 5, 6]);
  const output = middleNode(input);

  expect(output).toEqual(4);
});

it("1 element", () => {
  const input = generateLinkedList([1]);
  const output = middleNode(input);

  expect(output).toEqual(1);
});
