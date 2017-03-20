/**
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
 * Difficulty:Medium
 *
 * Given an unsorted array of integers, find the number of longest increasing subsequence.
 *
 * Example 1:
 * Input: [1,3,5,4,7]
 * Output: 2
 * Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].
 *
 * Example 2:
 * Input: [2,2,2,2,2]
 * Output: 5
 * Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.
 *
 * Note: Length of the given array will be not exceed 2000 and the answer is guaranteed to be fit in 32-bit signed int.
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    if (!nums.length) return 0;
    var dp = [];
    var longest = 0;
    for (var i = 0; i < nums.length; i++) {

        var max = 0;
        var count = 0;
        for (var j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j][0] > max) {
                max = dp[j][0];
            }
        }

        for (var j = 0; j < i; j++) {
            if (dp[j][0] === max && nums[j] < nums[i]) {
                count += dp[j][1];
            }
        }

        dp[i] = [max + 1, count ? count : 1];
        longest = Math.max(longest, max + 1);
    }

    return dp.filter(t => t[0] === longest)
        .reduce((a, b) => a + b[1], 0);

};

// console.log(findNumberOfLIS([1, 3, 5, 4, 7]));

console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]));

// console.log(findNumberOfLIS([1, 3, 5, 4]));
// console.log(findNumberOfLIS([2, 2]));
// console.log(findNumberOfLIS([2]));
// console.log(findNumberOfLIS([2, 2, 2]));