/**
 * https://leetcode.com/problems/maximum-product-subarray/description/
 * Difficulty:Medium
 *
 * Find the contiguous subarray within an array (containing at least one number)
 * which has the largest product.
 *
 * For example, given the array [2,3,-2,4],
 * the contiguous subarray [2,3] has the largest product = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    var a = nums[0];
    var imin = a;
    var imax = a;
    var max = a;

    for (var i = 1; i < nums.length; i++) {
        var t = nums[i];
        if (t < 0) {
            var tmp = imin;
            imin = imax;
            imax = tmp;
        }
        imax = Math.max(t, t * imax);
        imin = Math.min(t, t * imin);
        max = Math.max(max, imax);
    }

    return max;
};

console.log(maxProduct([-1]));
console.log(maxProduct([1]));
console.log(maxProduct([1, 2, 3, -4]));
console.log(maxProduct([2, 3, -2, 4]));