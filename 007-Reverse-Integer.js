/**
 * https://leetcode.com/problems/reverse-integer/description/
 * Difficulty:Easy
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 * Input: 123
 * Output:  321
 * Example 2:
 * Input: -123
 * Output: -321
 * Example 3:
 * Input: 120
 * Output: 21
 * Note:
 * Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    var sign = x >= 0 ? -1 : 1;
    x = Math.abs(x);

    var sum = 0;
    while (x) {
        sum = sum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    var ret = sign * -1 * sum;
    var max = Math.pow(2, 31) - 1;
    var min = -Math.pow(2, 31);
    if (ret > max) return 0;
    if (ret < min) return 0;
    return ret;
};

console.log(reverse(123) === 321);
console.log(reverse(-123) === -321);
console.log(reverse(120) === 21);
console.log(reverse(1534236469) === 0);
console.log(reverse(-2147483412), reverse(-2147483412) === -2143847412);
console.log(reverse(-2147483648), reverse(-2147483648) === 0);

