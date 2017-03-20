/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 * Difficulty:Easy
 *
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 * Example:
 * Input:
 * [4,3,2,7,8,2,3,1]
 * Output:
 * [5,6]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const ret = [];
    let i = 0;
    const n = nums.length;
    while (i < n) {
        // console.log(nums);
        const t = nums[i];
        if (t !== i + 1 && nums[t - 1] !== t) {
            swap(nums, i, t - 1);
            continue;
        }
        i++;
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) ret.push(i + 1);
    }
    return ret;

};

function swap(nums, i, j) {
    var t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));