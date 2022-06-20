class Vertex {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}

function getTreeBorder(tree, rootIndex) {
  const boundariesSet = new Set();
  const root = tree[rootIndex];

  function findBoundaries(node, index, height, isLeftDirection) {
    const heightSet = new Set();
    const stack = [{ node, index, height }];

    while (stack.length) {
      const { node, index, height } = stack.pop();

      if (!heightSet.has(height)) {
        boundariesSet.add(index);
        heightSet.add(height);
      }

      if (node.left === -1 && node.right === -1) {
        boundariesSet.add(index);
      }

      if (isLeftDirection) {
        if (node.right >= 0) stack.push({ node: tree[node.right], index: node.right, height: height + 1 });
        if (node.left >= 0) stack.push({ node: tree[node.left], index: node.left, height: height + 1 });
      } else {
        if (node.left >= 0) stack.push({ node: tree[node.left], index: node.left, height: height + 1 });
        if (node.right >= 0) stack.push({ node: tree[node.right], index: node.right, height: height + 1 });
      }
    }
  }

  findBoundaries(root, rootIndex, 0, true);
  findBoundaries(root, rootIndex, 0, false);

  return Array.from(boundariesSet);
}

function getTreeBorderV2(tree, rootIndex) {
  const boundariesSet = new Set();
  const root = tree[rootIndex];

  function findLeftBoundaries(heightSet, node, index, height) {
    if (!heightSet.has(height)) {
      boundariesSet.add(index);
      heightSet.add(height);
    }

    if (node.left === -1 && node.right === -1) {
      boundariesSet.add(index);
    }

    if (node.left >= 0) findLeftBoundaries(heightSet, tree[node.left], node.left, height + 1);
    if (node.right >= 0) findLeftBoundaries(heightSet, tree[node.right], node.right, height + 1);
  }

  function findRightBoundaries(heightSet, node, index, height) {
    if (!heightSet.has(height)) {
      boundariesSet.add(index);
      heightSet.add(height);
    }

    if (node.right >= 0) findRightBoundaries(heightSet, tree[node.right], node.right, height + 1);
    if (node.left >= 0) findRightBoundaries(heightSet, tree[node.left], node.left, height + 1);
  }

  findLeftBoundaries(new Set(), root, rootIndex, 0);
  findRightBoundaries(new Set(), root, rootIndex, 0);

  return Array.from(boundariesSet);
}

function getTreeBorderV1(tree, rootIndex) {
  const boundaries = [];
  const root = tree[rootIndex];

  function isBoundaryNode(node, isLeft, isRight) {
    return isLeft || isRight || (node.left === -1 && node.right === -1);
  }

  function findBoundaries(node, index, isLeft, isRight) {
    if (isBoundaryNode(node, isLeft, isRight)) boundaries.push(index);

    if (node.left >= 0) findBoundaries(tree[node.left], node.left, isLeft, isRight && node.right === -1);
    if (node.right >= 0) findBoundaries(tree[node.right], node.right, isLeft && node.left === -1, isRight);
  }

  findBoundaries(root, rootIndex, true, true);
  return boundaries;
}

exports.Vertex = Vertex;
exports.getTreeBorder = getTreeBorder;
