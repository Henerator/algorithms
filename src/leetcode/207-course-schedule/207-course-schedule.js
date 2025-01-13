/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const preMap = new Map();
  prerequisites.forEach(([idA, idB]) => {
    if (!preMap.has(idA)) preMap.set(idA, []);
    preMap.get(idA).push(idB);
  });

  function dfs(courseId, visited) {
    if (visited.has(courseId)) return false;
    if (preMap.get(courseId)?.length === 0) return true;

    visited.add(courseId);

    const neighbours = preMap.get(courseId) || [];
    for (const neighbour of neighbours) {
      if (!dfs(neighbour, visited)) return false;
    }

    visited.delete(courseId);
    preMap.set(courseId, []);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, new Set())) return false;
  }

  return true;
};

exports.canFinish = canFinish;
