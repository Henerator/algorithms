const { rightSideView } = require('./199-tree-right-view');

it('test 1', () => {
  const tree = {
    val: 1,
    left: {
      val: 2,
      right: { val: 5 },
    },
    right: {
      val: 3,
      right: { val: 4 },
    },
  };
  expect(rightSideView(tree)).toEqual([1, 3, 4]);
});

it('test 2', () => {
  const tree = {
    val: 1,
    right: { val: 3 },
  };
  expect(rightSideView(tree)).toEqual([1, 3]);
});

it('test 3', () => {
  const tree = null;
  expect(rightSideView(tree)).toEqual([]);
});
