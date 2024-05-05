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
 */
class BSTIterator {
  constructor(root) {
    this.count = root ? 1 : 0;
    const counter = {
      increase: (value) => (this.count += value),
      decrease: () => this.count--,
    };
    this.iterator = this.createIterator(root, counter);
  }

  next() {
    return this.iterator.next().value;
  }

  hasNext() {
    return this.count > 0;
  }

  *createIterator(root, counter) {
    function* dfs(node) {
      counter.increase(+!!node.left + +!!node.right);

      if (node.left) yield* dfs(node.left);

      counter.decrease();
      yield node.val;

      if (node.right) yield* dfs(node.right);
    }

    for (const value of dfs(root)) {
      yield value;
    }
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

exports.BSTIterator = BSTIterator;
