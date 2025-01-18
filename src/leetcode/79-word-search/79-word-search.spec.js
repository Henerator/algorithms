const { exist } = require('./79-word-search');

it('test 1', () => {
  const output = exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  );
  expect(output).toEqual(true);
});

it('test 2', () => {
  const output = exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE'
  );
  expect(output).toEqual(true);
});

it('test 3', () => {
  const output = exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  );
  expect(output).toEqual(false);
});

it('test 4', () => {
  const output = exist([['a']], 'a');
  expect(output).toEqual(true);
});
