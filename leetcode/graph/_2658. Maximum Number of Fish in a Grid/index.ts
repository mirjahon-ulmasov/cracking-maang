/*
Input: grid = [
    [0,2,1,0],
    [4,0,0,3],
    [1,0,0,4],
    [0,3,2,0]
]
Output: 7
Explanation: The fisher can start at cell (1,3) and collect 3 fish, 
then move to cell (2,3) and collect 4 fish.
*/

function findMaxFish(grid: number[][]): number {
    const ROW = grid.length, COL = grid[0].length
    let result = 0
    function dfs(r: number, c: number): number {
        if (r < 0 || r >= ROW || c < 0 || c >= COL || grid[r][c] == 0) {
            return 0
        }
        let fish = grid[r][c]
        grid[r][c] = 0

        return fish + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1)
    }
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            result = Math.max(result, dfs(i, j))
        }
    }
    return result
}
