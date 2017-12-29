/**
 *
 * https://leetcode.com/problems/search-for-a-range/description/
 * Difficulty:Medium
 *
 * Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    var i = 0;
    var j = nums.length - 1;
    var ret = [-1, -1];
    while (i < j) {
        var mid = Math.floor((i + j) / 2);
        // console.log(i, mid, j);
        if (nums[mid] < target) i = mid + 1;
        else j = mid;
    }
    if (nums[i] !== target) return ret;
    ret[0] = i;
    j = nums.length - 1;
    while (i < j) {
        mid = Math.ceil((i + j) / 2);
        // console.log(i, mid, j);
        if (nums[mid] > target) j = mid - 1;
        else i = mid;
    }
    ret[1] = j;
    return ret;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));