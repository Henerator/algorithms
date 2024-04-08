/**
 * @param {string} pattern
 * @param {string} text
 * @return {boolean}
 */
var isSubsequence = function (pattern, text) {
  if (pattern.length === 0) return true;
  if (text.length === 0) return false;

  let patternLeft = 0;
  let textLeft = 0;

  while (textLeft < text.length) {
    if (text[textLeft] === pattern[patternLeft]) {
      patternLeft++;

      if (patternLeft === pattern.length) return true;
    }

    textLeft++;
  }

  return false;
};

exports.isSubsequence = isSubsequence;
