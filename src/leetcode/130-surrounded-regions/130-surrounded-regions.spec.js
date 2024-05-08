const { solve } = require('./130-surrounded-regions');

it('test 1', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ];
  solve(board);
  expect(board).toEqual([
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
  ]);
});

it('test 2', () => {
  const board = [['X']];
  solve([['X']]);
  expect(board).toEqual([['X']]);
});

it('test 3', () => {
  const board = [['O']];
  solve([['O']]);
  expect(board).toEqual([['O']]);
});

it('test 4', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'X', 'X'],
  ];
  solve(board);
  expect(board).toEqual([
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
  ]);
});

it('test 5', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ];
  solve(board);
  expect(board).toEqual([
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
  ]);
});
