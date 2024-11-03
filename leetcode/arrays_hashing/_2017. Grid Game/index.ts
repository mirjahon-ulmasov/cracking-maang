/*
You are given a 0-indexed 2D array grid of size 2 x n, where grid[r][c] represents the number of points at position (r, c) on the matrix. Two robots are playing a game on this matrix.

Both robots initially start at (0, 0) and want to reach (1, n-1). Each robot may only move to the right ((r, c) to (r, c + 1)) or down ((r, c) to (r + 1, c)).

At the start of the game, the first robot moves from (0, 0) to (1, n-1), collecting all the points from the cells on its path. For all cells (r, c) traversed on the path, grid[r][c] is set to 0. Then, the second robot moves from (0, 0) to (1, n-1), collecting the points on its path. Note that their paths may intersect with one another.

The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot.

Example 1:
Input: grid = [[2,5,4],[1,5,1]]
Output: 4
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 0 + 4 + 0 = 4 points.

Example 2:
Input: grid = [[3,3,1],[8,5,2]]
Output: 4
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 3 + 1 + 0 = 4 points.

Example 3:
Input: grid = [[1,3,1,15],[1,3,3,1]]
Output: 7
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.
*/

// Time: O(n) Space: O(1)
function gridGame(grid: number[][]): number {
    const rowLength = grid[0].length
    let topRow = 0
    let bottomRow = 0
    let minValue = Infinity

    for (let i = 0; i < rowLength; i++) {
        topRow += grid[0][i]
    }
    for (let i = 0; i < rowLength; i++) {
        topRow -= grid[0][i]
        minValue = Math.min(minValue, Math.max(topRow, bottomRow))
        bottomRow += grid[1][i]
    }
    return minValue
}

// Time: O(n) Space: O(n)
function gridGame2(grid: number[][]): number {
    const rowLength = grid[0].length
    const map = new Map()
    let topRow = 0
    let bottomRow = 0

    let minValue = Infinity

    for (let i = 0; i < rowLength; i++) {
        topRow += grid[0][i]
    }
    for (let i = 0; i < rowLength; i++) {
        topRow -= grid[0][i]
        map.set(i, topRow > bottomRow ? topRow : bottomRow)
        bottomRow += grid[1][i]
    }
    map.forEach(value => {
        minValue = Math.min(minValue, value)
    })
    return minValue
}

// I thought, if 1st robot runs maximum path, 2nd robot runs minimum :(
// But it is not always correct
function gridGame3(grid: number[][]): number {
    const rowLength = grid[0].length
    const map = new Map()
    let topRow = 0
    let bottomRow = 0

    let maxGridIdx = 0
    let maxValue = 0

    for (let i = 0; i < rowLength; i++) {
        bottomRow += grid[1][i]
    }
    for (let i = 0; i < rowLength; i++) {
        topRow += grid[0][i]
        map.set(i, topRow + bottomRow)
        bottomRow -= grid[1][i]
    }
    map.forEach((value, key) => {
        if (maxValue < value) {
            maxValue = value
            maxGridIdx = key
        }
    })

    let i = 0
    while (i <= maxGridIdx) {
        grid[0][i++] = 0
    }
    i--
    while (i < rowLength) {
        grid[1][i++] = 0
    }
    map.clear()
    topRow = 0
    bottomRow = 0
    maxGridIdx = 0
    maxValue = 0

    for (let i = 0; i < rowLength; i++) {
        bottomRow += grid[1][i]
    }
    for (let i = 0; i < rowLength; i++) {
        topRow += grid[0][i]
        map.set(i, topRow + bottomRow)
        bottomRow -= grid[1][i]
    }
    map.forEach(value => {
        maxValue = Math.max(maxValue, value)
    })
    return maxValue
}

console.log(
    gridGame([
        [20, 3, 20, 17, 2, 12, 15, 17, 4, 15],
        [20, 10, 13, 14, 15, 5, 2, 3, 14, 3],
    ])
)

console.log(
    gridGame([
        [1, 3, 1, 15],
        [1, 3, 3, 1],
    ])
)
