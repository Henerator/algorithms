/**
 * @param {number} start
 * @param {number} end
 * @param {number} k
 * @return {number}
 */
function getKth(start, end, k) {
  const cache = new Map();

  function getNextValue(value) {
    if (cache.has(value)) return cache.get(value);

    const nextValue = value % 2 === 0 ? value >> 1 : 3 * value + 1;
    cache.set(value, nextValue);
    return nextValue;
  }

  function getPower(value) {
    let power = 0;

    while (value !== 1) {
      power++;
      value = getNextValue(value);
    }

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
