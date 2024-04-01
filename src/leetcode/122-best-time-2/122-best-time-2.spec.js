const { maxProfit } = require('./122-best-time-2');

it('test 1', () => {
  const output = maxProfit([7, 1, 5, 3, 6, 4]);
  expect(output).toEqual(7);
});

it('test 2', () => {
  const output = maxProfit([1, 2, 3, 4, 5]);
  expect(output).toEqual(4);
});

it('test 3', () => {
  const output = maxProfit([7, 6, 4, 3, 1]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = maxProfit([1]);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = maxProfit([2, 4, 1]);
  expect(output).toEqual(2);
});
