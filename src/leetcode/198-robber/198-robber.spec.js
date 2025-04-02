const { rob } = require('./198-robber');

it('test 1', () => {
  const output = rob([1, 2, 3, 1]);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const output = rob([2, 7, 9, 3, 1]);
  expect(output).toEqual(12);
});

it('test 3', () => {
  const output = rob([7, 2, 9, 3, 1]);
  expect(output).toEqual(17);
});

it('test 4', () => {
  const output = rob([1]);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = rob([1, 2]);
  expect(output).toEqual(2);
});
