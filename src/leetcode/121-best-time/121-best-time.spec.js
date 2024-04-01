const { maxProfit } = require('./121-best-time');

it('test 1', () => {
  const output = maxProfit([7, 1, 5, 3, 6, 4]);
  expect(output).toEqual(5);
});

it('test 2', () => {
  const output = maxProfit([7, 6, 4, 3, 1]);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = maxProfit([1]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = maxProfit([2, 4, 1]);
  expect(output).toEqual(2);
});
