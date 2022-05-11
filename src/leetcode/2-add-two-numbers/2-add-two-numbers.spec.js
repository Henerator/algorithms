const { generateLinkedList } = require('./../../_helpers/linked-list');
const { addTwoNumbers } = require('./2-add-two-numbers');

it('equal length', () => {
  const a = generateLinkedList([2, 4, 3]);
  const b = generateLinkedList([5, 6, 4]);
  const output = addTwoNumbers(a, b);

  expect(output.toArray()).toEqual([7, 0, 8]);
});

it('consecutive increasing over 9', () => {
  const a = generateLinkedList([9, 9, 9, 9, 9, 9, 9]);
  const b = generateLinkedList([9, 9, 9, 9]);
  const output = addTwoNumbers(a, b);

  expect(output.toArray()).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

it('zeros', () => {
  const a = generateLinkedList([0]);
  const b = generateLinkedList([0]);
  const output = addTwoNumbers(a, b);

  expect(output.toArray()).toEqual([0]);
});

it('ones', () => {
  const a = generateLinkedList([1, 1, 1]);
  const b = generateLinkedList([1, 1, 1, 1]);
  const output = addTwoNumbers(a, b);

  expect(output.toArray()).toEqual([2, 2, 2, 1]);
});

it('one empty list', () => {
  const a = generateLinkedList([0]);
  const b = generateLinkedList([1, 2, 3]);
  const output = addTwoNumbers(a, b);

  expect(output.toArray()).toEqual([1, 2, 3]);
});
