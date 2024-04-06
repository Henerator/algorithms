const { strStr } = require('./28-find-index');

it('test 1', () => {
  const output = strStr('sadbutsad', 'sad');
  expect(output).toEqual(0);
});

it('test 2', () => {
  const output = strStr('leetcode', 'leeto');
  expect(output).toEqual(-1);
});

it('test 3', () => {
  const output = strStr('leet', 'leetcode');
  expect(output).toEqual(-1);
});

it('test 4', () => {
  const output = strStr('aaaba', 'aab');
  expect(output).toEqual(1);
});
