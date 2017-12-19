/**
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 * Difficulty:Medium
 *
 * Given a digit string, return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 *
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    if (!digits.length) return [];

    var ans = [''];
    var map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    for (var i = 0; i < digits.length; i++) {
        var str = map[digits[i]];
        var tmp = [];
        for (var j = 0; j < ans.length; j++) {
            var t = ans[j];
            for (var k = 0; k < str.length; k++) {
                tmp.push(t + str[k]);
            }
        }
        ans = tmp;
    }

    return ans;
};

console.log(letterCombinations('23'));