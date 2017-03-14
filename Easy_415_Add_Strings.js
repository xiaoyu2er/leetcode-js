/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 * Note:
 *
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var carry = 0;
    var len1 = num1.length;
    var len2 = num2.length;
    var forCount = Math.max(len1, len2);
    var newNum = '';
    for (var i = 0; i < forCount; i++) {
        var a = parseInt(num1[len1 - 1 - i]) || 0;
        var b = parseInt(num2[len2 - 1 - i]) || 0;
        var c = a + b + carry;
        carry = Math.floor(c / 10);
        var e = c % 10;
        newNum = e + newNum;
    }

    if (carry) {
        newNum = carry + newNum
    }
    return newNum;
};

console.log(addStrings('12', '123') == '135');