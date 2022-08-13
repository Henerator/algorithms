const { maxArea } = require('./11-most-water');

it('test 1', () => {
  const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  const output = maxArea(input);
  expect(output).toEqual(49);
});

it('test 2', () => {
  const input = [1, 1];
  const output = maxArea(input);
  expect(output).toEqual(1);
});
