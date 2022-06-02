const { isMatch } = require('./10-regular-expression');

it('test 1', () => {
  const template = 'a';
  const text = 'aa';
  const output = isMatch(text, template);
  expect(output).toEqual(false);
});

it('test 2', () => {
  const template = 'a*';
  const text = 'aa';
  const output = isMatch(text, template);
  expect(output).toEqual(true);
});

it('test 3', () => {
  const template = '.*';
  const text = 'ab';
  const output = isMatch(text, template);
  expect(output).toEqual(true);
});
