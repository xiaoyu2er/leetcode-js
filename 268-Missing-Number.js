/**
 * https://leetcode.com/problems/missing-number/description/
 * Difficulty:Easy
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 * For example,
 * Given nums = [0, 1, 3] return 2.
 *
 * Note:
 * Your algorithm should run in linear runtime complexity.
 * Could you implement it using only constant extra space complexity?
 *
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var n = nums.length;
    var ideal = n * (n + 1) / 2;
    var sum = nums.reduce((a, b)=> a = a + b, 0);
    return ideal - sum;
};

console.log(missingNumber([0, 1, 3]) == 2);
console.log(missingNumber([0, 1, 2]) == 3);
console.log(missingNumber([1, 2, 3, 4]) == 0);


