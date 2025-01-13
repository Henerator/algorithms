const { canFinish } = require('./207-course-schedule');

it('test 1', () => {
  const output = canFinish(2, [[1, 0]]);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = canFinish(2, [
    [1, 0],
    [0, 1],
  ]);
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = canFinish(5, []);
  expect(output).toEqual(true);
});
