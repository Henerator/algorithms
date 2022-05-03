const { getNumberOfUpgoingPathsV4 } = require("./g-tree-paths");

class Vertex {
  constructor(weight, parent) {
    this.weight = weight;
    this.parent = parent;
  }
}

function buildTree(data) {
  return data.map(([parent, value]) => new Vertex(value, parent));
}

test("test 1", () => {
  const data = [
    [-1, 1],
    [0, 1],
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 1],
  ];
  const tree = buildTree(data);
  const output = getNumberOfUpgoingPathsV4(tree, 3);

  expect(output).toEqual(3);
});

test("test 2", () => {
  const data = [[-1, 1]];
  const tree = buildTree(data);
  const output = getNumberOfUpgoingPathsV4(tree, 2);

  expect(output).toEqual(0);
});

test("test 3", () => {
  const data = [
    [-1, 1], //0
    [0, 3], //1
    [0, -1], //2
    [1, 2], //3
    [1, 1], //4
    [2, 4], //5
    [2, 5], //6
    [4, 1], //7
    [5, 1], //8
    [5, 2], //9
    [6, 6], //9
  ];
  const tree = buildTree(data);
  const output = getNumberOfUpgoingPathsV4(tree, 5);

  expect(output).toEqual(8);
});

test("test 4", () => {
  const data = [
    [-1, 1], //0
    [0, 2], //1
    [0, -1], //2
    [1, 1], //3
    [1, 2], //4
    [2, 3], //5
    [5, 2], //6
    [5, 5], //7
  ];
  const tree = buildTree(data);
  const output = getNumberOfUpgoingPathsV4(tree, 3);

  expect(output).toEqual(4);
});
