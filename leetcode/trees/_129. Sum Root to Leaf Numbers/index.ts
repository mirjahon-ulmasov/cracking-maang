/*
You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.
*/

import { TreeNode } from "..";

function sumNumbers(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, num: number): number {
        if (node == null) return 0;

        let sum = num * 10 + node.val
        if (node.left == null && node.right == null) {
            return sum;
        }

        return dfs(node.left, sum) + dfs(node.right, sum)
    }

    return dfs(root, 0)
};