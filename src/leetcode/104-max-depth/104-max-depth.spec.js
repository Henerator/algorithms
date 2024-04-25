const { maxDepth } = require('./104-max-depth');

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

  expect(maxDepth(root)).toEqual(3);
});

it('test 2', () => {
  const root = {
    val: 1,
    right: { val: 2 },
  };

  expect(maxDepth(root)).toEqual(2);
});

it('test 3', () => {
  const root = null;
  expect(maxDepth(root)).toEqual(0);
});

it('test 4', () => {
  const root = {
    left: { left: { left: {} } },
  };
  expect(maxDepth(root)).toEqual(4);
});

it('test 5', () => {
  const root = {
    right: { right: { right: {} } },
  };
  expect(maxDepth(root)).toEqual(4);
});
