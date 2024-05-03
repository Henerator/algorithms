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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const list = [];

  const dfs = (node) => {
    if (!node) return;

    list.push(node);

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };

  dfs(root);
  list.push(null);

  for (let i = 0; i < list.length - 2; i++) {
    list[i].left = null;
    list[i].right = list[i + 1];
  }

  return root;
};

exports.flatten = flatten;
