const { longestPalindrome } = require('./5-longest-palindromic-substring');

it('odd palindrome at the beginning', () => {
  const input = 'babad';
  const output = longestPalindrome(input);
  expect(output).toEqual('bab');
});

it('odd palindrome in the center', () => {
  const input = 'egbabad';
  const output = longestPalindrome(input);
  expect(output).toEqual('bab');
});

it('odd palindrome at the end', () => {
  const input = 'egbab';
  const output = longestPalindrome(input);
  expect(output).toEqual('bab');
});

it('odd nested palindrome', () => {
  const input = 'dcbcccbca';
  const output = longestPalindrome(input);
  expect(output).toEqual('cbcccbc');
});

it('even palindrome at the beginning', () => {
  const input = 'cbbcd';
  const output = longestPalindrome(input);
  expect(output).toEqual('cbbc');
});

it('even palindrome in the center', () => {
  const input = 'ecbbcd';
  const output = longestPalindrome(input);
  expect(output).toEqual('cbbc');
});

it('even palindrome at the end', () => {
  const input = 'decbbc';
  const output = longestPalindrome(input);
  expect(output).toEqual('cbbc');
});

it('even nested palindrome', () => {
  const input = 'dcbbccbbca';
  const output = longestPalindrome(input);
  expect(output).toEqual('cbbccbbc');
});
