/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

function numIslands(grid: string[][]): number {
    const ROW = grid.length, COL = grid[0].length
    const visits = new Set<number>()
    let islands = 0
    function dfs(i: number, j: number) {
        if (
            i < 0 || i >= ROW || j < 0 || j >= COL ||
            grid[i][j] == '0' || visits.has(i * COL + j)
        ) return;
        visits.add(i * COL + j)

        dfs(i - 1, j) // top
        dfs(i + 1, j) // bottom
        dfs(i, j - 1) // left
        dfs(i, j + 1) // right
    }

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] == '1' && !visits.has(i * COL + j)) {
                islands++ // new island found
                dfs(i, j)
            }
        }
    }
    return islands
};

function _numIslands(grid: string[][]): number {
    const ROW = grid.length, COL = grid[0].length
    const visits = new Set<number>()
    let islands = 0
    function bfs(i: number, j: number): void {
        const queue = [[i, j]] // [row, col]
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        while (queue.length) {
            const [row, col] = queue.shift()!

            for (let [r, c] of directions) {
                const newRow = row + r, newCol = col + c
                if (
                    newRow >= 0 && newRow < ROW && newCol >= 0 && newCol < COL &&
                    grid[newRow][newCol] == '1' && !visits.has(newRow * COL + newCol)
                ) {
                    queue.push([newRow, newCol])
                    visits.add(newRow * COL + newCol)
                }
            }
        }
    }
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] == '1' && !visits.has(i * COL + j)) {
                islands++
                bfs(i, j)
            }
        }
    }
    return islands
};