const { maxPoints } = require('./149-max-points');

it('test 1', () => {
  const output = maxPoints([
    [1, 1],
    [2, 2],
    [3, 3],
  ]);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ]);
  expect(output).toEqual(4);
});

it('test 3', () => {
  const output = maxPoints([[1, 1]]);
  expect(output).toEqual(1);
});
