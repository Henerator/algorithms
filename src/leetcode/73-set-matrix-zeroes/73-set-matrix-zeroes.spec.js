const { setZeroes } = require('./73-set-matrix-zeroes');

it('test 1', () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  setZeroes(matrix);
  expect(matrix).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);
});

it('test 2', () => {
  const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];
  setZeroes(matrix);
  expect(matrix).toEqual([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]);
});

it('test 3', () => {
  const matrix = [[1]];
  setZeroes(matrix);
  expect(matrix).toEqual([[1]]);
});

it('test 4', () => {
  const matrix = [[0]];
  setZeroes(matrix);
  expect(matrix).toEqual([[0]]);
});

it('test 5', () => {
  const matrix = [[1, 1, 0, 1]];
  setZeroes(matrix);
  expect(matrix).toEqual([[0, 0, 0, 0]]);
});

it('test 6', () => {
  const matrix = [[1], [1], [0], [1]];
  setZeroes(matrix);
  expect(matrix).toEqual([[0], [0], [0], [0]]);
});
