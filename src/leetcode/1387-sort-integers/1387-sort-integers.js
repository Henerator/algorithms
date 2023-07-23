/**
 * @param {number} start
 * @param {number} end
 * @param {number} k
 * @return {number}
 */
function getKth(start, end, k) {
  const cachePower = new Map();

  function getNextValue(value) {
    return value % 2 === 0 ? value >> 1 : 3 * value + 1;
  }

  function getPower(value) {
    if (cachePower.has(value)) return cachePower.get(value);

    let power = 0;
    let nextValue = value;

    while (nextValue !== 1) {
      if (cachePower.has(nextValue)) {
        return power + cachePower.get(nextValue);
      }

      power++;
      nextValue = getNextValue(nextValue);
    }

    cachePower.set(value, power);
    return power;
  }

  let arr = [];
  for (let index = start; index <= end; index++) {
    arr.push({ value: index, power: getPower(index) });
  }

  return arr.sort((itemA, itemB) => {
    return itemA.power === itemB.power ? itemA.index - itemB.index : itemA.power - itemB.power;
  })[k - 1].value;
}

exports.getKth = getKth;
