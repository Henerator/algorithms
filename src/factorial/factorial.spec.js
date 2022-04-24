const factorial = require("./factorial");

test("1", () => {
  const input = 1;
  const output = factorial(input);

  expect(output).toEqual(1);
});

test("2", () => {
  const input = 2;
  const output = factorial(input);

  expect(output).toEqual(2);
});

test("3", () => {
  const input = 3;
  const output = factorial(input);

  expect(output).toEqual(6);
});

test("4", () => {
  const input = 4;
  const output = factorial(input);

  expect(output).toEqual(24);
});

test("5", () => {
  const input = 5;
  const output = factorial(input);

  expect(output).toEqual(120);
});
