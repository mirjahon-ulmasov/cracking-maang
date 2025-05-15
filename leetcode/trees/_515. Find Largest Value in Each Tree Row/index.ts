/*
Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
*/

import { TreeNode } from ".."

function largestValues(root: TreeNode | null): number[] {
    if (root == null) return []
    const result = [], queue = [root]
    while (queue.length) {
        const n = queue.length
        let max = queue[0].val
        for (let i = 0; i < n; i++) {
            const node = queue.shift()!
            max = Math.max(max, node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(max)
    }
    return result
};