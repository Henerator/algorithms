const sortQuick = require("./sort-quick");

test("empty", () => {
  const input = [];
  const output = sortQuick(input);

  expect(output).toEqual([]);
});

test("1 element", () => {
  const input = [1];
  const output = sortQuick(input);

  expect(output).toEqual([1]);
});

test("2 elements", () => {
  const input = [2, 1];
  const output = sortQuick(input);

  expect(output).toEqual([1, 2]);
});

test("reversed", () => {
  const input = [5, 4, 3, 2, 1];
  const output = sortQuick(input);

  expect(output).toEqual([1, 2, 3, 4, 5]);
});

test("multidigit values", () => {
  const input = [100, 1, 1000, 10000, 100000];
  const output = sortQuick(input);

  expect(output).toEqual([1, 100, 1000, 10000, 100000]);
});

test("with negative values", () => {
  const input = [5, 4, 3, -3, -4, -5];
  const output = sortQuick(input);

  expect(output).toEqual([-5, -4, -3, 3, 4, 5]);
});
