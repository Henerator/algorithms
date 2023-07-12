const { maxSlidingWindow } = require('./239-sliding-window-maximum');

it('test 1', () => {
  const output = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
  expect(output).toEqual([3, 3, 5, 5, 6, 7]);
});

it('test 2', () => {
  const output = maxSlidingWindow([1], 1);
  expect(output).toEqual([1]);
});

it('test 3', () => {
  const output = maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5);
  expect(output).toEqual([10, 10, 9, 2]);
});
