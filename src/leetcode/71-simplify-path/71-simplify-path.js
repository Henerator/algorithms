/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];

  path
    .split('/')
    .filter(Boolean)
    .forEach((part) => {
      if (part === '.') return;
      if (part === '..') {
        stack.pop();
        return;
      }

      stack.push(part);
    });

  return `/${stack.join('/')}`;
};

exports.simplifyPath = simplifyPath;
