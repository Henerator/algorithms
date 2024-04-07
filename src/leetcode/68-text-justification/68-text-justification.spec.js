const { fullJustify } = require('./68-text-justification');

it('test 1', () => {
  const output = fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16);
  expect(output).toEqual(['This    is    an', 'example  of text', 'justification.  ']);
});

it('test 2', () => {
  const output = fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16);
  expect(output).toEqual(['What   must   be', 'acknowledgment  ', 'shall be        ']);
});

it('test 3', () => {
  const output = fullJustify(
    [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do',
    ],
    20
  );
  expect(output).toEqual([
    'Science  is  what we',
    'understand      well',
    'enough to explain to',
    'a  computer.  Art is',
    'everything  else  we',
    'do                  ',
  ]);
});
