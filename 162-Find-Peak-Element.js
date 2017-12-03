/**
 * https://leetcode.com/problems/find-peak-element/description/
 * Difficulty:Medium
 *
 * A peak element is an element that is greater than its neighbors.
 * Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.
 * The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
 * You may imagine that num[-1] = num[n] = -∞.
 * For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 */

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) return i - 1;
    }
    return nums.length - 1;
};

// ================================================

/**
 * 二分查找
 *
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length <= 1) return 0;
    var l = 0;
    var h = nums.length - 1;
    while (l < h) {
        var mid = Math.floor((l + h) / 2);
        if (nums[mid] > nums[mid + 1]) h = mid;
        else l = mid + 1;
    }
    return l;
};

// ================================================

console.log(findPeakElement([3, 2, 1]), 0);
console.log(findPeakElement([1, 2, 3, 1]), 2);
console.log(findPeakElement([1, 3, 2]), 1);
