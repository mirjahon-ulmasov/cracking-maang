/*
Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the k parts.
*/

// @ts-nocheck
function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let length = 0, cur = head
    while (cur) {
        length++
        cur = cur.next
    }
    const result: Array<ListNode | null> = Array.from({ length: k })
    let size = Math.floor(length / k)
    cur = head
    for (let i = 0; i < k; i++) {
        let cur_size = i < length % k ? size + 1 : size
        result[i] = cur
        for (let j = 0; j < cur_size - 1; j++) {
            cur = cur.next
        }
        if (cur) {
            let prev = cur
            cur = cur.next
            prev.next = null
        }
    }
    return result
};