const { trap } = require('./42-trapping-water');

it('test 1', () => {
  const output = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  expect(output).toEqual(6);
});

it('test 2', () => {
  const output = trap([4, 2, 0, 3, 2, 5]);
  expect(output).toEqual(9);
});

it('test 3', () => {
  const output = trap([1]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = trap([1, 2]);
  expect(output).toEqual(0);
});

it('test 5', () => {
  const output = trap([1, 2, 3]);
  expect(output).toEqual(0);
});

it('test 6', () => {
  const output = trap([3, 2, 1]);
  expect(output).toEqual(0);
});

it('test 7', () => {
  const output = trap([2, 0, 2]);
  expect(output).toEqual(2);
});

it('test 8', () => {
  const output = trap([2, 0, 1]);
  expect(output).toEqual(1);
});
