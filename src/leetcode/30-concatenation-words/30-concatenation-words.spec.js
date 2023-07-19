const { findSubstring } = require('./30-concatenation-words');

it('test 1', () => {
  const output = findSubstring('barfoothefoobarman', ['foo', 'bar']);
  expect(output).toEqual([0, 9]);
});

it('test 2', () => {
  const output = findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']);
  expect(output).toEqual([]);
});

it('test 3', () => {
  const output = findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']);
  expect(output).toEqual([6, 9, 12]);
});

it('test 4', () => {
  const output = findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good']);
  expect(output).toEqual([8]);
});
