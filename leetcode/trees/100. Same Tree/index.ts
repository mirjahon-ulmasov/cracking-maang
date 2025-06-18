import { TreeNode } from ".."

/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

// DFS (recursive)
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q == null) return true
    if (p == null || q == null || p.val != q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// DFS (iterative)
function _isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stack = [[p, q]]
    while (stack.length) {
        const [node1, node2] = stack.pop()!
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null || node1.val != node2.val) return false

        stack.push([node1.right, node2.right])
        stack.push([node1.left, node2.left])
    }
    return true
};

// BFS
function __isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queue = [[p, q]]
    while (queue.length) {
        const [node1, node2] = queue.shift()!
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null || node1.val != node2.val) return false

        queue.push([node1.left, node2.left])
        queue.push([node1.right, node2.right])
    }
    return true
};