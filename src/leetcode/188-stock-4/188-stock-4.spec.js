const { maxProfit } = require('./188-stock-4');

it('test 1', () => {
  const output = maxProfit(2, [2, 4, 1]);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = maxProfit(2, [3, 2, 6, 5, 0, 3]);
  expect(output).toEqual(7);
});

it('test 3', () => {
  const output = maxProfit(1, [3, 2, 6, 5, 0, 3]);
  expect(output).toEqual(4);
});

it('test 4', () => {
  const output = maxProfit(1, [3]);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = maxProfit(2, [3]);
  expect(output).toEqual(0);
});

it('test 6', () => {
  const output = maxProfit(2, [0, 0, 0, 0, 0]);
  expect(output).toEqual(0);
});
