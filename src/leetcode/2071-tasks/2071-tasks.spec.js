const { maxTaskAssign } = require('./2071-tasks');

it('test 1', () => {
  const output = maxTaskAssign([3, 2, 1], [0, 3, 3], 1, 1);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = maxTaskAssign([5, 4], [0, 0, 0], 1, 5);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = maxTaskAssign([10, 15, 30], [0, 10, 10, 10, 10], 3, 10);
  expect(output).toEqual(2);
});

it('test 4', () => {
  const output = maxTaskAssign([10], [0, 1, 2, 3], 0, 0);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = maxTaskAssign([10], [0, 1, 2, 3], 1, 8);
  expect(output).toEqual(1);
});

it('test 6', () => {
  const output = maxTaskAssign([1, 8], [3, 7], 1, 4);
  expect(output).toEqual(2);
});

it('test 7', () => {
  const output = maxTaskAssign([5, 9, 8, 5, 9], [1, 6, 4, 2, 6], 1, 5);
  expect(output).toEqual(3);
});
