// @ts-nocheck
// BFS
function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    const queue = [root]
    while (queue.length) {
        const N = queue.length
        let L = 0, R = N - 1
        while(L < R) {
            [queue[L]?.val, queue[R]?.val] = [queue[R]?.val, queue[L]?.val]
            L++
            R--
        }
        for (let i = 0; i < N; i++) {
            const node = queue.shift()

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    return root
}

// DFS (faster & cleaner)
function _reverseOddLevels(root: TreeNode | null): TreeNode | null {
    reverse(root?.left, root?.right, 1)
    return root
}

function reverse(leftNode: TreeNode | null, rightNode: TreeNode | null, depth: number): void {
    if(leftNode == null) return;

    if(depth & 1) {
        [leftNode.val, rightNode.val] = [rightNode.val, leftNode.val]
    }

    reverse(leftNode.left, rightNode.right, depth + 1)
    reverse(leftNode.right, rightNode.left, depth + 1)
}