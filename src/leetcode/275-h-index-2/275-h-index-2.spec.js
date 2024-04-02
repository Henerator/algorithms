const { hIndex } = require('./275-h-index-2');

it('test 1', () => {
  expect(hIndex([0, 1, 3, 5, 6])).toEqual(3);
});

it('test 2', () => {
  expect(hIndex([1, 1, 3])).toEqual(1);
});

it('test 3', () => {
  expect(hIndex([1, 2, 3, 4, 5])).toEqual(3);
});

it('test 4', () => {
  expect(hIndex([1, 2, 2, 4, 5])).toEqual(2);
});

it('test 5', () => {
  expect(hIndex([10, 20])).toEqual(2);
});
