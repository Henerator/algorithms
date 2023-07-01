/**
 * @param {string} text
 * @return {boolean}
 */
function isPalindrome(text) {
  const validCharRange = [
    { from: '0', to: '9' },
    { from: 'a', to: 'z' },
    { from: 'A', to: 'Z' },
  ];

  function isValidChar(char) {
    return validCharRange.some((range) => char >= range.from && char <= range.to);
  }

  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (!isValidChar(text[left])) {
      left++;
    } else if (!isValidChar(text[right])) {
      right--;
    } else if (text[left].toLowerCase() !== text[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

exports.isPalindrome = isPalindrome;
