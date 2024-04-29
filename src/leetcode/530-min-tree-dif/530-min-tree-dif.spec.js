const { getMinimumDifference } = require('./530-min-tree-dif');

it('test 1', () => {
  const tree = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1 },
      right: { val: 3 },
    },
    right: { val: 6 },
  };
  expect(getMinimumDifference(tree)).toEqual(1);
});

it('test 2', () => {
  const tree = {
    val: 1,
    left: { val: 0 },
    right: {
      val: 48,
      left: { val: 12 },
      right: { val: 49 },
    },
  };
  expect(getMinimumDifference(tree)).toEqual(1);
});

it('test 3', () => {
  const tree = {
    val: 20,
    left: { val: 15 },
    right: {
      val: 50,
      left: { val: 30 },
      right: { val: 70 },
    },
  };
  expect(getMinimumDifference(tree)).toEqual(5);
});

it('test 4', () => {
  const tree = {
    val: 2,
    left: { val: 0 },
  };
  expect(getMinimumDifference(tree)).toEqual(2);
});
