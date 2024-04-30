const { kthSmallest } = require('./230-kth-in-bst');

it('test 1', () => {
  const root = {
    val: 3,
    left: {
      val: 1,
      right: { val: 2 },
    },
    right: { val: 4 },
  };
  expect(kthSmallest(root, 1)).toEqual(1);
});

it('test 2', () => {
  const root = {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 2,
        left: { val: 1 },
      },
      right: { val: 4 },
    },
    right: { val: 6 },
  };
  expect(kthSmallest(root, 3)).toEqual(3);
});

it('test 3', () => {
  const root = { val: 3 };
  expect(kthSmallest(root, 1)).toEqual(3);
});
