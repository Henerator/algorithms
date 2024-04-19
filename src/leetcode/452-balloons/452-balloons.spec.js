const { findMinArrowShots } = require('./452-balloons');

it('test 1', () => {
  const output = findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ]);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]);
  expect(output).toEqual(4);
});

it('test 3', () => {
  const output = findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]);
  expect(output).toEqual(2);
});

it('test 4', () => {
  const output = findMinArrowShots([[1, 2]]);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = findMinArrowShots([
    [1, 7],
    [2, 4],
    [5, 6],
  ]);
  expect(output).toEqual(2);
});
