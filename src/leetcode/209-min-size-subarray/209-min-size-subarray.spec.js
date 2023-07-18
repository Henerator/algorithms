const { minSubArrayLen } = require('./209-min-size-subarray');

it('test 1', () => {
  const output = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = minSubArrayLen(4, [1, 4, 4]);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
  expect(output).toEqual(0);
});
