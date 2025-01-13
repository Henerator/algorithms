/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const divMap = {};

  equations.forEach(([nameA, nameB], index) => {
    if (!divMap[nameA]) divMap[nameA] = {};
    if (!divMap[nameB]) divMap[nameB] = {};

    divMap[nameA][nameB] = values[index];
    divMap[nameB][nameA] = 1 / values[index];
  });

  function dfs(nameA, nameB, visitedNames) {
    if (!divMap[nameA] || !divMap[nameB]) return -1.0;
    if (nameA === nameB) return 1.0;

    visitedNames.add(nameA);

    const aNeightboursMap = divMap[nameA];
    for (let neighbourName in aNeightboursMap) {
      if (visitedNames.has(neighbourName)) continue;

      const nestedResult = dfs(neighbourName, nameB, visitedNames);
      if (nestedResult !== -1.0) {
        return nestedResult * aNeightboursMap[neighbourName];
      }
    }

    return -1.0;
  }

  return queries.map((query) => {
    const [nameA, nameB] = query;
    return dfs(nameA, nameB, new Set());
  });
};

exports.calcEquation = calcEquation;
