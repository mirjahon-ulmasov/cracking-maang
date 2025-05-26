/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in grid. If there is no island, return 0.
*/

function maxAreaOfIsland(grid: number[][]): number {
    const ROW = grid.length, COL = grid[0].length
    const visits = new Set<number>()
    let result = 0
    function dfs(r: number, c: number): number {
        if (
            r < 0 || r >= ROW || c < 0 || c >= COL ||
            grid[r][c] == 0 || visits.has(r * COL + c)
        ) return 0

        visits.add(r * COL + c)

        return (
            1 +
            dfs(r - 1, c) +
            dfs(r + 1, c) +
            dfs(r, c - 1) +
            dfs(r, c + 1)
        )
    }

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            result = Math.max(result, dfs(i, j))
        }
    }
    return result
};