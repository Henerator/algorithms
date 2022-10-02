/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const size = matrix.length;

  let row = 0;
  let startCol = 0;
  let endCol = size - 2;

  while (startCol <= endCol) {
    for (let x = startCol; x <= endCol; x++) {
      let step = 4;
      let curRow = row;
      let curCol = x;
      let value = matrix[curRow][curCol];
      while (step > 0) {
        const newRow = curCol;
        const newCol = size - 1 - curRow;
        const temp = matrix[newRow][newCol];
        matrix[newRow][newCol] = value;
        value = temp;
        curRow = newRow;
        curCol = newCol;

        step--;
      }
    }

    row++;
    startCol++;
    endCol--;
  }

  return matrix;
};

exports.rotate = rotate;
