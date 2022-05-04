class Vertex {
  constructor(weight, parent) {
    this.weight = weight;
    this.parent = parent;
  }
}

function buildTree(data) {
  return data.map(([parent, value]) => new Vertex(value, parent));
}

// Out of stack
function getNumberOfUpgoingPaths(tree, x) {
  let count = 0;
  const path = [];

  function getXSumPathsCount(node, path, targetSum) {
    if (!node) return;

    path.push(node.weight);

    if (node.children) {
      node.children.forEach((childIndex) => {
        getXSumPathsCount(tree[childIndex], path, targetSum);
      });
    }

    let sum = 0;
    for (let j = path.length - 1; j >= 0; j--) {
      sum += path[j];

      if (sum === targetSum) {
        count++;
      }
    }

    path.pop();
  }

  let rootIndex = -1;
  tree.forEach((node, index) => {
    const parentIndex = node.parent;

    if (parentIndex === -1) {
      rootIndex = index;
      return;
    }

    if (!tree[parentIndex].children) {
      tree[parentIndex].children = [];
    }

    tree[parentIndex].children.push(index);
  });

  getXSumPathsCount(tree[rootIndex], path, x);
  return count;
}

// Time Limit Exceeded
function getNumberOfUpgoingPathsV2(tree, x) {
  let count = 0;

  for (let index = 0; index < tree.length; index++) {
    let sum = 0;
    let node = tree[index];

    while (node) {
      sum += node.weight;

      if (sum === x) {
        count++;
      }

      node = tree[node.parent];
    }
  }

  return count;
}

// Out of stack
function getNumberOfUpgoingPathsV3(tree, x) {
  let count = 0;
  let rootIndex = -1;

  function fillChildren(tree) {
    tree.forEach((node, index) => {
      const parentIndex = node.parent;

      if (parentIndex === -1) {
        rootIndex = index;
        return;
      }

      if (!tree[parentIndex].children) {
        tree[parentIndex].children = [];
      }

      tree[parentIndex].children.push(index);
    });
  }

  function recursiveSearch(node, currentSum, targetSum, preSumMap) {
    if (!node) return;

    let sum = currentSum + node.weight;

    if (preSumMap.has(sum - targetSum)) {
      count += preSumMap.get(sum - targetSum);
    }

    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, 0);
    }

    preSumMap.set(sum, preSumMap.get(sum) + 1);

    if (node.children) {
      for (let index = 0; index < node.children.length; index++) {
        const child = tree[node.children[index]];
        recursiveSearch(child, sum, targetSum, preSumMap);
      }
    }

    preSumMap.set(sum, preSumMap.get(sum) - 1);
  }

  fillChildren(tree);

  const preSumMap = new Map();
  preSumMap.set(0, 1);

  recursiveSearch(tree[rootIndex], 0, x, preSumMap);

  return count;
}

// OK
function getNumberOfUpgoingPathsV4(tree, x) {
  let rootIndex = -1;

  function fillChildren(tree) {
    tree.forEach((node, index) => {
      const parentIndex = node.parent;

      if (parentIndex === -1) {
        rootIndex = index;
        return;
      }

      if (!tree[parentIndex].children) {
        tree[parentIndex].children = [];
      }

      tree[parentIndex].children.push(index);
    });
  }

  function cycleSearch(root, targetSum) {
    const stack = [root];

    const preSumMap = new Map();
    preSumMap.set(0, 1);

    let count = 0;
    let currentSum = 0;
    let node;

    while (stack.length) {
      node = stack[stack.length - 1];

      if (!node.touched) {
        currentSum += node.weight;
        node.sum = currentSum;
        node.touched = true;

        if (preSumMap.has(currentSum - targetSum)) {
          count += preSumMap.get(currentSum - targetSum);
        }

        if (!preSumMap.has(currentSum)) {
          preSumMap.set(currentSum, 0);
        }

        preSumMap.set(currentSum, preSumMap.get(currentSum) + 1);
      }

      if (node.children && node.children.length) {
        const childIndex = node.children.pop();
        stack.push(tree[childIndex])
        continue;
      }

      currentSum -= node.weight;
      preSumMap.set(node.sum, preSumMap.get(node.sum) - 1);
      stack.pop();
    }

    return count;
  }

  fillChildren(tree);
  return cycleSearch(tree[rootIndex], x);
}

exports.buildTree = buildTree;
exports.getNumberOfUpgoingPaths = getNumberOfUpgoingPaths;
exports.getNumberOfUpgoingPathsV2 = getNumberOfUpgoingPathsV2;
exports.getNumberOfUpgoingPathsV3 = getNumberOfUpgoingPathsV3;
exports.getNumberOfUpgoingPathsV4 = getNumberOfUpgoingPathsV4;
