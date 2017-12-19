/**
 * https://leetcode.com/problems/3sum-closest/description/
 * Difficulty:Medium
 *
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    var ans = nums[0] + nums[1] + nums[2];
    var len = nums.length;

    nums.sort((a, b) => a < b ? -1 : (a > b) ? 1 : 0);

    for (var i = 0; i < len - 2; i++) {
        var j = i + 1;
        var k = len - 1;

        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            if (sum === target) return sum;
            if (sum > target) k--;
            if (sum < target) j++;
            if (Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum;
            }
        }
    }
    return ans;

};

console.log(threeSumClosest([-1, 2, 1, -4], 1));