const { combinationSum } = require('./39-combination-sum');

it('test 1', () => {
  const output = combinationSum([2, 3, 6, 7], 7);
  expect(output).toEqual([[2, 2, 3], [7]]);
});

it('test 2', () => {
  const output = combinationSum([2, 3, 5], 8);
  expect(output).toEqual([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ]);
});

it('test 1', () => {
  const output = combinationSum([2], 1);
  expect(output).toEqual([]);
});
