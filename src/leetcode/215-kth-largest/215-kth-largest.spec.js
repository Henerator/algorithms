const { findKthLargest } = require('./215-kth-largest');

it('test 1', () => {
  const output = findKthLargest([3, 2, 1, 5, 6, 4], 2);
  expect(output).toEqual(5);
});

it('test 2', () => {
  const output = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
  expect(output).toEqual(4);
});

it('test 3', () => {
  const output = findKthLargest([3], 1);
  expect(output).toEqual(3);
});

it('test 4', () => {
  const output = findKthLargest([-3, -2, -1, 0], 2);
  expect(output).toEqual(-1);
});
