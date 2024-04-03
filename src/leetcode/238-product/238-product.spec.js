const { productExceptSelf } = require('./238-product');

it('test 1', () => {
  const output = productExceptSelf([1, 2, 3, 4]);
  expect(output).toEqual([24, 12, 8, 6]);
});

it('test 2', () => {
  const output = productExceptSelf([-1, 1, 0, -3, 3]);
  expect(output).toEqual([-0, 0, 9, -0, 0]);
});

it('test 3', () => {
  const output = productExceptSelf([1, 1, 1]);
  expect(output).toEqual([1, 1, 1]);
});
