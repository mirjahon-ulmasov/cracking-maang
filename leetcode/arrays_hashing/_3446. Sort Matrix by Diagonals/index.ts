/*
You are given an n x n square matrix of integers grid. Return the matrix such that:

The diagonals in the bottom-left triangle (including the middle diagonal) are sorted in non-increasing order.
The diagonals in the top-right triangle are sorted in non-decreasing order.

Example 1:
Input: grid = [[1,7,3],[9,8,2],[4,5,6]]
Output: [[8,2,3],[9,6,7],[4,5,1]]
*/

function sortMatrix(grid: number[][]): number[][] {
    const n = grid.length
    let bottom = [], top = []

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            bottom.push(grid[j + i + 1][j]) // bottom diagonals
            top.push(grid[j][j + i + 1]) // top diagonals
        }
        bottom.sort((a, b) => b - a)
        top.sort((a, b) => a - b)
        for (let j = 0; j < n - 1 - i; j++) {
            grid[j + i + 1][j] = bottom[j]
            grid[j][j + i + 1] = top[j]
        }
        bottom = []
        top = []
    }

    // middle diagonal
    for (let i = 0; i < n; i++) {
        bottom.push(grid[i][i])
    }
    bottom.sort((a, b) => b - a)
    for (let i = 0; i < n; i++) {
        grid[i][i] = bottom[i]
    }

    return grid
};