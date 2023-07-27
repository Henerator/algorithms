/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  const stack = [];

  for (const value of asteroids) {
    if (value < 0) {
      while (stack.at(-1) > 0 && stack.at(-1) < -value) stack.pop();

      if (stack.at(-1) === -value) {
        stack.pop();
        continue;
      }

      if (stack.at(-1) > 0 && stack.at(-1) > -value) continue;
    }

    stack.push(value);
  }

  return stack;
}

exports.asteroidCollision = asteroidCollision;
