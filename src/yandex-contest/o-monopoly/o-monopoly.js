const { MinBinaryHeap, MaxBinaryHeap } = require('./../../binary-heap/binary-heap');

class Building {
  constructor(needCapital, addedCapital) {
    this.needCapital = needCapital;
    this.addedCapital = addedCapital;
  }
}

function getMaxFinalCapital(buildings, capital, maxCount) {
  const minPriceHeap = new MinBinaryHeap((item) => item.needCapital);
  const maxBonusHeap = new MaxBinaryHeap((item) => item.addedCapital);

  minPriceHeap.build(buildings);
  let takenCount = 0;

  while (takenCount < maxCount) {
    let minPriceBuilding = minPriceHeap.getMin();
    while (minPriceBuilding && minPriceBuilding.needCapital <= capital) {
      maxBonusHeap.add(minPriceHeap.extractMin());
      minPriceBuilding = minPriceHeap.getMin();
    }

    maxBonusBuilding = maxBonusHeap.extractMax();
    if (maxBonusBuilding) {
      capital += maxBonusBuilding.addedCapital;
      takenCount++;
      continue;
    }

    break;
  }

  return capital;
}

exports.Building = Building;
exports.getMaxFinalCapital = getMaxFinalCapital;
