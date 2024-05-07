const { maxPathSum } = require('./124-tree-max-path-sum');

it('test 1', () => {
  const root = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  expect(maxPathSum(root)).toEqual(6);
});

it('test 2', () => {
  const root = {
    val: -10,
    left: { val: 9 },
    right: {
      val: 20,
      left: { val: 15 },
      right: { val: 7 },
    },
  };
  expect(maxPathSum(root)).toEqual(42);
});

it('test 3', () => {
  const root = { val: 1 };
  expect(maxPathSum(root)).toEqual(1);
});

it('test 4', () => {
  const root = { val: -3 };
  expect(maxPathSum(root)).toEqual(-3);
});

it('test 5', () => {
  const root = {
    val: -1,
    left: {
      val: -2,
      left: { val: -6 },
    },
    right: {
      val: 10,
      left: { val: -3 },
      right: { val: -6 },
    },
  };
  expect(maxPathSum(root)).toEqual(10);
});

it('test 6', () => {
  const root = {
    val: -1,
    right: {
      val: 9,
      left: { val: -6 },
      right: {
        val: 3,
        right: { val: -2 },
      },
    },
  };
  expect(maxPathSum(root)).toEqual(12);
});
