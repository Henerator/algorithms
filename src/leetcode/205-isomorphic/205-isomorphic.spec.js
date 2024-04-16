const { isIsomorphic } = require('./205-isomorphic');

it('test 1', () => {
  const output = isIsomorphic('egg', 'add');
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = isIsomorphic('foo', 'bar');
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = isIsomorphic('paper', 'title');
  expect(output).toEqual(true);
});

it('test 4', () => {
  const output = isIsomorphic('a', 'b');
  expect(output).toEqual(true);
});

it('test 5', () => {
  const output = isIsomorphic('a', 'a');
  expect(output).toEqual(true);
});
