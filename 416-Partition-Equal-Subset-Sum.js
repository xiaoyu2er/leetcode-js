/**
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 * Difficulty:Medium
 *
 * Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 * Note:
 * Each of the array element will not exceed 100.
 * The array size will not exceed 200.
 * Example 1:
 * Input: [1, 5, 11, 5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 * Example 2:
 * Input: [1, 2, 3, 5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 */

/**
 *
 * 01背包问题
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    var sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2) return false;
    sum = sum / 2;

    var n = nums.length;
    var dp = [];

    while (dp.push(new Array(sum + 1).fill(0)) < n + 1) ;


    for (var i = 0; i < n + 1; i++) {
        dp[i][0] = 1;
    }

    for (var i = 1; i < n + 1; i++) {
        for (var j = 1; j < sum + 1; j++) {
            if (dp[i - 1][j]) dp[i][j] = 1;
            if (j >= nums[i - 1] && dp[i - 1][j - nums[i - 1]]) dp[i][j] = 1;
        }
    }

    // console.log(dp);

    return !!dp[n][sum];

};

console.log(canPartition([1, 5]));
console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([1, 5, 11, 5, 1, 1]));
// console.log(canPartition([1, 5, 11, 5, 2]));
// console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([1, 2, 3, 5]));