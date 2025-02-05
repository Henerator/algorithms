const { rangeBitwiseAnd } = require('./201-bitwise');

it('test 1', () => {
  const output = rangeBitwiseAnd(5, 7);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const output = rangeBitwiseAnd(0, 0);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = rangeBitwiseAnd(1, 2147483647);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = rangeBitwiseAnd(9, 10);
  expect(output).toEqual(8);
});
