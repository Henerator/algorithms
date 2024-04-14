const { merge } = require('./56-merge-intervals');

it('test 1', () => {
  const output = merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]);
  expect(output).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

it('test 2', () => {
  const output = merge([
    [1, 4],
    [4, 5],
  ]);
  expect(output).toEqual([[1, 5]]);
});

it('test 3', () => {
  const output = merge([[1, 3]]);
  expect(output).toEqual([[1, 3]]);
});

it('test 4', () => {
  const output = merge([
    [1, 3],
    [4, 5],
    [6, 10],
    [15, 18],
  ]);
  expect(output).toEqual([
    [1, 3],
    [4, 5],
    [6, 10],
    [15, 18],
  ]);
});

it('test 5', () => {
  const output = merge([
    [1, 5],
    [1, 3],
    [2, 10],
  ]);
  expect(output).toEqual([[1, 10]]);
});

it('test 6', () => {
  const output = merge([
    [1, 4],
    [2, 3],
  ]);
  expect(output).toEqual([[1, 4]]);
});

it('test 7', () => {
  const output = merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ]);
  expect(output).toEqual([[1, 10]]);
});
