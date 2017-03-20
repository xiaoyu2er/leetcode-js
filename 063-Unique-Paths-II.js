/**
 * https://leetcode.com/problems/unique-paths-ii/description/
 * Difficulty:Medium
 *
 * Follow up for "Unique Paths":
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * For example,
 * There is one obstacle in the middle of a 3x3 grid as illustrated below.
 * [
 *  [0,0,0],
 *  [0,1,0],
 *  [0,0,0]
 * ]
 * The total number of unique paths is 2.
 * Note: m and n will be at most 100.
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var dp = [];
    while (dp.push(new Array(n + 1).fill(0)) <= m);

    dp[0][1] = 1;
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (!obstacleGrid[i - 1][j - 1])
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
    return dp[m][n];
};

console.log(uniquePathsWithObstacles([[0, 0]]));