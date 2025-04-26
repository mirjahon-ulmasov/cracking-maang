/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree 
and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
*/

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inMap = new Map()
    const N = inorder.length
    for (let i = 0; i < N; i++) {
        inMap.set(inorder[i], i)
    }
    let preIndex = 0
    function build(left: number, right: number): TreeNode | null {
        if (left > right) return null

        const rootVal = preorder[preIndex++]
        const root = new TreeNode(rootVal)
        if (left == right) return root

        const rootValIdx = inMap.get(rootVal)
        root.left = build(left, rootValIdx - 1)
        root.right = build(rootValIdx + 1, right)
        return root
    }
    return build(0, N - 1)
};