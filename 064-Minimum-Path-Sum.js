/**
 * https://leetcode.com/problems/minimum-path-sum/description/
 * Difficulty:Medium
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * Example 1:
 * [
 *  [1,3,1],
 *  [1,5,1],
 *  [4,2,1]
 * ]
 * Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {

    var m = grid.length;
    var n = grid[0].length;
    var dp = [];
    while (dp.push(new Array(n + 1).fill(Number.MAX_VALUE)) <= m);
    dp[0][1] = 0;
    dp[1][0] = 0;

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            dp[i][j] = grid[i - 1][j - 1] + Math.min(dp[i][j - 1], dp[i - 1][j]);
        }
    }

    return dp[m][n];

};

console.log(minPathSum([[1, 2], [1, 1]]));