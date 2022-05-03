const { getEnergyForUnion } = require("./h-sisyphus");

it("test 1", () => {
  const input = [2, 6];
  const output = getEnergyForUnion(input);

  expect(output).toEqual(8);
});

it("test 2", () => {
  const input = [6, 2, 4];
  const output = getEnergyForUnion(input);

  expect(output).toEqual(18);
});

it("test 3", () => {
  const input = [6, 2, 2, 4];
  const output = getEnergyForUnion(input);

  expect(output).toEqual(26);
});

it("test 4", () => {
  const input = [6];
  const output = getEnergyForUnion(input);

  expect(output).toEqual(0);
});

it("test 5", () => {
  const input = [1, 2, 3, 4, 5];
  const output = getEnergyForUnion(input);

  expect(output).toEqual(33);
});

it("test 6", () => {
  const input = [5, 4, 3, 2, 1];
  const output = getEnergyForUnion(input);

  expect(output).toEqual(33);
});
