const { jump } = require('./45-jump-game-2');

it('test 1', () => {
  const output = jump([2, 3, 1, 1, 4]);
  expect(output).toEqual(2);
});

it('test 2', () => {
  const output = jump([2, 3, 0, 1, 4]);
  expect(output).toEqual(2);
});

it('test 3', () => {
  const output = jump([2]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = jump([1, 1, 1, 1, 4]);
  expect(output).toEqual(4);
});

it('test 5', () => {
  const output = jump([2, 3, 1]);
  expect(output).toEqual(1);
});

it('test 6', () => {
  const output = jump([1, 2, 3, 4, 5]);
  expect(output).toEqual(3);
});
