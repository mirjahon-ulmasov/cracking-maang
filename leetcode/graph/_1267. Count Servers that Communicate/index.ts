/*
You are given a map of a server center, represented as a m * n integer matrix grid,
where 1 means that on that cell there is a server and 0 means that it is no server. 
Two servers are said to communicate if they are on the same row or on the same column.
Return the number of servers that communicate with any other server.

Input: grid = [[1,0],[1,1]]
Output: 3
Explanation: All three servers can communicate with at least one other server.

Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
Output: 4
Explanation: The two servers in the first row can communicate with each other.
The two servers in the third column can communicate with each other.
The server at right bottom corner can't communicate with any other server.
*/

function countServers(grid: number[][]): number {
    const ROW = grid.length, COL = grid[0].length
    const rowCount = new Array(ROW).fill(0)
    const colCount = new Array(COL).fill(0)

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] == 1) {
                rowCount[i]++
                colCount[j]++
            }
        }
    }
    let result = 0
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] == 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                result++
            }
        }
    }
    return result
};