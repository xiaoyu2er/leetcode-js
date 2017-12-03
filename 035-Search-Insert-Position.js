/**
 * https://leetcode.com/problems/search-insert-position/description/
 * Difficulty:Easy
 *
 * Given a sorted array and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You may assume no duplicates in the array.
 *
 * Here are few examples.
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 */

/**
 * 解题思路
 *
 * 找到不比目标元素大的索引即可
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    for (var i = 0; i < nums.length; i++) {
        if (target <= nums[i]) return i;
    }
    return i;

};

console.log(searchInsert([1, 3, 5, 6], 5) == 2);
console.log(searchInsert([1, 3, 5, 6], 2) == 1);
console.log(searchInsert([1, 3, 5, 6], 7) == 4);
console.log(searchInsert([1, 3, 5, 6], 0) == 0);
console.log(searchInsert([1, 3, 5, 6], 100) == 4);