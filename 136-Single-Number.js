/**
 *
 * https://leetcode.com/problems/single-number/description
 * Difficulty:Easy
 *
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity.
 *
 * Could you implement it without using extra memory?
 *
 *
 * https://discuss.leetcode.com/topic/1916/my-o-n-solution-using-xor/1
 * Hint: known that A XOR A = 0 and the XOR operator is commutative
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

    return nums.reduce((ret, n) => ret ^= n, 0);

};

console.log(singleNumber([1, 2, 2]) == 1);
console.log(singleNumber([1, 2, 1]) == 2);