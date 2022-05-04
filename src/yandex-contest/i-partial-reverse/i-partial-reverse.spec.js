const { generateLinkedList, ReverseV2 } = require("./i-partial-reverse");

it("test 1", () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 2, 6);

  expect(output.toArray()).toEqual([1, 6, 5, 4, 3, 2, 7]);
});

it("test 2", () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 1, 6);

  expect(output.toArray()).toEqual([6, 5, 4, 3, 2, 1, 7]);
});

it("test 3", () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 2, 7);

  expect(output.toArray()).toEqual([1, 7, 6, 5, 4, 3, 2]);
});

it("test 4", () => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 1, 7);

  expect(output.toArray()).toEqual([7, 6, 5, 4, 3, 2, 1]);
});

it("test 5", () => {
  const data = [1, 2];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 1, 2);

  expect(output.toArray()).toEqual([2, 1]);
});

it("test 6", () => {
  const data = [1];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 1, 1);

  expect(output.toArray()).toEqual([1]);
});

it("test 7", () => {
  const data = [1, 2];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 1, 1);

  expect(output.toArray()).toEqual([1, 2]);
});

it("test 8", () => {
  const data = [1, 2];
  const head = generateLinkedList(data);
  const output = ReverseV2(head, 2, 2);

  expect(output.toArray()).toEqual([1, 2]);
});
