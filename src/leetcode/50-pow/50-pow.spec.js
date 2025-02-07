const { myPow } = require('./50-pow');

it('test 1', () => {
  const output = myPow(2, 10);
  expect(output).toEqual(1024);
});

it('test 2', () => {
  const output = myPow(2.1, 3);
  expect(output).toEqual(9.261000000000001);
});

it('test 3', () => {
  const output = myPow(2, -2);
  expect(output).toEqual(0.25);
});
