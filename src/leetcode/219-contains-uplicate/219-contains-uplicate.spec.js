const { containsNearbyDuplicate } = require('./219-contains-uplicate');

it('test 1', () => {
  const output = containsNearbyDuplicate([1, 2, 3, 1], 3);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = containsNearbyDuplicate([1, 0, 1, 1], 1);
  expect(output).toEqual(true);
});

it('test 3', () => {
  const output = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
  expect(output).toEqual(false);
});

it('test 4', () => {
  const output = containsNearbyDuplicate([1], 1);
  expect(output).toEqual(false);
});
