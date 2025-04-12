const { countSymmetricIntegers } = require('./2843-dpd-symmetric');

it('test 1', () => {
  const output = countSymmetricIntegers(1, 100);
  expect(output).toEqual(9);
});

it('test 2', () => {
  const output = countSymmetricIntegers(1200, 1230);
  expect(output).toEqual(4);
});

it('test 3', () => {
  const output = countSymmetricIntegers(1, 1);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = countSymmetricIntegers(101, 999);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = countSymmetricIntegers(1, 10000);
  expect(output).toEqual(624);
});
