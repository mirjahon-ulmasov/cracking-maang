/*
Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:

The node of a binary tree is a leaf if and only if it has no children
The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.
*/

// @ts-nocheck
// using DFS
function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    function getLCA(node: TreeNode | null): [number, TreeNode | null] { // [depth, node]
        if (node == null) return [0, null]

        const [left_depth, left_node] = getLCA(node.left)
        const [right_depth, right_node] = getLCA(node.right)

        if (left_depth > right_depth) return [left_depth + 1, left_node]
        else if (right_depth > left_depth) return [right_depth + 1, right_node]
        else return [left_depth + 1, node]
    }
    const [_, node] = getLCA(root)
    return node
};

// using BFS and DFS
function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    const queue: TreeNode[] = [root]
    let last_depth: number[] = []
    while (queue.length) {
        const n = queue.length
        last_depth = queue.map(node => node.val)
        for (let i = 0; i < n; i++) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    const start = last_depth[0], dest = last_depth[last_depth.length - 1]

    function getLCA(node: TreeNode | null): TreeNode | null {
        if (node == null) return null
        if (node.val == start || node.val == dest) return node

        const left = getLCA(node.left)
        const right = getLCA(node.right)

        if (left && right) return node
        else return left || right
    }

    return getLCA(root)
};