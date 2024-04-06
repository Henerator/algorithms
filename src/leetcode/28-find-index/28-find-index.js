/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const textLength = haystack.length;
  const patternLength = needle.length;

  if (textLength < patternLength) return -1;

  for (let i = 0; i <= textLength - patternLength; i++) {
    for (let k = 0; k < patternLength; k++) {
      if (haystack[i + k] !== needle[k]) break;
      if (k === patternLength - 1) return i;
    }
  }

  return -1;
};

exports.strStr = strStr;
