const { spiralOrder } = require('./54-spiral');

it('test 1', () => {
  const output = spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  expect(output).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

it('test 2', () => {
  const output = spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]);
  expect(output).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});

it('test 3', () => {
  const output = spiralOrder([[1]]);
  expect(output).toEqual([1]);
});

it('test 4', () => {
  const output = spiralOrder([[1, 2, 3, 4]]);
  expect(output).toEqual([1, 2, 3, 4]);
});

it('test 5', () => {
  const output = spiralOrder([[1], [2], [3], [4]]);
  expect(output).toEqual([1, 2, 3, 4]);
});
