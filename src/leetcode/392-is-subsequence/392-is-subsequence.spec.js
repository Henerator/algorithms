const { isSubsequence } = require('./392-is-subsequence');

it('test 1', () => {
  const output = isSubsequence('abc', 'ahbgdc');
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = isSubsequence('axc', 'ahbgdc');
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = isSubsequence('ace', 'abcde');
  expect(output).toEqual(true);
});

it('test 4', () => {
  const output = isSubsequence('aec', 'abcde');
  expect(output).toEqual(false);
});

it('test 5', () => {
  const output = isSubsequence('aec', '');
  expect(output).toEqual(false);
});

it('test 6', () => {
  const output = isSubsequence('', 'text');
  expect(output).toEqual(true);
});

it('test 7', () => {
  const output = isSubsequence('', '');
  expect(output).toEqual(true);
});
