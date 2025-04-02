const { lengthOfLIS } = require('./300-lis');

it('test 1', () => {
  const output = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const output = lengthOfLIS([0, 1, 0, 3, 2, 3]);
  expect(output).toEqual(4);
});

it('test 3', () => {
  const output = lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = lengthOfLIS([10]);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = lengthOfLIS([1, -2, -1, 3, 4, 2]);
  expect(output).toEqual(4);
});

it('test 4', () => {
  const output = lengthOfLIS([1, 10, 11, 12, 2, 3, 4, 5]);
  expect(output).toEqual(5);
});
