const { maxSubarraySumCircular } = require('./918-max-sum');

it('test 1', () => {
  const output = maxSubarraySumCircular([1, -2, 3, -2]);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = maxSubarraySumCircular([5, -3, 5]);
  expect(output).toEqual(10);
});

it('test 3', () => {
  const output = maxSubarraySumCircular([-3, -2, -3]);
  expect(output).toEqual(-2);
});

it('test 4', () => {
  const output = maxSubarraySumCircular([-3]);
  expect(output).toEqual(-3);
});

it('test 5', () => {
  const output = maxSubarraySumCircular([3]);
  expect(output).toEqual(3);
});

it('test 6', () => {
  const output = maxSubarraySumCircular([9, -4, -7, 9]);
  expect(output).toEqual(18);
});
