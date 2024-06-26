/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} rootA
 * @param {TreeNode} rootB
 * @return {boolean}
 */
var isSameTree = function (rootA, rootB) {
  const dfs = (nodeA, nodeB) => {
    if (!nodeA && !nodeB) return true;
    if (!nodeA || !nodeB) return false;
    if (nodeA.val !== nodeB.val) return false;

    return dfs(nodeA.left, nodeB.left) && dfs(nodeA.right, nodeB.right);
  };

  return dfs(rootA, rootB);
};

exports.isSameTree = isSameTree;
