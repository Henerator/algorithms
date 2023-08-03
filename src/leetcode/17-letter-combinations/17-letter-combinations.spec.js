const { letterCombinations } = require('./17-letter-combinations');

it('test 1', () => {
  const output = letterCombinations('23');
  expect(output).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});

it('test 2', () => {
  const output = letterCombinations('');
  expect(output).toEqual([]);
});

it('test 3', () => {
  const output = letterCombinations('2');
  expect(output).toEqual(['a', 'b', 'c']);
});

it('test 4', () => {
  const output = letterCombinations('22');
  expect(output).toEqual(['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']);
});

it('test 5', () => {
  const output = letterCombinations('72');
  expect(output).toEqual(['pa', 'pb', 'pc', 'qa', 'qb', 'qc', 'ra', 'rb', 'rc', 'sa', 'sb', 'sc']);
});
