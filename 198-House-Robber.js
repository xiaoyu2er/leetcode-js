/**
 * https://leetcode.com/problems/house-robber/description/
 * Difficulty:Easy
 *
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is that adjacent houses have security system connected
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.

 Given a list of non-negative integers representing the amount of money of each house,
 determine the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums.length) return 0;
    var dp = [0, nums[0]];
    var max = nums[0];
    for (var i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
        max = Math.max(dp[i + 1], max);
    }
    return max;
};

console.log(rob([5, 2, 3, 5, 8]));