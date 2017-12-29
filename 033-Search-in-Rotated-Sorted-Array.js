/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * Difficulty:Medium
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {


    var lo = 0;
    var hi = nums.length - 1;
    while (lo < hi) {
        var mid = Math.floor((lo + hi) / 2);
        if (nums[mid] < nums[hi]) hi = mid;
        else lo = mid + 1;
    }
    var i = lo;

    lo = target < nums[0] ? i : 0;
    hi = target <= nums[nums.length - 1] ? nums.length - 1 : i;

    // console.log(nums, lo, hi);
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        // console.log(lo, mid, hi)
        if (nums[mid] < target) lo = mid + 1;
        else if (nums[mid] === target) return mid;
        else hi = mid - 1;
    }

    return -1;

};

console.log(search([], 5))
console.log(search([1], 0))
console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
console.log(search([3, 1], 1))