class TrieNode {
  constructor() {
    this.children = new Map();
    this.wordEnd = false;
    this.dictionaryIndex = -1;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();
    this.build(words);
  }

  build(words) {
    words.forEach((word, index) => {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.wordEnd = true;
      node.dictionaryIndex = index;
    });
  }
}

/**
 * @param {string} text
 * @param {string[]} dictionary
 * @return {boolean}
 */
function wordBreak(text, dictionary) {
  const trie = new Trie(dictionary);

  function getWordsIndexes(position) {
    let node = trie.root;
    const wordIndexes = [];

    for (let i = position; i < text.length; i++) {
      const char = text[i];
      if (!node.children.has(char)) {
        return wordIndexes;
      }

      node = node.children.get(char);

      if (node.wordEnd) {
        wordIndexes.push(node.dictionaryIndex);
      }
    }

    return wordIndexes;
  }

  function getOptions(position, cache = new Map()) {
    if (cache.has(position)) return cache.get(position);

    const wordsIndexes = getWordsIndexes(position);
    if (!wordsIndexes.length) {
      cache.set(position, []);
      return [];
    }

    let nextOptions = [];
    wordsIndexes.forEach((wordIndex) => {
      const word = dictionary[wordIndex];
      const nextPosition = position + word.length;

      if (nextPosition === text.length) {
        nextOptions.push([word]);
        return;
      }

      const options = getOptions(nextPosition, cache);
      options.forEach((option) => nextOptions.push([word].concat(option)));
    });

    cache.set(position, nextOptions);
    return cache.get(position);
  }

  return getOptions(0).map((option) => option.join(' '));
}

exports.wordBreak = wordBreak;
