const { candy } = require('./135-candy');

it('test 1', () => {
  const output = candy([1, 0, 2]);
  expect(output).toEqual(5);
});

it('test 2', () => {
  const output = candy([1, 2, 2]);
  expect(output).toEqual(4);
});

it('test 3', () => {
  const output = candy([1]);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = candy([1, 2, 3, 2, 1]);
  expect(output).toEqual(9);
});

it('test 5', () => {
  const output = candy([1, 2, 4, 4, 5, 6, 5, 3, 3, 2, 1]);
  expect(output).toEqual(21);
});
