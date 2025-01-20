function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function buildSearchTree(left, right) {
    const mid = left + Math.floor((right - left) / 2);

    if (left > right) return null;

    const leftNode = buildSearchTree(left, mid - 1);
    const rightNode = buildSearchTree(mid + 1, right);

    return new TreeNode(nums[mid], leftNode, rightNode);
  }

  return buildSearchTree(0, nums.length - 1);
};

exports.sortedArrayToBST = sortedArrayToBST;
