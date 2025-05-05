// @ts-nocheck

function sortList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) return head
    let left = head, mid = getMid(head)
    let right = mid.next
    mid.next = null

    left = sortList(left)
    right = sortList(right)

    return merge(left, right)
};

function getMid(head: ListNode | null) {
    let fast = head, slow = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function merge(list1: ListNode | null, list2: ListNode | null) {
    let dummy = new ListNode()
    let cur = dummy
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }

    if (list1) cur.next = list1
    else if (list2) cur.next = list2
    return dummy.next
}