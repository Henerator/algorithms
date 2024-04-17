const { longestConsecutive } = require('./128-longest-sequence');

it('test 1', () => {
  const output = longestConsecutive([100, 4, 200, 1, 3, 2]);
  expect(output).toEqual(4);
});

it('test 2', () => {
  const output = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
  expect(output).toEqual(9);
});

it('test 3', () => {
  const output = longestConsecutive([]);
  expect(output).toEqual(0);
});

it('test 4', () => {
  const output = longestConsecutive([1]);
  expect(output).toEqual(1);
});

it('test 5', () => {
  const output = longestConsecutive([1, 7]);
  expect(output).toEqual(1);
});

it('test 6', () => {
  const output = longestConsecutive([-1, 0, 1]);
  expect(output).toEqual(3);
});
