const { maxKelements } = require('./2530-max-score');

it('test 1', () => {
  const output = maxKelements([10, 10, 10, 10, 10], 5);
  expect(output).toEqual(50);
});

it('test 2', () => {
  const output = maxKelements([1, 10, 3, 3, 3], 3);
  expect(output).toEqual(17);
});

it('test 3', () => {
  const output = maxKelements([1], 1);
  expect(output).toEqual(1);
});
