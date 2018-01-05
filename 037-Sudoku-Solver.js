/**
 * https://leetcode.com/problems/sudoku-solver/description/
 * Difficulty:Hard
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * Empty cells are indicated by the character '.'.
 * You may assume that there will be only one unique solution.
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    solve(board);
    console.log(board);
};

function solve(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var ch = board[i][j];
            if (ch === '.') {
                for (var k = 1; k <= 9; k++) {

                    if (isValid(i, j, board, '' + k)) {

                        board[i][j] = '' + k;
                        // console.log(board);
                        // console.log('-------------');
                        if (solve(board)) {
                            // console.log(board);
                            // console.log('-------------');
                            return true;
                        } else {
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(row, col, board, t) {

    for (var i = 0; i < 9; i++) {
        var ch = board[row][i];
        if (ch === t) return false;

        ch = board[i][col];
        if (ch === t) return false;

        ch = board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3];
        // if (row === 0 && col === 8) {
        //     console.log('~ ', Math.floor(row / 3) * 3 + Math.floor(i / 3), Math.floor(row / 3) * 3 + i % 3, ch);
        // }
        if (ch === t) return false;
    }
    return true;

}

console.log(solveSudoku([
    [".", ".", "9", "7", "4", "8", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", "2", ".", "1", ".", "9", ".", ".", "."],
    [".", ".", "7", ".", ".", ".", "2", "4", "."],
    [".", "6", "4", ".", "1", ".", "5", "9", "."],
    [".", "9", "8", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", "8", ".", "3", ".", "2", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", "2", "7", "5", "9", ".", "."]
]));

console.log([
    ["5", "1", "9", "7", "4", "8", "6", "3", "2"],
    ["7", "8", "3", "6", "5", "2", "4", "1", "9"],
    ["4", "2", "6", "1", "3", "9", "8", "7", "5"],
    ["3", "5", "7", "9", "8", "6", "2", "4", "1"],
    ["2", "6", "4", "3", "1", "7", "5", "9", "8"],
    ["1", "9", "8", "5", "2", "4", "3", "6", "7"],
    ["9", "7", "5", "8", "6", "3", "1", "2", "4"],
    ["8", "3", "2", "4", "9", "1", "7", "5", "6"],
    ["6", "4", "1", "2", "7", "5", "9", "8", "3"]
])
