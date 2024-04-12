/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const rowsSet = new Set();
  const colsSet = new Set();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] !== 0) continue;

      rowsSet.add(row);
      colsSet.add(col);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rowsSet.has(row) || colsSet.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
};

exports.setZeroes = setZeroes;
