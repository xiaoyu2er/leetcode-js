/**
 * https://leetcode.com/problems/climbing-stairs/#/description
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * Note: Given n will be a positive integer.
 *
 * 答案:
 *
 * https://leetcode.com/articles/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function (n) {
    var ways = [1, 1];
    for (var i = 2; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n];
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));

console.log('==============');

console.log(climbStairs2(1));
console.log(climbStairs2(2));
console.log(climbStairs2(3));
console.log(climbStairs2(4));