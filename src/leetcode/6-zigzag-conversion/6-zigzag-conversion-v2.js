/**
 * @param {string} text
 * @param {number} rowsCount
 * @return {string}
 */
function convert(text, rowsCount) {
  if (rowsCount === 1) return text;
  if (text.length <= rowsCount) return text;

  const answer = new Array(text.length);
  const waveLength = rowsCount * 2 - 2;
  const intervals = [0, 0];
  let answerIndex = 0;

  for (let row = 0; row < rowsCount; row++) {
    intervals[0] = waveLength - 2 * row || waveLength;
    intervals[1] = waveLength - intervals[0] || waveLength;

    let textIndex = row;
    while (answerIndex < text.length && textIndex < text.length) {
      answer[answerIndex] = text[textIndex];
      answerIndex++;
      textIndex += intervals[0];
      [intervals[0], intervals[1]] = [intervals[1], intervals[0]];
    }
  }

  return answer.join('');
}

exports.convert = convert;
