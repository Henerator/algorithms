const { change } = require('./518-coin-change');

it('test 1', () => {
  const output = change(5, [1, 2, 5]);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const output = change(3, [2]);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = change(10, [10]);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = change(500, [1, 2, 3, 5]);
  expect(output).toEqual(717587);
});
