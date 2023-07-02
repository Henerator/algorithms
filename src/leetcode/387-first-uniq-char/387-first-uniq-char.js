/**
 * @param {string} text
 * @return {number}
 */
function firstUniqChar(text) {
  const map = new Map();
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (!map.has(char)) {
      map.set(char, i);
    } else {
      map.set(char, -1);
    }
  }

  let uniqCharIndex = Infinity;
  for (const [_key, value] of map) {
    if (value !== -1 && value < uniqCharIndex) {
      uniqCharIndex = value;
    }
  }

  return uniqCharIndex === Infinity ? -1 : uniqCharIndex;
}

exports.firstUniqChar = firstUniqChar;
