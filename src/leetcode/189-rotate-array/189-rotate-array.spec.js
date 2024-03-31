const { rotate } = require('./189-rotate-array');

it('test 1', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  rotate(arr, 3);
  expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

it('test 2', () => {
  const arr = [-1, -100, 3, 99];
  rotate(arr, 2);
  expect(arr).toEqual([3, 99, -1, -100]);
});

it('test 3', () => {
  const arr = [1, 2, 3];
  rotate(arr, 0);
  expect(arr).toEqual([1, 2, 3]);
});

it('test 4', () => {
  const arr = [1, 2, 3];
  rotate(arr, 1);
  expect(arr).toEqual([3, 1, 2]);
});
