const { BSTIterator } = require('./173-tree-iterator');
const { BSTIterator: BSTIteratorV2 } = require('./173-tree-iterator-v2');

describe('BSTIterator', () => {
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
})

describe('BSTIteratorV2', () => {
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
    const iterator = new BSTIteratorV2(root);
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
})
