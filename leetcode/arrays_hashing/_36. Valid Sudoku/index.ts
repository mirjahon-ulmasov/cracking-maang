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

function isValidSudoku(board: string[][]): boolean {
    const rows = new Map<number, Set<string>>()
    const cols = new Map<number, Set<string>>()
    const squares = new Map<string, Set<string>>()

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === ".") continue
            if (
                rows.get(r)?.has(board[r][c]) ||
                cols.get(c)?.has(board[r][c]) ||
                squares
                    .get(`${Math.floor(r / 3)}, ${Math.floor(c / 3)}`)
                    ?.has(board[r][c])
            ) {
                return false
            }
            if (!rows.has(r)) rows.set(r, new Set())
            if (!cols.has(c)) cols.set(c, new Set())
            if (!squares.has(`${Math.floor(r / 3)}, ${Math.floor(c / 3)}`))
                squares.set(
                    `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`,
                    new Set()
                )

            rows.get(r)?.add(board[r][c])
            cols.get(c)?.add(board[r][c])
            squares
                .get(`${Math.floor(r / 3)}, ${Math.floor(c / 3)}`)
                ?.add(board[r][c])
        }
    }
    return true
}

// new Array(9).fill(() => new Set<string>()) is INCORRECT ❌
// Array.from({ length: 9 }, () => new Set<string>()) is CORRECT ✅
function isValidSudoku2(board: string[][]): boolean {
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set<string>())
    const cols = Array.from({ length: 9 }, () => new Set<string>())
    const squares = Array.from({ length: 9 }, () => new Set<string>())

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c]
            if (value === ".") continue

            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
            if (
                rows[r].has(value) ||
                cols[c].has(value) ||
                squares[boxIndex].has(value)
            ) {
                return false
            }
            rows[r].add(value)
            cols[c].add(value)
            squares[boxIndex].add(value)
        }
    }
    return true
}

console.log(
    isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
)

console.log(
    isValidSudoku2([
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ])
)

// Mine, not fully correct solution
function isValidSudoku3(board: string[][]): boolean {
    for (let r = 0; r < 9; r++) {
        const arr = new Array(10).fill(0)
        for (let c = 0; c < 9; c++) {
            if (!isNaN(Number(board[r][c]))) {
                arr[parseInt(board[r][c])]++
            }
        }
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] > 1) return false
        }
    }
    for (let r = 0; r < 9; r++) {
        const arr = new Array(10).fill(0)
        for (let c = 0; c < 9; c++) {
            if (!isNaN(Number(board[c][r]))) {
                arr[parseInt(board[c][r])]++
            }
        }
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] > 1) return false
        }
    }
    for (let r = 1; r <= 4; r++) {
        for (let c = 1; c <= 4; c++) {
            const arr = new Array(10).fill(0)
            for (let m = 0; m < 3; m++) {
                for (let n = 0; n < 3; n++) {
                    if (!isNaN(Number(board[r * n][c * m]))) {
                        arr[parseInt(board[r * n][c * m])]++
                    }
                }
            }
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] > 1) return false
            }
        }
    }
    return true
}
