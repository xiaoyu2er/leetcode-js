/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

 Examples:

 s = "leetcode"
 return 0.

 s = "loveleetcode",
 return 2.
 Note: You may assume the string contain only lowercase letters.


 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (s.lastIndexOf(ch) === s.indexOf(ch)) return i;
    }
    return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));