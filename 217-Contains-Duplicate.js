/**
 * https://leetcode.com/problems/contains-duplicate/description/
 * Difficulty:Easy
 *
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i];
        if (map[n]) return true;
        map[n] = 1;
    }
    return false;
};
console.log(containsDuplicate([3, 4]));