const { maxResult } = require('./1696-jump-game');

it('test 1', () => {
  const output = maxResult([1, -1, -2, 4, -7, 3], 2);
  expect(output).toEqual(7);
});

it('test 2', () => {
  const output = maxResult([10, -5, -2, 4, 0, 3], 3);
  expect(output).toEqual(17);
});

it('test 3', () => {
  const output = maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2);
  expect(output).toEqual(0);
});
