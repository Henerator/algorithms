const { convertToGoodString } = require("./f-good-strings");

test("test 1", () => {
  const input = 'vxOoOoVvx';
  const output = convertToGoodString(input);

  expect(output).toEqual('vxx');
});

test("test 2", () => {
  const input = 'abBa';
  const output = convertToGoodString(input);

  expect(output).toEqual('aa');
});

test("test 3", () => {
  const input = 'AbBa';
  const output = convertToGoodString(input);

  expect(output).toEqual('');
});

test("test 4", () => {
  const input = 'abcdefghHGFEDCBA';
  const output = convertToGoodString(input);

  expect(output).toEqual('');
});

test("test 5", () => {
  const input = '';
  const output = convertToGoodString(input);

  expect(output).toEqual('');
});

test("test 6", () => {
  const input = 'a';
  const output = convertToGoodString(input);

  expect(output).toEqual('a');
});

test("test 7", () => {
  const input = 'Aa';
  const output = convertToGoodString(input);

  expect(output).toEqual('');
});
