const { countNodes } = require('./222-count-tree-nodes');

it('test 1', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4 },
      right: { val: 5 },
    },
    right: {
      val: 3,
      left: { val: 6 },
    },
  };
  expect(countNodes(root)).toEqual(6);
});

it('test 2', () => {
  const root = { val: 1 };
  expect(countNodes(root)).toEqual(1);
});

it('test 3', () => {
  const root = null;
  expect(countNodes(root)).toEqual(0);
});
