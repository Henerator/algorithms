const { addBinary } = require('./67-add-binary');

it('test 1', () => {
  const output = addBinary('11', '1');
  expect(output).toEqual('100');
});

it('test 2', () => {
  const output = addBinary('1010', '1011');
  expect(output).toEqual('10101');
});

it('test 3', () => {
  const output = addBinary('0', '0');
  expect(output).toEqual('0');
});

it('test 4', () => {
  const output = addBinary('1', '0');
  expect(output).toEqual('1');
});

it('test 5', () => {
  const output = addBinary('0', '1');
  expect(output).toEqual('1');
});

it('test 6', () => {
  const output = addBinary('1', '1');
  expect(output).toEqual('10');
});
