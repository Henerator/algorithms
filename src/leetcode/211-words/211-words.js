class DictionaryNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

var WordDictionary = function () {
  this.root = new DictionaryNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const char of word) {
    if (!node.children[char]) node.children[char] = new DictionaryNode();
    node = node.children[char];
  }
  node.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function search(node, charIndex) {
    for (let i = charIndex; i < word.length; i++) {
      const char = word[i];

      if (char === '.') {
        for (const key in node.children) {
          if (search(node.children[key], i + 1)) {
            return true;
          }
        }
        return false;
      } else {
        if (!node.children[char]) return false;
        node = node.children[char];
      }
    }

    return node.isEndOfWord;
  }

  return search(this.root, 0);
};
