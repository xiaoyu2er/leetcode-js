/**
 * Find the sum of all left leaves in a given binary tree.

 Example:

 3
 / \
 9  20
 /  \
 15   7

 There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
var sumOfLeftLeaves = function (root) {
    return fn(root, false);
};

function fn(node, isLeft) {
    if (!node) return 0;
    if (!node.left && !node.right) {
        return isLeft ? node.val : 0;
    }

    return fn(node.left, true) + fn(node.right, false);

}

