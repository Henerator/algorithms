const { wordBreak } = require('./140-word-break-2');

test('test 1', () => {
  const output = wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']);
  expect(output.sort()).toEqual(['cat sand dog', 'cats and dog'].sort());
});

test('test 2', () => {
  const output = wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']);
  expect(output.sort()).toEqual(['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'].sort());
});

test('test 3', () => {
  const output = wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']);
  expect(output).toEqual([]);
});
