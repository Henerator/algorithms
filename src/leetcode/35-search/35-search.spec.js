const { searchInsert } = require('./35-search');

it('test 1', () => {
  const output = searchInsert([1, 3, 5, 6], 5);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = searchInsert([1, 3, 5, 6], 2);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = searchInsert([1, 3, 5, 6], 7);
  expect(output).toEqual(4);
});

it('test 4', () => {
  const output = searchInsert([1], 0);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = searchInsert([1], 2);
  expect(output).toEqual(1);
});

it('test 6', () => {
  const output = searchInsert([-10, -4, 0, 1, 2], -3);
  expect(output).toEqual(2);
});
