import { TreeNode } from ".."

function isBalanced(root: TreeNode | null): boolean {
    let maxDiff = 0
    function dfs(node: TreeNode | null): number {
        if (!node) return 0

        const left = dfs(node.left)
        const right = dfs(node.right)

        maxDiff = Math.max(maxDiff, Math.abs(left - right))

        return Math.max(left, right) + 1
    }
    dfs(root)
    return maxDiff <= 1
}

function _isBalanced(root: TreeNode | null): boolean {
    function dfs(node: TreeNode | null): number {
        if (node == null) return 0

        const left = dfs(node.left)
        if (left == -1) return -1

        const right = dfs(node.right)
        if (right == -1) return -1

        if (Math.abs(left - right) > 1) return -1

        return Math.max(left, right) + 1
    }
    return dfs(root) != -1
}