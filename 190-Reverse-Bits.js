/**
 * https://leetcode.com/problems/reverse-bits/#/description
 * Difficulty:Easy
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * For example, given input 43261596 (represented in binary as 00000010100101000001111010011100),
 *
 * return 964176192 (represented in binary as 00111001011110000010100101000000).
 *
 * 00000010100101000001111010011100
 * 00111001011110000010100101000000
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    // reverse binary str
    var str = '';
    var i = 32;
    while (i--) {
        str += n % 2;
        n = Math.floor(n / 2);
    }

    return parseInt(str, 2);
};

console.log(reverseBits(43261596) == 964176192);