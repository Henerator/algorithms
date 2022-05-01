const { canConstruct } = require("./383-ransom-note");

test("test 1", () => {
  const output = canConstruct("a", "b");
  expect(output).toBe(false);
});

test("test 2", () => {
  const output = canConstruct("aa", "ab");
  expect(output).toBe(false);
});

test("test 3", () => {
  const output = canConstruct("abc", "def");
  expect(output).toBe(false);
});

test("test 4", () => {
  const output = canConstruct("abcdd", "dd");
  expect(output).toBe(false);
});

test("test 5", () => {
  const output = canConstruct("aa", "aab");
  expect(output).toBe(true);
});

test("test 6", () => {
  const output = canConstruct("bcd", "bcd");
  expect(output).toBe(true);
});
