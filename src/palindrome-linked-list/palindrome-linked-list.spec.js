const {
  generateLinkedList,
  isPalindrome,
  isPalindromeV2,
} = require("./palindrome-linked-list");

describe("isPalindromeV1", () => {
  it("odd count true case", () => {
    const input = generateLinkedList([1, 2, 3, 2, 1]);
    const output = isPalindrome(input);

    expect(output).toEqual(true);
  });

  it("odd count false case", () => {
    const input = generateLinkedList([1, 2, 3, 3, 1]);
    const output = isPalindrome(input);

    expect(output).toEqual(false);
  });

  it("even count true case", () => {
    const input = generateLinkedList([1, 2, 2, 1]);
    const output = isPalindrome(input);

    expect(output).toEqual(true);
  });

  it("even count false case", () => {
    const input = generateLinkedList([1, 2, 3, 1]);
    const output = isPalindrome(input);

    expect(output).toEqual(false);
  });

  it("2 elements true case", () => {
    const input = generateLinkedList([1, 1]);
    const output = isPalindrome(input);

    expect(output).toEqual(true);
  });

  it("2 elements false case", () => {
    const input = generateLinkedList([1, 2]);
    const output = isPalindrome(input);

    expect(output).toEqual(false);
  });

  it("1 element", () => {
    const input = generateLinkedList([1]);
    const output = isPalindrome(input);

    expect(output).toEqual(true);
  });
});

describe("isPalindromeV2", () => {
  it("odd count true case", () => {
    const input = generateLinkedList([1, 2, 3, 2, 1]);
    const output = isPalindromeV2(input);

    expect(output).toEqual(true);
  });

  it("odd count false case", () => {
    const input = generateLinkedList([1, 2, 3, 3, 1]);
    const output = isPalindromeV2(input);

    expect(output).toEqual(false);
  });

  it("even count true case", () => {
    const input = generateLinkedList([1, 2, 2, 1]);
    const output = isPalindromeV2(input);

    expect(output).toEqual(true);
  });

  it("even count false case", () => {
    const input = generateLinkedList([1, 2, 3, 1]);
    const output = isPalindromeV2(input);

    expect(output).toEqual(false);
  });

  it("2 elements true case", () => {
    const input = generateLinkedList([1, 1]);
    const output = isPalindromeV2(input);

    expect(output).toEqual(true);
  });

  it("2 elements false case", () => {
    const input = generateLinkedList([1, 2]);
    const output = isPalindromeV2(input);

    expect(output).toEqual(false);
  });

  it("1 element", () => {
    const input = generateLinkedList([1]);
    const output = isPalindromeV2(input);

    expect(output).toEqual(true);
  });
});
