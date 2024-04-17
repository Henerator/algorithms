/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const wordMap = new Map(); // word -> char
  const usedChar = new Set();

  const addWordToMap = (word, char) => {
    if (!wordMap.has(word)) {
      if (usedChar.has(char)) return false;

      wordMap.set(word, char);
      usedChar.add(char);
    }

    if (wordMap.get(word) !== char) return false;
    return true;
  };

  return words.every((word, index) => addWordToMap(word, pattern[index]));
};

exports.wordPattern = wordPattern;
