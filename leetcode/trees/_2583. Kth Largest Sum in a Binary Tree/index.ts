// @ts-nocheck
/*
You are given the root of a binary tree and a positive integer k.
The level sum in the tree is the sum of the values of the nodes that are on the same level.
Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.
Note that two nodes are on the same level if they have the same distance from the root.

Input: root = [5,8,9,2,1,3,7,4,6], k = 2
Output: 13
Explanation: The level sums are the following:
- Level 1: 5.
- Level 2: 8 + 9 = 17.
- Level 3: 2 + 1 + 3 + 7 = 13.
- Level 4: 4 + 6 = 10.
The 2nd largest level sum is 13.
*/
function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    const queue = [root]
    const levelSums = []
    while (queue.length) {
        const length = queue.length
        let sum = 0
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            sum += node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        levelSums.push(sum)
    }
    if (levelSums.length < k) return -1
    levelSums.sort((a, b) => b - a)
    return levelSums[k - 1]
};