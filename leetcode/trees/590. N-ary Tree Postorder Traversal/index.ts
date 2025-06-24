/*
Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/

import { _Node } from ".."

// Recursive
function postorder(root: _Node | null): number[] {
    const result: number[] = []

    function dfs(node: _Node | null) {
        if (node == null) return

        for (let child of node.children) {
            dfs(child)
        }

        result.push(node.val)
    }
    dfs(root)
    return result
}

// Iterative
function _postorder(root: _Node | null): number[] {
    if (root == null) return []
    const result: number[] = []
    const stack: _Node[] = [root]
    const visits: boolean[] = [false]
    while (stack.length) {
        const node = stack.pop(), visited = visits.pop()
        if (node) {
            if (visited) {
                result.push(node.val)
            } else {
                visits.push(true)
                stack.push(node)

                for (let i = node.children.length - 1; i >= 0; i--) {
                    visits.push(false)
                    stack.push(node.children[i])
                }
            }
        }
    }
    return result
}
