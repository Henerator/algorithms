const { minMutation } = require('./433-mutation');

it('test 1', () => {
  const output = minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']);
  expect(output).toEqual(1);
});

it('test 2', () => {
  const output = minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA']);
  expect(output).toEqual(2);
});
