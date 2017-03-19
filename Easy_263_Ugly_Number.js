/**
 *
 * https://leetcode.com/problems/ugly-number/#/description
 *
 * Write a program to check whether a given number is an ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 *
 * Note that 1 is typically treated as an ugly number.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    if (num <= 0) return false;
    if (num == 1) return true;

    while (num > 1) {
        var old = num;
        if (!(num % 2)) num = num / 2;
        if (!(num % 3)) num = num / 3;
        if (!(num % 5)) num = num / 5;
        if (old === num) return false;
    }
    return true;

};

console.log(isUgly(6) === true);
console.log(isUgly(8) === true);
console.log(isUgly(14) === false);
