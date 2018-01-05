/**
 * https://leetcode.com/problems/permutations/description/
 * Difficulty:Medium
 *
 * Given a collection of distinct numbers, return all possible permutations.
 * For example,
 * [1,2,3] have the following permutations:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (!nums.length) return [];
    var res = [[]];
    for (var i = 0; i < nums.length; i++) {
        var len = res.length;
        for (var j = 0; j < len; j++) {
            var oldArr = res.shift();
            for (var k = 0; k <= oldArr.length; k++) {
                var newArr = oldArr.slice();
                newArr.splice(k, 0, nums[i]);
                res.push(newArr);
            }
        }
    }
    return res;
};
console.log(permute([1, 2, 3]));