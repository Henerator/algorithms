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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let postorderIndex = postorder.length;

  const build = (inorderLeft, inorderRight) => {
    if (inorderLeft > inorderRight) {
      return null;
    }

    postorderIndex--;
    const nodeValue = postorder[postorderIndex];
    const inorderIndex = inorder.indexOf(nodeValue, inorderLeft);

    const node = new TreeNode(nodeValue);
    node.right = build(inorderIndex + 1, inorderRight);
    node.left = build(inorderLeft, inorderIndex - 1);

    return node;
  };

  return build(0, inorder.length - 1);
};

exports.buildTree = buildTree;
