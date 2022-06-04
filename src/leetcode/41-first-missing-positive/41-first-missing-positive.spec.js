const { firstMissingPositive } = require('./41-first-missing-positive');

it('test 1', () => {
  const input = [1, 2, 0];
  const output = firstMissingPositive(input);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const input = [3, 4, -1, 1];
  const output = firstMissingPositive(input);
  expect(output).toEqual(2);
});

it('test 3', () => {
  const input = [7, 8, 9, 11, 12];
  const output = firstMissingPositive(input);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const input = [0, 0, 0, 1, 2];
  const output = firstMissingPositive(input);
  expect(output).toEqual(3);
});

it('test 5', () => {
  const input = [-5, -4, -3, -2, 1];
  const output = firstMissingPositive(input);
  expect(output).toEqual(2);
});

it('test 6', () => {
  const input = [-1, 1, 2, 3, 4, 5];
  const output = firstMissingPositive(input);
  expect(output).toEqual(6);
});

it('test 7', () => {
  const input = [-1, -2];
  const output = firstMissingPositive(input);
  expect(output).toEqual(1);
});

it('test 7', () => {
  const input = [-1];
  const output = firstMissingPositive(input);
  expect(output).toEqual(1);
});

it('test 8', () => {
  const input = [1];
  const output = firstMissingPositive(input);
  expect(output).toEqual(2);
});
