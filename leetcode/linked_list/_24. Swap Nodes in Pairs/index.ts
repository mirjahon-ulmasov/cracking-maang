/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]
Explanation:

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]

Example 4:
Input: head = [1,2,3]
Output: [2,1,3]
*/

function swapPairs(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, head)
    let prev = dummy
    while (prev.next && prev.next.next) {
        let first = prev.next
        let second = prev.next.next

        first.next = second.next
        second.next = first
        prev.next = second

        prev = prev.next
    }
    return dummy.next
}
