function getAllPeacefulCombinations(n) {
  function hasDiagonalIntersection(rows) {
    const x1 = rows[rows.length - 1];
    const y1 = rows.length;

    return rows.some((x2, index) => {
      if (index === rows.length - 1) return false;

      const y2 = index + 1;
      return Math.abs(x1 - x2) === Math.abs(y1 - y2);
    });
  }

  function reject(rows, takenColsSet) {
    const lastCol = rows[rows.length - 1];
    return takenColsSet.has(lastCol) || hasDiagonalIntersection(rows);
  }

  function accept(rows, n) {
    return rows.length === n;
  }

  function addSolution(rows, solutions) {
    solutions.push(rows.slice());
  }

  function bruteForce(n, rows = [], takenColsSet = new Set(), solutions = []) {
    if (rows.length === n) return;

    for (let column = 1; column <= n; column++) {
      rows.push(column);

      if (reject(rows, takenColsSet)) {
        rows.pop();
        continue;
      }

      if (accept(rows, n)) addSolution(rows, solutions);

      takenColsSet.add(column);
      bruteForce(n, rows, takenColsSet, solutions);
      takenColsSet.delete(column);
      rows.pop();
    }

    return solutions;
  }

  return bruteForce(n);
}

exports.getAllPeacefulCombinations = getAllPeacefulCombinations;
