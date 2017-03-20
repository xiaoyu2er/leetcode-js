/**
 * https://leetcode.com/problems/valid-parentheses/
 * Difficulty:Easy
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * The brackets must close in the correct order,
 * "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        switch (c) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:

                if (!stack.length || stack.pop() !== c) {
                    // console.log(stack);
                    return false;
                }

        }
    }

    return stack.length === 0;
};

console.log(isValid('()[]{}'));
console.log(isValid('[()][]{}'));
console.log(isValid('(])'));