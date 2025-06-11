/* 
In this problem, there is an undirected graph with n nodes. 
There is also an edges array. Where edges[i] = [a, b] means that 
there is an edge between node a and node b in the graph.

Example: 1
Input: n = 3, edges = [[0,1], [0,2]]
Output: 1

Example: 2
Input: n = 6, edges = [[0,1], [1,2], [2, 3], [4, 5]]
Output: 2
*/

function countComponents(n: number, edges: [number, number][]): number {
    // Union Find
    const parent = Array.from({ length: n }, (_, i) => i)
    function find(a: number): number {
        if (parent[a] != a) {
            parent[a] = find(parent[a])
        }
        return parent[a]
    }

    function union(a: number, b: number): number {
        const rootA = find(a), rootB = find(b)
        if (rootA == rootB) return 0

        parent[rootB] = rootA // union
        return 1
    }

    let count = n
    for (let [a, b] of edges) {
        count -= union(a, b)
    }
    return count
}

function _countComponents(n: number, edges: [number, number][]): number {
    const adjMap = new Map<number, number[]>()
    for (let i = 0; i < n; i++) {
        adjMap.set(i, [])
    }
    for (let [a, b] of edges) {
        adjMap.get(a)!.push(b)
        adjMap.get(b)!.push(a)
    }
    const visits = new Set<number>()
    function dfs(node: number): void {
        if (visits.has(node)) return

        visits.add(node)
        for (let neigbor of adjMap.get(node)!) {
            dfs(neigbor)
        }
    }
    let count = 0
    for (let i = 0; i < n; i++) {
        if (!visits.has(i)) {
            dfs(i)
            count++
        }
    }
    return count
}
