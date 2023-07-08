const { Trie } = require('../../_helpers/trie');

/**
 * @param {string[]} dictionary
 * @return {string[]}
 */
function findAllConcatenatedWordsInADict(dictionary) {
  const trie = new Trie(dictionary);

  function getWordsEndPositions(text, start) {
    let node = trie.root;
    const positions = [];

    for (let i = start; i < text.length; i++) {
      const char = text[i];
      if (!node.children.has(char)) {
        return positions;
      }

      node = node.children.get(char);

      if (node.wordEnd && (start !== 0 || i + 1 !== text.length)) {
        positions.push(i + 1);
      }
    }

    return positions;
  }

  function isBreakable(text, position = 0, cache = new Map()) {
    if (position === text.length) return true;
    if (cache.has(position)) return cache.get(position);

    const wordsEndPositions = getWordsEndPositions(text, position);
    for (let wordEndPosition of wordsEndPositions) {
      const isSubBreakable = isBreakable(text, wordEndPosition, cache);

      if (isSubBreakable) {
        cache.set(position, true);
        return true;
      }
    }

    cache.set(position, false);
    return false;
  }

  return dictionary.filter((word) => isBreakable(word));
}

exports.findAllConcatenatedWordsInADict = findAllConcatenatedWordsInADict;
