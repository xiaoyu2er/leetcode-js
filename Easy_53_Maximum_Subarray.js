/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 *
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/**
 *
 * https://discuss.leetcode.com/topic/6413/dp-solution-some-thoughts
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    var dp = [];
    var max = dp[0] = nums[0];

    for (var i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(dp[i], max);
    }

    return max;

};

/**
 * https://discuss.leetcode.com/topic/5000/accepted-o-n-solution-in-java/11
 * @param nums
 * @returns {*}
 */
var maxSubArray = function (nums) {

    var max = nums[0];
    var sum = nums[0];

    for (var i = 1; i < nums.length; i++) {
        sum = sum > 0 ? (sum + nums[i]) : nums[i];
        max = Math.max(sum, max);
    }
    return max;

};

console.log(maxSubArray([1, 1, 1]) == 3);
console.log(maxSubArray([-1, -1, -1]) == -1);
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6);
console.log(maxSubArray([-2, -1]) == -1);
console.log(maxSubArray([-1]) == -1);
console.log(maxSubArray([-1, 0]) == 0);

