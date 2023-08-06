const { uniquePaths } = require('./62-unique-paths');

it('test 1', () => {
  const output = uniquePaths(3, 7);
  expect(output).toEqual(28);
});

it('test 2', () => {
  const output = uniquePaths(3, 2);
  expect(output).toEqual(3);
});

it('test 3', () => {
  const output = uniquePaths(1, 1);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = uniquePaths(1, 10);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = uniquePaths(10, 1);
  expect(output).toEqual(1);
});

it('test 6', () => {
  const output = uniquePaths(2, 2);
  expect(output).toEqual(2);
});

it('test 7', () => {
  const output = uniquePaths(3, 3);
  expect(output).toEqual(6);
});
