const { hasPathSum } = require('./112-path-sum');

it('test 1', () => {
  const root = {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: { val: 7 },
        right: { val: 2 },
      },
    },
    right: {
      val: 8,
      left: { val: 13 },
      right: {
        val: 4,
        right: { val: 1 },
      },
    },
  };
  expect(hasPathSum(root, 22)).toEqual(true);
});

it('test 2', () => {
  const root = {
    val: 1,
    left: { val: 2 },
    right: { val: 3 },
  };
  expect(hasPathSum(root, 5)).toEqual(false);
});

it('test 3', () => {
  const root = null;
  expect(hasPathSum(root, 0)).toEqual(false);
});
