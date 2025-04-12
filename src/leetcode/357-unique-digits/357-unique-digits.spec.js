const { countNumbersWithUniqueDigits } = require('./357-unique-digits');

it('test 1', () => {
  const output = countNumbersWithUniqueDigits(2);
  expect(output).toEqual(91);
});

it('test 2', () => {
  const output = countNumbersWithUniqueDigits(0);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = countNumbersWithUniqueDigits(1);
  expect(output).toEqual(10);
});

it('test 4', () => {
  const output = countNumbersWithUniqueDigits(4);
  expect(output).toEqual(5275);
});

it('test 5', () => {
  const output = countNumbersWithUniqueDigits(5);
  expect(output).toEqual(32491);
});
