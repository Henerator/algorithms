const { getNumberOfGoodPairs } = require("./c-status-200");

test("count = 1", () => {
  const input = [1000000];
  const output = getNumberOfGoodPairs(1, input);
  expect(output).toEqual(0);
});

test("count = 5 with true case", () => {
  const input = [203, 404, 204, 200, 403];
  const output = getNumberOfGoodPairs(5, input);
  expect(output).toEqual(2);
});

test("count = 5 with false case", () => {
  const input = [203, 405, 204, 201, 407];
  const output = getNumberOfGoodPairs(5, input);
  expect(output).toEqual(0);
});

test("count = 3 with true case", () => {
  const input = [2020, 2020, 2021];
  const output = getNumberOfGoodPairs(3, input);
  expect(output).toEqual(1);
});

test("count = 3 with false case", () => {
  const input = [2022, 2020, 2021];
  const output = getNumberOfGoodPairs(3, input);
  expect(output).toEqual(0);
});

test("count = 3 with false case", () => {
  const input = [1000, 2000, 3000, 4000];
  const output = getNumberOfGoodPairs(4, input);
  expect(output).toEqual(6);
});
