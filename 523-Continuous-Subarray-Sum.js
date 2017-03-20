/**
 * https://leetcode.com/problems/continuous-subarray-sum/description/
 * Difficulty:Medium
 *
 * Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer
 *
 * Example 1:
 * Input: [23, 2, 4, 6, 7],  k=6
 * Output: True
 * Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
 *
 * Example 2:
 * Input: [23, 2, 6, 4, 7],  k=6
 * Output: True
 * Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
 *
 * Note:
 * The length of the array won't exceed 10,000.
 * You may assume the sum of all the numbers is in the range of a signed 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    var arr = [];
    var sum = 0;
    if (nums.length < 2) return false;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] === 0) return true;
    }

    if (k < 0) k = -k;
    if (k === 0) return false;

    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
        sum = sum % k;
        if (i > 0 && sum === 0) return true;
        var index = arr.indexOf(sum);
        if (index !== -1) {
            return true;
        }
        arr.push(sum);
    }
    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
console.log(checkSubarraySum([23, 2, 4, 6, 7], 7));
console.log(checkSubarraySum([23, 2, 4, 6, 7], 8));
console.log(checkSubarraySum([0, 0], 0), true);
console.log(checkSubarraySum([0, 1, 0], 0), false);
console.log(checkSubarraySum([1, 1], 2), true);

