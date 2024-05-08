const { numIslands } = require('./200-islands');

it('test 1', () => {
  const output = numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ]);
  expect(output).toEqual(1);
});

it('test 2', () => {
  const output = numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ]);
  expect(output).toEqual(3);
});
