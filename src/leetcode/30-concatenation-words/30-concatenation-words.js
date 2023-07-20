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
  const cache = new Map();

  for (let left = 0; left <= leftLimit; left++) {
    let seenWords = { map: new Map(), count: 0 };
    let rightStart = left + wordLength;

    const cachedSeenWords = cache.get(left - wordLength);
    if (cachedSeenWords && cachedSeenWords.count > 0) {
      const firstCacheWord = s.substring(left - wordLength, left);
      cachedSeenWords.map.set(firstCacheWord, cachedSeenWords.map.get(firstCacheWord) - 1);
      cachedSeenWords.count--;
      seenWords = cachedSeenWords;
      rightStart += cachedSeenWords.count * wordLength;
    }

    cache.set(left, seenWords);

    for (let right = rightStart; right <= s.length; right += wordLength) {
      const word = s.substring(right - wordLength, right);

      if (!wordsMap.has(word)) break;

      if (!seenWords.map.has(word)) seenWords.map.set(word, 0);

      if (seenWords.map.get(word) === wordsMap.get(word)) break;

      seenWords.map.set(word, seenWords.map.get(word) + 1);
      seenWords.count++;

      if (right - left === allWordsLength) {
        positions.push(left);
        break;
      }
    }
  }

  return positions;
}

exports.findSubstring = findSubstring;
