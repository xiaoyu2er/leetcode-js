/**
 * https://leetcode.com/problems/regular-expression-matching/description/
 * Difficulty:Hard
 *
 * implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {

    var dp = [];
    var m = s.length;
    var n = p.length;

    for (var i = 0; i <= m; i++) {
        dp.push(new Array(n + 1).fill(false));
    }
    dp[0][0] = true;

    for (var i = 0; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]);
            } else {
                dp[i][j] = i > 0 && dp[i - 1][j - 1] &&
                    (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            }
        }
    }

    // console.log(dp);
    return dp[m][n];
};

console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s"));
