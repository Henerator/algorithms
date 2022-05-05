const { getAllPeacefulCombinations } = require("./j-queens");

it("test 1", () => {
  const output = getAllPeacefulCombinations(3);
  expect(output).toEqual([]);
});

it("test 2", () => {
  const output = getAllPeacefulCombinations(4);
  expect(output).toEqual([
    [2, 4, 1, 3],
    [3, 1, 4, 2],
  ]);
});
