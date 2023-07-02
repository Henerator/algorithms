const { firstUniqChar } = require('./387-first-uniq-char');

test('test 1', () => {
  const output = firstUniqChar('leetcode');
  expect(output).toEqual(0);
});

test('test 2', () => {
  const output = firstUniqChar('loveleetcode');
  expect(output).toEqual(2);
});

test('test 3', () => {
  const output = firstUniqChar('aabb');
  expect(output).toEqual(-1);
});
