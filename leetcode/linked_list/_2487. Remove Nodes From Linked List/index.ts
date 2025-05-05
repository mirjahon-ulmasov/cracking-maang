/*
You are given the head of a linked list.
Remove every node which has a node with a greater value anywhere to the right side of it.
Return the head of the modified linked list.

Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.
*/

// @ts-nocheck
function removeNodes(head: ListNode | null): ListNode | null {
    head = reverse(head)
    let cur = head
    while (cur) {
        if (cur.next && cur.val > cur.next.val) cur.next = cur.next.next
        else cur = cur.next
    }
    return reverse(head)
};

function reverse(head: ListNode) {
    let prev = null, cur = head
    while (cur) {
        let nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }
    return prev
}