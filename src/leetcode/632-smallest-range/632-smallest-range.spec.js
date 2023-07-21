const { smallestRange } = require('./632-smallest-range');

it('test 1', () => {
  const output = smallestRange([
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ]);
  expect(output).toEqual([20, 24]);
});

it('test 2', () => {
  const output = smallestRange([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ]);
  expect(output).toEqual([1, 1]);
});

it('test 3', () => {
  const output = smallestRange([
    [1, 1, 1, 1],
    [4, 5, 6],
    [5, 30],
  ]);
  expect(output).toEqual([1, 5]);
});

it('test 4', () => {
  const output = smallestRange([[1], [1], [1]]);
  expect(output).toEqual([1, 1]);
});

it('test 5', () => {
  const output = smallestRange([
    [-100, -50, 5, 20],
    [-70, -30, 0, 2, 10],
    [10, 50, 100],
  ]);
  expect(output).toEqual([5, 10]);
});

it('test 6', () => {
  const output = smallestRange([
    [-10, -7, -5],
    [-8, -2],
    [-6, -3, -1],
  ]);
  console.log(output);
  expect(output).toEqual([-8, -6]);
});
