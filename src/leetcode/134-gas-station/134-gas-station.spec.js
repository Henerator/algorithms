const { canCompleteCircuit } = require('./134-gas-station');

it('test 1', () => {
  const output = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
  expect(output).toEqual(3);
});

it('test 2', () => {
  const output = canCompleteCircuit([2, 3, 4], [3, 4, 3]);
  expect(output).toEqual(-1);
});

it('test 3', () => {
  const output = canCompleteCircuit([1], [1]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = canCompleteCircuit([1], [2]);
  expect(output).toEqual(-1);
});
