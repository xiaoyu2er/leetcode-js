/**
 * https://leetcode.com/problems/permutations-ii/description/
 * Difficulty:Medium
 *
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 * For example,
 * [1,1,2] have the following unique permutations:
 *  [
 *  [1,1,2],
 *  [1,2,1],
 *  [2,1,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    if (!nums.length) return [];
    nums.sort((a, b) => a - b);
    var res = [[]];
    for (var i = 0; i < nums.length; i++) {
        var len = res.length;
        for (var j = 0; j < len; j++) {
            var oldArr = res.shift();
            if (i > 0 && nums[i] === nums[i - 1]) {
                var k = oldArr.lastIndexOf(nums[i]);
            } else {
                k = 0;
            }
            for (; k <= oldArr.length; k++) {

                if (k === oldArr.length || nums[i] !== oldArr[k]) {
                    var newArr = oldArr.slice();
                    newArr.splice(k, 0, nums[i]);
                    // console.log(oldArr, newArr);
                    res.push(newArr);
                }

            }
        }
    }
    return res;
};

console.log(permuteUnique([1, 2, 2, 1]));