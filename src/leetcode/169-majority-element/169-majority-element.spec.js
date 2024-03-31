const { majorityElement } = require('./169-majority-element');

it('test 1', () => {
  const output = majorityElement([3, 2, 3]);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = majorityElement([2, 2, 1, 1, 1, 2, 2]);
  expect(output).toEqual(2);
});

it('test 3', () => {
  const output = majorityElement([1]);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = majorityElement([1, 1]);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = majorityElement([1, 1, 2]);
  expect(output).toEqual(1);
});
