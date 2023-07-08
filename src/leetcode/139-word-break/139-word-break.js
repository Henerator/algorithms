const { Trie } = require('../../_helpers/trie');

/**
 * @param {string} text
 * @param {string[]} dictionary
 * @return {boolean}
 */
function wordBreak(text, dictionary) {
  function getWordsEndPositions(trie, text, start) {
    let node = trie.root;
    const positions = [];

    for (let i = start; i < text.length; i++) {
      const char = text[i];
      if (!node.children.has(char)) {
        return positions;
      }

      node = node.children.get(char);

      if (node.wordEnd) {
        positions.push(i + 1);
      }
    }

    return positions;
  }

  function isBreakable(trie, text, position = 0, cache = new Map()) {
    if (position === text.length) return true;
    if (cache.has(position)) return cache.get(position);

    const wordsEndPositions = getWordsEndPositions(trie, text, position);
    for (let wordEndPosition of wordsEndPositions) {
      const isSubBreakable = isBreakable(trie, text, wordEndPosition, cache);

      if (isSubBreakable) {
        cache.set(position, true);
        return true;
      }
    }

    cache.set(position, false);
    return false;
  }

  const trie = new Trie(dictionary);
  return isBreakable(trie, text);
}

exports.wordBreak = wordBreak;
