const { getRandomInt } = require("../_helpers/random");

function sortQuick(array) {
  if (array.length < 2) return array;

  const pivot = getRandomInt(0, array.length - 1);
  const pivotValue = array[pivot];

  const arrLess = array.filter(
    (value, index) => pivot !== index && value <= pivotValue
  );
  const arrGreater = array.filter(
    (value, index) => pivot !== index && value > pivotValue
  );

  return [].concat(sortQuick(arrLess), [pivotValue], sortQuick(arrGreater));
}

module.exports = sortQuick;
