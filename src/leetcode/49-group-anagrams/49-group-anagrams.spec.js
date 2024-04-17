const { groupAnagrams } = require('./49-group-anagrams');

it('test 1', () => {
  const output = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
  expect(output).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
});

it('test 2', () => {
  const output = groupAnagrams(['']);
  expect(output).toEqual([['']]);
});

it('test 3', () => {
  const output = groupAnagrams(['a']);
  expect(output).toEqual([['a']]);
});
