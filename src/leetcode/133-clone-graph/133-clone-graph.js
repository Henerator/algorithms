class Node {
  constructor(value) {
    this.val = value;
    this.neighbors = [];
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (root) {
  if (!root) return;

  const map = new Map();
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!map.has(node.val)) {
      map.set(node.val, new Node(node.val));
    }

    const clone = map.get(node.val);
    node.neighbors.forEach((neighbour) => {
      if (!map.has(neighbour.val)) {
        map.set(neighbour.val, new Node(neighbour.val));
        stack.push(neighbour);
      }

      clone.neighbors.push(map.get(neighbour.val));
    });
  }

  return map.get(root.val);
};
