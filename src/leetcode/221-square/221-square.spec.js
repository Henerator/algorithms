const { maximalSquare } = require('./221-square');

it('test 1', () => {
  const output = maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const output = maximalSquare([
    ['0', '1'],
    ['1', '0'],
  ]);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = maximalSquare([['0']]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = maximalSquare([
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
  ]);
  expect(output).toEqual(16);
});

it('test 5', () => {
  const output = maximalSquare([
    ['0', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '0', '1'],
  ]);
  expect(output).toEqual(25);
});
