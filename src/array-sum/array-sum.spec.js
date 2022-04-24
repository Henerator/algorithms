const arraySum = require("./array-sum");

test("empty", () => {
  const input = [];
  const output = arraySum(input);

  expect(output).toEqual(0);
});

test("1 element", () => {
  const input = [1];
  const output = arraySum(input);

  expect(output).toEqual(1);
});

test("2 elements", () => {
  const input = [1, 2];
  const output = arraySum(input);

  expect(output).toEqual(3);
});

test("with negative value", () => {
  const input = [-1, 0, 1];
  const output = arraySum(input);

  expect(output).toEqual(0);
});

test("multidigit values", () => {
  const input = [1, 10, 100];
  const output = arraySum(input);

  expect(output).toEqual(111);
});
