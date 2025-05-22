import { TreeNode } from ".."

// Using BFS, it is better than DFS beacause of early return
function minDepth(root: TreeNode | null): number {
    if (root == null) return 0
    const queue = [root]
    let level = 1
    while (queue.length) {
        const n = queue.length
        for (let i = 0; i < n; i++) {
            const node = queue.shift()!

            if (node.left == null && node.right == null) {
                return level
            }

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        level++
    }
    return level
}

// DFS, bottom-to-top
function _minDepth(root: TreeNode | null): number {
    function dfs(node: TreeNode | null): number {
        if (node == null) return 0

        if (node.left == null) return dfs(node.right) + 1
        if (node.right == null) return dfs(node.left) + 1

        return Math.min(dfs(node.left), dfs(node.right)) + 1
    }
    return dfs(root)
};

// DFS, top-to-bottom
function __minDepth(root: TreeNode | null): number {
    if (root == null) return 0
    let min = Infinity
    function dfs(node: TreeNode | null, depth: number) {
        if (node == null) return;
        if (node.left == null && node.right == null) {
            min = Math.min(min, depth)
            return;
        }

        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }
    dfs(root, 1)
    return min
};