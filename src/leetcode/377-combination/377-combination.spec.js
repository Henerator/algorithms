const { combinationSum4 } = require('./377-combination');

it('test 1', () => {
  const output = combinationSum4([1, 2, 3], 4);
  expect(output).toEqual(7);
});

it('test 2', () => {
  const output = combinationSum4([9], 3);
  expect(output).toEqual(0);
});

it('test 3', () => {
  const output = combinationSum4([1, 2, 3], 1);
  expect(output).toEqual(1);
});

it('test 4', () => {
  const output = combinationSum4([1, 2, 3], 1);
  expect(output).toEqual(1);
});
