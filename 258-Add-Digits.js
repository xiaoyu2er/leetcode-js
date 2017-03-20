/**
 * https://leetcode.com/problems/add-digits/description/
 * Difficulty:Easy
 *
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * For example:
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 *
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) return num;
    return addDigits(sum(num));
};

function sum(num) {
    return ('' + num).split('').reduce((a, b) => a + parseInt(b), 0);
}

console.log(addDigits(38));