const { canJump } = require('./55-jump-game');

it('test 1', () => {
  const output = canJump([2, 3, 1, 1, 4]);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = canJump([3, 2, 1, 0, 4]);
  expect(output).toEqual(false);
});

it('test 3', () => {
  const output = canJump([1]);
  expect(output).toEqual(true);
});

it('test 4', () => {
  const output = canJump([1, 2]);
  expect(output).toEqual(true);
});

it('test 5', () => {
  const output = canJump([2, 2]);
  expect(output).toEqual(true);
});

it('test 6', () => {
  const output = canJump([0, 1]);
  expect(output).toEqual(false);
});

it('test 7', () => {
  const output = canJump([2, 0]);
  expect(output).toEqual(true);
});
