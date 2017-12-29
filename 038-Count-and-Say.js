/**
 * https://leetcode.com/problems/count-and-say/description/
 * Difficulty:Easy
 *
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 * 1 is read off as "one 1" or 11.
 *
 * 11 is read off as "two 1s" or 21.
 *
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * Given an integer n, generate the nth term of the count-and-say sequence.
 *
 * Note: Each term of the sequence of integers will be represented as a string.
 *
 * Example 1:
 * Input: 1
 * Output: "1"
 *
 * Example 2:
 * Input: 4
 * Output: "1211"
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var ans = '1';
    for (var i = 1; i < n; i++) {
        var tmp = '';
        var cnt = 1;
        for (var j = 1; j < ans.length; j++) {
            if (ans[j] === ans[j - 1]) cnt++;
            else {
                tmp += (cnt + ans[j - 1]);
                cnt = 1;
            }
        }
        ans = tmp + cnt + ans[j - 1];
    }

    return ans;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));