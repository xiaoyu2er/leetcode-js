/**
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 * Difficulty:Hard
 *
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 * For "(()", the longest valid parentheses substring is "()", which has length = 2.
 * Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
 */

/**
 * 使用栈解决
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(i);
        else {
            if (stack.length && s[stack[stack.length - 1]] === '(') stack.length--;
            else stack.push(i);
        }
    }

    if (!stack.length) return s.length;
    var longest = 0;
    var end = s.length;
    var start = 0;
    while (stack.length) {
        start = stack[stack.length - 1];
        stack.length--;
        longest = Math.max(longest, end - start - 1);
        end = start;
    }
    longest = Math.max(longest, end);
    return longest;
};


console.log(longestValidParentheses('()'), 2);
console.log(longestValidParentheses('())'), 2);
console.log(longestValidParentheses('(()'), 2);
console.log(longestValidParentheses('))()())((())))'), 6);
console.log(longestValidParentheses('()'), 2);
console.log(longestValidParentheses('('), 0);
console.log(longestValidParentheses(')()()))()()())'), 6);
console.log(longestValidParentheses('()(()'), 2);
console.log(longestValidParentheses('()(()'), 2);
console.log(longestValidParentheses('(()'), 2);

