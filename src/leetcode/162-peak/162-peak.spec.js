const { findPeakElement } = require('./162-peak');

it('test 1', () => {
  const output = findPeakElement([1, 2, 3, 1]);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
  expect(output).toEqual(5);
});

it('test 3', () => {
  const output = findPeakElement([1]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = findPeakElement([4, 2, 1, 1]);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = findPeakElement([2, 2, 1, 1, 5]);
  expect(output).toEqual(4);
});
