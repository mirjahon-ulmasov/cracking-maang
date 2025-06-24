/*
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, 
each group of children is separated by the null value (See examples).

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]
*/

import { _Node } from ".."

function levelOrder(root: _Node | null): number[][] {
    if (root == null) return []
    const result: number[][] = []
    const queue = [root]
    let depth = 0
    while (queue.length) {
        const n = queue.length
        result[depth] = []
        for (let i = 0; i < n; i++) {
            const node = queue.shift()!
            result[depth].push(node.val)

            for (let child of node.children) {
                if (child) {
                    queue.push(child)
                }
            }
        }
        depth++
    }
    return result
};