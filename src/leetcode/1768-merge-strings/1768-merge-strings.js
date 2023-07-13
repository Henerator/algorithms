/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
  let index = 0;
  const arr = [];
  while (index < word1.length || index < word2.length) {
    if (word1[index]) arr.push(word1[index]);
    if (word2[index]) arr.push(word2[index]);
    index++;
  }

  return arr.join('');
}
