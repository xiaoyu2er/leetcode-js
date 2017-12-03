/**
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 * Difficulty:Medium
 *
 * Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.
 *
 * Example 1:
 * Input:
 * A: [1, 2, 3, 2, 1]
 * B: [3, 2, 1, 4, 7, 8]
 * Output: 3
 * Explanation:
 * The repeated subarray with maximum length is [3, 2, 1].
 *
 * Note:
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
 *
 */

/**
 * 解题思路
 *
 * 动态规划
 *
 * dp[i][j] 以 A[i-1] B[j-1] 结尾的最长子串长度
 * dp[i][j] = A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {

    var m = A.length;
    var n = B.length;
    if (m * n === 0) return 0;
    var dp = [];
    var max = 0;
    for (var i = 0; i <= m; i++) {
        dp.push(new Array(n + 1).fill(0));
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            dp[i][j] = A[i - 1] === B[j - 1] ? dp[i - 1][j - 1] + 1 : 0;
            max = Math.max(max, dp[i][j]);
        }
    }
    // console.log(dp);

    return max;

};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7, 8]))