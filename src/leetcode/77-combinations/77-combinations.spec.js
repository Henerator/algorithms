const { combine } = require('./77-combinations');

it('test 1', () => {
  const output = combine(4, 2);
  expect(output).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ]);
});

it('test 2', () => {
  const output = combine(1, 1);
  expect(output).toEqual([[1]]);
});

it('test 3', () => {
  const output = combine(2, 1);
  expect(output).toEqual([[1], [2]]);
});

it('test 4', () => {
  const output = combine(3, 3);
  expect(output).toEqual([[1, 2, 3]]);
});
