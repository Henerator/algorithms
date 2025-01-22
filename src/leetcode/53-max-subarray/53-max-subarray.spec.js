const { maxSubArray} = require('./53-max-subarray');

it('test 1', () => {
  const output = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
  expect(output).toEqual(6);
});

it('test 2', () => {
  const output = maxSubArray([1]);
  expect(output).toEqual(1);
});

it('test 3', () => {
  const output = maxSubArray([5,4,-1,7,8]);
  expect(output).toEqual(23);
});

it('test 4', () => {
  const output = maxSubArray([-2, -3, -1, -4]);
  expect(output).toEqual(-1);
});

it('test 5', () => {
  const output = maxSubArray([-2, -3, 5, -1, -4]);
  expect(output).toEqual(5);
});
