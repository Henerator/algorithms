const { isInterleave } = require('./97-interleaving');

it('test 1', () => {
  const output = isInterleave('aabcc', 'dbbca', 'aadbbcbcac');
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = isInterleave('aabcc', 'dbbca', 'aadbbbaccc');
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = isInterleave('', '', '');
  expect(output).toEqual(true);
});

it('test 4', () => {
  const output = isInterleave('a', 'b', 'bc');
  expect(output).toEqual(false);
});

it('test 5', () => {
  const output = isInterleave('a', 'b', 'abc');
  expect(output).toEqual(false);
});

it('test 6', () => {
  const output = isInterleave('', 'bc', 'bc');
  expect(output).toEqual(true);
});

it('test 7', () => {
  const output = isInterleave('bc', '', 'bc');
  expect(output).toEqual(true);
});
