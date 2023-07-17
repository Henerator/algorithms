/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (t.length === 0) return '';
  if (t.length > s.length) return '';

  const charsMap = new Map();
  for (let index = 0; index < t.length; index++) {
    const char = t[index];
    if (!charsMap.has(char)) charsMap.set(char, 0);
    charsMap.set(char, charsMap.get(char) + 1);
  }

  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minRange = { left: -1, right: -1 };
  let restCount = charsMap.size;

  while (right < s.length) {
    const rightChar = s[right];

    if (charsMap.has(rightChar)) {
      charsMap.set(rightChar, charsMap.get(rightChar) - 1);
      if (charsMap.get(rightChar) === 0) {
        restCount--;
      }
    }

    while (restCount === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minRange = { left, right: right + 1 };
      }

      const leftChar = s[left];

      if (charsMap.has(leftChar)) {
        if (charsMap.get(leftChar) === 0) {
          restCount++;
        }
        charsMap.set(leftChar, charsMap.get(leftChar) + 1);
      }

      left++;
    }

    right++;
  }

  return minLength === Infinity ? '' : s.substring(minRange.left, minRange.right);
}

exports.minWindow = minWindow;
