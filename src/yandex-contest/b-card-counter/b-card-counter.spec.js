const { getMaxWindowValue } = require('./b-card-counter');

test("count = 1", () => {
  const input = [1];
  const output = getMaxWindowValue(input, 1);

  expect(output).toEqual(1);
});

test("window = 1", () => {
  const input = [1, 2];
  const output = getMaxWindowValue(input, 1);

  expect(output).toEqual(2);
});

test("window < count", () => {
  const input = [5, 8, 2, 1, 3, 4, 11];
  const output = getMaxWindowValue(input, 3);

  expect(output).toEqual(24);
});

test("window = count", () => {
  const input = [1, 2, 3, 4, 5];
  const output = getMaxWindowValue(input, 5);

  expect(output).toEqual(15);
});

test("window < count with overlap", () => {
  const input = [1, 1, 9, 2, 2, 2, 6];
  const output = getMaxWindowValue(input, 4);

  expect(output).toEqual(17);
});
