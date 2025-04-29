/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.
*/

// Iteratively
function preorderTraversal(root: TreeNode | null): number[] {
    const stack = [root], result: number[] = []
    while (stack.length) {
        const node = stack.pop()
        if (node) {
            result.push(node.val)

            stack.push(node.right)
            stack.push(node.left)
        }
    }
    return result
};

// Recursively
function _preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []
    function traverse(node: TreeNode | null) {
        if (node == null) return;
        result.push(node.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return result
};