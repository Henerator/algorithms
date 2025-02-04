/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let weight = 0;

  for (let i = 0; i < 32; i++) {
    const bit = n >> i;
    weight += bit & 1;
  }

  return weight;
};
