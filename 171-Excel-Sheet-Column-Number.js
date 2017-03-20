/**
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 * Difficulty:Easy
 *
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * For example:
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {

    var num = 0;
    var aCode = 'A'.charCodeAt(0);
    for (var i = 0; i < s.length; i++) {
        var n = 1 + s.charCodeAt(i) - aCode;
        num = num * 26 + n;
    }
    return num;
};

console.log(titleToNumber('AA'));