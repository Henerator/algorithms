const { isAnagram } = require('./242-valid-anagram');

it('test 1', () => {
  const output = isAnagram('anagram', 'nagaram');
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = isAnagram('rat', 'car');
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = isAnagram('anag', 'ana');
  expect(output).toEqual(false);
});

it('test 4', () => {
  const output = isAnagram('a', 'a');
  expect(output).toEqual(true);
});
