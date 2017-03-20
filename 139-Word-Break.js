/**
 * https://leetcode.com/problems/word-break/description/
 * Difficulty:Medium
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.
 *
 * For example, given
 * s = "leetcode",
 * dict = ["leet", "code"].
 * Return true because "leetcode" can be segmented as "leet code".
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var n = s.length;

    var dp = [true];
    for (var i = 1; i < n + 1; i++) {

        for (var j = 0; j < i; j++) {

            if (dp[j] && wordDict.indexOf(s.substring(j, i)) > -1) {
                dp[i] = true;
                break;
            } else {
                dp[i] = false;
            }

        }

    }
    // console.log(dp);
    return dp[n];

};

console.log(wordBreak("leetcode", ["lee", "leet", "cod", "code"]));
console.log(wordBreak("", ["lee", "leet", "cod", "code"]));
console.log(wordBreak("lee", ["l", "leet", "cod", "code", "e"]));
console.log(wordBreak("lee", ["l", "leet", "cod", "code", "leetco"]));