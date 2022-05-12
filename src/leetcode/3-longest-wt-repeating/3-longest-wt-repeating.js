/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let left = 0;
  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charIndex = map.get(char);
    map.set(char, i);

    if (map.has(char) && charIndex >= left) {
      currentLength = i - charIndex;
      left = charIndex + 1;
      continue;
    }

    currentLength++;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
