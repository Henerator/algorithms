const { insert } = require('./57-insert-interval');

it('test 1', () => {
  const output = insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  );
  expect(output).toEqual([
    [1, 5],
    [6, 9],
  ]);
});

it('test 2', () => {
  const output = insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  );
  expect(output).toEqual([
    [1, 2],
    [3, 10],
    [12, 16],
  ]);
});

it('test 3', () => {
  const output = insert([], [1, 2]);
  expect(output).toEqual([[1, 2]]);
});

it('test 4', () => {
  const output = insert(
    [
      [1, 3],
      [6, 7],
    ],
    [4, 5]
  );
  expect(output).toEqual([
    [1, 3],
    [4, 5],
    [6, 7],
  ]);
});

it('test 5', () => {
  const output = insert([[1, 5]], [0, 0]);
  expect(output).toEqual([
    [0, 0],
    [1, 5],
  ]);
});
