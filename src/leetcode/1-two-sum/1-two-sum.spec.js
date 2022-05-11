const { twoSum } = require('./1-two-sum');

it('first elements', () => {
  const arr = [2, 7, 11, 15];
  const output = twoSum(arr, 9);
  expect(output).toEqual([0, 1]);
});

it('last elements', () => {
  const arr = [3, 2, 4];
  const output = twoSum(arr, 6);
  expect(output).toEqual([1, 2]);
});

it('equal with many elements', () => {
  const arr = [3, 4, 5, 3];
  const output = twoSum(arr, 6);
  expect(output).toEqual([0, 3]);
});

it('equal with 2 elements', () => {
  const arr = [3, 3];
  const output = twoSum(arr, 6);
  expect(output).toEqual([0, 1]);
});

it('0 sum', () => {
  const arr = [-2, 0, 1, 2];
  const output = twoSum(arr, 0);
  expect(output).toEqual([0, 3]);
});

it('negative sum', () => {
  const arr = [-4, -2, -1, 0, 1, 2];
  const output = twoSum(arr, -3);
  expect(output).toEqual([1, 2]);
});
