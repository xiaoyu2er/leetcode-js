/**
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 * Difficulty:Hard
 *
 * You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s)
 * in s that is a concatenation of each word in words exactly once and without any intervening characters.
 * For example, given:
 * s: "barfoothefoobarman"
 * words: ["foo", "bar"]
 * You should return the indices: [0,9].
 * (order does not matter).
 *
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s.length || !words.length) return [];
    var ans = [];
    var toFind = {};

    var m = words.length;
    var n = words[0].length;

    for (var i = 0; i < m; i++) {
        toFind[words[i]] = (toFind[words[i]] || 0) + 1;
    }

    for (i = 0; i <= s.length - m * n; i++) {
        var found = {};

        for (var j = 0; j < m; j++) {
            var k = i + n * j;
            var w = s.substr(k, n);
            if (!toFind[w]) break;
            found[w] = (found[w] || 0) + 1;
            if (found[w] > toFind[w]) break;
        }
        if (j === m) ans.push(i);
    }

    return ans;

};

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']));