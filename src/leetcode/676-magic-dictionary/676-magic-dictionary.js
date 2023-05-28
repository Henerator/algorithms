/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

class Node {
  children = new Map();
  endOfWord = false;
}

class MagicDictionary {
  root = new Node();

  buildDict(dictionary) {
    for (let word of dictionary) {
      let node = this.root;

      for (let char of word) {
        if (!node.children.has(char)) node.children.set(char, new Node());
        node = node.children.get(char);
      }

      node.endOfWord = true;
    }
  }

  search(searchWord) {
    return this.dfs(this.root, searchWord, 0, 0);
  }

  dfs(node, text, charIndex, errorsCount) {
    if (errorsCount > 1) return false;
    if (charIndex === text.length) return errorsCount === 1 && node.endOfWord;

    for (let [char, childNode] of node.children) {
      const isCharEqual = char === text[charIndex];
      const iterationErrors = isCharEqual ? errorsCount : errorsCount + 1;
      if (this.dfs(childNode, text, charIndex + 1, iterationErrors)) return true;
    }

    return false;
  }
}

exports.MagicDictionary = MagicDictionary;
