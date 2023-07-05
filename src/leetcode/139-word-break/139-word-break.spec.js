const { wordBreak } = require('./139-word-break');

test('test 1', () => {
  const output = wordBreak('leetcode', ['leet', 'code']);
  expect(output).toBe(true);
});

test('test 2', () => {
  const output = wordBreak('applepenapple', ['apple', 'pen']);
  expect(output).toBe(true);
});

test('test 3', () => {
  const output = wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']);
  expect(output).toBe(false);
});

test('test 4', () => {
  const output = wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']
  );
  expect(output).toBe(false);
});
