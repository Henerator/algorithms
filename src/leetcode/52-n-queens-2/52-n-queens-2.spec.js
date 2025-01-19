const { totalNQueens } = require('./52-n-queens-2');

it('test 1', () => {
  const output = totalNQueens(1);
  expect(output).toEqual(1);
});

it('test 2', () => {
  const output = totalNQueens(2);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = totalNQueens(3);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = totalNQueens(4);
  expect(output).toEqual(2);
});
