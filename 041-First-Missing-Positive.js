/**
 * https://leetcode.com/problems/first-missing-positive/
 * Difficulty:Hard
 *
 * Given an unsorted integer array, find the first missing positive integer.
 * For example,
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 * Your algorithm should run in O(n) time and uses constant space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    var n = nums.length;
    var i = 0;
    while (i < n) {
        var c = nums[i];
        if (c > 0 && n < n + 1 && c !== i + 1 && nums[c - 1] !== nums[i]) {
            swap(nums, c - 1, i);
            // i--;
        } else {
            i++;
        }
    }

    // console.log(nums);
    for (var i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return n + 1;
};

function swap(nums, i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

// console.log(firstMissingPositive([1, 2, 0]));
// console.log(firstMissingPositive([3, 4, -1, 1]));
// console.log(firstMissingPositive([1, 1]));
console.log(firstMissingPositive([2, 2]));
