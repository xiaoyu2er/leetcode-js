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
 *
 * 解题思路
 *
 * 动态规划
 * 注意体感要求, isMatch 为全匹配
 * 例子中的 isMatch("aab", "c*a*b") -> true
 * 是因为匹配 0个c, 2个a, 一个b
 *
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
                // isMatch('a', 'a.*')
                // 如果j-1是*, 那么j-2可以出现0次;
                // 所以可以直接看 dp[i][j-2]
                dp[i][j] = dp[i][j - 2] ||
                    // isMatch('aa', 'aa*')
                    (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]);
            } else {
                dp[i][j] = i > 0 && dp[i - 1][j - 1] &&
                    (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            }
        }
    }

    console.log(dp.map(a => a.map(a => a ? 1 : 0)));
    return dp[m][n];
};

// console.log(isMatch("aa", "a"), '→', false)
// console.log(isMatch("aa", "aa"), '→', true)
// console.log(isMatch("aaa", "aa"), '→', false)
// console.log(isMatch("aa", "a*"), '→', true)
// console.log(isMatch("aa", ".*"), '→', true)
// console.log(isMatch("ab", ".*"), '→', true)
// console.log(isMatch("aab", "c*a*b"), '→', true)

console.log(isMatch("a", "a.*"));
// console.log(isMatch("aasdfasdfasdfasdfas", "aasdf.*asdf.*asdf.*asdf.*s"));
