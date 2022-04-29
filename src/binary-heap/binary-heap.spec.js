const { MaxBinaryHeap } = require("./binary-heap");

describe("add", () => {
  let heap;

  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  it("1 element", () => {
    heap.add(1);
    expect(heap.items).toEqual([1]);
  });

  it("consecutive increasing elements", () => {
    heap.add(1);
    heap.add(2);
    heap.add(3);
    expect(heap.items).toEqual([3, 1, 2]);
  });

  it("consecutive decreasing elements", () => {
    heap.add(3);
    heap.add(2);
    heap.add(1);
    expect(heap.items).toEqual([3, 2, 1]);
  });
});

describe("extract max", () => {
  let heap;

  beforeEach(() => {
    heap = new MaxBinaryHeap();
  });

  it("0 element", () => {
    expect(heap.extractMax()).toBeNull();
  });

  it("1 element", () => {
    heap.add(1);
    expect(heap.extractMax()).toEqual(1);
    expect(heap.extractMax()).toBeNull();
  });

  it("consecutive increasing elements", () => {
    heap.add(1);
    heap.add(2);
    heap.add(3);
    expect(heap.extractMax()).toEqual(3);
    expect(heap.extractMax()).toEqual(2);
    expect(heap.extractMax()).toEqual(1);
    expect(heap.extractMax()).toBeNull();
  });

  it("consecutive decreasing elements", () => {
    heap.add(3);
    heap.add(2);
    heap.add(1);
    expect(heap.extractMax()).toEqual(3);
    expect(heap.extractMax()).toEqual(2);
    expect(heap.extractMax()).toEqual(1);
    expect(heap.extractMax()).toBeNull();
  });
});
