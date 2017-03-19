/**
 * Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

 Example:

 Input:
 [1,2,3]

 Output:
 3

 Explanation:
 Only three moves are needed (remember each move increments two elements):

 [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

 */

/**
 *
 * reverse thinking!
 *
 * Adding 1 to n - 1 elements is the same as subtracting 1 from one element
 *
 * goal of making the elements in the array equal.
 * So, best way to do this is make all the elements in the array equal to the min element.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {

    var min = nums[0];
    for (var i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }

    var ret = 0;
    for (i = 0; i < nums.length; i++) {
        ret += nums[i] - min;
    }
    return ret;

};

console.log(minMoves([1, 999, 1000]));
