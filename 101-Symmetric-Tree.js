/**
 * https://leetcode.com/problems/symmetric-tree/description/
 * Difficulty:Easy
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *      1
 *    /  \
 *   2    2
 *  / \  / \
 * 3  4 4   3
 * But the following [1,2,2,null,3,null,3] is not:
 *      1
 *     / \
 *    2   2
 *    \    \
 *     3    3
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    return helper(root.left, root.right)
};

function helper(a, b) {
    if (!a && !b) return true;
    if (!a) return false;
    if (!b) return false;
    if (a.val !== b.val) return false;
    return helper(a.left, b.right) && helper(a.right, b.left);
}

console.log(isSymmetric({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
        },
        right: {
            val: 3
        }
    }
}))