function arrayMaxElement(array) {
  if (array.length === 1) return array[0];
  if (array.length === 2) return Math.max(array[0], array[1]);

  const middle = Math.floor(array.length / 2);
  return Math.max(
    arrayMaxElement(array.slice(0, middle)),
    arrayMaxElement(array.slice(middle))
  );
}

module.exports = arrayMaxElement;

