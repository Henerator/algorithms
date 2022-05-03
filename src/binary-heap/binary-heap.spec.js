const { MaxBinaryHeap } = require("./binary-heap");
const { MinBinaryHeap } = require("./binary-heap");

describe("Max binary heap", () => {
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

  describe("build", () => {
    let heap;

    beforeEach(() => {
      heap = new MaxBinaryHeap();
    });

    it("1 element", () => {
      heap.build([1]);
      expect(heap.items).toEqual([1]);
    });

    it("consecutive increasing elements", () => {
      heap.build([1, 2, 3]);
      expect(heap.items).toEqual([3, 2, 1]);
    });

    it("consecutive decreasing elements", () => {
      heap.build([3, 2, 1]);
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

    it("long consecutive increasing elements", () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      heap.build(input);
      for (let index = input.length - 1; index >= 0; index--) {
        expect(heap.extractMax()).toEqual(input[index]);
      }
      expect(heap.extractMax()).toBeNull();
    });

    it("long consecutive decreasing elements", () => {
      const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      heap.build(input);
      for (let index = 0; index < input.length; index++) {
        expect(heap.extractMax()).toEqual(input[index]);
      }
      expect(heap.extractMax()).toBeNull();
    });
  });
});

describe("Min binary heap", () => {
  describe("add", () => {
    let heap;

    beforeEach(() => {
      heap = new MinBinaryHeap();
    });

    it("1 element", () => {
      heap.add(1);
      expect(heap.items).toEqual([1]);
    });

    it("consecutive increasing elements", () => {
      heap.add(1);
      heap.add(2);
      heap.add(3);
      expect(heap.items).toEqual([1, 2, 3]);
    });

    it("consecutive decreasing elements", () => {
      heap.add(3);
      heap.add(2);
      heap.add(1);
      expect(heap.items).toEqual([1, 3, 2]);
    });
  });

  describe("build", () => {
    let heap;

    beforeEach(() => {
      heap = new MinBinaryHeap();
    });

    it("1 element", () => {
      heap.build([1]);
      expect(heap.items).toEqual([1]);
    });

    it("consecutive increasing elements", () => {
      heap.build([1, 2, 3]);
      expect(heap.items).toEqual([1, 2, 3]);
    });

    it("consecutive decreasing elements", () => {
      heap.build([3, 2, 1]);
      expect(heap.items).toEqual([1, 2, 3]);
    });
  });

  describe("extract min", () => {
    let heap;

    beforeEach(() => {
      heap = new MinBinaryHeap();
    });

    it("0 element", () => {
      expect(heap.extractMin()).toBeNull();
    });

    it("1 element", () => {
      heap.add(1);
      expect(heap.extractMin()).toEqual(1);
      expect(heap.extractMin()).toBeNull();
    });

    it("consecutive increasing elements", () => {
      heap.add(1);
      heap.add(2);
      heap.add(3);
      expect(heap.extractMin()).toEqual(1);
      expect(heap.extractMin()).toEqual(2);
      expect(heap.extractMin()).toEqual(3);
      expect(heap.extractMin()).toBeNull();
    });

    it("consecutive decreasing elements", () => {
      heap.add(3);
      heap.add(2);
      heap.add(1);
      expect(heap.extractMin()).toEqual(1);
      expect(heap.extractMin()).toEqual(2);
      expect(heap.extractMin()).toEqual(3);
      expect(heap.extractMin()).toBeNull();
    });

    it("long consecutive increasing elements", () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      heap.build(input);
      for (let index = 0; index < input.length; index++) {
        expect(heap.extractMin()).toEqual(input[index]);
      }
      expect(heap.extractMin()).toBeNull();
    });

    it("long consecutive decreasing elements", () => {
      const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      heap.build(input);
      for (let index = input.length - 1; index >= 0; index--) {
        expect(heap.extractMin()).toEqual(input[index]);
      }
      expect(heap.extractMin()).toBeNull();
    });
  });
});
