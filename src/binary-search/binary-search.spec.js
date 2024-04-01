const { binarySearch } = require('./binary-search');

it('test 1', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(binarySearch(arr, (value) => 4 - value)).toEqual(3);
});

it('test 2', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(binarySearch(arr, (value) => 6 - value)).toEqual(-1);
});
