const { minDistance } = require('./72-distance');

it('test 1', () => {
  const output = minDistance('horse', 'ros');
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = minDistance('intention', 'execution');
  expect(output).toEqual(5);
});

it('test 3', () => {
  const output = minDistance('', '');
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = minDistance('', 'a');
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = minDistance('abc', 'abc');
  expect(output).toEqual(0);
});
