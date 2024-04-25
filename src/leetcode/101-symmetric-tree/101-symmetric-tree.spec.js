const { isSymmetric } = require('./101-symmetric-tree');

it('test 1', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3 },
      right: { val: 4 },
    },
    right: {
      val: 2,
      left: { val: 4 },
      right: { val: 3 },
    },
  };
  expect(isSymmetric(root)).toEqual(true);
});

it('test 2', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      right: { val: 3 },
    },
    right: {
      val: 2,
      right: { val: 3 },
    },
  };
  expect(isSymmetric(root)).toEqual(false);
});
