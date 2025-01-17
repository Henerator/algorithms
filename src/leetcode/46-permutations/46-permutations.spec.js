const { permute } = require('./46-permutations');

it('test 1', () => {
  const output = permute([1, 2, 3]);
  expect(output).toEqual([
    [1, 2, 3],
    [2, 1, 3],
    [3, 1, 2],
    [1, 3, 2],
    [2, 3, 1],
    [3, 2, 1],
  ]);
});

it('test 2', () => {
  const output = permute([0, 1]);
  expect(output).toEqual([
    [0, 1],
    [1, 0],
  ]);
});

it('test 3', () => {
  const output = permute([1]);
  expect(output).toEqual([[1]]);
});
