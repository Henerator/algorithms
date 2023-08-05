/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  const cache = new Map();

  function getHashKey(left, right) {
    return `${left}-${right}`;
  }

  function findBsts(left, right) {
    if (left > right) return [null];

    const cacheKey = getHashKey(left, right);
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    const trees = [];
    for (let i = left; i <= right; i++) {
      const leftNodes = findBsts(left, i - 1);
      const rightNodes = findBsts(i + 1, right);

      for (const leftNode of leftNodes) {
        for (const rightNode of rightNodes) {
          trees.push(new TreeNode(i, leftNode, rightNode));
        }
      }
    }

    cache.set(cacheKey, trees);
    return trees;
  }

  return findBsts(1, n);
}
