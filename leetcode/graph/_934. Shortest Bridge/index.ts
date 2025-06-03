/*
You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.
*/

function shortestBridge(grid: number[][]): number {
    // 1) find first island using DFS
    const ROWS = grid.length, COLS = grid[0].length
    const visits = new Set<number>()

    // first island of coordinates [row, col, swaps]
    const queue: [number, number, number][] = []
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    function dfs(row: number, col: number) {
        if (
            row < 0 || row >= ROWS || col < 0 || col >= COLS ||
            grid[row][col] == 0 || visits.has(row * COLS + col)
        ) return;
        queue.push([row, col, 0])
        visits.add(row * COLS + col)

        for (let [dr, dc] of directions) {
            dfs(row + dr, col + dc)
        }
    }

    outer: for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] == 1) {
                dfs(row, col)
                break outer;
            }
        }
    }

    // 2) find min swaps to get 2nd island using BFS
    while (queue.length) {
        const [r, c, swaps] = queue.shift()!

        for (const [dr, dc] of directions) {
            const row = r + dr, col = c + dc
            const coord = row * COLS + col
            if (row < 0 || row >= ROWS || col < 0 || col >= COLS) continue;
            if (visits.has(coord)) continue;
            if (grid[row][col] == 1) return swaps

            queue.push([row, col, swaps + 1])
            visits.add(coord)
        }
    }
    return -1
};