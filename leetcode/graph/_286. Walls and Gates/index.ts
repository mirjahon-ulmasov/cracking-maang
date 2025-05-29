function getNearestGate(grid: number[][]): number[][] {
    const directions = [[-1, 0],[1, 0],[0, -1],[0, 1]]
    const ROW = grid.length, COL = grid[0].length
    const queue: [number, number, number][] = [] // [row, col, distance]
    
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] == 0) queue.push([i, j, 0])
        }
    }

    while (queue.length) {
        const [r, c, dist] = queue.shift()!

        for (let [dr, dc] of directions) {
            let row = r + dr, col = c + dc

            if (
                row >= 0 && row < ROW && col >= 0 && col < COL && 
                grid[row][col] != -1 && grid[row][col] != 0
            ) {
                if (dist + 1 < grid[row][col]) {
                    grid[row][col] = dist + 1
                    queue.push([row, col, dist + 1])
                }
            }
        }
    }
    return grid
}