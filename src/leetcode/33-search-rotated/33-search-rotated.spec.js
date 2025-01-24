const { search } = require('./33-search-rotated');

it('test 1', () => {
  const output = search([4, 5, 6, 7, 0, 1, 2], 0);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const output = search([4, 5, 6, 7, 0, 1, 2], 3);
  expect(output).toEqual(-1);
});

it('test 3', () => {
  const output = search([1], 0);
  expect(output).toEqual(-1);
});

it('test 4', () => {
  const output = search([1, 2, 3, 4, 5], 1);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = search([2, 3, 4, 5, 1], 1);
  expect(output).toEqual(4);
});

it('test 6', () => {
  const output = search([4, 5, 6, 7, 8, 1, 2, 3], 8);
  expect(output).toEqual(4);
});
