const { merge } = require('./88-merge-sorted-array');

it('test 1', () => {
  const arr = [1, 2, 3, 0, 0, 0];
  merge(arr, 3, [2, 5, 6], 3);
  expect(arr).toEqual([1, 2, 2, 3, 5, 6]);
});

it('test 2', () => {
  const arr = [1];
  merge(arr, 1, [], 0);
  expect(arr).toEqual([1]);
});

it('test 3', () => {
  const arr = [0];
  merge(arr, 0, [1], 1);
  expect(arr).toEqual([1]);
});

it('test 4', () => {
  const arr = [];
  merge(arr, 0, [], 0);
  expect(arr).toEqual([]);
});

it('test 5', () => {
  const arr = [-10, -4, 1, 5, 0, 0, 0];
  merge(arr, 4, [-3, 2, 7], 3);
  expect(arr).toEqual([-10, -4, -3, 1, 2, 5, 7]);
});
