const { coinChange } = require('./322-coin-change');

it('test 1', () => {
  const output = coinChange([1, 2, 5], 11);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = coinChange([2], 3);
  expect(output).toEqual(-1);
});

it('test 3', () => {
  const output = coinChange([1], 0);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = coinChange([1, 2, 3, 4, 5], 5);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = coinChange([1, 3], 5);
  expect(output).toEqual(3);
});
