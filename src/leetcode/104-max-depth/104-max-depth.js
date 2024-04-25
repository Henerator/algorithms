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
var maxDepth = function (root) {
  if (!root) return 0;

  let maximumDepth = 0;
  const dfs = (node, depth = 0) => {
    let currentDepth = depth + 1;

    if (!node.left && !node.right) {
      maximumDepth = Math.max(maximumDepth, currentDepth);
      return;
    }

    if (node.left) dfs(node.left, currentDepth);
    if (node.right) dfs(node.right, currentDepth);
  };

  dfs(root);
  return maximumDepth;
};

exports.maxDepth = maxDepth;
