function convertToGoodString(text) {
  const caseCharDif = getCharsCodeDif("a", "A");
  const goodChars = [];

  function getCharCode(char) {
    return char.charCodeAt(0);
  }

  function getCharsCodeDif(a, b) {
    return Math.abs(getCharCode(a) - getCharCode(b));
  }

  function getLastGoodChar() {
    return goodChars.length !== 0 ? goodChars[goodChars.length - 1] : null;
  }

  for (let index = 0; index < text.length; index++) {
    const currentChar = text[index];
    const lastGoodChar = getLastGoodChar();

    if (lastGoodChar === null) {
      goodChars.push(currentChar);
      continue;
    }

    if (getCharsCodeDif(lastGoodChar, currentChar) !== caseCharDif) {
      goodChars.push(currentChar);
    } else {
      goodChars.pop();
    }
  }

  return goodChars.join("");
}

exports.convertToGoodString = convertToGoodString;
