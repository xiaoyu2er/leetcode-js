/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 * Difficulty:Easy
 *
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {

    if (!root) return 0;

    var left = minDepth(root.left);
    var right = minDepth(root.right);

    return (left == 0 || right == 0) ? left + right + 1 : Math.min(left, right) + 1;

};