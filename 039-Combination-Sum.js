/**
 * https://leetcode.com/problems/combination-sum/description/
 * Difficulty:Medium
 *
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 * The same repeated number may be chosen from C unlimited number of times.
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [2, 3, 6, 7] and target 7,
 * A solution set is:
 * [
 *  [7],
 *  [2, 2, 3]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    var res = [];
    var temp = [];
    helper(res, temp, candidates, target, 0);
    return res;

};

function helper(res, temp, candidates, target, start) {

    if (target === 0) {
        res.push([...temp]);
        return;
    }

    for (var i = start; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            temp.push(candidates[i]);
            helper(res, temp, candidates, target - candidates[i], i);
            temp.length -= 1;
        }

    }
}

console.log(combinationSum([1, 2, 3, 5, 6, 7], 7));
console.log(combinationSum([7, 2, 3, 5, 6, 1], 7));