/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), 
write a function to check whether these edges make up a valid tree.
*/

function validTree(n: number, edges: number[][]): boolean {
    // To be a valid tree, there is 2 rules
    // 1) There is no cycle on graph
    // 2) All nodes should be connected
    if (edges.length != n - 1) return false
    const adjMap = new Map<number, number[]>()

    for (let i = 0; i < n; i++) {
        adjMap.set(i, [])
    }
    for (let [a, b] of edges) {
        adjMap.get(a)!.push(b)
        adjMap.get(b)!.push(a)
    }
    const visited = new Set<number>()
    function dfs(cur: number, parent: number): boolean {
        if (visited.has(cur)) return false

        visited.add(cur)

        for (let child of adjMap.get(cur)!) {
            if (child == parent) continue
            if (!dfs(child, cur)) return false
        }

        return true
    }
    
    return dfs(0, -1) && visited.size == n
    // dfs(0, -1) checks if there is loop
    // visited.size == n checks if all nodes are connected
}
