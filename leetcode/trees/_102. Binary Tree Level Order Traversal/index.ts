/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

//@ts-nocheck
import { TreeNode } from ".."

function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return []
    const queue = [root], result = []
    let depth = 0
    while (queue.length) {
        const n = queue.length
        result[depth] = []
        for (let i = 0; i < n; i++) {
            const node = queue.shift()
            result[depth].push(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++
    }
    return result
};