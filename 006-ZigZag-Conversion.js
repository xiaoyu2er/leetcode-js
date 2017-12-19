/**
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 * Difficulty:Medium
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 * (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 *
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    var arr = [];
    for (var i = 0; i < numRows; i++) {
        arr[i] = [];
    }

    var cnt = 0;
    var len = s.length;

    while (cnt < len) {
        for (var i = 0; i < arr.length && cnt < len; i++) {
            arr[i].push(s[cnt++]);
        }
        for (var i = numRows - 2; i >= 1 && cnt < len; i--) {
            arr[i].push(s[cnt++]);
        }
    }
    // console.log(arr);

    return arr.map(arr => arr.join('')).join('')
};

console.log(convert('PAYPALISHIRING', 3));