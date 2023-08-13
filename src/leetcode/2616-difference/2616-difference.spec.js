const { minimizeMax } = require('./2616-difference');

it('test 1', () => {
  const output = minimizeMax([10, 1, 2, 7, 1, 3], 2);
  expect(output).toEqual(1);
});

it('test 2', () => {
  const output = minimizeMax([4, 2, 1, 2], 1);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = minimizeMax([4, 2, 1, 2], 0);
  expect(output).toEqual(0);
});
