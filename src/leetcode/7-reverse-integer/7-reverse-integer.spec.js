const { reverse } = require('./7-reverse-integer');

it('positive number', () => {
  const input = 123;
  const output = reverse(input);
  expect(output).toEqual(321);
});

it('negative number', () => {
  const input = -123;
  const output = reverse(input);
  expect(output).toEqual(-321);
});

it('leading zero', () => {
  const input = 120;
  const output = reverse(input);
  expect(output).toEqual(21);
});

it('max value', () => {
  const input = 7463847412;
  const output = reverse(input);
  expect(output).toEqual(2147483647);
});

it('more than max value', () => {
  const input = 8463847412;
  const output = reverse(input);
  expect(output).toEqual(0);
});

it('min value', () => {
  const input = -8463847412;
  const output = reverse(input);
  expect(output).toEqual(-2147483648);
});

it('less than min value', () => {
  const input = -9463847412;
  const output = reverse(input);
  expect(output).toEqual(0);
});
