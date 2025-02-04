const { reverseBits } = require('./190-reverse-bits');

it('test 1', () => {
  const input = parseInt('00000010100101000001111010011100', 2);
  const output = reverseBits(input);
  expect(output).toEqual(964176192);
});

it('test 2', () => {
  const input = parseInt('11111111111111111111111111111101', 2);
  const output = reverseBits(input);
  expect(output).toEqual(3221225471);
});
