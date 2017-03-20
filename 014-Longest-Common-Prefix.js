/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Difficulty:Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    var m = strs.length;
    if (!m) return '';

    var min = Infinity;
    var minIndex = -1;
    for (var i = 0; i < strs.length; i++) {
        if (strs[i].length < min) {
            min = strs[i].length;
            minIndex = i;
        }
    }

    var s = strs[minIndex];

    for (i = 0; i < s.length; i++) {
        var ch = strs[0][i];
        var same = true;
        for (var j = 1; j < m; j++) {
            if (strs[j][i] !== ch) {
                same = false;
                break;
            }

        }
        if (!same) break;

    }

    return s.substr(0, i);

};

console.log(longestCommonPrefix([
    'abdc',
    'abc123',
    'abc234'
]));