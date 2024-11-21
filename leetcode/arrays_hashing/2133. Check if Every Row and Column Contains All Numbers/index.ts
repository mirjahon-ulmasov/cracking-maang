/*
An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

Example 1:
Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.

Example 2:
Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.
*/

function checkValid(matrix: number[][]): boolean {
    const N = matrix.length
    const rows = new Set()
    const cols = new Set()
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            rows.add(matrix[row][col])
            cols.add(matrix[col][row])
        }
        if (rows.size != N || cols.size != N) {
            return false
        }
        rows.clear()
        cols.clear()
    }
    return true
}

function _checkValid(matrix: number[][]): boolean {
    const N = matrix.length
    const rows = new Set()
    const cols = new Set()
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            if (rows.has(matrix[row][col]) || cols.has(matrix[col][row])) {
                return false
            }
            rows.add(matrix[row][col])
            cols.add(matrix[col][row])
        }
        rows.clear()
        cols.clear()
    }
    return true
}

function __checkValid(matrix: number[][]): boolean {
    const N = matrix.length
    const rows = Array.from({ length: N }, () => new Set())
    const cols = Array.from({ length: N }, () => new Set())
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            const val = matrix[row][col]
            if (rows[row].has(val) || cols[col].has(val)) {
                return false
            }
            rows[row].add(val)
            cols[col].add(val)
        }
    }
    return true
}
