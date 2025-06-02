function _validTree(n: number, edges: [number, number][]): boolean {
    // To be a valid tree, it has to follow 2 rules
    // 1) There should not be a cycle
    // 2) All nodes are connected
    if (edges.length != n - 1) return false // if edges is less/more than n - 1, it is not valid tree
    const nodes = new Map<number, number[]>()
    for (let i = 0; i < n; i++) {
        nodes.set(i, [])
    }
    for (let [a, b] of edges) {
        nodes.get(a)!.push(b)
        nodes.get(b)!.push(a)
    }
    // const visits = new Map<number, boolean>() // here we can use Set
    const visits = new Set<number>()
    function dfs(node: number, parent: number): boolean {
        if (visits.has(node)) return false

        visits.add(node)
        for (let neighbor of nodes.get(node)!) {
            if (neighbor == parent) continue
            if (!dfs(neighbor, node)) return false
        }

        return true
    }

    return dfs(0, -1) && visits.size == n
}
