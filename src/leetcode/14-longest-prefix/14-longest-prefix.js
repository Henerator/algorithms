/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let maxWord = strs.reduce(
    (acc, word, index) => {
      if (word.length > acc.length) return { index, length: word.length };
      return acc;
    },
    { index: 0, length: strs[0].length }
  );

  for (let i = 0; i < maxWord.length; i++) {
    const char = strs[maxWord.index][i];

    for (let k = 0; k < strs.length; k++) {
      const wordChar = strs[k][i];
      if (!wordChar || wordChar !== char) return strs[maxWord.index].slice(0, i);
    }
  }

  return strs[maxWord.index];
};

exports.longestCommonPrefix = longestCommonPrefix;
