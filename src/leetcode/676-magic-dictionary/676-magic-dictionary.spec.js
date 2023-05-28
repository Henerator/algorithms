const { MagicDictionary } = require('./676-magic-dictionary');

it('test 1', () => {
  const dict = ['hello', 'leetcode'];
  const inputs = [
    {
      text: 'hello',
      result: false,
    },
    {
      text: 'hhllo',
      result: true,
    },
    {
      text: 'hell',
      result: false,
    },
    {
      text: 'leetcoded',
      result: false,
    },
  ];

  const md = new MagicDictionary();
  md.buildDict(dict);

  inputs.forEach(({ text, result }) => {
    expect(md.search(text)).toEqual(result);
  });
});
