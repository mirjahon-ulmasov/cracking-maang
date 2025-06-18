/*
There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

It's guaranteed that each city can reach city 0 after reorder.

Example 1:
Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
*/

function minReorder(n: number, connections: number[][]): number {
    const undirectMap = new Map<number, number[]>()
    const directMap = new Map<number, Set<number>>()
    
    for (let i = 0; i < n; i++) {
        undirectMap.set(i, [])
        directMap.set(i, new Set())
    }
    for (let [a, b] of connections) {
        undirectMap.get(a)!.push(b)
        undirectMap.get(b)!.push(a)

        directMap.get(a)!.add(b)
    }

    let changes = 0
    function dfs(city: number, prev: number) {

        for (let nei of undirectMap.get(city)!) {
            if (nei == prev) continue;
            if (!directMap.get(nei)!.has(city)) changes++

            dfs(nei, city)
        }
    }

    dfs(0, -1)
    return changes
};