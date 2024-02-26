const { numberOfWays } = require('./2787-ways-to-express');

it('test 1', () => {
  const output = numberOfWays(10, 2);
  expect(output).toEqual(1);
});

it('test 2', () => {
  const output = numberOfWays(4, 1);
  expect(output).toEqual(2);
});

it('test 3', () => {
  const output = numberOfWays(1, 1);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = numberOfWays(11, 2);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = numberOfWays(297, 1);
  expect(output).toEqual(872765252);
});
