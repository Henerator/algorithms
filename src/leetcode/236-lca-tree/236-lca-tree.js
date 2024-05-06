/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q) return root;

  let left = null;
  let right = null;

  if (root.left) left = lowestCommonAncestor(root.left, p, q);
  if (root.right) right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left ?? right ?? null;
};

exports.lowestCommonAncestor = lowestCommonAncestor;
