/**
 * https://leetcode.com/problems/decode-ways/description/
 * Difficulty:Medium
 *
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 * For example,
 * Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 * The number of ways decoding "12" is 2.
 *
 */


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (!s.length) return 0;
    var dp = [];
    var n = s.length;
    dp[0] = 1;

    for (var i = 1; i <= n; i++) {
        dp[i] = 0;
        var sum1 = parseInt(s[i - 1]);
        var sum2 = parseInt(s[i - 2] + s[i - 1]);

        if (sum1 > 0 && sum1 < 10) {
            dp[i] += dp[i - 1];
        }
        if (sum2 > 9 && sum2 < 27) {
            dp[i] += dp[i - 2];
        }
    }
    // console.log(dp);
    return dp[n];
};

console.log(numDecodings("0"));
console.log(numDecodings("12"));
console.log(numDecodings("10"));
console.log(numDecodings("01"));
console.log(numDecodings("100"));