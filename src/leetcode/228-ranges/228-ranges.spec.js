const { summaryRanges } = require('./228-ranges');

it('test 1', () => {
  const output = summaryRanges([0, 1, 2, 4, 5, 7]);
  expect(output).toEqual(['0->2', '4->5', '7']);
});

it('test 2', () => {
  const output = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
  expect(output).toEqual(['0', '2->4', '6', '8->9']);
});

it('test 3', () => {
  const output = summaryRanges([]);
  expect(output).toEqual([]);
});

it('test 4', () => {
  const output = summaryRanges([1]);
  expect(output).toEqual(['1']);
});

it('test 5', () => {
  const output = summaryRanges([1, 2]);
  expect(output).toEqual(['1->2']);
});

it('test 4', () => {
  const output = summaryRanges([1, 3]);
  expect(output).toEqual(['1', '3']);
});
