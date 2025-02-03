const { kSmallestPairs } = require('./373-sum-pairs');

it('test 1', () => {
  const output = kSmallestPairs([1, 7, 11], [2, 4, 6], 3);
  expect(output).toEqual([
    [1, 2],
    [1, 4],
    [1, 6],
  ]);
});

it('test 2', () => {
  const output = kSmallestPairs([1, 1, 2], [1, 2, 3], 2);
  expect(output).toEqual([
    [1, 1],
    [1, 1],
  ]);
});

it('test 3', () => {
  const output = kSmallestPairs([1], [2, 3, 4], 2);
  expect(output).toEqual([
    [1, 2],
    [1, 3],
  ]);
});

it('test 4', () => {
  const output = kSmallestPairs([-5, -2, 1], [2, 3], 3);
  expect(output).toEqual([
    [-5, 2],
    [-5, 3],
    [-2, 2],
  ]);
});

it('test 5', () => {
  const output = kSmallestPairs([1], [2], 1);
  expect(output).toEqual([[1, 2]]);
});
