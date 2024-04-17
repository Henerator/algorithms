const { wordPattern } = require('./290-word-pattern');

it('test 1', () => {
  const output = wordPattern('abba', 'dog cat cat dog');
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = wordPattern('abba', 'dog cat cat fish');
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = wordPattern('aaaa', 'dog cat cat dog');
  expect(output).toEqual(false);
});

it('test 4', () => {
  const output = wordPattern('a', 'dog');
  expect(output).toEqual(true);
});

it('test 5', () => {
  const output = wordPattern('a', 'dog cat');
  expect(output).toEqual(false);
});

it('test 6', () => {
  const output = wordPattern('ab', 'dog cat');
  expect(output).toEqual(true);
});
