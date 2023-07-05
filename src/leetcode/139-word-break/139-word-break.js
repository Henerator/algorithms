const { Trie } = require('../../_helpers/trie');

/**
 * @param {string} text
 * @param {string[]} dictionary
 * @return {boolean}
 */
function wordBreak(text, dictionary) {
  function isBreakable(trie, text, position = 0, cache = new Map()) {
    if (position === text.length) return true;
    if (cache.has(position)) return cache.get(position);

    const wordsEndPositions = trie.getWordsEndPositions(text, position);
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
