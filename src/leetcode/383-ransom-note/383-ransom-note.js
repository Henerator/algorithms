function canConstruct(ransomNote, magazine) {
  function buildMap(text) {
    const map = {};
    for (let index = 0; index < text.length; index++) {
      const char = text[index];
      if (!map[char]) {
        map[char] = 0;
      }

      map[char]++;
    }
    return map;
  }

  const ransomNoteMap = buildMap(ransomNote);
  const magazineMap = buildMap(magazine);

  const ransomChars = Object.entries(ransomNoteMap);
  for (let index = 0; index < ransomChars.length; index++) {
    const [ransomChar, ransomCharCount] = ransomChars[index];

    if (!magazineMap[ransomChar]) return false;
    if (magazineMap[ransomChar] < ransomCharCount) return false;
  }

  return true;
}

exports.canConstruct = canConstruct;
