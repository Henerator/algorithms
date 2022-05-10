const { stringMatchesTemplate } = require('./k-regex-v2');

it('test 1', () => {
  const template = '*a*';
  const text = 'adce';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const template = '*';
  const text = 'xyz';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('test 3', () => {
  const template = 'algorithms';
  const text = 'algorithmus';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(false);
});

it('test 4', () => {
  const template = '?';
  const text = 'k';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('test 5', () => {
  const template = '*a*a*';
  const text = 'baccaddd';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('repeated backtrack', () => {
  const template = '*a*a*a';
  const text = 'bababababa';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('double asterisk with char', () => {
  const template = '**a';
  const text = 'a';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('double asterisk with char extended string', () => {
  const template = '**a';
  const text = 'bbba';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('question with asterisk with char positive', () => {
  const template = '*?a';
  const text = 'bba';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('question with asterisk with char negative', () => {
  const template = '*?a';
  const text = 'a';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(false);
});

it('asterisk with question with char', () => {
  const template = '?*a';
  const text = 'a';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(false);
});

it('asterisk with question only', () => {
  const template = '*?';
  const text = 'a';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('questions only', () => {
  const template = '???';
  const text = 'abc';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('chars only', () => {
  const template = 'abc';
  const text = 'abc';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(true);
});

it('chars left with match', () => {
  const template = '*a';
  const text = 'aaabc';
  const output = stringMatchesTemplate(text, template);
  expect(output).toEqual(false);
});
