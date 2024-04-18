const { calculate } = require('./224-basic-calc');

it('test 1', () => {
  const output = calculate('1 + 1');
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = calculate(' 2-1 + 2 ');
  expect(output).toEqual(3);
});

it('test 3', () => {
  const output = calculate('(1+(4+5+2)-3)+(6+8)');
  expect(output).toEqual(23);
});
