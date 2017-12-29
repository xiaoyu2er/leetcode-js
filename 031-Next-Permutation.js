/**
 * https://leetcode.com/problems/next-permutation/description/
 * Difficulty:Medium
 *
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place, do not allocate extra memory.
 * Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    if (nums.length < 2) return;
    var peak = nums.length - 1;
    for (var i = peak - 1; nums[i] >= nums[peak]; peak = i--);

    if (peak !== 0) {
        var swapIndex = findSwap(nums, peak, nums.length - 1, peak - 1);
        if (swapIndex !== -1) {
            swap(nums, peak - 1, swapIndex);
        }
    }

    reverse(nums, peak, nums.length - 1);

};

function findSwap(nums, s, e, target) {
    for (var i = e; i >= s; i--) {
        if (nums[i] > nums[target]) return i;
    }
    return -1;
}

function swap(nums, s, e) {
    var t = nums[s];
    nums[s] = nums[e];
    nums[e] = t;
}
function reverse(nums, s, e) {
    // var len = e - s;
    for (var i = 0; i < Math.ceil((e - s ) / 2); i++) {

        swap(nums, s + i, e - i);
    }
    // return nums;
}

// console.log(reverse([1, 2, 3, 4, 5], 0, 4));
// console.log(reverse([1, 2, 3, 4, 5], 3, 4));
// console.log(reverse([1, 2, 3, 4, 5], 2, 3));
// console.log(reverse([1, 2, 3, 4, 5], 1, 1));
// console.log(reverse([1, 2, 3, 4, 5], 1, 4));

// var nums = [1, 2, 5, 4, 3];
// console.log(nums);
// nextPermutation(nums);
// console.log(nums);
//
console.log('====');

var nums = [2, 3, 1];
console.log(nums);
nextPermutation(nums);
console.log(nums);

console.log('====');

var nums = [1, 1];
console.log(nums);
nextPermutation(nums);
console.log(nums);

console.log('====');

var nums = [3, 2, 1];
console.log(nums);
nextPermutation(nums);
console.log(nums);


