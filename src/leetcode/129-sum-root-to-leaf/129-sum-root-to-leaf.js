/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let totalSum = 0;

  const dfs = (node, digits) => {
    digits.push(node.val);

    if (!node.left && !node.right) {
      totalSum += Number(digits.join(''));
    }

    if (node.left) dfs(node.left, digits);
    if (node.right) dfs(node.right, digits);

    digits.pop();
  };

  dfs(root, []);

  return totalSum;
};
