/*
In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.
*/


// Union Find
function findRedundantConnection(edges: number[][]): number[] {
    const parent = Array.from({ length: edges.length }, (_, i) => i)
    function find(x: number): number {
        if (x != parent[x]) {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    function union(x: number, y: number): boolean {
        const rootX = find(x), rootY = find(y)
        if (rootX == rootY) return true // detect cycle

        parent[rootY] = rootX
        return false
    }

    for (let [a, b] of edges) {
        if (union(a, b)) return [a, b]
    }
    return []
};