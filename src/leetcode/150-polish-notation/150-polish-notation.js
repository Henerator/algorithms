/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  tokens.forEach((token) => {
    if (!isNaN(parseInt(token))) {
      stack.push(parseInt(token));
      return;
    }

    const rightOperand = stack.pop();
    const leftOperand = stack.pop();

    switch (token) {
      case '+':
        stack.push(leftOperand + rightOperand);
        break;
      case '-':
        stack.push(leftOperand - rightOperand);
        break;
      case '*':
        stack.push(leftOperand * rightOperand);
        break;
      case '/':
        stack.push(Math.trunc(leftOperand / rightOperand));
        break;
      default:
        break;
    }
  });

  return stack[0];
};

exports.evalRPN = evalRPN;
