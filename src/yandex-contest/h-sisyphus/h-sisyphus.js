const { MinBinaryHeap } = require("../../binary-heap/binary-heap");

function getEnergyForUnion(stones) {
  const heap = new MinBinaryHeap();
  heap.build(stones);

  let sum = 0;
  while (heap.size > 1) {
    const itemA = heap.extractMin();
    const itemB = heap.extractMin();

    const itemsSum = itemA + itemB;
    sum += itemsSum;
    heap.add(itemsSum);
  }

  return sum;
}

exports.getEnergyForUnion = getEnergyForUnion;
