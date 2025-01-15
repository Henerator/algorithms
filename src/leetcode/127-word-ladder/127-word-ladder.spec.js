const { ladderLength } = require('./127-word-ladder');

it('test 1', () => {
  const output = ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
  expect(output).toEqual(5);
});

it('test 2', () => {
  const output = ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']);
  expect(output).toEqual(0);
});
