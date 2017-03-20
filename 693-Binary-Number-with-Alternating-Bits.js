/**
 * https://leetcode.com/problems/binary-number-with-alternating-bits/description/
 * Difficulty:Easy
 *
 * Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
 *
 * Example 1:
 * Input: 5
 * Output: True
 * Explanation:
 * The binary representation of 5 is: 101
 *
 * Example 2:
 * Input: 7
 * Output: False
 * Explanation:
 * The binary representation of 7 is: 111.
 *
 * Example 3:
 * Input: 11
 * Output: False
 * Explanation:
 * The binary representation of 11 is: 1011.
 *
 * Example 4:
 * Input: 10
 * Output: True
 * Explanation:
 * The binary representation of 10 is: 1010.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    var last = n % 2;
    n = Math.floor(n / 2);

    while (n > 0) {

        var r = n % 2;
        n = Math.floor(n / 2);
        // console.log(last);
        if (r === last) return false;
        last = r;
    }
    return true;
};

console.log(hasAlternatingBits(3));
console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
console.log(hasAlternatingBits(10));