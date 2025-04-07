const { canPartition } = require('./416-subset-sum');

it('test 1', () => {
  const output = canPartition([1, 5, 11, 5]);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = canPartition([1, 2, 3, 5]);
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = canPartition([1, 5, 7]);
  expect(output).toEqual(false);
});

it('test 4', () => {
  const output = canPartition([1]);
  expect(output).toEqual(false);
});

it('test 5', () => {
  const output = canPartition([1, 5, 10, 1, 5]);
  expect(output).toEqual(true);
});
