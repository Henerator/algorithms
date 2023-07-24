const { convert } = require('./6-zigzag-conversion');

it('test 1', () => {
  const output = convert('PAYPALISHIRING', 3);
  expect(output).toEqual('PAHNAPLSIIGYIR');
});

it('test 2', () => {
  const output = convert('PAYPALISHIRING', 4);
  expect(output).toEqual('PINALSIGYAHRPI');
});

it('test 3', () => {
  const output = convert('A', 1);
  expect(output).toEqual('A');
});

it('test 4', () => {
  const output = convert('abcd', 4);
  expect(output).toEqual('abcd');
});

it('test 5', () => {
  const output = convert('abcd', 1);
  expect(output).toEqual('abcd');
});
