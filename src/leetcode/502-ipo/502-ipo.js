const { MinBinaryHeap, MaxBinaryHeap } = require('./../../binary-heap/binary-heap');

class Project {
  constructor(price, bonus) {
    this.price = price;
    this.bonus = bonus;
  }
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} bonuses
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (maxCount, capital, bonuses, prices) {
  const projects = prices.map((price, index) => new Project(price, bonuses[index]));

  const minPriceHeap = new MinBinaryHeap((item) => item.price);
  const maxBonusHeap = new MaxBinaryHeap((item) => item.bonus);

  minPriceHeap.build(projects);
  let takenCount = 0;

  while (takenCount < maxCount) {
    let minPriceBuilding = minPriceHeap.getMin();
    while (minPriceBuilding && minPriceBuilding.price <= capital) {
      maxBonusHeap.add(minPriceHeap.extractMin());
      minPriceBuilding = minPriceHeap.getMin();
    }

    maxBonusBuilding = maxBonusHeap.extractMax();
    if (maxBonusBuilding) {
      capital += maxBonusBuilding.bonus;
      takenCount++;
      continue;
    }

    break;
  }

  return capital;
};

exports.findMaximizedCapital = findMaximizedCapital;
