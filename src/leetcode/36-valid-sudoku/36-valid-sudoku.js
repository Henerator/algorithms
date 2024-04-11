/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  class SudokuSet {
    set = new Set();

    add(value) {
      if (this.set.has(value)) return false;

      this.set.add(value);
      return true;
    }
  }

  const size = board.length;
  const set = new SudokuSet();

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const value = board[row][col];

      if (value === '.') continue;

      const invalid = [
        `${value}-row-${row}`,
        `${value}-col-${col}`,
        `${value}-box-${Math.floor(row / 3)}-${Math.floor(col / 3)}`,
      ].some((key) => !set.add(key));

      if (invalid) return false;
    }
  }

  return true;
};

exports.isValidSudoku = isValidSudoku;
