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

  getWordsEndPositions(text, start) {
    let node = this.root;
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
}

exports.Trie = Trie;
