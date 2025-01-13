/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const dependencies = new Array(numCourses).fill(0);
  const graphMap = new Map();
  prerequisites.forEach(([idA, idB]) => {
    if (!graphMap.has(idB)) graphMap.set(idB, []);
    graphMap.get(idB).push(idA);
    dependencies[idA]++;
  });

  let passedCount = 0;
  const stack = [];
  const order = [];

  for (let i = 0; i < dependencies.length; i++) {
    if (dependencies[i] === 0) stack.push(i);
  }

  while (stack.length) {
    const current = stack.pop();
    passedCount++;
    order.push(current);

    const neighbours = graphMap.get(current) || [];
    for (const neighbour of neighbours) {
      dependencies[neighbour]--;
      if (dependencies[neighbour] === 0) stack.push(neighbour);
    }
  }

  return passedCount === numCourses ? order : [];
};

exports.findOrder = findOrder;
