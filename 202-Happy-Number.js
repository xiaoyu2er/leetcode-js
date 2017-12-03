/**
 * https://leetcode.com/problems/happy-number/description/
 * Difficulty:Easy
 *
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process: Starting with any positive integer,
 * replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
 * or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 *
 * Example: 19 is a happy number
 *
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    var results = [n];

    while (true) {
        n = squareSumOfDigits(n);
        // console.log(n);
        if (n === 1) return true;
        if (results.indexOf(n) > -1) return false;
        results.push(n);
    }
};

function squareSumOfDigits(n) {
    var sum = 0, tmp;
    while (n) {
        tmp = n % 10;
        sum += tmp * tmp;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(isHappy(1));
console.log(isHappy(19));
