const { removeDuplicates } = require('./26-remove-duplicates');

it('one duplicate', () => {
  const input = [11, 2];
  const output = removeDuplicates(input);
  expect(output).toEqual(2);
});

it('multiple duplicates', () => {
  const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const output = removeDuplicates(input);
  expect(output).toEqual(5);
});

it('negative numbers', () => {
  const input = [-10, -5, -5, -5, -4, -4, -3];
  const output = removeDuplicates(input);
  expect(output).toEqual(4);
});

it('negative with positive numbers', () => {
  const input = [-5, -5, -5, -4, -4, -3, 0, 1, 2, 2, 3, 3, 5];
  const output = removeDuplicates(input);
  expect(output).toEqual(8);
});
