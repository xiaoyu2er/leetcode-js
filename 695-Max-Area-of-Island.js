/**
 * https://leetcode.com/problems/max-area-of-island/description/
 *
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
 * Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
 *
 * Example 1:
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 * [0,0,0,0,0,0,0,1,1,1,0,0,0],
 * [0,1,1,0,1,0,0,0,0,0,0,0,0],
 * [0,1,0,0,1,1,0,0,1,0,1,0,0],
 * [0,1,0,0,1,1,0,0,1,1,1,0,0],
 * [0,0,0,0,0,0,0,0,0,0,1,0,0],
 * [0,0,0,0,0,0,0,1,1,1,0,0,0],
 * [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 *
 * Example 2:
 * [[0,0,0,0,0,0,0,0]]
 * Given the above grid, return 0.
 *
 * Note: The length of each dimension in the given grid does not exceed 50.
 *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    var dp = [];
    var m = grid.length;
    if (!m) return 0;
    var n = grid[0].length;
    if (!n) return 0;
    while (dp.push(new Array(n).fill(0)) < m) ;
    var max = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            max = Math.max(dfs(grid, dp, i, j), max)
        }
    }

    // console.log(dp);

    return max;
};

function dfs(grid, dp, i, j) {
    var m = grid.length;
    var n = grid[0].length;

    if (i < 0 || i > m - 1) return 0;
    if (j < 0 || j > n - 1) return 0;
    // console.log(i, j, grid[i][j]);
    if (grid[i][j] === 0) dp[i][j] = -1;
    if (dp[i][j] === 0) {
        dp[i][j] = -1;
        dp[i][j] = 1 + dfs(grid, dp, i, j - 1) + dfs(grid, dp, i + 1, j) + dfs(grid, dp, i, j + 1) + dfs(grid, dp, i - 1, j);
        return dp[i][j];
    }
    return 0;
}

console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));

console.log(maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]]));
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 1, 1, 0]]));