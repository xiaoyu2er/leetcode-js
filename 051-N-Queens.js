/**
 * https://leetcode.com/problems/n-queens/description/
 * Difficulty:Hard
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
 *
 * For example,
 * There exist two distinct solutions to the 4-queens puzzle:
 * [
 *  [".Q..",  // Solution 1
 *   "...Q",
 *   "Q...",
 *   "..Q."],
 *
 *  ["..Q.",  // Solution 2
 *   "Q...",
 *   "...Q",
 *   ".Q.."]
 * ]
 * 2,1 3,2
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var ret = [];
    var board = [];
    for (var i = 0; i < n; i++) {
        board.push(new Array(n).fill('.'));
    }
    helper(board, 0, ret);
    return ret;
};

function helper(board, col, ret) {
    if (col === board.length) {
        ret.push(construct(board));
    } else {
        for (var i = 0; i < board.length; i++) {
            if (check(board, i, col)) {
                board[i][col] = 'Q';
                helper(board, col + 1, ret);
                board[i][col] = '.';
            }
        }
    }
}

function check(board, x, y) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < y; j++) {
            if (board[i][j] === 'Q' &&
                (i === x || i + j === x + y || i + y === j + x)) return false;
        }
    }
    return true;
}
function construct(board) {
    return board.map(arr => arr.join(''));
}
console.log(solveNQueens(4));