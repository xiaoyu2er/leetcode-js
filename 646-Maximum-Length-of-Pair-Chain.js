/**
 * https://leetcode.com/problems/maximum-length-of-pair-chain/description/
 * Difficulty:Medium
 *
 * You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.
 * Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.
 * Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.
 * Example 1:
 * Input: [[1,2], [2,3], [3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4]
 */

/**
 *
 * IN ANY ORDER!
 * SORT FIRST!
 *
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    var n = pairs.length;
    if (!n) return 0;

    pairs = pairs.sort((a, b) => {
        var diff = a[1] - b[1];
        if (diff > 0) return 1;
        else if (diff === 0) return 0;
        return -1;
    });
    // console.log(pairs);

    var dp = [];
    dp[0] = 1;
    var max = 1;
    for (var i = 1; i < n; i++) {
        var now = pairs[i];
        dp[i] = 1;
        for (var j = 0; j < i; j++) {
            var last = pairs[j];
            if (last[1] < now[0]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }
    console.log(dp);
    return Math.max(...dp);
};

// console.log(findLongestChain([]));
// console.log(findLongestChain([[1, 2], [2, 3], [3, 4]]));
// console.log(findLongestChain([[1, 2], [3, 4], [5, 46], [1, 2]]));
console.log(findLongestChain([[3, 4], [2, 3], [1, 2]]));