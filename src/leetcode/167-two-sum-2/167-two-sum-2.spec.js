const { twoSum } = require('./167-two-sum-2');

it('test 1', () => {
  const output = twoSum([2, 7, 11, 15], 9);
  expect(output).toEqual([1, 2]);
});

it('test 2', () => {
  const output = twoSum([2, 3, 4], 6);
  expect(output).toEqual([1, 3]);
});

it('test 3', () => {
  const output = twoSum([-1, 0], -1);
  expect(output).toEqual([1, 2]);
});

it('test 4', () => {
  const output = twoSum([2, 3, 5, 7, 11, 15], 8);
  expect(output).toEqual([2, 3]);
});

it('test 5', () => {
  const output = twoSum([1, 3, 4, 5, 6, 11, 15], 8);
  expect(output).toEqual([2, 4]);
});

it('test 6', () => {
  const output = twoSum([-10, -2, -1, 1, 5, 6, 11, 15], -1);
  expect(output).toEqual([2, 4]);
});
