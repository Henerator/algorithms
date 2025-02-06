const { mySqrt } = require('./69-sqrt');

it('test 0', () => {
  const output = mySqrt(0);
  expect(output).toEqual(0);
});

it('test 1', () => {
  const output = mySqrt(1);
  expect(output).toEqual(1);
});

it('test 2', () => {
  const output = mySqrt(2);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = mySqrt(3);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = mySqrt(4);
  expect(output).toEqual(2);
});

it('test 5', () => {
  const output = mySqrt(5);
  expect(output).toEqual(2);
});
