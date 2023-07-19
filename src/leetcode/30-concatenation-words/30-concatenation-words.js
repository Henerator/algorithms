/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  const positions = [];
  const wordLength = words[0].length;
  const allWordsLength = wordLength * words.length;

  if (s.length < allWordsLength) return positions;

  const wordsMap = new Map();
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    if (!wordsMap.has(word)) wordsMap.set(word, 0);
    wordsMap.set(word, wordsMap.get(word) + 1);
  }

  const leftLimit = s.length - allWordsLength;

  for (let left = 0; left <= leftLimit; left++) {
    let seenWordsMap = new Map();

    for (let right = left + wordLength; right <= s.length; right += wordLength) {
      const word = s.substring(right - wordLength, right);

      if (!wordsMap.has(word)) break;

      if (!seenWordsMap.has(word)) seenWordsMap.set(word, 0);
      seenWordsMap.set(word, seenWordsMap.get(word) + 1);

      if (seenWordsMap.get(word) > wordsMap.get(word)) break;

      if (right - left === allWordsLength) {
        positions.push(left);
        break;
      }
    }
  }

  return positions;
}

exports.findSubstring = findSubstring;
