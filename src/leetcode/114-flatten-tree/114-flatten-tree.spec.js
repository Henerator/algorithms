const { flatten } = require('./114-flatten-tree');

it('test 1', () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3 },
      right: { val: 4 },
    },
    right: {
      val: 5,
      right: { val: 6 },
    },
  };
  expect(flatten(root)).toEqual({
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: {
          val: 4,
          left: null,
          right: {
            val: 5,
            left: null,
            right: {
              val: 6,
            },
          },
        },
      },
    },
  });
});

it('test 2', () => {
  const root = null;
  expect(flatten(root)).toEqual(null);
});

it('test 3', () => {
  const root = { val: 0 };
  expect(flatten(root)).toEqual({ val: 0 });
});
