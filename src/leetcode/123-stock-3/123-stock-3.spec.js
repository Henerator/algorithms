const { maxProfit } = require('./123-stock-3');

it('test 1', () => {
  const output = maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
  expect(output).toEqual(6);
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
  const output = maxProfit([1, 1, 1, 1]);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = maxProfit([1]);
  expect(output).toEqual(0);
});

it('test 6', () => {
  const output = maxProfit([1, 2, 3, 4, 3, 2, 21, 1, 2, 3, 4, 3, 2, 21]);
  expect(output).toEqual(40);
});

it('test 7', () => {
  const output = maxProfit([3, 2, 1, 100]);
  expect(output).toEqual(99);
});

it('test 8', () => {
  const output = maxProfit([3, 2, 6, 5, 0, 3]);
  expect(output).toEqual(7);
});
