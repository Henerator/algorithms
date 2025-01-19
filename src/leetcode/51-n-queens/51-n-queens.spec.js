const { solveNQueens } = require('./51-n-queens');

it('test 1', () => {
  const output = solveNQueens(1);
  expect(output).toEqual([['Q']]);
});

it('test 2', () => {
  const output = solveNQueens(2);
  expect(output).toEqual([]);
});

it('test 3', () => {
  const output = solveNQueens(3);
  expect(output).toEqual([]);
});

it('test 4', () => {
  const output = solveNQueens(4);
  expect(output).toEqual([
    ['.Q..', '...Q', 'Q...', '..Q.'],
    ['..Q.', 'Q...', '...Q', '.Q..'],
  ]);
});
