const { generateParenthesis } = require('./22-generate-parentheses');

it('test 1', () => {
  const output = generateParenthesis(1);
  expect(output).toEqual(['()']);
});

it('test 2', () => {
  const output = generateParenthesis(2);
  expect(output).toEqual(['(())', '()()']);
});

it('test 3', () => {
  const output = generateParenthesis(3);
  expect(output).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
});
