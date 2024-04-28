const { zigzagLevelOrder } = require('./103-tree-zigzag');

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
  expect(zigzagLevelOrder(root)).toEqual([[3], [20, 9], [15, 7]]);
});

it('test 2', () => {
  const root = { val: 1 };
  expect(zigzagLevelOrder(root)).toEqual([[1]]);
});

it('test 3', () => {
  const root = null;
  expect(zigzagLevelOrder(root)).toEqual([]);
});
