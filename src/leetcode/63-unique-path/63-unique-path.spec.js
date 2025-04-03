const { uniquePathsWithObstacles } = require('./63-unique-path');

it('test 1', () => {
  const output = uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ]);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = uniquePathsWithObstacles([
    [0, 1],
    [1, 0],
  ]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = uniquePathsWithObstacles([
    [0, 0],
    [0, 1],
  ]);
  expect(output).toEqual(0);
});
