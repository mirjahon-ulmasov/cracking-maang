/*
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

function maxDepth(root: TreeNode | null): number {
    let maxDepth = 0
    function dfs(node: TreeNode | null, depth: number) {
        if (node == null) {
            maxDepth = Math.max(maxDepth, depth)
            return;
        }
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }
    dfs(root, 0)
    return maxDepth
};

function _maxDepth(root: TreeNode | null): number {
    if (root == null) return 0

    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    return Math.max(left, right) + 1
};