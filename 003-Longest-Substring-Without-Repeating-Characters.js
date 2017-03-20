/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Difficulty:Medium
 *
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    var max = 0;
    var i = 0;
    var j = 0;
    var n = s.length;
    var map = {};

    while (i < n && j < n) {
        if (map[s[j]] === undefined) {
            map[s[j]] = 1;
            j++;
            max = Math.max(max, j - i);
        } else {
            delete map[s[i]];
            i++;
        }

    }

    return max;
};

console.log(lengthOfLongestSubstring('c'), 1);
console.log(lengthOfLongestSubstring(''), 0);
console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('bbbbb'), 1);
console.log(lengthOfLongestSubstring('pwwkew'), 3);
console.log(lengthOfLongestSubstring('xhhyccrcbdczkvzeeubynglxfdedshtpobqsdhufkzgwuhaabdzrlkosnuxibrxssnkxuhcggkecshdvkcmymdqbxolbfjtzyfw'), 14);