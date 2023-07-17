const { minWindow } = require('./76-min-window-substring');

it('test 1', () => {
  const output = minWindow('ADOBECODEBANC', 'ABC');
  expect(output).toEqual('BANC');
});

it('test 2', () => {
  const output = minWindow('ABCDEFBBC', 'BC');
  expect(output).toEqual('BC');
});

it('test 3', () => {
  const output = minWindow('a', 'a');
  expect(output).toEqual('a');
});

it('test 4', () => {
  const output = minWindow('a', 'aa');
  expect(output).toEqual('');
});
