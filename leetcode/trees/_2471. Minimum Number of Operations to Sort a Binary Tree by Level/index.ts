// @ts-nocheck
/*
You are given the root of a binary tree with unique values.

In one operation, you can choose any two nodes at the same level and swap their values.

Return the minimum number of operations needed to make the values at each level sorted in a strictly increasing order.

The level of a node is the number of edges along the path between it and the root node.

Input: root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]
Output: 3
Explanation:
- Swap 4 and 3. The 2nd level becomes [3,4].
- Swap 7 and 5. The 3rd level becomes [5,6,8,7].
- Swap 8 and 7. The 3rd level becomes [5,6,7,8].
We used 3 operations so return 3.
It can be proven that 3 is the minimum number of operations needed.
*/

function minimumOperations(root: TreeNode | null): number {
    if (root == null) return 0
    const queue: TreeNode[] = [root]
    let total = 0
    while (queue.length) {
        const N = queue.length
        const arr: [number, number][] = Array.from({ length: N })
        for (let i = 0; i < N; i++) {
            const node = queue.shift()
            arr[i] = [node.val, i]

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        total += minSwapsToSort(arr)
    }
    return total
};

function minSwapsToSort(nums: [number, number][]): number {
    const visited: boolean[] = new Array(nums.length).fill(false)
    nums.sort((a, b) => a[0] - b[0])
    let swaps = 0
    for (let i = 0; i < nums.length; i++) {
        if (visited[i] || nums[i][1] == i) continue;

        let cycleSize = 0, j = i
        while (!visited[j]) {
            visited[j] = true

            j = nums[j][1]
            cycleSize++
        }

        if (cycleSize > 1) swaps += cycleSize - 1
    }
    return swaps
}