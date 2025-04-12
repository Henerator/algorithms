const { countDigitOne } = require('./233-one-digit');

it('test 1', () => {
  const output = countDigitOne(13);
  expect(output).toEqual(6);
});

it('test 2', () => {
  const output = countDigitOne(0);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = countDigitOne(26);
  expect(output).toEqual(13);
});

it('test 4', () => {
  const output = countDigitOne(9);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = countDigitOne(99);
  expect(output).toEqual(20);
});

it('test 6', () => {
  const output = countDigitOne(999);
  expect(output).toEqual(300);
});

it('test 7', () => {
  const output = countDigitOne(9999);
  expect(output).toEqual(4000);
});
