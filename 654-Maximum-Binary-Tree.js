/**
 * https://leetcode.com/problems/maximum-binary-tree/description/
 * Difficulty:Medium
 *
 * Given an integer array with no duplicates.
 * A maximum tree building on this array is defined as follow:
 *
 * The root is the maximum number in the array.
 * The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
 * The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
 * Construct the maximum tree by the given array and output the root node of this tree.
 *
 * Example 1:
 * Input: [3,2,1,6,0,5]
 * Output: return the tree root node representing the following tree:
 *     6
 *   /   \
 *  3     5
 *  \    /
 *  2   0
 *   \
 *   1
 * Note:
 * The size of the given array will be in the range [1,1000].
 */

//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    return helper(nums, 0, nums.length);
};

function helper(nums, s, e) {
    if (e <= s) return null;
    if (s + 1 === e) return new TreeNode(nums[s]);
    else {
        var maxIndex = findMaxIndex(nums, s, e);
        var root = new TreeNode(nums[maxIndex]);
        root.left = helper(nums, s, maxIndex);
        root.right = helper(nums, maxIndex + 1, e);
        return root;
    }
}

function findMaxIndex(nums, s, e) {

    var maxIndex = 0;
    var max = Number.NEGATIVE_INFINITY;
    for (var i = s; i < e; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]))