/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 * Difficulty:Medium
 *
 * Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.
 *
 * For example,
 * Given n = 3, your program should return all 5 unique BST's shown below.
 *
 *  1         3     3      2      1
 *   \       /     /      / \      \
 *    3     2     1      1   3      2
 *   /     /       \                 \
 *  2     1         2                 3
 */


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return [];
    return _genTrees(1, n);
};

function _genTrees(start, end) {
    if (start > end) return [null];
    // if (start === end) return [new TreeNode(start)];
    var list = [];
    for (var i = start; i <= end; i++) {

        var leftTrees = _genTrees(start, i - 1);
        var rightTrees = _genTrees(i + 1, end);
        // console.log(leftTrees, rightTrees);

        leftTrees.forEach(left => {
            rightTrees.forEach(right => {

                var root = new TreeNode(i);
                root.left = left;
                root.right = right;
                list.push(root);
            })
        })
    }
    return list;
}

console.log(generateTrees(0));