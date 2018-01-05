/**
 * Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
 * Each number in C may only be used once in the combination.
 * Note:
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
 * A solution set is:
 * [
 *  [1, 7],
 *  [1, 2, 5],
 *  [2, 6],
 *  [1, 1, 6]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {

    var res = [];
    var temp = [];
    candidates.sort((b, a) => b - a);
    helper(res, temp, candidates, target, 0);
    return res;
};

function helper(res, temp, candidates, target, start) {
    if (target === 0) {
        return res.push([...temp]);
    }

    for (var i = start; i < candidates.length && candidates[i] <= target; i++) {
        if (i === start || candidates[i] !== candidates[i - 1]) {
            temp.push(candidates[i]);
            helper(res, temp, candidates, target - candidates[i], i + 1);
            temp.length -= 1;
        }
    }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));