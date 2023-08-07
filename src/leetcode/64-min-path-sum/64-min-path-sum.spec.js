const { minPathSum } = require('./64-min-path-sum');

it('test 1', () => {
  const output = minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]);
  expect(output).toEqual(7);
});

it('test 2', () => {
  const output = minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  expect(output).toEqual(12);
});

it('test 3', () => {
  const output = minPathSum([[1]]);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = minPathSum([[1], [2], [3]]);
  expect(output).toEqual(6);
});

it('test 5', () => {
  const output = minPathSum([[1, 2, 3]]);
  expect(output).toEqual(6);
});
