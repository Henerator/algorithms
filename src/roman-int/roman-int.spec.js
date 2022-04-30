const { romanToIntV1, romanToIntV2 } = require("./roman-int");

describe("romanToIntV1", () => {
  it("1", () => {
    const input = "I";
    const output = romanToIntV1(input);

    expect(output).toEqual(1);
  });

  it("2", () => {
    const input = "II";
    const output = romanToIntV1(input);

    expect(output).toEqual(2);
  });

  it("< 10", () => {
    const input = "III";
    const output = romanToIntV1(input);

    expect(output).toEqual(3);
  });

  it("< 20", () => {
    const input = "XVIII";
    const output = romanToIntV1(input);

    expect(output).toEqual(18);
  });

  it("1961", () => {
    const input = "MCMLXI";
    const output = romanToIntV1(input);

    expect(output).toEqual(1961);
  });

  it("1994", () => {
    const input = "MCMXCIV";
    const output = romanToIntV1(input);

    expect(output).toEqual(1994);
  });
});

describe("romanToIntV2", () => {
  it("1", () => {
    const input = "I";
    const output = romanToIntV2(input);

    expect(output).toEqual(1);
  });

  it("2", () => {
    const input = "II";
    const output = romanToIntV2(input);

    expect(output).toEqual(2);
  });

  it("< 10", () => {
    const input = "III";
    const output = romanToIntV2(input);

    expect(output).toEqual(3);
  });

  it("< 20", () => {
    const input = "XVIII";
    const output = romanToIntV2(input);

    expect(output).toEqual(18);
  });

  it("1961", () => {
    const input = "MCMLXI";
    const output = romanToIntV2(input);

    expect(output).toEqual(1961);
  });

  it("1994", () => {
    const input = "MCMXCIV";
    const output = romanToIntV2(input);

    expect(output).toEqual(1994);
  });
});
