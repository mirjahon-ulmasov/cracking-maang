/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
*/

import { TreeNode } from "..";

function serialize(root: TreeNode | null): string {
    const preorder: any[] = []
    function dfs(node: TreeNode | null) {
        if (node == null) {
            preorder.push('#')
            return;
        }

        preorder.push(node.val)

        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return preorder.join(',') // 1,2,#,#,3,4,#,#,5,#,#
};

function deserialize(data: string): TreeNode | null {
    if (!data) return null
    const preorder = data.split(',') // [1,2,#,#,3,4,#,#,5,#,#]
    let preIdx = 0
    function dfs(): TreeNode | null {
        if (preorder[preIdx] == '#') {
            preIdx++
            return null
        }

        const root = new TreeNode(Number(preorder[preIdx++]))

        root.left = dfs()
        root.right = dfs()

        return root
    }
    return dfs()
};