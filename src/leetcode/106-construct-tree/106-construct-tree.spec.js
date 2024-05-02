const { buildTree } = require('./106-construct-tree');

it('test 1', () => {
  const output = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
  expect(output).toEqual({
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 20,
      left: {
        val: 15,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  });
});

it('test 2', () => {
  const output = buildTree([-1], [-1]);
  expect(output).toEqual({ val: -1, left: null, right: null });
});
