const { convert } = require('./6-zigzag-conversion');
const { convert: convertV2 } = require('./6-zigzag-conversion-v2');

describe('convert v1', () => {
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
});

describe('convert v2', () => {
  it('test 1', () => {
    const output = convertV2('PAYPALISHIRING', 3);
    expect(output).toEqual('PAHNAPLSIIGYIR');
  });

  it('test 2', () => {
    const output = convertV2('PAYPALISHIRING', 4);
    expect(output).toEqual('PINALSIGYAHRPI');
  });

  it('test 3', () => {
    const output = convertV2('A', 1);
    expect(output).toEqual('A');
  });

  it('test 4', () => {
    const output = convertV2('abcd', 4);
    expect(output).toEqual('abcd');
  });

  it('test 5', () => {
    const output = convertV2('abcd', 1);
    expect(output).toEqual('abcd');
  });
});
