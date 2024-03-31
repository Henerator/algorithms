const { removeDuplicates } = require('./80-remove-duplicates');

it('test 1', () => {
  const output = removeDuplicates([1, 1, 1, 2, 2, 3]);
  expect(output).toEqual(5);
});

it('test 2', () => {
  const output = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
  expect(output).toEqual(7);
});

it('test 3', () => {
  const output = removeDuplicates([1]);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = removeDuplicates([1, 1]);
  expect(output).toEqual(2);
});

it('test 5', () => {
  const output = removeDuplicates([1, 1, 1]);
  expect(output).toEqual(2);
});

it('test 6', () => {
  const output = removeDuplicates([1, 1, 2]);
  expect(output).toEqual(3);
});
