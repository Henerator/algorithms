class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWordEnd = false;
  }

  add(word) {
    let node = this;
    for (const char of word) {
      if (!node.children.has(char)) node.children.set(char, new TrieNode());
      node = node.children.get(char);
    }
    node.isWordEnd = true;
  }

  remove(word) {
    let node = this;
    const stack = [];

    for (const char of word) {
      if (!node.children.has(char)) return;
      stack.push([node, char]);
      node = node.children.get(char);
    }

    node.isWordEnd = false;

    while (stack.length) {
      const [parent, char] = stack.pop();
      const child = parent.children.get(char);

      if (child.isWordEnd || child.children.size) break;

      parent.children.delete(char);
    }
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const rows = board.length;
  const cols = board[0].length;

  const root = new TrieNode();
  words.forEach((word) => root.add(word));

  const foundWords = new Set();
  const visitedCells = new Set();

  function outBound(col, row) {
    return col < 0 || row < 0 || col === cols || row === rows;
  }

  function getCellKey(col, row) {
    return `${col}-${row}`;
  }

  function dfs(col, row, node, chars) {
    if (outBound(col, row)) return;

    const char = board[row][col];
    if (!node.children.has(char)) return;

    const cellKey = getCellKey(col, row);
    if (visitedCells.has(cellKey)) return;

    node = node.children.get(char);
    visitedCells.add(cellKey);
    chars.push(char);

    if (node.isWordEnd) {
      const word = chars.join('');
      foundWords.add(word);
      root.remove(word);
    }

    dfs(col - 1, row, node, chars);
    dfs(col + 1, row, node, chars);
    dfs(col, row - 1, node, chars);
    dfs(col, row + 1, node, chars);

    chars.pop();
    visitedCells.delete(cellKey);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dfs(col, row, root, []);
    }
  }

  return Array.from(foundWords);
};

exports.findWords = findWords;
