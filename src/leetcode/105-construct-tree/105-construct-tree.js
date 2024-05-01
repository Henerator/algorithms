class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preorderIndex = -1;

  const build = (inorderLeft, inorderRight) => {
    if (inorderLeft > inorderRight) {
      return null;
    }

    const nodeValue = preorder[++preorderIndex];
    const node = new TreeNode(nodeValue);

    const inorderIndex = inorder.findIndex((value) => value === nodeValue);

    node.left = build(inorderLeft, inorderIndex - 1);
    node.right = build(inorderIndex + 1, inorderRight);

    return node;
  };

  return build(0, inorder.length - 1);
};

exports.buildTree = buildTree;
