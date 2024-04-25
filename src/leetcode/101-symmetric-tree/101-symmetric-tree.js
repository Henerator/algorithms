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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (nodeA, nodeB) => {
    if (!nodeA && !nodeB) return true;
    if (!nodeA || !nodeB) return false;
    if (nodeA.val !== nodeB.val) return false;

    return dfs(nodeA.left, nodeB.right) && dfs(nodeA.right, nodeB.left);
  };

  return dfs(root.left, root.right);
};

exports.isSymmetric = isSymmetric;
