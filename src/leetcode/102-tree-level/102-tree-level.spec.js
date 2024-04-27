const { levelOrder } = require('./102-tree-level');

it('test 1', () => {
  const root = {
    val: 3,
    left: { val: 9 },
    right: {
      val: 20,
      left: { val: 15 },
      right: { val: 7 },
    },
  };
  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
});

it('test 2', () => {
  const root = { val: 1 };
  expect(levelOrder(root)).toEqual([[1]]);
});

it('test 3', () => {
  const root = null;
  expect(levelOrder(root)).toEqual([]);
});
