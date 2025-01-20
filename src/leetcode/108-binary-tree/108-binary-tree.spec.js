const { sortedArrayToBST } = require('./108-binary-tree');

it('test 1', () => {
  const root = sortedArrayToBST([-10, -3, 0, 5, 9]);
  expect(root.val).toEqual(0);
});

it('test 2', () => {
  const root = sortedArrayToBST([1, 3]);
  expect(root.val).toEqual(1);
});
