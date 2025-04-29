function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
    if (root == null) return false
    if (isSame(head, root)) return true
    return isSubPath(head, root.left) || isSubPath(head, root.right)
}

function isSame(head: ListNode | null, root: TreeNode | null): boolean {
    if (head == null) return true
    if (root == null || head.val != root.val) return false
    return isSame(head.next, root.left) || isSame(head.next, root.right)
}
