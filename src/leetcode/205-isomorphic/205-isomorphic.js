/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const encodeText = (text) => {
    const map = new Map();
    let lastCode = 1;

    const getCharCode = (char) => {
      if (!map.has(char)) map.set(char, lastCode++);
      return map.get(char);
    };

    return text.split('').map(getCharCode).join('');
  };

  return encodeText(s) === encodeText(t);
};

exports.isIsomorphic = isIsomorphic;
