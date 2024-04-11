/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const position = { x: 0, y: 0 };
  const values = [matrix[0][0]];

  const addCurrentValue = () => {
    console.log(position);
    values.push(matrix[position.y][position.x]);
  };

  const limits = {
    left: 0,
    top: 0,
    right: cols - 1,
    bottom: rows - 1,
  };

  const strategies = {
    right: {
      udpateLimit: () => limits.top++,
      move: () => {
        if (position.x === limits.right) return strategies.down;
        position.x++;
        addCurrentValue();
      },
    },
    down: {
      udpateLimit: () => limits.right--,
      move: () => {
        if (position.y === limits.bottom) return strategies.left;
        position.y++;
        addCurrentValue();
      },
    },
    left: {
      udpateLimit: () => limits.bottom--,
      move: () => {
        if (position.x === limits.left) return strategies.up;
        position.x--;
        addCurrentValue();
      },
    },
    up: {
      udpateLimit: () => limits.left++,
      move: () => {
        if (position.y === limits.top) return strategies.right;
        position.y--;
        addCurrentValue();
      },
    },
  };

  let strategy = strategies.right;

  while (values.length < rows * cols) {
    strategy.udpateLimit();
    let nextStrategy = null;

    while (!(nextStrategy = strategy.move())) {}
    strategy = nextStrategy;
  }

  return values;
};

exports.spiralOrder = spiralOrder;
