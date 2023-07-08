const { findAllConcatenatedWordsInADict } = require('./472-concatenated-words');

test('test 1', () => {
  const output = findAllConcatenatedWordsInADict([
    'cat',
    'cats',
    'catsdogcats',
    'dog',
    'dogcatsdog',
    'hippopotamuses',
    'rat',
    'ratcatdogcat',
  ]);
  expect(output.sort()).toEqual(['catsdogcats', 'dogcatsdog', 'ratcatdogcat'].sort());
});

test('test 2', () => {
  const output = findAllConcatenatedWordsInADict(['cat', 'dog', 'catdog']);
  expect(output.sort()).toEqual(['catdog'].sort());
});
