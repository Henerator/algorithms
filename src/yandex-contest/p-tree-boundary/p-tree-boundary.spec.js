const { Vertex, getTreeBorder } = require('./p-tree-boundary');

function createTree(nodes) {
  return nodes.map(([leftIndex, rightIndex]) => {
    return new Vertex(leftIndex, rightIndex);
  });
}

it('test 1', () => {
  const input = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, -1],
    [8, -1],
    [-1, -1],
    [9, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([5, 8, 9, 1, 0, 7, 3, 2, 6]));
});

it('test 2', () => {
  const input = [
    [-1, 1],
    [2, 3],
    [-1, -1],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3]));
});

it('test 3', () => {
  const input = [
    [1, 2],
    [3, 4],
    [5, -1],
    [-1, -1],
    [6, 7],
    [8, 9],
    [-1, -1],
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3, 5, 6, 7, 8, 9]));
});

it('test 4', () => {
  const input = [
    [1, -1],
    [-1, 2],
    [-1, 3],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3]));
});

it('test 5', () => {
  const input = [
    [1, 2], // 0
    [3, 4], // 1
    [5, 6], // 2
    [-1, -1], // 3
    [7, 8], // 4
    [9, 10], // 5
    [-1, -1], // 6
    [11, 12], // 7
    [-1, -1], // 8
    [-1, -1], // 9
    [13, 14], // 10
    [-1, -1], // 11
    [-1, -1], // 12
    [-1, -1], // 13
    [-1, -1], // 14
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3, 6, 7, 10, 11, 12, 13, 14]));
});

it('one node', () => {
  const input = [[-1, -1]];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0]));
});

it('all right nodes', () => {
  const input = [
    [-1, 1],
    [-1, 2],
    [-1, 3],
    [-1, 4],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
});

it('all right nodes with one left', () => {
  const input = [
    [-1, 1],
    [2, 3],
    [-1, -1],
    [-1, 4],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
});

it('all left nodes', () => {
  const input = [
    [1, -1],
    [2, -1],
    [3, -1],
    [4, -1],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
});

it('boundary nodes only', () => {
  const input = [
    [1, 2],
    [3, -1],
    [-1, 4],
    [-1, -1],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
});

it('left child as right boundary node', () => {
  const input = [
    [1, 2],
    [-1, 3],
    [4, -1],
    [-1, 5],
    [6, -1],
    [-1, -1],
    [-1, -1],
  ];
  const tree = createTree(input);
  const rootIndex = 0;
  const output = getTreeBorder(tree, rootIndex);
  expect(output).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5, 6]));
});
