/*
Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.

A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.

A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.
*/

import { TreeNode } from ".."

function bstFromPreorder(preorder: number[]): TreeNode | null {
    let preIdx = 0
    function dfs(low: number, high: number): TreeNode | null {
        if (preIdx == preorder.length) return null
        const value = preorder[preIdx]
        if (value <= low || value >= high) return null
        const root = new TreeNode(value)
        preIdx++
        root.left = dfs(low, value)
        root.right = dfs(value, high)
        return root
    }
    return dfs(-Infinity, Infinity)
};