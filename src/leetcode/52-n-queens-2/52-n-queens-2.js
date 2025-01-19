/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let count = 0;

  const usedCols = new Set();
  const usedPosDiag = new Set(); // row + col = const
  const usedNegDiag = new Set(); // row - col = const

  function search(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (usedCols.has(col)) continue;

      const posDiag = row + col;
      if (usedPosDiag.has(posDiag)) continue;

      const negDiag = row - col;
      if (usedNegDiag.has(negDiag)) continue;

      usedCols.add(col);
      usedPosDiag.add(posDiag);
      usedNegDiag.add(negDiag);

      search(row + 1);

      usedCols.delete(col);
      usedPosDiag.delete(posDiag);
      usedNegDiag.delete(negDiag);
    }
  }

  search(0);
  return count;
};

exports.totalNQueens = totalNQueens;
