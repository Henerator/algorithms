const { checkIpAddress } = require('./s-ip');

describe('IPv4', () => {
  it('test 1', () => {
    const input = '127.0.0.1';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv4');
  });

  it('test 2', () => {
    const input = '0.0.0.1';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv4');
  });

  it('test 3', () => {
    const input = '192.168.1.1';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv4');
  });

  it('test 4', () => {
    const input = '192.168.1.0';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv4');
  });

  it('test 5', () => {
    const input = '172.16.254.1';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv4');
  });

  it('error 1', () => {
    const input = '01.0.0.1';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 2', () => {
    const input = '256.0.0.0';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 3', () => {
    const input = '192.168.01.1';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 4', () => {
    const input = '192.168.1.00';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 5', () => {
    const input = '192.168@1.1';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 6', () => {
    const input = '256.256.256.256';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 7', () => {
    const input = '1e1.4.5.6';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 8', () => {
    const input = '1.0.1.';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });
});

describe('IPv6', () => {
  it('test 1', () => {
    const input = '2001:0db8:85a3:0:030:8a2e:0370:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv6');
  });

  it('test 2', () => {
    const input = '2001:0db8:85a3:00:0:8a2e:0370:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv6');
  });

  it('test 3', () => {
    const input = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv6');
  });

  it('test 4', () => {
    const input = '2001:db8:85a3:0:0:8A2E:0370:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv6');
  });

  it('test 5', () => {
    const input = '2001:0db8:85a3:0:0:8A2E:0370:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('IPv6');
  });

  it('error 1', () => {
    const input = '2001:0db8:.85a3:00:0:8a2e:0370:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 2', () => {
    const input = '2001:0db8:85a3::8A2E:037j:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });

  it('error 3', () => {
    const input = '02001:0db8:85a3:0000:0000:8a2e:0370:7334';
    const output = checkIpAddress(input);
    expect(output).toEqual('Error');
  });
});
