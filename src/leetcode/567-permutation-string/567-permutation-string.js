/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 function checkInclusion(t, s) {
  if (t.length > s.length) return '';

  const charsMap = new Map();
  for (let index = 0; index < t.length; index++) {
    const char = t[index];
    if (!charsMap.has(char)) charsMap.set(char, 0);
    charsMap.set(char, charsMap.get(char) + 1);
  }

  let left = 0;
  let right = 0;
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
      if (right - left + 1 === t.length) return true;

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

  return false;
}

exports.checkInclusion = checkInclusion;
