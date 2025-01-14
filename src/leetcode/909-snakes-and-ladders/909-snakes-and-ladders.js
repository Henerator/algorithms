class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;

    this.size++;
  }

  shift() {
    if (!this.size) return;

    const node = this.head.next;
    this.removeNode(node);
    this.size--;

    return node.value;
  }

  removeNode(node) {
    if (!node.prev || !node.next) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
}

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  board.reverse();

  const deque = new Deque();
  const sideLength = board.length;
  const cellsCount = sideLength * sideLength;
  const visited = new Set();

  deque.push([1, 0]); // cell, move

  function getBoardPoint(cell) {
    const y = Math.floor((cell - 1) / sideLength);

    let x = (cell - 1) % sideLength;
    if (y % 2) x = sideLength - x - 1;

    return [x, y];
  }

  while (deque.size) {
    const [cell, move] = deque.shift();

    for (let step = 1; step <= 6; step++) {
      let nextCell = cell + step;
      const [x, y] = getBoardPoint(nextCell);
      if (board[y][x] !== -1) nextCell = board[y][x];

      if (nextCell === cellsCount) return move + 1;
      if (visited.has(nextCell)) continue;

      visited.add(nextCell);
      deque.push([nextCell, move + 1]);
    }
  }

  return -1;
};

exports.snakesAndLadders = snakesAndLadders;
