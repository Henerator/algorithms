class Node {
  constructor(value) {
    this.val = value;
    this.neighbours = [];
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (root) {
  const map = new Map();
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!map.has(node.val)) {
      map.set(node.val, new Node(node.val));
    }

    const clone = map.get(node.val);
    node.neighbours.forEach((neighbour) => {
      if (!map.has(neighbour.val)) {
        map.set(neighbour.val, new Node(neighbour.val));
        stack.push(neighbour);
      }

      clone.neighbours.push(map.get(neighbour.val));
    });
  }

  return map.get(root.val);
};

exports.Node = Node;
exports.cloneGraph = cloneGraph;
