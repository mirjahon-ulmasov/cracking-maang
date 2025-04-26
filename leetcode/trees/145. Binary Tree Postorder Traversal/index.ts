/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.
*/

import { TreeNode } from '..';

// Iteratively
function postorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return []
    const stack: (TreeNode | null)[] = [root], visits = [false]
    const result = []
    while (stack.length) {
        const node = stack.pop()
        const visited = visits.pop()
        if(node) {
            if (visited) {
                result.push(node.val)
            } else {
                stack.push(node)
                visits.push(true)
    
                stack.push(node.right)
                visits.push(false)

                stack.push(node.left)
                visits.push(false)
            }
        }
    }
    return result
};

// Recursively
function _postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []
    function traverse(node: TreeNode | null) {
        if (node == null) return;
        traverse(node.left)
        traverse(node.right)
        result.push(node.val)
    }
    traverse(root)
    return result
};