/*
Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.
*/
function closedIsland(grid: number[][]): number {
    const ROWS = grid.length, COLS = grid[0].length
    function dfs(row: number, col: number): boolean {
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return false
        if (grid[row][col] == 1) return true

        grid[row][col] = 1
        const top = dfs(row - 1, col)
        const bottom = dfs(row + 1, col)
        const left = dfs(row, col - 1)
        const right = dfs(row, col + 1)

        return (top && bottom && left && right)
    }
    let islands = 0
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] == 0 && dfs(row, col)) {
                islands++
            }
        }
    }
    return islands
};