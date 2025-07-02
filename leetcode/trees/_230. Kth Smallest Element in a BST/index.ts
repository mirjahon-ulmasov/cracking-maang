import { TreeNode } from ".."

/*
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
*/

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack = []
    let cur = root
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        const node = stack.pop()!
        k--
        if (k == 0) {
            return node.val
        }
        if (node.right) {
            cur = node.right
        }
    }
    return -1
};