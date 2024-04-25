const { isSameTree } = require('./100-same-tree');

it('test 1', () => {
  const treeA = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  const treeB = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  expect(isSameTree(treeA, treeB)).toEqual(true);
});

it('test 2', () => {
  const treeA = {
    val: 1,
    left: { val: 2 },
  };
  const treeB = {
    val: 1,
    right: { val: 2 },
  };
  expect(isSameTree(treeA, treeB)).toEqual(false);
});

it('test 3', () => {
  const treeA = null;
  const treeB = null;
  expect(isSameTree(treeA, treeB)).toEqual(true);
});

it('test 4', () => {
  const treeA = null;
  const treeB = { val: 1 };
  expect(isSameTree(treeA, treeB)).toEqual(false);
});
