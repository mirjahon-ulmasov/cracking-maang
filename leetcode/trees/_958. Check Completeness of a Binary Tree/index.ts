/*
Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, 
and all nodes in the last level are as far left as possible. 
It can have between 1 and 2h nodes inclusive at the last level h

Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), 
and all nodes in the last level ({4, 5, 6}) are as far left as possible.


Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.
*/

// @ts-nocheck
function isCompleteTree(root: TreeNode | null): boolean {
    const queue = [root]
    let nullSeen = false
    while (queue.length) {
        const node = queue.shift()
        if (node) {
            if (nullSeen) return false
            queue.push(node.left)
            queue.push(node.right)
        } else {
            nullSeen = true
        }
    }
    return true
};