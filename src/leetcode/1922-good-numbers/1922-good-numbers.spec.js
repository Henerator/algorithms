const { countGoodNumbers } = require('./1922-good-numbers');

it('test 1', () => {
  const output = countGoodNumbers(1);
  expect(output).toEqual(5);
});

it('test 2', () => {
  const output = countGoodNumbers(4);
  expect(output).toEqual(400);
});

it('test 3', () => {
  const output = countGoodNumbers(50);
  expect(output).toEqual(564908303);
});
