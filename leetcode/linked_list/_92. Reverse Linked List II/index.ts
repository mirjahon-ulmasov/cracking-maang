/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
*/

// @ts-nocheck
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummy = new ListNode(0, head)
    let prev = dummy, cur = head, idx = 1

    while (idx < left) {
        prev = prev.next
        cur = cur.next
        idx++
    }
    let leftSide = prev
    prev = null
    while (idx <= right) {
        let nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
        idx++
    }
    leftSide.next.next = cur
    leftSide.next = prev
    return dummy.next
};