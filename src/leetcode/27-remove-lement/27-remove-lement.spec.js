const { removeElement } = require('./27-remove-lement');

it('test 1', () => {
  const output = removeElement([3, 2, 2, 3], 3);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
  expect(output).toEqual(5);
});

it('test 3', () => {
  const output = removeElement([1], 1);
  expect(output).toEqual(0);
});
