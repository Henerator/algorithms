const { simplifyPath } = require('./71-simplify-path');

it('test 1', () => {
  const output = simplifyPath('/home/');
  expect(output).toEqual('/home');
});

it('test 2', () => {
  const output = simplifyPath('/../');
  expect(output).toEqual('/');
});

it('test 3', () => {
  const output = simplifyPath('/home//foo/');
  expect(output).toEqual('/home/foo');
});

it('test 4', () => {
  const output = simplifyPath('/');
  expect(output).toEqual('/');
});

it('test 5', () => {
  const output = simplifyPath('///.././/');
  expect(output).toEqual('/');
});
