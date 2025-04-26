
function bst(root: TreeNode | null, key: number): boolean {
    if (root == null) return false

    if (root.val > key) {
        return bst(root.left, key)
    } else if (root.val < key) {
        return bst(root.right, key)
    } else {
        return true
    }
};