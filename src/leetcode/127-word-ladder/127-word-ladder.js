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
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  function getAlphabet() {
    return new Array(26).fill(0).map((_, index) => String.fromCharCode(97 + index));
  }

  const chars = getAlphabet();
  const stack = new Deque();
  stack.push([beginWord, 1]);

  const wordListSet = new Set(wordList);
  const generatedSet = new Set();

  while (stack.size) {
    const [word, move] = stack.shift();

    if (word === endWord) return move;

    for (let i = 0; i < beginWord.length; i++) {
      for (const char of chars) {
        const prefix = word.substring(0, i);
        const suffix = word.substring(i + 1);
        const mutatedWord = `${prefix}${char}${suffix}`;

        if (!wordListSet.has(mutatedWord) || generatedSet.has(mutatedWord)) continue;

        generatedSet.add(mutatedWord);
        stack.push([mutatedWord, move + 1]);
      }
    }
  }

  return 0;
};

exports.ladderLength = ladderLength;
