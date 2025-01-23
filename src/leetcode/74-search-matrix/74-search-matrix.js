/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function getPosition(index) {
    return {
      row: Math.floor(index / cols),
      col: index % cols,
    };
  }

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const { row, col } = getPosition(mid);

    if (matrix[row][col] === target) return true;

    if (matrix[row][col] > target) {
      right = mid - 1;
      continue;
    }

    left = mid + 1;
  }

  return false;
};

exports.searchMatrix = searchMatrix;
