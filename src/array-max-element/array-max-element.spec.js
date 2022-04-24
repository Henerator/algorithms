const arrayMaxElement = require("./array-max-element");

test("1 element", () => {
  const input = [1];
  const output = arrayMaxElement(input);

  expect(output).toEqual(1);
});

test("2 elements", () => {
  const input = [1, 2];
  const output = arrayMaxElement(input);

  expect(output).toEqual(2);
});

test("5 elements", () => {
  const input = [1, 2, 3, 4, 5];
  const output = arrayMaxElement(input);

  expect(output).toEqual(5);
});

test("multidigit values", () => {
  const input = [10, 100, 0, 1000, 1];
  const output = arrayMaxElement(input);

  expect(output).toEqual(1000);
});

test("with negative value", () => {
  const input = [-1, 0, 1];
  const output = arrayMaxElement(input);

  expect(output).toEqual(1);
});
