const { checkInclusion } = require('./567-permutation-string');

it('test 1', () => {
  const output = checkInclusion('ab', 'eidbaooo');
  expect(output).toBe(true);
});

it('test 2', () => {
  const output = checkInclusion('ab', 'eidboaoo');
  expect(output).toBe(false);
});

it('test 3', () => {
  const output = checkInclusion('ab', 'ab');
  expect(output).toBe(true);
});
