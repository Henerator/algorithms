const { findMaximizedCapital } = require('./502-ipo');

it('test 1', () => {
  const profits = [1, 2, 3];
  const capitals = [0, 1, 1];
  const output = findMaximizedCapital(2, 0, profits, capitals);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const profits = [1, 2, 3];
  const capitals = [0, 1, 2];
  const output = findMaximizedCapital(3, 0, profits, capitals);
  expect(output).toEqual(6);
});
