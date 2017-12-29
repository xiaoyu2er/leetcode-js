/**
 * https://leetcode.com/problems/add-binary/description/
 * Difficulty:Easy
 * Given two binary strings, return their sum (also a binary string).
 * For example,
 * a = "11"
 * b = "1"
 * Return "100".
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var c = 0;
    var alen = a.length;
    var blen = b.length;
    var ans = '';
    for (var i = 0; i < Math.max(alen, blen); i++) {
        var ai = i < alen ? parseInt(a[alen - i - 1]) : 0;
        var bi = i < blen ? parseInt(b[blen - i - 1]) : 0;

        var sum = ai + bi + c;
        // console.log(ai, bi, c);
        if (sum < 2) {
            ans = sum + ans;
            c = 0;
        }
        else {
            ans = (sum - 2) + ans;
            c = 1;
        }
    }
    if (c) {
        ans = 1 + ans;
    }

    return ans;

};

console.log(addBinary('111', '1'));