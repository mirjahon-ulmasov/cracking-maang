/*
You have n binary tree nodes numbered from 0 to n - 1 where node i has two children leftChild[i] and rightChild[i], 
return true if and only if all the given nodes form exactly one valid binary tree.
If node i has no left child then leftChild[i] will equal -1, similarly for the right child.
Note that the nodes have no values and that we only use the node numbers in this problem.
*/

function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
    const parent = new Array(n).fill(-1)
    for (let i = 0; i < n; i++) {
        if (leftChild[i] != -1) {
            // if parent of left child already exists
            if (parent[leftChild[i]] != -1) return false
            parent[leftChild[i]] = i
        }
        if (rightChild[i] != -1) {
            // if parent of right child already exists
            if (parent[rightChild[i]] != -1) return false
            parent[rightChild[i]] = i
        }
    }
    let root = -1
    for (let i = 0; i < n; i++) {
        if (parent[i] == -1) {
            // if there is more than one root
            if (root != -1) return false
            root = i
        }
    }
    // if there is no root
    if (root == -1) return false

    // check connectivity
    const visited = new Set<number>()
    function dfs(node: number): boolean {
        if (node == -1) return true
        if (visited.has(node)) return false

        visited.add(node)

        return dfs(leftChild[node]) && dfs(rightChild[node])
    }

    return dfs(root) && visited.size == n
};