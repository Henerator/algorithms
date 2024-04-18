const { evalRPN } = require('./150-polish-notation');

it('test 1', () => {
  const output = evalRPN(['2', '1', '+', '3', '*']);
  expect(output).toEqual(9);
});

it('test 2', () => {
  const output = evalRPN(['4', '13', '5', '/', '+']);
  expect(output).toEqual(6);
});

it('test 3', () => {
  const output = evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
  expect(output).toEqual(22);
});

it('test 4', () => {
  const output = evalRPN(['2', '1', '+']);
  expect(output).toEqual(3);
});

it('test 5', () => {
  const output = evalRPN(['2', '1', '-']);
  expect(output).toEqual(1);
});
