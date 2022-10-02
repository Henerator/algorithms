const { rotate } = require('./48-rotate');

it('test 1', () => {
  const input = [[5]];
  const output = rotate(input);
  expect(output).toEqual([[5]]);
});

it('test 2', () => {
  const input = [
    [1, 2],
    [3, 4],
  ];
  const output = rotate(input);
  expect(output).toEqual([
    [3, 1],
    [4, 2],
  ]);
});

it('test 3', () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const output = rotate(input);
  expect(output).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});

it('test 4', () => {
  const input = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ];
  const output = rotate(input);
  expect(output).toEqual([
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ]);
});
