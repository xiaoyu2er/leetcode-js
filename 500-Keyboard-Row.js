/**
 * https://leetcode.com/problems/keyboard-row/description/
 * Difficulty:Easy
 *
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 *
 * Example 1:
 * Input: ["Hello", "f", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 * Note:
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {

    var s = 'qwertyuiopasdfghjklzxcvbnm';
    return words.filter(w => {
        if (!w) return true;
        w = w.toLowerCase();
        var t = row(w[0]);
        for (var i = 1; i < w.length; i++) {
            if (t !== row(w[i])) return false;
        }
        return true;
    });

    function row(ch) {
        var i = s.indexOf(ch);
        if (i < 10) return 0;
        if (i < 19) return 1;
        return 2;
    }

};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))