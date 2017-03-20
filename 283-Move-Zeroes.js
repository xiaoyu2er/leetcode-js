/**
 * https://leetcode.com/problems/move-zeroes/description/
 * Difficulty:Easy
 *
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // console.log(nums);
    var i = 0;
    var j = 1;
    var n = nums.length;
    while (i < n && j < n) {
        if (nums[i] !== 0) {
            i++;
            if (i >= j) {
                j = i + 1;
            }
        }
        else if (nums[j] === 0) {
            j++
        } else {
            swap(nums, i, j)
        }
    }

    // console.log(nums);
    // return nums;
};

function swap(nums, i, j) {
    var t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));