const { longestCommonPrefix } = require('./14-longest-prefix');

it('test 1', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
});

it('test 2', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
});

it('test 3', () => {
  expect(longestCommonPrefix(['dog'])).toEqual('dog');
});
