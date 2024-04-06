const { intToRoman } = require('./12-int-to-roman');

it('test 1', () => {
  expect(intToRoman(3)).toEqual('III');
});

it('test 2', () => {
  expect(intToRoman(58)).toEqual('LVIII');
});

it('test 3', () => {
  expect(intToRoman(1994)).toEqual('MCMXCIV');
});

it('test 4', () => {
  expect(intToRoman(3999)).toEqual('MMMCMXCIX');
});

it('test 5', () => {
  expect(intToRoman(4)).toEqual('IV');
});

it('test 6', () => {
  expect(intToRoman(6)).toEqual('VI');
});

it('test 7', () => {
  expect(intToRoman(8)).toEqual('VIII');
});

it('test 8', () => {
  expect(intToRoman(9)).toEqual('IX');
});

it('test 10', () => {
  expect(intToRoman(11)).toEqual('XI');
});

it('test 11', () => {
  expect(intToRoman(13)).toEqual('XIII');
});

it('test 12', () => {
  expect(intToRoman(14)).toEqual('XIV');
});

it('test 13', () => {
  expect(intToRoman(16)).toEqual('XVI');
});

it('test 14', () => {
  expect(intToRoman(18)).toEqual('XVIII');
});

it('test 15', () => {
  expect(intToRoman(19)).toEqual('XIX');
});

it('test 16', () => {
  expect(intToRoman(51)).toEqual('LI');
});

it('test 17', () => {
  expect(intToRoman(54)).toEqual('LIV');
});

it('test 18', () => {
  expect(intToRoman(101)).toEqual('CI');
});

it('test 18', () => {
  expect(intToRoman(144)).toEqual('CXLIV');
});
