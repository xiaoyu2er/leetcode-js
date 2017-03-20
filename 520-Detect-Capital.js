/**
 * https://leetcode.com/problems/detect-capital/description/
 * Difficulty:Easy
 *
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital if it has more than one letter, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 *
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

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    var isFirstChUpper = false;
    var upperCnt = 0;
    var n = word.length;

    for (let i = 0; i < n; i++) {
        let ch = word[i];
        if (ch >= 'A' && ch <= 'Z') {
            upperCnt++;
            if (i === 0) isFirstChUpper = true;
        }
    }

    if (isFirstChUpper) {
        return upperCnt === 1 || upperCnt === n;
    } else {
        return upperCnt === 0;
    }
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('FlaG'));
console.log(detectCapitalUse('A'));
console.log(detectCapitalUse('Google'));
console.log(detectCapitalUse('leetcode'));