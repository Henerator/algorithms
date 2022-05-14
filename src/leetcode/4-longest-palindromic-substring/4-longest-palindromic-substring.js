/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const sLength = s.length;

  if (sLength < 2) {
    return s[0];
  }

  const processedSet = new Set();
  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < sLength; i++) {
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && s[i] === s[left]) {
      left--;
    }

    while (right < sLength && s[i] === s[right]) {
      right++;
    }

    const key = `${left}-${right}`;
    if (processedSet.has(key)) {
      continue;
    }

    processedSet.add(key);
    while (left >= 0 && right < sLength && s[left] === s[right]) {
      left--;
      right++;
    }

    const currentLength = right - left - 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      start = left + 1;
    }
  }

  return s.slice(start, start + maxLength);
};

exports.longestPalindrome = longestPalindrome;
