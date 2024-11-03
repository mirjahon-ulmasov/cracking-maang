/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false

Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/
function isValidSudoku(board) {
    var _a, _b, _c, _d, _e, _f;
    var rows = new Map();
    var cols = new Map();
    var squares = new Map();
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            if (board[r][c] === ".")
                continue;
            if (((_a = rows.get(r)) === null || _a === void 0 ? void 0 : _a.has(board[r][c])) ||
                ((_b = cols.get(c)) === null || _b === void 0 ? void 0 : _b.has(board[r][c])) ||
                ((_c = squares
                    .get("".concat(Math.floor(r / 3), ", ").concat(Math.floor(c / 3)))) === null || _c === void 0 ? void 0 : _c.has(board[r][c]))) {
                return false;
            }
            if (!rows.has(r))
                rows.set(r, new Set());
            if (!cols.has(c))
                cols.set(c, new Set());
            if (!squares.has("".concat(Math.floor(r / 3), ", ").concat(Math.floor(c / 3))))
                squares.set("".concat(Math.floor(r / 3), ", ").concat(Math.floor(c / 3)), new Set());
            (_d = rows.get(r)) === null || _d === void 0 ? void 0 : _d.add(board[r][c]);
            (_e = cols.get(c)) === null || _e === void 0 ? void 0 : _e.add(board[r][c]);
            (_f = squares
                .get("".concat(Math.floor(r / 3), ", ").concat(Math.floor(c / 3)))) === null || _f === void 0 ? void 0 : _f.add(board[r][c]);
        }
    }
    return true;
}
function isValidSudoku2(board) {
    var rows = new Array(9).fill(function () { return new Set(); });
    var cols = new Array(9).fill(function () { return new Set(); });
    var squares = new Array(9).fill(function () { return new Set(); });
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            var value = board[r][c];
            if (value === ".")
                continue;
            var boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (rows[r].has(value) ||
                cols[c].has(value) ||
                squares[boxIndex].has(value)) {
                return false;
            }
            rows[r].add(value);
            cols[c].add(value);
            squares[boxIndex].add(value);
        }
    }
    return true;
}
console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]));
console.log(isValidSudoku2([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]));
// Mine, not fully correct solution
function isValidSudoku3(board) {
    for (var r = 0; r < 9; r++) {
        var arr = new Array(10).fill(0);
        for (var c = 0; c < 9; c++) {
            if (!isNaN(Number(board[r][c]))) {
                arr[parseInt(board[r][c])]++;
            }
        }
        for (var k = 0; k < arr.length; k++) {
            if (arr[k] > 1)
                return false;
        }
    }
    for (var r = 0; r < 9; r++) {
        var arr = new Array(10).fill(0);
        for (var c = 0; c < 9; c++) {
            if (!isNaN(Number(board[c][r]))) {
                arr[parseInt(board[c][r])]++;
            }
        }
        for (var k = 0; k < arr.length; k++) {
            if (arr[k] > 1)
                return false;
        }
    }
    for (var r = 1; r <= 4; r++) {
        for (var c = 1; c <= 4; c++) {
            var arr = new Array(10).fill(0);
            for (var m = 0; m < 3; m++) {
                for (var n = 0; n < 3; n++) {
                    if (!isNaN(Number(board[r * n][c * m]))) {
                        arr[parseInt(board[r * n][c * m])]++;
                    }
                }
            }
            for (var k = 0; k < arr.length; k++) {
                if (arr[k] > 1)
                    return false;
            }
        }
    }
    return true;
}
