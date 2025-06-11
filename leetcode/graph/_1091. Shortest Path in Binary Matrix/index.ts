/*
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

Example 1:
Input: grid = [[0,1],[1,0]]
Output: 2

Example 2:
Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4

Example 3:
Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
*/

function shortestPathBinaryMatrix(grid: number[][]): number {
    const n = grid.length;
    if (grid[0][0] != 0 || grid[n - 1][n - 1] != 0) return -1;
    if (n == 1) return 1
    const directions = [[-1, -1],[-1, 0],[-1, 1], [0, -1],[0, 1], [1, -1],[1, 0],[1, 1]];
    const queue: [number, number][] = [[0, 0]];
    const visits = new Set<number>();
    let steps = 1;
    while (queue.length) {
        steps++;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()!;
            for (let [dr, dc] of directions) {
                const nxtRow = row + dr, nxtCol = col + dc;
                if (nxtRow < 0 || nxtRow >= n || nxtCol < 0 || nxtCol >= n) continue;
                
                const coord = nxtRow * n + nxtCol;
                if (visits.has(coord) || grid[nxtRow][nxtCol] == 1) continue;
                if (nxtRow == n - 1 && nxtCol == n - 1) return steps;
                
                visits.add(coord);
                queue.push([nxtRow, nxtCol]);
            }
        }
    }
    return -1
}