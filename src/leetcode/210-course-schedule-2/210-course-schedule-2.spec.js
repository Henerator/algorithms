const { findOrder } = require('./210-course-schedule-2');

it('test 1', () => {
  const output = findOrder(2, [[1, 0]]);
  expect(output).toEqual([0, 1]);
});

it('test 2', () => {
  const output = findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]);
  expect(output).toEqual([0, 2, 1, 3]);
});

it('test 3', () => {
  const output = findOrder(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ]);
  expect(output).toEqual([]);
});
