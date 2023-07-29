const { knightProbability } = require('./688-knight');

it('test 1', () => {
  const output = knightProbability(3, 2, 0, 0);
  expect(output).toEqual(0.0625);
});

it('test 2', () => {
  const output = knightProbability(1, 0, 0, 0);
  expect(output).toEqual(1.0);
});

it('test 3', () => {
  const output = knightProbability(8, 1, 0, 0);
  expect(output).toEqual(0.25);
});

it('test 4', () => {
  const output = knightProbability(2, 1, 0, 0);
  expect(output).toEqual(0.0);
});
