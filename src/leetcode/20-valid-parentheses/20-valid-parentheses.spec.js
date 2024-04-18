const { isValid } = require('./20-valid-parentheses');

it('test 1', () => {
  expect(isValid('()')).toEqual(true);
});

it('test 2', () => {
  expect(isValid('()[]{}')).toEqual(true);
});

it('test 3', () => {
  expect(isValid('(]')).toEqual(false);
});

it('test 4', () => {
  expect(isValid('(')).toEqual(false);
});

it('test 5', () => {
  expect(isValid(')')).toEqual(false);
});

it('test 6', () => {
  expect(isValid('([{}])()')).toEqual(true);
});
