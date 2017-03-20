/**
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 * Difficulty:Medium
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 * For example,
 * Given [10, 9, 2, 5, 3, 7, 101, 18],
 * The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.
 * Your algorithm should run in O(n2) complexity.
 * Follow up: Could you improve it to O(n log n) time complexity?
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

    var dp = [];
    for (var i = 0; i < nums.length; i++) {
        dp[i] = 1;

        var max = 0;
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] > max) {
                    max = dp[j]
                }
            }
        }
        dp[i] = max + 1;
    }

    return Math.max(...dp);
};

console.log(lengthOfLIS([23, 2, 4, 5, 6]));