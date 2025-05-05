/*
Given a binary tree root and an integer target, delete all the leaf nodes with value target.

Note that once you delete a leaf node with value target, 
if its parent node becomes a leaf node and has the value target, 
it should also be deleted (you need to continue doing that until you cannot).
*/

import { TreeNode } from "..";

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    function dfs(node: TreeNode | null) {
        if (node == null) return null

        node.left = dfs(node.left)
        node.right = dfs(node.right)

        if (node.left == null && node.right == null && node.val == target) {
            return null
        }
        return node
    }
    return dfs(root)
};