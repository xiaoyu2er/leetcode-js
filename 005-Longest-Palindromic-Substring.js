/**
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 * Difficulty:Medium
 *
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example:
 * Input: "cbbd"
 * Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var a = new Date();
    var n = s.length;
    var res = '';
    var dp = [];
    while (dp.push(new Array(n).fill(-1)) < n);
    // console.log(dp);

    for (var i = n - 1; i >= 0; i--) {
        for (var j = i; j < n; j++) {
            dp[i][j] = s[i] === s[j] && ((j - i < 3) || dp[i + 1][j - 1]);
            if (dp[i][j] === undefined) {
                console.log(i, j, s[i], s[j], dp[i + 1][j - 1])
            }
            if (dp[i][j]) {
                var tmp = s.substring(i, j + 1);
                if (tmp.length > res.length) res = tmp;
            }

        }
    }
    // console.log(dp);
    console.log(new Date() - a);

    return res;
};

// console.log(isPalindrome(s, 1, 3));
// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome(''));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('aabbbbbb'));
console.log(longestPalindrome("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));