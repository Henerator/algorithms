/**
 * @param {number} start
 * @param {number} end
 * @param {number} k
 * @return {number}
 */
function getKth(start, end, k) {
  const cacheValue = new Map();
  const cachePower = new Map();

  function getNextValue(value) {
    if (cacheValue.has(value)) return cacheValue.get(value);

    const nextValue = value % 2 === 0 ? value >> 1 : 3 * value + 1;
    cacheValue.set(value, nextValue);
    return nextValue;
  }

  function getPower(value) {
    if (cachePower.has(value)) return cachePower.get(value);

    let power = 0;
    let nextValue = value;

    while (nextValue !== 1) {
      power++;
      nextValue = getNextValue(nextValue);

      if (cachePower.has(nextValue)) {
        return power + cachePower.get(nextValue);
      }
    }

    cachePower.set(value, power);
    return power;
  }

  let arr = [];
  for (let index = start; index <= end; index++) {
    arr.push({ value: index, power: getPower(index) });
  }

  console.log(arr);

  return arr.sort((itemA, itemB) => {
    return itemA.power === itemB.power ? itemA.index - itemB.index : itemA.power - itemB.power;
  })[k - 1].value;
}

exports.getKth = getKth;
