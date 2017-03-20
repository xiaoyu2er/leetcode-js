/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Difficulty:Easy
 *
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 *
 * For example,
 * Given input array nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var n = nums.length;
    if (!n)  return 0;
    var last = nums[0];
    var cnt = 1;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== last) {
            last = nums[i];
            cnt++;
        }
        else {
            nums.splice(i, 1);
            i--;
        }
    }
    return cnt;

};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (var i = 0; i < nums.length - 1; i++)
        if (nums[i] === nums[i + 1]) nums.splice(i--, 1);
    return nums.length;
};

var arr = [1, 2, 2];
console.log(removeDuplicates(arr));
console.log(arr);