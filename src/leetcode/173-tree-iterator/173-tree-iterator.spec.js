const { BSTIterator } = require('./173-tree-iterator');

it('test 1', () => {
  const root = {
    val: 7,
    left: { val: 3 },
    right: {
      val: 15,
      left: { val: 9 },
      right: { val: 20 },
    },
  };
  const iterator = new BSTIterator(root);
  expect(iterator.next()).toEqual(3);
  expect(iterator.next()).toEqual(7);
  expect(iterator.hasNext()).toEqual(true);
  expect(iterator.next()).toEqual(9);
  expect(iterator.hasNext()).toEqual(true);
  expect(iterator.next()).toEqual(15);
  expect(iterator.hasNext()).toEqual(true);
  expect(iterator.next()).toEqual(20);
  expect(iterator.hasNext()).toEqual(false);
});
