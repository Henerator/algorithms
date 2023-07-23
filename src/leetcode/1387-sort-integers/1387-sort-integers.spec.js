const { getKth } = require('./1387-sort-integers');

it('test 1', () => {
  const output = getKth(12, 15, 2);
  console.log(output);
  expect(output).toEqual(13);
});

it('test 2', () => {
  const output = getKth(7, 11, 4);
  expect(output).toEqual(7);
});
