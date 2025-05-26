
/*
Input: n = 4, edges = [[0,2],[1,3],[1,2]]
Output: -1
Explanation: Team 2 is weaker than team 0 and team 1. 
Team 3 is weaker than team 1. 
But team 1 and team 0 are not weaker than any other teams. 
So the answer is -1.
*/

function findChampion(n: number, edges: number[][]): number {
    const losers = new Set()
    for (let [_, b] of edges) {
        losers.add(b)
    }
    if (losers.size < n - 1) return -1
    for (let i = 0; i < n; i++) {
        if (!losers.has(i)) return i
    }
    return -1
};