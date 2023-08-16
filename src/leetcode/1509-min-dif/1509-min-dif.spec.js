const { minDifference } = require('./1509-min-dif');

it('test 1', () => {
  const output = minDifference([5, 3, 2, 4]);
  expect(output).toEqual(0);
});

it('test 2', () => {
  const output = minDifference([1, 5, 0, 10, 14]);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = minDifference([3, 100, 20]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = minDifference([6, 6, 0, 1, 1, 4, 6]);
  expect(output).toEqual(2);
});

it('test 5', () => {
  const output = minDifference([82, 81, 95, 75, 20]);
  expect(output).toEqual(1);
});
