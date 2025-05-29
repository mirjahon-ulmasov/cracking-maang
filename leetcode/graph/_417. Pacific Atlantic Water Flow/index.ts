function pacificAtlantic(heights: number[][]): number[][] {
    const ROWS = heights.length, COLS = heights[0].length
    const pacific = new Set<number>(), atlantic = new Set<number>()
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const result: [number, number][] = []
    
    function dfs(row: number, col: number, visits: Set<number>, prevHeight: number) {
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS ||
            visits.has(row * COLS + col) || heights[row][col] < prevHeight
        ) return;

        visits.add(row * COLS + col)

        for (let [dr, dc] of directions) {
            dfs(row + dr, col + dc, visits, heights[row][col])
        }
    }

    for (let col = 0; col < COLS; col++) {
        dfs(0, col, pacific, 0)
        dfs(ROWS - 1, col, atlantic, 0)
    }

    for (let row = 0; row < ROWS; row++) {
        dfs(row, 0, pacific, 0)
        dfs(row, COLS - 1, atlantic, 0)
    }

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const coordinate = row * COLS + col
            if (pacific.has(coordinate) && atlantic.has(coordinate)) {
                result.push([row, col])
            }
        }
    }
    return result
};