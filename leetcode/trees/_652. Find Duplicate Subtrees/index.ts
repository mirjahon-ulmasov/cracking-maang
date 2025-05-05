/*
Given the root of a binary tree, return all duplicate subtrees.
For each kind of duplicate subtrees, you only need to return the root node of any one of them.
Two trees are duplicate if they have the same structure with the same node values.

Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]
*/

import { TreeNode } from ".."

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const map = new Map<string, number>()
    const result: Array<TreeNode | null> = []

    function dfs(node: TreeNode | null): string {
        if (node == null) return '#'

        const left = dfs(node.left)
        const right = dfs(node.right)
        const serial = `${node.val},${left},${right}`

        const count = map.get(serial) || 0
        if (count == 1) result.push(node)
        map.set(serial, count + 1)

        return serial
    }
    dfs(root)
    return result
};
