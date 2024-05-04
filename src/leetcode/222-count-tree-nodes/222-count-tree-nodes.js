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
var countNodes = function (root) {
  const getLeftDepth = (node) => (node ? getLeftDepth(node.left) + 1 : 0);
  const getRightDepth = (node) => (node ? getRightDepth(node.right) + 1 : 0);

  const getCount = (node) => {
    const leftDepth = getLeftDepth(node);
    const rightDepth = getRightDepth(node);

    if (leftDepth === rightDepth) return Math.pow(2, leftDepth) - 1;
    return getCount(node.left) + getCount(node.right) + 1;
  };

  return getCount(root);
};

exports.countNodes = countNodes;
