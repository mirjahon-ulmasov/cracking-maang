/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

// This is fine for small numbers
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    function getNum(head: ListNode | null) {
        let sum = 0, cur = head, inc = 1
        while (cur) {
            sum += (cur.val * inc)
            inc *= 10
            cur = cur.next
        }
        return sum
    }
    let sum = getNum(l1) + getNum(l2)
    if (sum == 0) return new ListNode(0)
    let dummy = new ListNode()
    let cur = dummy
    while (sum > 0) {
        let mod = sum % 10
        sum = Math.floor(sum / 10)
        let temp = new ListNode(mod)
        cur.next = temp
        cur = cur.next
    }
    return dummy.next
};

function _addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode()
    let cur = dummy, carry = 0, sum = 0
    while (l1 || l2 || carry) {
        sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry

        carry = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return dummy.next
}
