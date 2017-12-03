/**
 * https://leetcode.com/problems/palindromic-substrings/description/
 * Difficulty:Medium
 *
 *
 * Given a string, your task is to count how many palindromic substrings in this string.
 *
 * The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
 *
 * Example 1:
 *  Input: "abc"
 *  Output: 3
 *  Explanation: Three palindromic strings: "a", "b", "c".
 *
 * Example 2:
 *  Input: "aaa"
 *  Output: 6
 *  Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 *
 * Note:
 *  The input string length won't exceed 1000.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {

    var dp = [];
    var n = s.length;
    for (var i = 0; i < n; i++) {
        dp.push(new Array(n).fill(false));
        // dp[i][i] = 1;
    }
    var cnt = 0;
    for (var i = n - 1; i >= 0; i--) {
        for (var j = i; j < n; j++) {
            if (i === j) dp[i][j] = true;
            else {
                dp[i][j] = s[i] === s[j] ? (i + 1 >= j - 1 || dp[i + 1][j - 1]) : 0;
            }
            if (dp[i][j]) cnt++;
        }
    }
    // console.log(dp);

    return cnt;

};

// console.log(countSubstrings('abc'));
console.log(countSubstrings('aaaaa'));