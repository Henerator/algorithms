/**
 * @param {number} size
 * @param {number} steps
 * @param {number} startX
 * @param {number} startY
 * @return {number}
 */
function knightProbability(size, steps, startY, startX) {
  const cache = new Map();

  const moves = [
    { dx: -2, dy: -1 },
    { dx: -1, dy: -2 },
    { dx: 1, dy: -2 },
    { dx: 2, dy: -1 },
    { dx: 2, dy: 1 },
    { dx: 1, dy: 2 },
    { dx: -1, dy: 2 },
    { dx: -2, dy: 1 },
  ];

  function getCacheKey(x, y, step) {
    return `${x}-${y}-${step}`;
  }

  function isOutOfGrid(x, y) {
    return x < 0 || x >= size || y < 0 || y >= size;
  }

  function getCellPropability(x, y, step) {
    if (isOutOfGrid(x, y)) return 0;
    if (step === 0) return 1;

    const cacheKey = getCacheKey(x, y, step);
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    let probability = 0;
    for (let move of moves) {
      probability += getCellPropability(x + move.dx, y + move.dy, step - 1) * 0.125;
    }

    cache.set(cacheKey, probability);
    return probability;
  }

  return getCellPropability(startX, startY, steps);
}

exports.knightProbability = knightProbability;
