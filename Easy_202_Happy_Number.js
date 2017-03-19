/**
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

    var num = n;
    var results = [];
    while (true) {
        var digits = ('' + num).split('');
        var newN = squareSumOfDigits(digits);
        if (newN === 1) return true;
        if (results.indexOf(newN) > -1) return false;
        results.push(newN);
        num = newN;
    }
};

function squareSumOfDigits(digits) {
    return digits.reduce((sum, d) => sum += d * d, 0);
}

console.log(isHappy(1));
console.log(isHappy(19));
