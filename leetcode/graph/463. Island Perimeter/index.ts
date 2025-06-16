/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example 1:
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.

Example 2:
Input: grid = [[1]]
Output: 4

Example 3:
Input: grid = [[1,0]]
Output: 4
*/

function islandPerimeter(grid: number[][]): number {
    const ROWS = grid.length, COLS = grid[0].length
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const visits = new Set<number>()

    function dfs(row: number, col: number): number {
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS || grid[row][col] == 0) return 1
        if (visits.has(row * COLS + col)) return 0

        visits.add(row * COLS + col)

        let perimiter = 0
        for (let [dr, dc] of directions) {
            perimiter += dfs(row + dr, col + dc)
        }
        return perimiter
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] == 1) {
                return dfs(row, col)
            }
        }
    }
    return 0
};