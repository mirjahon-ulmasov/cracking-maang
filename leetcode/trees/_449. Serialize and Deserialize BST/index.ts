/*
Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Example 1:
Input: root = [2,1,3]
Output: [2,1,3]

Example 2:
Input: root = []
Output: []
*/

import { TreeNode } from "..";

function serialize(root: TreeNode | null): string {
    const preorder: number[] = []
    function dfs(node: TreeNode | null) {
        if (node == null) return;

        preorder.push(node.val)

        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return preorder.join(',') // 2,1,3
};

function deserialize(data: string): TreeNode | null {
    if (!data) return null
    const preorder = data.split(',').map(Number) // [2,1,3]
    let preIdx = 0
    function dfs(min: number, max: number): TreeNode | null {
        if (preIdx >= preorder.length) return null
        const value = preorder[preIdx]

        if (value < min || value > max) return null

        const root = new TreeNode(value)
        preIdx++

        root.left = dfs(min, value)
        root.right = dfs(value, max)
        return root
    }

    return dfs(-Infinity, Infinity)
};