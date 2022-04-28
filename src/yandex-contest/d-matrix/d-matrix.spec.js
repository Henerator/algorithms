const { getLongestIncreasingPathV2 } = require("./d-matrix");

test("test 1", () => {
  const input = [
    [10, 8, 5],
    [10, 5, 4],
  ];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(4);
});

test("test 2", () => {
  const input = [
    [1, 1],
    [1, 1],
  ];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(1);
});

test("test 3", () => {
  const input = [
    [10, 9],
    [9, 11],
  ];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(2);
});

test("test 4", () => {
  const input = [
    [10, 2, 5, 3],
    [4, 10, 8, 6],
    [2, 1, 5, 4],
  ];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(4);
});

test("test 5", () => {
  const input = [[1]];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(1);
});

test("test 6", () => {
  const input = [[1], [1]];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(1);
});

test("test 7", () => {
  const input = [[1, 1]];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(1);
});

test("test 8", () => {
  const input = [[1], [2], [3], [4]];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(4);
});

test("test 9", () => {
  const input = [[1, 2, 3, 4]];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(4);
});

test("test 10", () => {
  const input = [[4], [3], [2], [1]];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(4);
});

test("test 11", () => {
  const input = [[4, 3, 2, 1]];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(4);
});

test("test 12", () => {
  const input = [
    [10, 2, 5, 12],
    [4, 10, 8, 10],
    [2, 1, 5, 4],
  ];
  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(5);
});

test("test 13", () => {
  const input = [];

  for (let i = 0; i < 1000000; i++) {
    input.push([i + 1]);
  }

  const output = getLongestIncreasingPathV2(input);

  expect(output).toEqual(1000000);
});
