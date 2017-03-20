/**
 * https://leetcode.com/problems/unique-paths/
 * Difficulty:Medium
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * Note: m and n will be at most 100.
 *
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    var arr = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 && j === 0) arr[0] = 1;
            else {
                var left = j - 1 < 0 ? 0 : arr[i * n + j - 1];
                var top = i - 1 < 0 ? 0 : arr[(i - 1) * n + j];
                arr[i * n + j] = left + top;
            }

        }
    }
    return arr[arr.length - 1];
};

console.log(uniquePaths(2, 2));