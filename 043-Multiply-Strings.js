/**
 * https://leetcode.com/problems/multiply-strings/description/
 * Difficulty:Medium
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.
 * Note:
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    var m = num1.length;
    var n = num2.length;
    var arr = new Array(m + n).fill(0);
    for (var i = m - 1; i >= 0; i--) {
        for (var j = n - 1; j >= 0; j--) {
            var mul = (num1[i] - '0') * (num2[j] - '0');

            var sum = mul + arr[i + j + 1];

            arr[i + j] += Math.floor(sum / 10);
            arr[i + j + 1] = sum % 10;
        }
    }

    var str = arr.reduce((a, b) => {
        if (a === '' && b === 0) return a;
        return a + b;
    }, '');

    return str ? str : '0';

};

console.log(multiply('89', '45'));
console.log(multiply('123', '123'));
console.log(multiply('123', '0'));


