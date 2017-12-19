/**
 * https://leetcode.com/problems/4sum/description/
 * Difficulty:Medium
 *
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * Note: The solution set must not contain duplicate quadruplets.
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 * [-1,  0, 0, 1],
 * [-2, -1, 1, 2],
 * [-2,  0, 0, 2]
 ]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    var len = nums.length;
    if (len < 4) return [];
    nums.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    // console.log(nums);
    var ans = [];
    for (var i = 0; i < len - 3; i++) {

        for (var j = i + 1; j < len - 2; j++) {
            var k = j + 1;
            var l = len - 1;

            while (k < l) {
                var sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[k], nums[l]]);
                    while (nums[l--] === nums[l] && nums[k++] === nums[k] && k < l);
                }
                else if (sum < target) while (nums[k++] === nums[k] && k < l);
                else  while (nums[l--] === nums[l] && k < l);
            }
            while (nums[j] === nums[j + 1]) j++;
        }
        while (nums[i] === nums[i + 1]) i++;

    }
    return ans;

};

console.log(fourSum([-5, -4, -2, -2, -2, -1, 0, 0, 1], -9));
