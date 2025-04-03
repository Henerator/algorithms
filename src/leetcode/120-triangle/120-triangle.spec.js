const { minimumTotal } = require('./120-triangle');

it('test 1', () => {
  const output = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
  expect(output).toEqual(11);
});

it('test 2', () => {
  const output = minimumTotal([[-10]]);
  expect(output).toEqual(-10);
});
