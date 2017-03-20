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
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0;
    nums.unshift(nums[0] - 1);
    nums.push(nums[nums.length - 1] - 1);
    var i = 1;
    var j = nums.length - 2;
    while (i < j) {
        var half = Math.floor((i + j ) / 2);
        // console.log(i, j, half, nums[half]);
        if (isPeak(nums, half)) return half - 1;
        if (i === half) return j - 1;

        if (nums[half - 1] > nums[half]) j = half;
        else i = half;
    }
    return 0;
};

function isPeak(nums, i) {
    var a = nums[i - 1];
    var b = nums[i];
    var c = nums[i + 1];
    return b > a && b > c;
}

/**
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
console.log(findPeakElement([3, 2, 1]), 0);
console.log(findPeakElement([1, 2, 3]), 2);
console.log(findPeakElement([1, 3, 2]), 1);
