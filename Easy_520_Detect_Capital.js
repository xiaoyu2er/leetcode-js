/**
 * Given a word, you need to judge whether the usage of capitals in it is right or not.

 We define the usage of capitals in a word to be right when one of the following cases holds:

 All letters in this word are capitals, like "USA".
 All letters in this word are not capitals, like "leetcode".
 Only the first letter in this word is capital if it has more than one letter, like "Google".
 Otherwise, we define that this word doesn't use capitals in a right way.

 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    var len = word.length;
    var upperLen = 0;
    var lowerLen = 0;
    var firstCap = false;
    for (var i = 0; i < len; i++) {
        var ch = word[i];
        if (/[A-Z]/.test(ch)) {
            upperLen++;
            if (i == 0) {
                firstCap = true;
            }
        }
        if (/[a-z]/.test(ch)) {
            lowerLen++;
        }
    }
    if (upperLen == len) return true;
    if (lowerLen == len) return true;
    return (upperLen == 1 && firstCap && len > 1);
};