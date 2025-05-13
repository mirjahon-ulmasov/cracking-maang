/*
Given the root of a binary tree, return the sum of all left leaves.
A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
*/

// @ts-nocheck
function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = 0
    function dfs(node: TreeNode | null, is_left: boolean) {
        if (node == null) return;
        if (node.left == null && node.right == null && is_left) {
            sum += node.val
            return;
        }
        dfs(node.left, true)
        dfs(node.right, false)
    }
    dfs(root, false)
    return sum
};