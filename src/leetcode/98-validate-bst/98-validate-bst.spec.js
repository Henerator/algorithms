const { isValidBST } = require('./98-validate-bst');

it('test 1', () => {
  const root = {
    val: 2,
    left: { val: 1 },
    right: { val: 3 },
  };
  expect(isValidBST(root)).toEqual(true);
});

it('test 2', () => {
  const root = {
    val: 5,
    left: { val: 1 },
    right: {
      val: 4,
      left: { val: 3 },
      right: { val: 6 },
    },
  };
  expect(isValidBST(root)).toEqual(false);
});

it('test 3', () => {
  const root = { val: 2 };
  expect(isValidBST(root)).toEqual(true);
});

it('test 4', () => {
  const root = {
    val: 5,
    left: { val: 4 },
    right: {
      val: 6,
      left: { val: 3 },
      right: { val: 7 },
    },
  };
  expect(isValidBST(root)).toEqual(false);
});

it('test 5', () => {
  const root = {
    val: 2,
    left: { val: 2 },
    right: { val: 2 },
  };
  expect(isValidBST(root)).toEqual(false);
});
