const { convertToArabic } = require("./e-roman");

describe("invalid", () => {
  it("3", () => {
    expect(convertToArabic("IIV")).toEqual(-1);
  });

  it("4", () => {
    expect(convertToArabic("IIII")).toEqual(-1);
  });

  it("8", () => {
    expect(convertToArabic("IIX")).toEqual(-1);
  });

  it("10", () => {
    expect(convertToArabic("VV")).toEqual(-1);
  });

  it("40", () => {
    expect(convertToArabic("XXXX")).toEqual(-1);
  });
});

describe("valid", () => {
  it("1", () => {
    expect(convertToArabic("I")).toEqual(1);
  });

  it("2", () => {
    expect(convertToArabic("II")).toEqual(2);
  });

  it("3", () => {
    expect(convertToArabic("III")).toEqual(3);
  });

  it("4", () => {
    expect(convertToArabic("IV")).toEqual(4);
  });

  it("18", () => {
    expect(convertToArabic("XVIII")).toEqual(18);
  });

  it("1961", () => {
    expect(convertToArabic("MCMLXI")).toEqual(1961);
  });

  it("1994", () => {
    expect(convertToArabic("MCMXCIV")).toEqual(1994);
  });
});
