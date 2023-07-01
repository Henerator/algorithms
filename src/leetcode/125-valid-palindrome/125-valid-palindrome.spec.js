const { isPalindrome } = require('./125-valid-palindrome');

it('test 1', () => {
  const input = 'A man, a plan, a canal: Panama';
  const output = isPalindrome(input);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const input = 'race a car';
  const output = isPalindrome(input);
  expect(output).toEqual(false);
});

it('test 3', () => {
  const input = ' ';
  const output = isPalindrome(input);
  expect(output).toEqual(true);
});
