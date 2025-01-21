/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  const n = grid.length;

  function buildQuadTree(x1, x2, y1, y2) {
    if (x1 === x2 || y1 === y2) return new _Node(grid[y1][x1], true, null, null, null, null);

    const midX = x1 + ((x2 - x1) >> 1);
    const midY = y1 + ((y2 - y1) >> 1);

    const tl = buildQuadTree(x1, midX, y1, midY);
    const tr = buildQuadTree(midX + 1, x2, y1, midY);
    const bl = buildQuadTree(x1, midX, midY + 1, y2);
    const br = buildQuadTree(midX + 1, x2, midY + 1, y2);

    if (
      tl.isLeaf &&
      tr.isLeaf &&
      bl.isLeaf &&
      br.isLeaf &&
      tl.val === tr.val &&
      tl.val === bl.val &&
      tl.val === br.val
    ) {
      return new _Node(tl.val, true, null, null, null, null);
    }

    return new _Node(1, false, tl, tr, bl, br);
  }

  return buildQuadTree(0, n - 1, 0, n - 1);
};
