/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
*/

// @ts-nocheck
import { TreeNode } from "..";


function serialize(root: TreeNode | null): string {
    if (root == null) return ''
    const result = [String(root.val)]
    function traverse(node: TreeNode | null, depth: number, isLeft: boolean) {
        if (node == null) return;

        result.push('-'.repeat(depth))
        result.push(isLeft ? 'l' : 'r')
        result.push(String(node.val))

        traverse(node.left, depth + 1, true)
        traverse(node.right, depth + 1, false)
    }
    traverse(root.left, 1, true)
    traverse(root.right, 1, false)

    console.log(result.join(''))
    return result.join('')
};

function deserialize(data: string): TreeNode | null {
    if (!data) return null
    // 1678-l241--l4--r5-r394
    let i = 0, num = 0
    while (i < data.length && data[i] != '-') {
        num = num * 10 + Number(data[i])
        i++
    }

    const root = new TreeNode(num)
    const stack = [root]

    while (i < data.length) {
        let depth = 0
        while (i < data.length && data[i] == '-') {
            depth++
            i++
        }
        let is_left_child = data[i++] == 'l' ? true : false
        let num = 0
        while (i < data.length && data[i] != '-') {
            num = num * 10 + Number(data[i])
            i++
        }
        const node = new TreeNode(num)
        while (stack.length > depth) {
            stack.pop()
        }
        const parent = stack.at(-1)
        if (is_left_child) parent.left = node
        else parent.right = node

        stack.push(node)
    }

    return root
};

// 4-l-7-r-3--l-9---l9----l6-----l0------r-1-----r6------l-4---r-7----l-6-----l5----r-6-----l9------l-2--r-3---l-4
// 4.l-7.r-3..l-9...l9....l6.....l0......r-1.....r6......l-4...r-7....l-6.....l5....r-6.....l9......l-2..r-3...l-4
