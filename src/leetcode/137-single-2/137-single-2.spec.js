const { singleNumber } = require('./137-single-2');

it('test 1', () => {
  const output = singleNumber([2, 2, 3, 2]);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = singleNumber([0, 1, 0, 1, 0, 1, 99]);
  expect(output).toEqual(99);
});

it('test 3', () => {
  const output = singleNumber([1]);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = singleNumber([-10, -10, -10, -2, -3, -3, -3]);
  expect(output).toEqual(-2);
});
