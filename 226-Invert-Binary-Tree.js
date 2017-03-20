/**
 * https://leetcode.com/problems/invert-binary-tree/description/
 * Difficulty:Easy
 *
 * Invert a binary tree.
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *
 * to
 *
 *       4
 *     /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return root;
    if (!root.left && !root.right) return root;
    var left = invertTree(root.right);
    var right = invertTree(root.left);
    root.left = left;
    root.right = right;
    return root;
};

console.log(invertTree({
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null,
        },
        right: null
    },
    right: null
}));