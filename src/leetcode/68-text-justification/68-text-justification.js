/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let lines = [];

  let wordIndex = 0;
  let lineLength = 0;
  let lastWordIndex = 0;

  // add lines
  while (wordIndex < words.length) {
    const word = words[wordIndex];
    const wordLength = lineLength === 0 ? word.length : word.length + 1;

    if (lineLength + wordLength > maxWidth) {
      lines.push(words.slice(lastWordIndex, wordIndex));
      lastWordIndex = wordIndex;
      lineLength = 0;
      continue;
    }

    lineLength += wordLength;
    wordIndex++;
  }

  // add last line words that were not overflowed the line
  lines.push(words.slice(lastWordIndex));

  lines = lines.map((line, index) => {
    const wordsCount = line.length;

    if (wordsCount === 1) {
      const word = line[0];
      const spaces = ' '.repeat(maxWidth - word.length);
      return `${word}${spaces}`;
    }

    if (index === lines.length - 1) {
      const words = line.join(' ');
      const spaces = ' '.repeat(maxWidth - words.length);
      return `${words}${spaces}`;
    }

    const gaps = wordsCount - 1;
    const wordsLength = line.reduce((sum, word) => (sum += word.length), 0);
    const spacesLength = maxWidth - wordsLength;
    const gapLength = Math.floor(spacesLength / gaps);
    const longGapsCount = spacesLength % gaps;

    const shortGap = ' '.repeat(gapLength);
    const longGap = ' '.repeat(gapLength + 1);

    return (
      line.slice(0, longGapsCount).join(longGap) +
      (longGapsCount === 0 ? '' : longGap) +
      line.slice(longGapsCount).join(shortGap)
    );
  });

  return lines;
};

exports.fullJustify = fullJustify;
