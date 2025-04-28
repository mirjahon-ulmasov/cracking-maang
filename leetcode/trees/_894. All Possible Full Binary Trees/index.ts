/*
Given an integer n, return a list of all possible full binary trees with n nodes.
Each node of each tree in the answer must have Node.val == 0.
Each element of the answer is the root node of one possible tree.
You may return the final list of trees in any order.
A full binary tree is a binary tree where each node has exactly 0 or 2 children.
*/

import { TreeNode } from ".."

function allPossibleFBT(n: number): Array<TreeNode | null> {
    // to be full binary tree, there should be odd number of nodes
    if (n % 2 == 0) return []

    if (n == 1) return [new TreeNode()]

    const result = []
    for (let leftNodes = 1; leftNodes < n; leftNodes += 2) {
        const leftTrees = allPossibleFBT(leftNodes)
        const rightTrees = allPossibleFBT(n - 1 - leftNodes)

        for (let left of leftTrees) {
            for (let right of rightTrees) {
                const node = new TreeNode(0, left, right)
                result.push(node)
            }
        }
    }
    return result
};