/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charsMap = s.split('').reduce((map, char) => {
    if (!map[char]) map[char] = 0;
    return map[char]++, map;
  }, {});

  return t.split('').every((char) => {
    if (!charsMap[char]) return false;

    charsMap[char]--;
    return true;
  });
};

exports.isAnagram = isAnagram;
