/**
 *
 *
 * Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
 * Note:
 *
 * The given integer is guaranteed to fit within the range of a 32-bit signed integer.
 * You could assume no leading zero bit in the integer’s binary representation.
 *
 * Example:
 * Input: 5
 * Output: 2
 * Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    var str = '';

    while (num) {
        str = ((num % 2) ? 0 : 1) + str;
        num = Math.floor(num / 2);
    }

    return parseInt(str, 2);
};

console.log(findComplement(5));
console.log(findComplement(2));