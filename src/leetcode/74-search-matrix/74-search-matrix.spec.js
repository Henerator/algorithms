const { searchMatrix } = require('./74-search-matrix');

it('test 1', () => {
  const output = searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  );
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  );
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = searchMatrix(
    [
      [1, 3],
      [10, 11],
      [23, 30],
    ],
    23
  );
  expect(output).toEqual(true);
});

it('test 4', () => {
  const output = searchMatrix([[1], [10], [23]], 0);
  expect(output).toEqual(false);
});

it('test 5', () => {
  const output = searchMatrix([[1]], 1);
  expect(output).toEqual(true);
});
