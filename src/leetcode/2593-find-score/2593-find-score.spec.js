const { findScore } = require('./2593-find-score');

it('test 1', () => {
  const output = findScore([2, 1, 3, 4, 5, 2]);
  expect(output).toEqual(7);
});

it('test 2', () => {
  const output = findScore([2, 3, 5, 1, 3, 2]);
  expect(output).toEqual(5);
});

it('test 3', () => {
  const output = findScore([0]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = findScore([1]);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = findScore([2, 1, 3]);
  expect(output).toEqual(1);
});

it('test 6', () => {
  const output = findScore([1, 2, 3]);
  expect(output).toEqual(4);
});
