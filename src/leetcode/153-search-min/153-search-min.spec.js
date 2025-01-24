const { findMin } = require('./153-search-min');

it('test 1', () => {
  const output = findMin([3, 4, 5, 1, 2]);
  expect(output).toEqual(1);
});

it('test 2', () => {
  const output = findMin([4, 5, 6, 7, 0, 1, 2]);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = findMin([11, 13, 15, 17]);
  expect(output).toEqual(11);
});

it('test 4', () => {
  const output = findMin([3]);
  expect(output).toEqual(3);
});

it('test 5', () => {
  const output = findMin([5, 1, 2, 3, 4]);
  expect(output).toEqual(1);
});
