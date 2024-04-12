const { gameOfLife } = require('./289-game-of-life');

it('test 1', () => {
  const matrix = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];
  gameOfLife(matrix);
  expect(matrix).toEqual([
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ]);
});

it('test 2', () => {
  const matrix = [
    [1, 1],
    [1, 0],
  ];
  gameOfLife(matrix);
  expect(matrix).toEqual([
    [1, 1],
    [1, 1],
  ]);
});

it('test 3', () => {
  const matrix = [[1]];
  gameOfLife(matrix);
  expect(matrix).toEqual([[0]]);
});
