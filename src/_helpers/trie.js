class TrieNode {
  constructor() {
    this.children = new Map();
    this.wordEnd = false;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();
    this.build(words);
  }

  build(words) {
    words.forEach((word) => {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.wordEnd = true;
    });
  }
}

exports.Trie = Trie;
