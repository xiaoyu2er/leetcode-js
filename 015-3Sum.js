/**
 * https://leetcode.com/problems/3sum/
 * Difficulty:Medium
 *
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 *
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 * [-1, 0, 1],
 * [-1, -1, 2]
 * ]

 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort(function (a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    });
    // console.log(nums);
    var ret = [];
    for (var i = 0; i < nums.length - 2; i++) {
        var a = nums[i];
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {

            var j = i + 1;
            var k = nums.length - 1;
            while (j < k) {
                var b = nums[j];
                var c = nums[k];

                var sum = a + b + c;

                // console.log(a, b, c, '=', sum);
                if (sum > 0) k--;
                else if (sum === 0) {
                    ret.push([a, b, c]);
                    while (j < k && nums[j] === nums[++j]);
                    while (j < k && nums[k] === nums[--k]);
                    // j++;
                    // k--;

                }
                else j++;
            }
        }

    }
    return ret;

};

console.log(threeSum([-2, 0, 0, 2, 2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([1, -1, -1, 0]));
