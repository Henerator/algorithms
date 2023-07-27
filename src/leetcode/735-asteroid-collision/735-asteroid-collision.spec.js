const { asteroidCollision } = require('./735-asteroid-collision');

it('test 1', () => {
  const output = asteroidCollision([5, 10, -5]);
  expect(output).toEqual([5, 10]);
});

it('test 2', () => {
  const output = asteroidCollision([8, -8]);
  expect(output).toEqual([]);
});

it('test 3', () => {
  const output = asteroidCollision([10, 2, -5]);
  expect(output).toEqual([10]);
});

it('test 4', () => {
  const output = asteroidCollision([10, 2, -5, -20]);
  expect(output).toEqual([-20]);
});

it('test 4', () => {
  const output = asteroidCollision([20, 10, 5, -5, -10, -20]);
  expect(output).toEqual([]);
});

it('test 5', () => {
  const output = asteroidCollision([-2, -1, 1, 2]);
  expect(output).toEqual([-2, -1, 1, 2]);
});
