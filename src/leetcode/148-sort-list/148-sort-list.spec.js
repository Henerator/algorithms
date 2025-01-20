const { generateLinkedList } = require('./../../_helpers/linked-list');
const { sortList } = require('./148-sort-list');

it('test 1', () => {
  const arr = [4, 2, 1, 3];
  const root = generateLinkedList(arr);

  let node = sortList(root);
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    expect(node.val).toEqual(arr[i]);
    node = node.next;
  }
});
