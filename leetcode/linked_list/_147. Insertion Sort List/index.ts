/*
Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.

The steps of the insertion sort algorithm:

1) Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
2) At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
3) It repeats until no input elements remain.

The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.
*/

// @ts-nocheck
function insertionSortList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) return head
    let dummy = new ListNode(0, head)
    let prev = head, cur = head.next
    while (cur) {
        if (prev.val < cur.val) {
            prev = prev.next
            cur = cur.next
        } else {
            let start = dummy
            while (start.next.val < cur.val) {
                start = start.next
            }
            prev.next = cur.next
            cur.next = start.next
            start.next = cur
            cur = prev.next
        }
    }
    return dummy.next
};