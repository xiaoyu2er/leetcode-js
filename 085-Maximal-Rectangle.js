/**
 * https://leetcode.com/problems/maximal-rectangle/description/
 * Difficulty:Hard
 * Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 * For example, given the following matrix:
 *
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 *
 * Return 6.
 *
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    var m = matrix.length;
    if (!m) return 0;
    var n = matrix[0].length;
    if (!n) return 0;

    var dp = [];
    while (dp.push(new Array(n + 1).fill([0, 0])) <= m) ;
    var max = 0;
    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] != 0) {
                dp[i][j] = [1, 1];
                var top = dp[i - 1][j];
                var left = dp[i][j - 1];
                if (top[0] * top[1] === 0) {
                    dp[i][j] = [1, left[1] + 1];
                } else if (left[0] * left[1] === 0) {
                    dp[i][j] = [top[0] + 1, 1];
                } else {
                    var x1 = (top[0] + 1);
                    var y1 = Math.min(top[1], left[1] + 1);
                    var p1 = x1 * y1;

                    var x2 = Math.min(left[0], top[0] + 1);
                    var y2 = (left[1] + 1);
                    var p2 = x2 * y2;

                    if (p1 >= p2) {
                        dp[i][j] = [x1, y1];
                    } else {
                        dp[i][j] = [x2, y2];
                    }

                }

                max = Math.max(max, dp[i][j][0] * dp[i][j][1]);
            }

        }
    }

    // for (var i = 0; i < matrix.length; i++) {
    //     console.log(matrix[i].split(''));
    // }
    // console.log('======================');
    //
    // for (var i = 1; i < dp.length; i++) {
    //     console.log(dp[i].slice(1).join(' | '));
    // }

    return max;
};

// console.log(maximalRectangle([
//     [1, 0, 1, 0, 0],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 1, 0],
// ]));

// console.log(maximalRectangle(
//     ["10100", "10111", "11111", "10010"]
// ));

console.log(maximalRectangle(["010", "110", "011", "010"]));