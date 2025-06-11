/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
*/

function findCircleNum(isConnected: number[][]): number {
    // Union Find - connected components
    const n = isConnected.length
    const parent = Array.from({ length: n }, (_, i) => i)

    function find(a: number): number {
        if (parent[a] != a) {
            parent[a] = find(parent[a])
        }
        return parent[a]
    }

    function union(a: number, b: number) {
        const rootA = find(a), rootB = find(b)
        if (rootA != rootB) {
            parent[rootB] = rootA
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] == 1) {
                union(i, j)
            }
        }
    }

    const provinces = new Set<number>()
    for (let i = 0; i < n; i++) {
        provinces.add(find(i))
    }
    return provinces.size
};