/**
 * @param {string[]} words
 * @return {string[][]}
 */
var groupAnagrams = function (words) {
  const groups = [];
  const wordGroupMap = new Map();

  words.forEach((word) => {
    const wordHashKey = word.split('').sort().join('');

    if (!wordGroupMap.has(wordHashKey)) {
      groups.push([word]);
      wordGroupMap.set(wordHashKey, groups.length - 1);
      return;
    }

    const groupIndex = wordGroupMap.get(wordHashKey);
    groups[groupIndex].push(word);
  });

  return groups;
};

exports.groupAnagrams = groupAnagrams;
