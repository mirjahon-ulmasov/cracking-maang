/*
You are given the root of a binary tree and an integer distance. 
A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.
Return the number of good leaf node pairs in the tree.
*/

function countPairs(root: TreeNode | null, distance: number): number {
    let count = 0
    function dfs(node: TreeNode | null): Map<number, number> {
        if (node == null) return new Map();
        if (node.left == null && node.right == null) {
            const map = new Map()
            map.set(1, 1)
            return map
        }

        const left = dfs(node.left)
        const right = dfs(node.right)

        for (let [key1, value1] of left) {
            for (let [key2, value2] of right) {
                if (key1 + key2 <= distance) {
                    count += value1 * value2
                }
            }
        }
        const map = new Map()
        for (let [key, value] of left) {
            map.set(key + 1, value)
        }
        for (let [key, value] of right) {
            map.set(key + 1, (map.get(key + 1) || 0) + value)
        }
        return map
    }
    dfs(root)
    return count
};

function _countPairs(root: TreeNode | null, distance: number): number {
    let count = 0
    function dfs(node: TreeNode | null): number[] {
        if (node == null) return [];
        if (node.left == null && node.right == null) return [1]

        const left = dfs(node.left)
        const right = dfs(node.right)

        for (let n1 of left) {
            for (let n2 of right) {
                if (n1 + n2 <= distance) {
                    count++
                }
            }
        }
        const arr: number[] = [...left, ...right].map(el => el + 1)
        return arr
    }
    dfs(root)
    return count
};