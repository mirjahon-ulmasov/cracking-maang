function wallAndGates(grid: number[][]) {
    const ROWS = grid.length,
        COLS = grid[0].length

    function dfs(row: number, col: number, value: number) {
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS || grid[row][col] < value) return

        grid[row][col] = value

        dfs(row - 1, col, value + 1)
        dfs(row + 1, col, value + 1)
        dfs(row, col - 1, value + 1)
        dfs(row, col + 1, value + 1)
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] == 0) {
                dfs(row, col, 0)
            }
        }
    }
}

function _wallAndGates(grid: number[][]) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const ROWS = grid.length, COLS = grid[0].length
    const queue: [number, number, number][] = []

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] == 0) {
                queue.push([row, col, 0])
            }
        }
    }

    while (queue.length) {
        const [r, c, dist] = queue.shift()!

        for (const [dr, dc] of directions) {
            const row = r + dr, col = c + dc
            if(row < 0 || row >= ROWS || col < 0 || col >= COLS || grid[row][col] < dist + 1) continue;

            grid[row][col] = dist + 1
            queue.push([row, col, dist + 1])
        }
    }
}
