/*
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result:
*/

// @ts-nocheck
function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, list1)
    let l1 = dummy, index = 0
    while (index < a) {
        l1 = l1.next
        index++
    }
    let left = l1
    while (index <= b) {
        l1 = l1.next
        index++
    }
    left.next = list2
    let l2 = list2
    while (l2.next) {
        l2 = l2.next
    }
    l2.next = l1.next
    return dummy.next
};