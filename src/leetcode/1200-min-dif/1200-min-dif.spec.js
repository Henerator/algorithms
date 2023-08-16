const { minimumAbsDifference } = require('./1200-min-dif');

it('test 1', () => {
  const output = minimumAbsDifference([4, 2, 1, 3]);
  expect(output).toEqual([
    [1, 2],
    [2, 3],
    [3, 4],
  ]);
});

it('test 2', () => {
  const output = minimumAbsDifference([1, 3, 6, 10, 15]);
  expect(output).toEqual([[1, 3]]);
});

it('test 3', () => {
  const output = minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]);
  expect(output).toEqual([
    [-14, -10],
    [19, 23],
    [23, 27],
  ]);
});
