/**
 * @param {number} n
 * @return {number}
 */
var solveNQueens = function (n) {
  const solutions = [];
  const usedColsArr = [];
  const usedCols = new Set();
  const usedPosDiag = new Set(); // row + col = const
  const usedNegDiag = new Set(); // row - col = const

  function getSolutionStrings() {
    return new Array(n).fill(0).map((_, row) => {
      const arr = new Array(n).fill('.');
      arr[usedColsArr[row]] = 'Q';
      return arr.join('');
    });
  }

  function search(row) {
    if (row === n) {
      solutions.push(getSolutionStrings());
      return;
    }

    for (let col = 0; col < n; col++) {
      if (usedCols.has(col)) continue;

      const posDiag = row + col;
      if (usedPosDiag.has(posDiag)) continue;

      const negDiag = row - col;
      if (usedNegDiag.has(negDiag)) continue;

      usedColsArr.push(col);
      usedCols.add(col);
      usedPosDiag.add(posDiag);
      usedNegDiag.add(negDiag);

      search(row + 1);

      usedColsArr.pop();
      usedCols.delete(col);
      usedPosDiag.delete(posDiag);
      usedNegDiag.delete(negDiag);
    }
  }

  search(0);
  return solutions;
};

exports.solveNQueens = solveNQueens;
