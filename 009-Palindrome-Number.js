/**
 * https://leetcode.com/problems/palindrome-number/description/
 * Difficulty:Easy
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    var t = x;
    x = Math.abs(x);
    var p = 0;
    while (x) {
        p = p * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    // console.log(x, p);
    return t === p;
};

console.log(isPalindrome(-1) === false);
console.log(isPalindrome(0) === true);
console.log(isPalindrome(123) === false);
console.log(isPalindrome(12321) === true);
console.log(isPalindrome(1221) === true);
console.log(isPalindrome(2222) === true);

