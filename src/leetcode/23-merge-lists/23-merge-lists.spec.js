const { generateLinkedList } = require('./../../_helpers/linked-list');
const { mergeKLists } = require('./23-merge-lists');

it('test 1', () => {
  const lists = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ].map((list) => generateLinkedList(list));
  let head = mergeKLists(lists);

  const exepectedResult = [1, 1, 2, 3, 4, 4, 5, 6];
  for (let i = 0; i < exepectedResult.length; i++) {
    expect(head.val).toEqual(exepectedResult[i]);
    head = head.next;
  }
});

it('test 2', () => {
  const lists = [];
  const head = mergeKLists(lists);
  expect(head).toEqual(null);
});

it('test 3', () => {
  const lists = [null];
  const head = mergeKLists(lists);
  expect(head).toEqual(null);
});

it('test 4', () => {
  const lists = [[1, 4, 20], [], [10, 100]].map((list) => generateLinkedList(list));
  let head = mergeKLists(lists);

  const exepectedResult = [1, 4, 10, 20, 100];
  for (let i = 0; i < exepectedResult.length; i++) {
    expect(head.val).toEqual(exepectedResult[i]);
    head = head.next;
  }
});
