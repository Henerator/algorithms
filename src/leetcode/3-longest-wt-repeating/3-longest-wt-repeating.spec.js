const { lengthOfLongestSubstring } = require('./3-longest-wt-repeating');

it('one char', () => {
  const input = 'a';
  const output = lengthOfLongestSubstring(input);

  expect(output).toEqual(1);
});

it('one char repeating', () => {
  const input = 'aaaaaa';
  const output = lengthOfLongestSubstring(input);

  expect(output).toEqual(1);
});

it('one repeating', () => {
  const input = 'abcb';
  const output = lengthOfLongestSubstring(input);

  expect(output).toEqual(3);
});

it('multiple repeating', () => {
  const input = 'abcbbaf';
  const output = lengthOfLongestSubstring(input);

  expect(output).toEqual(3);
});
