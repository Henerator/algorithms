const { threeSum } = require('./15-3sum');

it('test 1', () => {
  const output = threeSum([-1, 0, 1, 2, -1, -4]);
  expect(output).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

it('test 2', () => {
  const output = threeSum([0, 1, 1]);
  expect(output).toEqual([]);
});

it('test 3', () => {
  const output = threeSum([0, 0, 0]);
  expect(output).toEqual([[0, 0, 0]]);
});
