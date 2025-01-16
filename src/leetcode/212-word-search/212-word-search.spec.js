const { findWords } = require('./212-word-search');

it('test 1', () => {
  const output = findWords(
    [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
    ],
    ['oath', 'pea', 'eat', 'rain']
  );
  expect(output).toEqual(['oath', 'eat']);
});

it('test 2', () => {
  const output = findWords(
    [
      ['a', 'b'],
      ['c', 'd'],
    ],
    ['abcb']
  );
  expect(output).toEqual([]);
});
