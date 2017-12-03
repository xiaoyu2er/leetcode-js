/**
 * https://leetcode.com/problems/array-partition-i/description/
 * Difficulty:Easy
 *
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer,
 * say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 *
 * Example 1:
 * Input: [1,4,3,2]
 * Output: 4
 * Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
 *
 * Note:
 * n is a positive integer, which is in the range of [1, 10000].
 * All the integers in the array will be in the range of [-10000, 10000].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    // console.log(nums);
    var sum = 0;
    for (var i = 0; i < nums.length / 2; i++) {
        sum += nums[2 * i];
    }

    return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
