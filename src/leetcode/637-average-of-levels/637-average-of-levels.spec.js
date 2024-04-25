const { averageOfLevels } = require('./637-average-of-levels');

it('test 1', () => {
  const root = {
    val: 3,
    left: { val: 9 },
    right: {
      val: 20,
      left: { val: 15 },
      right: { val: 7 },
    },
  };
  expect(averageOfLevels(root)).toEqual([3.0, 14.5, 11.0]);
});

it('test 2', () => {
  const root = {
    val: 3,
    left: {
      val: 9,
      left: { val: 15 },
      right: { val: 7 },
    },
    right: {
      val: 20,
    },
  };
  expect(averageOfLevels(root)).toEqual([3.0, 14.5, 11.0]);
});
