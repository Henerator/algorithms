const { searchRange } = require('./34-search');

it('test 1', () => {
  const output = searchRange([5, 7, 7, 8, 8, 10], 8);
  expect(output).toEqual([3, 4]);
});

it('test 2', () => {
  const output = searchRange([5, 7, 7, 8, 8, 10], 6);
  expect(output).toEqual([-1, -1]);
});

it('test 3', () => {
  const output = searchRange([], 0);
  expect(output).toEqual([-1, -1]);
});

it('test 4', () => {
  const output = searchRange([1], 1);
  expect(output).toEqual([0, 0]);
});
